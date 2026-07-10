const Product = require('../models/Product')

// GET PRODUCTS
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category')

    res.json(products)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
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

      price: Number(body.price),

      compareAtPrice: Number(body.compareAtPrice) || 0,

      sku: body.sku,

      status: body.status || 'draft',

      category: body.category,

      stock: Number(body.stock) || 0,

      // save image path
      image: `/uploads/${image}`,

      hoverImage: `/uploads/${hoverImage}`,

      isBestSeller: body.isBestSeller === 'true' || body.isBestSeller === true,

      isSale: body.isSale === 'true' || body.isSale === true,
    })

    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {
  try {
    const { body, files } = req

    const updateData = {
      title: body.title,

      description: body.description,

      price: Number(body.price),

      compareAtPrice: Number(body.compareAtPrice) || 0,

      sku: body.sku,

      status: body.status,

      category: body.category,

      stock: Number(body.stock) || 0,

      isBestSeller: body.isBestSeller === 'true' || body.isBestSeller === true,

      isSale: body.isSale === 'true' || body.isSale === true,
    }

    // update image only if new image uploaded
    if (files?.image?.[0]) {
      updateData.image = `/uploads/${files.image[0].filename}`
    }

    if (files?.hoverImage?.[0]) {
      updateData.hoverImage = `/uploads/${files.hoverImage[0].filename}`
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    })

    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
      })
    }

    res.json(product)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
      })
    }

    res.json({
      message: 'Product deleted successfully',
    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
