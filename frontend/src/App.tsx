import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/layout/Footer'
import Shop from './pages/Shop'
import Header from './components/layout/Header'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <div>
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
        </Routes>
      </Router>
    </div>
  )
}

export default App
