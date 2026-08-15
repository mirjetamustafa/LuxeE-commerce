const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const path = require('path')

dotenv.config()

const connectDB = require('./config/db')
const createAdmin = require('./utils/seedAdmin')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const wishlistRoutes = require('./routes/wishlistRoutes')
const checkoutRoutes = require('./routes/checkoutRoutes')

const app = express()

app.use(cors())

app.use('/api/checkout/webhook', express.raw({ type: 'application/json' }))

app.use(express.json())

// serve static uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// test route
app.get('/', (req, res) => {
  res.send('Luxe e-commerce API is running...')
})

// routes
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/categories', require('./routes/categoryRoutes'))
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/wishlist', wishlistRoutes)
app.use('/api/checkout', checkoutRoutes)

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await connectDB()
    await createAdmin()

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Server error:', error)
    process.exit(1)
  }
}

startServer()
