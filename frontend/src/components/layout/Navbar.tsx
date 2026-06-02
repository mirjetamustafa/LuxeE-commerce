// Navbar component for the e-commerce website with tailwind css styling with logo, home, shop, about, contact, search, cart, user, and favorite icons and resonsive design for mobile devices

import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Sidebar from './Sidebar'

const Navbar = () => {
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
  return (
    <nav
      className={`fixed  top-0 left-0 w-full z-50 transition-colors duration-300
      ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md text-gray-800' : 'bg-transparent text-white'}`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between md:justify-around">
        {/* Mobile Menu Button */}
        <div
          className={`hover:text-[#D4A853] cursor-pointer duration-200 mt-2 md:hidden block ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}
        >
          <button onClick={toggleMobileMenu} className="cursor-pointer">
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {/* Logo */}
        <div
          className={`text-2xl font-bold font-playfair uppercase ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`}
        >
          <Link to="/">
            Luxe<span className="text-[#D4A853]">.</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium hover:text-[#D4A853] duration-300 ${
                isActive
                  ? 'text-[#D4A853]'
                  : isScrolled
                    ? 'text-gray-600'
                    : 'text-gray-200'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              `font-medium hover:text-[#D4A853] duration-300 ${
                isActive
                  ? 'text-[#D4A853]'
                  : isScrolled
                    ? 'text-gray-600'
                    : 'text-gray-200'
              }`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `font-medium hover:text-[#D4A853] duration-300 ${
                isActive
                  ? 'text-[#D4A853]'
                  : isScrolled
                    ? 'text-gray-600'
                    : 'text-gray-200'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-medium hover:text-[#D4A853] duration-300 ${
                isActive
                  ? 'text-[#D4A853]'
                  : isScrolled
                    ? 'text-gray-600'
                    : 'text-gray-200'
              }`
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="flex items-center space-x-9">
          <Search
            className={`hidden md:flex hover:text-[#D4A853] cursor-pointer duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}
          />
          <User
            className={`hover:text-[#D4A853] cursor-pointer duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}
          />
          <Heart
            className={`hidden md:flex hover:text-[#D4A853] cursor-pointer duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}
          />
          <ShoppingCart
            className={`hover:text-[#D4A853] cursor-pointer duration-300 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}
          />
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
