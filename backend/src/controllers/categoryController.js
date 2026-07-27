const Category = require('../models/Category')

exports.getCategories = async (req, res) => {
  const categories = await Category.find()

  res.json(categories)
}

exports.createCategory = async (req, res) => {
  const category = await Category.create(req.body)

  res.status(201).json(category)
}

const Product = require('../models/Product')

exports.getProducts = async (req, res) => {
  const { categories } = req.query

  let filter = {}

  if (categories) {
    filter.category = {
      $in: categories.split(','),
    }
  }

  const products = await Product.find(filter).populate('category')

  res.json(products)
}
