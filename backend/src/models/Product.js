const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    title: String,

    description: String,

    price: Number,

    image: String,

    stock: Number,

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Product', productSchema)
