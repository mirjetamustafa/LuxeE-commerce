# 🛍️ Luxe E-commerce

Luxe E-commerce is a full-stack online shopping platform built with modern web technologies.

The application provides a complete e-commerce experience where users can browse products, manage their cart and wishlist, place orders, and securely pay online using Stripe.

It also includes an admin system for managing products, categories, and orders.

## ✨ Features

### 👤 Authentication

- User registration and login
- JWT authentication
- Protected routes
- Admin authorization
- Secure password hashing with bcrypt

### 🛍️ Products

- Browse products
- View product details
- Browse products by category
- Product management
- Product image uploads

### 🛒 Shopping Cart

- Add products to cart
- Update product quantity
- Remove products from cart
- Calculate total price
- Clear cart after successful payment

### ❤️ Wishlist

- Add products to wishlist
- Remove products from wishlist
- View wishlist

### 💳 Payments

- Stripe Checkout integration
- Secure card payments
- Stripe Checkout Sessions
- Stripe Webhooks
- Payment status tracking
- Automatic order creation after successful payment

### 📦 Orders

- Create and manage orders
- View user's orders
- View order details
- Retrieve orders using Stripe Session ID
- Track payment status
- Update order status
- Generate tracking numbers

### 👨‍💼 Admin

- Manage products
- Manage categories
- View all orders
- Update order status
- Generate tracking numbers

## 🛠️ Technologies

### Frontend

- React
- TypeScript
- Vite
- React Router
- Axios
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Stripe

### Development Tools

- Git
- GitHub
- Stripe CLI
- ESLint

## 📁 Project Structure

```text
Luxe-Ecommerce/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── ...
│   │
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── server.js
│   │
│   ├── uploads/
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/luxe-ecommerce.git
cd luxe-ecommerce
```

## ⚙️ Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the `backend` directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLIENT_URL=http://localhost:5173

STRIPE_SECRET_KEY=your_stripe_secret_key

STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

Start the backend:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

## 🎨 Frontend Setup

Open a new terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_SERVER_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The frontend will run on:

```text
http://localhost:5173
```

## 💳 Stripe Configuration

Luxe E-commerce uses Stripe Checkout for secure online payments.

Add the following variables to the backend `.env`:

```env
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Stripe CLI

For local webhook testing, install Stripe CLI and authenticate:

```bash
stripe login
```

Then forward Stripe events to the backend:

```bash
stripe listen --forward-to localhost:5000/api/checkout/webhook
```

Stripe CLI will provide a webhook signing secret.

Add that value to:

```env
STRIPE_WEBHOOK_SECRET=whsec_...
```

## 🔄 Stripe Payment Flow

The payment process works through Stripe Checkout and webhooks.

```text
User
  │
  ▼
Checkout Page
  │
  ▼
Create Checkout Session
  │
  ▼
Stripe Checkout
  │
  ▼
Successful Payment
  │
  ▼
checkout.session.completed
  │
  ▼
Stripe Webhook
  │
  ▼
Create Order
  │
  ▼
Save Order to MongoDB
  │
  ▼
Clear Cart
  │
  ▼
Checkout Success
  │
  ▼
Find Order by Stripe Session ID
  │
  ▼
Order Confirmed
```

The order is created on the backend after Stripe confirms the successful payment through the webhook.

## 🧪 Stripe Test Payment

When running the project in Stripe test mode, you can use Stripe's test card:

```text
Card Number: 4242 4242 4242 4242
Expiry Date: Any future date
CVC: Any 3 digits
ZIP: Any valid ZIP code
```

These details are for Stripe test mode only.

## 🔐 Environment Variables

Sensitive information must never be committed to GitHub.

Make sure your `.gitignore` contains:

```gitignore
.env
.env.*
node_modules/
```

Instead, create example environment files.

### Backend `.env.example`

```env
PORT=5000

MONGO_URI=

JWT_SECRET=

CLIENT_URL=http://localhost:5173

STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET=
```

### Frontend `.env.example`

```env
VITE_SERVER_URL=http://localhost:5000
```

## 🔌 API Routes

### Authentication

```text
/api/auth
```

### Products

```text
/api/products
```

### Categories

```text
/api/categories
```

### Cart

```text
/api/cart
```

### Wishlist

```text
/api/wishlist
```

### Orders

```text
/api/orders
```

### Checkout

```text
/api/checkout
```

### Stripe Webhook

```text
/api/checkout/webhook
```

## 📦 Order Management

Each order contains information such as:

- Order number
- Customer
- Shipping address
- Products
- Quantity
- Product price
- Total price
- Payment method
- Payment status
- Stripe session ID
- Order status
- Tracking number

### Payment Status

```text
Pending
Paid
Failed
```

### Order Status

```text
Pending
Processing
Shipped
Delivered
Cancelled
```

## 👨‍💼 Admin Features

Administrators can:

- Add products
- Update products
- Delete products
- Manage categories
- View all orders
- Update order status
- Generate tracking numbers

## 🛡️ Security

The application implements several security mechanisms:

- JWT authentication
- Protected API endpoints
- Admin authorization
- Password hashing with bcrypt
- Environment variables for sensitive credentials
- Stripe webhook signature verification
- Server-side payment processing

## 📸 Screenshots

Screenshots of the application can be added here.

### Home Page

_Add screenshot here_

### Product Page

_Add screenshot here_

### Shopping Cart

_Add screenshot here_

### Checkout

_Add screenshot here_

### Order Confirmation

_Add screenshot here_

### Admin Dashboard

_Add screenshot here_

## 🔮 Future Improvements

Possible future improvements include:

- Product reviews and ratings
- Advanced product search
- Product filtering
- Pagination
- Coupon and discount system
- Stock management
- Email notifications
- Order confirmation emails
- Improved admin dashboard
- Production deployment
- Payment analytics

## 📚 What I Learned

While building Luxe E-commerce, I worked with:

- React and TypeScript
- REST APIs
- Node.js and Express
- MongoDB and Mongoose
- JWT authentication
- Protected routes
- Stripe Checkout
- Stripe Webhooks
- Payment processing
- Git and GitHub
- Full-stack application architecture

## 👩‍💻 Author

**Mirjeta Mustafa**

Built as a full-stack e-commerce project using React, Node.js, Express, MongoDB, and Stripe.

## 📄 License

This project is licensed under the MIT License.
