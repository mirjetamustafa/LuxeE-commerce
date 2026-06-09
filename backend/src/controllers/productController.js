const Product = require('../models/Product')

exports.getProducts = async (req, res) => {
  const products = await Product.find().populate('category')

  res.json(products)
}

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body)

  res.status(201).json(product)
}
