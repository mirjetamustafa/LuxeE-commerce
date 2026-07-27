const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

const {
  getCategories,
  createCategory,
} = require('../controllers/categoryController')

// router.get('/', async (req, res) => {
//   const categories = await Category.find()
//   res.json(categories)
// })

router.get('/', getCategories)
router.post('/', createCategory)

module.exports = router
