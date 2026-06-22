import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import Shop from './pages/Shop'
import Header from './components/layout/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer } from 'react-toastify'
import User from './pages/User'
import AdminLayout from './pages/admin/AdminLayout'
import ProtectedAdminRoute from './routes/ProtectedAdminRoute'
import Dashboard from './pages/admin/Dashboard'
import AddProduct from './pages/admin/AddProduct'
import Products from './pages/admin/Products'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Footer />
              </>
            }
          />

          <Route
            path="/shop"
            element={
              <>
                <Header />
                <Shop />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
                <Footer />
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Header />
                <Register />
                <Footer />
              </>
            }
          />

          <Route
            path="/user"
            element={
              <>
                <Header />
                <User />
                <Footer />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminLayout />
              </ProtectedAdminRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
