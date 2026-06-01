// Navbar component for the e-commerce website with tailwind css styling with logo, home, shop, about, contact, search, cart, user, and favorite icons and resonsive design for mobile devices

import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between md:justify-around">
        <div className="text-gray-800 hover:text-[#D4A853] cursor-pointer duration-200 mt-2 md:hidden block">
          <button onClick={toggleMobileMenu} className="cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <div className="text-2xl font-bold text-gray-800 font-playfair uppercase">
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
          <Search className="text-gray-600 hidden md:flex hover:text-[#D4A853] cursor-pointer duration-300 " />
          <User className="text-gray-600 hover:text-[#D4A853] cursor-pointer duration-300 " />
          <Heart className="text-gray-600 hidden md:flex hover:text-[#D4A853] cursor-pointer duration-300 " />
          <ShoppingCart className="text-gray-600 hover:text-[#D4A853] cursor-pointer duration-300 " />
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

export default Navbar
