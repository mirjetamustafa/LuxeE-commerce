const express = require('express')

const router = express.Router()

const authMiddleware = require('../middleware/authMiddleware')

const {
  getCart,
  addToCart,
  updateCartQuantity,
  removeFromCart,
  clearCart,
} = require('../controllers/cartController')

router.get('/', authMiddleware, getCart)

router.post('/', authMiddleware, addToCart)

router.put('/:productId', authMiddleware, updateCartQuantity)

router.delete('/:productId', authMiddleware, removeFromCart)

router.delete('/', authMiddleware, clearCart)

module.exports = router
