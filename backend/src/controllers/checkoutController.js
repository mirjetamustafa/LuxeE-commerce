const Cart = require('../models/Cart')
const Order = require('../models/Order')
const stripe = require('../config/stripe')

const generateOrderNumber = () => {
  const random = Math.random().toString(36).substring(2, 10).toUpperCase()

  return `LUXE-${random}`
}

const createCheckoutSession = async (req, res) => {
  try {
    const { shippingAddress } = req.body

    console.log('Shipping address received:', shippingAddress)

    if (!shippingAddress) {
      return res.status(400).json({
        success: false,
        message: 'Shipping address is required',
      })
    }

    // Handle both possible formats:
    // { shippingAddress: {...} }
    // and
    // { ... }
    const normalizedShippingAddress =
      shippingAddress.shippingAddress || shippingAddress

    console.log('Normalized shipping address:', normalizedShippingAddress)

    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'phone',
      'streetAddress',
      'city',
      'state',
      'zipCode',
    ]

    const missingFields = requiredFields.filter(
      (field) => !normalizedShippingAddress[field],
    )

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Some shipping address fields are missing',
        missingFields,
      })
    }

    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate('items.product')

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty',
      })
    }

    const lineItems = cart.items.map((item) => {
      const product = item.product

      return {
        price_data: {
          currency: 'usd',

          product_data: {
            name: product.title,
          },

          unit_amount: Math.round(product.price * 100),
        },

        quantity: item.quantity,
      }
    })

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',

      line_items: lineItems,

      success_url: `${process.env.CLIENT_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,

      cancel_url: `${process.env.CLIENT_URL}/cart`,

      customer_email: normalizedShippingAddress.email,

      metadata: {
        userId: req.user.id,
        shippingAddress: JSON.stringify(normalizedShippingAddress),
      },
    })

    res.status(200).json({
      success: true,
      url: session.url,
    })
  } catch (error) {
    console.error('Create checkout session error:', error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const handleStripeWebhook = async (req, res) => {
  const signature = req.headers['stripe-signature']

  let event

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error.message)

    return res.status(400).send(`Webhook Error: ${error.message}`)
  }

  console.log('Stripe event received:', event.type)

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object

        const userId = session.metadata?.userId

        if (!userId) {
          console.error('User ID not found in Stripe metadata')

          return res.status(400).json({
            success: false,
            message: 'User ID not found in Stripe metadata',
          })
        }

        const shippingAddressData = session.metadata?.shippingAddress

        if (!shippingAddressData) {
          console.error('Shipping address not found in Stripe metadata')

          return res.status(400).json({
            success: false,
            message: 'Shipping address not found',
          })
        }

        const shippingAddress = JSON.parse(shippingAddressData)

        console.log('Webhook shipping address:', shippingAddress)

        // Check if order already exists
        const existingOrder = await Order.findOne({
          stripeSessionId: session.id,
        })

        if (existingOrder) {
          console.log('Order already exists:', existingOrder._id)

          break
        }

        const cart = await Cart.findOne({
          user: userId,
        }).populate('items.product')

        if (!cart || cart.items.length === 0) {
          console.log('Cart not found or empty')

          break
        }

        const items = cart.items.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.product.price,
        }))

        const totalPrice = items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        )

        const order = await Order.create({
          orderNumber: generateOrderNumber(),

          customer: userId,

          shippingAddress: {
            firstName: shippingAddress.firstName,
            lastName: shippingAddress.lastName,
            email: shippingAddress.email,
            phone: shippingAddress.phone,
            streetAddress: shippingAddress.streetAddress,
            city: shippingAddress.city,
            state: shippingAddress.state,
            zipCode: shippingAddress.zipCode,
          },

          paymentMethod: 'Credit Card',

          paymentStatus: 'Paid',

          stripeSessionId: session.id,

          items,

          totalPrice,

          status: 'Pending',
        })

        await Cart.findOneAndUpdate({ user: userId }, { $set: { items: [] } })

        console.log('Order created successfully:', order._id)

        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return res.status(200).json({
      received: true,
    })
  } catch (error) {
    console.error('Stripe webhook processing error:', error)

    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = {
  createCheckoutSession,
  handleStripeWebhook,
}
