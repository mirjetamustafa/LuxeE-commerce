const express = require('express')
const router = express.Router()

const upload = require('../middleware/upload')
const {
  createProduct,
  getProducts,
} = require('../controllers/productController')

// GET all products
router.get('/', getProducts)

// CREATE product with images
router.post(
  '/',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'hoverImage', maxCount: 1 },
  ]),
  createProduct,
)

module.exports = router
