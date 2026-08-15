const Order = require('../models/Order')

const generateOrderNumber = () => {
  const random = Math.random().toString(36).substring(2, 10).toUpperCase()

  return `LUXE-${random}`
}

const generateTrackingNumber = () => {
  const random = Math.random().toString(36).substring(2, 10).toUpperCase()

  return `TRK-${random}`
}

const createOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod, items, totalPrice } = req.body

    if (!shippingAddress) {
      return res.status(400).json({
        success: false,
        message: 'Shipping address is required',
      })
    }

    if (!paymentMethod) {
      return res.status(400).json({
        success: false,
        message: 'Payment method is required',
      })
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Order items are required',
      })
    }

    if (totalPrice === undefined || totalPrice === null) {
      return res.status(400).json({
        success: false,
        message: 'Total price is required',
      })
    }

    const order = new Order({
      orderNumber: generateOrderNumber(),

      customer: req.user.id,

      shippingAddress,

      paymentMethod,

      items,

      totalPrice,

      paymentStatus: paymentMethod === 'Credit Card' ? 'Pending' : 'Pending',
    })

    await order.save()

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order,
    })
  } catch (error) {
    console.error('Create order error:', error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.product')
      .populate('customer', 'firstName lastName email createdAt')

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      })
    }

    if (!req.user.isAdmin && order.customer._id.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized',
      })
    }

    res.status(200).json({
      success: true,
      order,
    })
  } catch (error) {
    console.error('Get order by ID error:', error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      customer: req.user.id,
    })
      .populate('items.product')
      .sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      orders,
    })
  } catch (error) {
    console.error('Get my orders error:', error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('customer', 'firstName lastName email createdAt')
      .populate('items.product')
      .sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      orders,
    })
  } catch (error) {
    console.error('Get all orders error:', error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body

    const allowedStatuses = [
      'Pending',
      'Processing',
      'Shipped',
      'Delivered',
      'Cancelled',
    ]

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid order status',
      })
    }

    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      })
    }

    order.status = status

    if (status === 'Shipped' && !order.trackingNumber) {
      order.trackingNumber = generateTrackingNumber()
    }

    await order.save()

    res.status(200).json({
      success: true,
      message: 'Order status updated successfully',
      order,
    })
  } catch (error) {
    console.error('Update order status error:', error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getOrderByStripeSession = async (req, res) => {
  try {
    const { sessionId } = req.params

    console.log('STRIPE SESSION ROUTE HIT')
    console.log('Session ID:', sessionId)
    console.log('User ID:', req.user.id)

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        message: 'Stripe session ID is required',
      })
    }

    const order = await Order.findOne({
      stripeSessionId: sessionId,
      customer: req.user.id,
    })
      .populate('items.product')
      .populate('customer', 'firstName lastName email createdAt')

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      })
    }

    res.status(200).json({
      success: true,
      order,
    })
  } catch (error) {
    console.error('Error getting order by Stripe session:', error)

    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

module.exports = {
  createOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
  getOrderByStripeSession,
}
