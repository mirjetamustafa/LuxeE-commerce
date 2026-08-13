const Cart = require('../models/Cart')
const Product = require('../models/Product')
const stripe = require('../config/stripe')

const createCheckoutSession = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate('items.product')

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
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

      success_url: `${process.env.CLIENT_URL}/checkout/success`,
      cancel_url: `${process.env.CLIENT_URL}/cart`,

      customer_email: req.user.email,

      metadata: {
        userId: req.user.id,
      },
    })

    res.status(200).json({
      success: true,
      url: session.url,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = {
  createCheckoutSession,
}
