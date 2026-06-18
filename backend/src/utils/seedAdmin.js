const User = require('../models/User')
const bcrypt = require('bcryptjs')

const createAdmin = async () => {
  try {
    const adminExists = await User.findOne({ email: 'admin@gmail.com' })

    if (adminExists) {
      console.log('Admin already exists')
      return
    }

    const hashedPassword = await bcrypt.hash('admin123', 10)

    await User.create({
      name: 'Admin',
      email: 'admin@gmail.com',
      password: hashedPassword,
      isAdmin: true,
    })

    console.log('Admin created successfully')
  } catch (error) {
    console.log('Error creating admin:', error.message)
  }
}

module.exports = createAdmin
