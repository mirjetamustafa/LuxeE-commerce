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

    const order = new Order({
      orderNumber: generateOrderNumber(),
      customer: req.user.id,
      shippingAddress,
      paymentMethod,
      items,
      totalPrice,
    })

    await order.save()

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order,
    })
  } catch (error) {
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
      .populate('customer', 'firstName lastName email')

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found',
      })
    }

    // kontrollo qe orderi i takon userit
    if (order.customer._id.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized',
      })
    }

    res.json({
      success: true,
      order,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customer: req.user.id })
      .populate('items.product')
      .sort({ createdAt: -1 })

    res.json({
      success: true,
      orders,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('customer', 'firstName lastName email')
      .populate('items.product')
      .sort({ createdAt: -1 })

    res.json({
      success: true,
      orders,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}

const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body

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

    res.json({
      success: true,
      message: 'Order status updated successfully',
      order,
    })
  } catch (error) {
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
}
