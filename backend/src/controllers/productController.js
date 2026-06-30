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

    const {
      title,
      description,
      price,
      compareAtPrice,
      sku,
      status,
      category,
      stock,
      isBestSeller,
      isSale,
    } = body

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
      isBestSeller: isBestSeller === 'true' || isBestSeller === true,
      isSale: isSale === 'true' || isSale === true,
    })

    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Edit product

exports.updateProduct = async (req, res) => {
  try {
    const { body, files } = req

    const {
      title,
      description,
      price,
      compareAtPrice,
      sku,
      status,
      category,
      stock,
      isBestSeller,
      isSale,
    } = body

    const updateData = {
      title,
      description,
      price,
      compareAtPrice,
      sku,
      status,
      category,
      stock,
      isBestSeller: isBestSeller === 'true' || isBestSeller === true,
      isSale: isSale === 'true' || isSale === true,
    }

    // if user upload new image
    if (files?.image?.[0]) {
      updateData.image = files.image[0].filename
    }

    if (files?.hoverImage?.[0]) {
      updateData.hoverImage = files.hoverImage[0].filename
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    })

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Delete product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.json({ message: 'Product deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
