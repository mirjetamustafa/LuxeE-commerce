const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },

    description: { type: String, required: true },

    price: { type: Number, required: true, min: 0 },
    compareAtPrice: { type: Number, required: true, default: 0, min: 0 },
    sku: { type: String, required: true, unique: true, trim: true },

    image: {
      type: [String],
      validate: {
        validator: function (v) {
          return v.length === 2
        },
        message: 'Product must have exactly 2 imgages',
      },
      required: true,
    },

    stock: { type: Number, default: 0, min: 0 },
    status: {
      type: String,
      enum: ['active', 'draft'],
      default: 'draft',
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Product', productSchema)
