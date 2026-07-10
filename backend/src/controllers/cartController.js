const Cart = require('../models/Cart')

const productPopulate = {
  path: 'items.product',
  select: 'title image price category sku',
  populate: {
    path: 'category',
    select: 'name',
  },
}

// GET CART
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    }).populate(productPopulate)

    if (!cart) {
      return res.status(200).json({
        items: [],
      })
    }

    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body

    let cart = await Cart.findOne({
      user: req.user.id,
    })

    if (!cart) {
      cart = new Cart({
        user: req.user.id,
        items: [],
      })
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId,
    )

    if (existingItem) {
      existingItem.quantity += quantity || 1
    } else {
      cart.items.push({
        product: productId,
        quantity: quantity || 1,
      })
    }

    await cart.save()

    const updatedCart = await Cart.findById(cart._id).populate(productPopulate)

    res.status(200).json(updatedCart)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// UPDATE QUANTITY
const updateCartQuantity = async (req, res) => {
  try {
    const { quantity } = req.body

    const cart = await Cart.findOne({
      user: req.user.id,
    })

    if (!cart) {
      return res.status(404).json({
        message: 'Cart not found',
      })
    }

    const item = cart.items.find(
      (item) => item.product.toString() === req.params.productId,
    )

    if (!item) {
      return res.status(404).json({
        message: 'Product not found in cart',
      })
    }

    item.quantity = quantity

    await cart.save()

    const updatedCart = await Cart.findById(cart._id).populate(productPopulate)

    res.status(200).json(updatedCart)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// REMOVE FROM CART
const removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    })

    if (!cart) {
      return res.status(404).json({
        message: 'Cart not found',
      })
    }

    cart.items = cart.items.filter(
      (item) => item.product.toString() !== req.params.productId,
    )

    await cart.save()

    const updatedCart = await Cart.findById(cart._id).populate(productPopulate)

    res.status(200).json(updatedCart)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// CLEAR CART
const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      user: req.user.id,
    })

    if (!cart) {
      return res.status(404).json({
        message: 'Cart not found',
      })
    }

    cart.items = []

    await cart.save()

    res.status(200).json({
      message: 'Cart cleared',
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
}
