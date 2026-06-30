const multer = require('multer')
const path = require('path')

// storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads'))
  },

  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`
    cb(null, uniqueName)
  },
})

// filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|jfif|webp/

  const ext = path.extname(file.originalname).toLowerCase()
  const mime = allowedTypes.test(file.mimetype)

  if (allowedTypes.test(ext) && mime) {
    cb(null, true)
  } else {
    cb(new Error('Only image files (jpeg, jpg, png, webp) are allowed!'), false)
  }
}

module.exports = multer({
  storage,
  fileFilter,
})
