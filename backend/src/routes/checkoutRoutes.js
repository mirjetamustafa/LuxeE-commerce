const express = require('express')

const authMiddleware = require('../middleware/authMiddleware')
const {
  createCheckoutSession,
  handleStripeWebhook,
} = require('../controllers/checkoutController')

const router = express.Router()

router.post('/create-session', authMiddleware, createCheckoutSession)

router.post('/webhook', handleStripeWebhook)

module.exports = router
