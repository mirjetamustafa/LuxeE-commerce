const express = require('express')
const {
  createOrder,
  getOrderById,
  getMyOrders,
  getAllOrders,
  updateOrderStatus,
} = require('../controllers/orderController')
const authMiddleware = require('../middleware/authMiddleware')
const adminOnly = require('../middleware/adminMiddleware')

const router = express.Router()
router.post('/', authMiddleware, createOrder)
router.get('/my-orders', authMiddleware, getMyOrders)
router.get('/admin', authMiddleware, adminOnly, getAllOrders)
router.get('/:id', authMiddleware, getOrderById)

router.patch('/:id/status', authMiddleware, adminOnly, updateOrderStatus)

module.exports = router
