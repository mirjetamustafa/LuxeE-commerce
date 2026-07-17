import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const [isScrolled, setIsScrolled] = React.useState(false)
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const cart = useSelector((state: RootState) => state.cart.cart)

  const totalItems =
    cart?.items.reduce((total, item) => total + item.quantity, 0) || 0

  const wishlist = useSelector((state: RootState) => state.wishlist.items)

  const wishlistItems = wishlist.length
  return (
    <nav
      className={`fixed  top-0 left-0 py-1 w-full z-50 transition-all duration-200 
       ${isScrolled ? 'shadow-sm bg-white/97 ' : 'bg-transparent'} text-gray-800`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between md:justify-around">
        {/* Mobile Menu Button */}
        <div className="hover:text-[#D4A853] cursor-pointer duration-200 mt-2 md:hidden block  text-gray-800 ">
          <button onClick={toggleMobileMenu} className="cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {/* Logo */}
        <div className="text-2xl font-bold font-playfair uppercase text-gray-800">
          <Link to="/">
            Luxe<span className="text-[#D4A853]">.</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium hover:text-[#D4A853] duration-300 ${
                isActive ? 'text-[#D4A853]' : 'text-gray-600'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `font-medium hover:text-[#D4A853] duration-300 ${
                isActive ? 'text-[#D4A853]' : 'text-gray-600'
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium hover:text-[#D4A853] duration-300 ${
                isActive ? 'text-[#D4A853]' : 'text-gray-600'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium hover:text-[#D4A853] duration-300 ${
                isActive ? 'text-[#D4A853]' : 'text-gray-600'
              }`
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="flex items-center space-x-9">
          <Search className="hidden md:flex hover:text-[#D4A853] cursor-pointer duration-300 text-gray-600" />
          <NavLink to="/user">
            <User className="hover:text-[#D4A853] cursor-pointer duration-300 text-gray-600" />
          </NavLink>
          <NavLink to="/user/wishlist" className="hidden md:flex">
            <Heart className=" relative hover:text-[#D4A853] cursor-pointer duration-300 text-gray-600" />
            {wishlistItems > 0 && (
              <span className="text-white text-xs top-0 ml-5 mt-3 font-semibold absolute rounded-full bg-[#D4A853] px-1.5">
                {wishlistItems}
              </span>
            )}
          </NavLink>
          <NavLink to="/cart" className="flex">
            <ShoppingCart className="hover:text-[#D4A853] cursor-pointer duration-300 text-gray-600 relative" />
            {totalItems > 0 && (
              <span className="text-white text-xs top-0 ml-5 mt-3 font-semibold absolute rounded-full bg-[#D4A853] px-1.5">
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={toggleMobileMenu}
        />
        <div
          className={`absolute top-0 left-0 h-screen w-64 bg-white shadow-lg transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Sidebar toggleMobileMenu={toggleMobileMenu} />
        </div>
      </div>
    </nav>
  )
}

export default Header
