const express = require('express')
const router = express.Router()

const upload = require('../middleware/upload')
const {
  createProduct,
  getProducts,
  deleteProduct,
  updateProduct,
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

// Edit product

router.put(
  '/:id',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'hoverImage', maxCount: 1 },
  ]),
  updateProduct,
)

// delete product

router.delete('/:id', deleteProduct)

module.exports = router
