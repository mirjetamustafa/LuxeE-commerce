const Product = require('../models/Product')

// GET PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category')
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// CREATE PRODUCT
exports.createProduct = async (req, res) => {
  try {
    const { body, files } = req

    const image = files?.image?.[0]?.filename
    const hoverImage = files?.hoverImage?.[0]?.filename

    if (!image || !hoverImage) {
      return res.status(400).json({
        message: 'Both image and hoverImage are required',
      })
    }

    const product = await Product.create({
      title: body.title,
      description: body.description,
      price: body.price,
      compareAtPrice: body.compareAtPrice || 0,
      sku: body.sku,
      status: body.status || 'draft',
      category: body.category,
      stock: body.stock || 0,
      image,
      hoverImage,
    })

    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
