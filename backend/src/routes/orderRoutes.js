const express = require('express')
const {
  createOrder,
  getOrderById,
  getMyOrders,
} = require('../controllers/orderController')
const authMiddleware = require('../middleware/authMiddleware')

const router = express.Router()

router.get('/my-orders', authMiddleware, getMyOrders)

router.post('/', authMiddleware, createOrder)

router.get('/:id', authMiddleware, getOrderById)

module.exports = router
