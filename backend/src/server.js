const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const connectDB = require('./config/db')
const createAdmin = require('./utils/seedAdmin')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Luxe e-commerce API is running...')
})

app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/products', require('./routes/productRoutes'))
app.use('/api/categories', require('./routes/categoryRoutes'))

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    connectDB()
    createAdmin()

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.log('Server error:', error.message)
  }
}

startServer()
