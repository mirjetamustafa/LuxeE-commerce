const Order = require('../models/Order')

export const createOrder = async (req, res) => {
  try {
    const { customer, shippingAddress, paymentMethod, items, totalPrice } =
      req.body

    const order = new Order({
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
