import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Navbar from '../components/layout/Navbar'
import About from '../pages/About'
import AddProduct from '../pages/admin/AddProduct'
import AdminLayout from '../pages/admin/AdminLayout'
import Dashboard from '../pages/admin/Dashboard'
import EditProduct from '../pages/admin/EditProduct'
import Products from '../pages/admin/Products'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Register from '../pages/Register'
import Shop from '../pages/Shop'
import User from '../pages/User'
import AuthenticationRoute from './AuthenticationRoute'

export const RouteTypes = {
  PRIVATE: 'private',
  PUBLIC: 'public',
  ADMIN: 'admin',
} as const

export type RouteType = (typeof RouteTypes)[keyof typeof RouteTypes]

export const createRoutes = (): RouteObject[] => [
  {
    element: <AuthenticationRoute routeType={RouteTypes.PUBLIC} />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        ),
      },
      {
        path: '/shop',
        element: (
          <>
            <Header />
            <Shop />
            <Footer />
          </>
        ),
      },
      {
        path: '/about',
        element: (
          <>
            <Header />
            <About />
            <Footer />
          </>
        ),
      },
      {
        path: '/contact',
        element: (
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        ),
      },
      {
        path: '/product/:id',
        element: (
          <>
            <Header />
            <ProductDetails />
            <Footer />
          </>
        ),
      },
      {
        path: '/login',
        element: (
          <>
            <Header />
            <Login />
            <Footer />
          </>
        ),
      },
      {
        path: '/register',
        element: (
          <>
            <Header />
            <Register />
            <Footer />
          </>
        ),
      },
    ],
  },

  {
    element: <AuthenticationRoute routeType={RouteTypes.PRIVATE} />,
    children: [
      {
        path: '/cart',
        element: (
          <>
            <Header />
            <Cart />
            <Footer />
          </>
        ),
      },
      {
        path: '/checkout',
        element: (
          <>
            <Header />
            <Checkout />
            <Footer />
          </>
        ),
      },
      {
        path: '/user',
        element: (
          <>
            <Header />
            <User />
            <Footer />
          </>
        ),
      },
    ],
  },

  {
    element: <AuthenticationRoute routeType={RouteTypes.ADMIN} />,
    children: [
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'products',
            element: <Products />,
          },
          {
            path: 'add-product',
            element: <AddProduct />,
          },
          {
            path: 'edit-product/:id',
            element: <EditProduct />,
          },
        ],
      },
    ],
  },
]
