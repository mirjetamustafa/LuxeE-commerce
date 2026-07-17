const Wishlist = require('../models/Wishlist')

// Get wishlist
const getWishlist = async (req, res) => {
  try {
    let wishlist = await Wishlist.findOne({
      customer: req.user.id,
    }).populate('products')

    if (!wishlist) {
      wishlist = await Wishlist.create({
        customer: req.user.id,
        products: [],
      })
    }

    res.status(200).json(wishlist)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// Add product to wishlist
const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body

    let wishlist = await Wishlist.findOne({
      customer: req.user.id,
    })

    if (!wishlist) {
      wishlist = await Wishlist.create({
        customer: req.user.id,
        products: [],
      })
    }

    const exists = wishlist.products.some(
      (product) => product.toString() === productId,
    )

    if (!exists) {
      wishlist.products.push(productId)
    }

    await wishlist.save()

    await wishlist.populate('products')

    res.status(200).json(wishlist)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// Remove product from wishlist
const removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.params

    const wishlist = await Wishlist.findOne({
      customer: req.user.id,
    })

    if (!wishlist) {
      return res.status(404).json({
        message: 'Wishlist not found',
      })
    }

    wishlist.products = wishlist.products.filter(
      (product) => product.toString() !== productId,
    )

    await wishlist.save()

    await wishlist.populate('products')

    res.status(200).json(wishlist)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
}
