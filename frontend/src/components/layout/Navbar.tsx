import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react'

import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Sidebar from './Sidebar'
import type { RootState } from '../../redux/store'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const cart = useSelector((state: RootState) => state.cart.cart)

  const totalItems =
    cart?.items.reduce((total, item) => total + item.quantity, 0) || 0

  const wishlist = useSelector((state: RootState) => state.wishlist.items)

  const wishlistItems = wishlist.length

  console.log('NAVBAR RENDER')

  return (
    <nav
      className={`
      fixed top-0 left-0 w-full z-50
      transition-colors duration-300
      ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-sm shadow-md text-gray-800'
          : 'bg-transparent text-white'
      }
      `}
    >
      <div
        className="
        container mx-auto px-4 py-2
        flex items-center justify-between
        md:justify-around
      "
      >
        {/* Mobile Menu */}

        <button
          type="button"
          onClick={toggleMobileMenu}
          className="
          md:hidden cursor-pointer
          hover:text-[#D4A853]
          "
        >
          <Menu className={isScrolled ? 'text-gray-800' : 'text-gray-200'} />
        </button>

        {/* Logo */}

        <div
          className={`
          text-2xl font-bold font-playfair uppercase
          ${isScrolled ? 'text-gray-800' : 'text-gray-200'}
          `}
        >
          <Link to="/">
            Luxe<span className="text-[#D4A853]">.</span>
          </Link>
        </div>

        {/* Desktop Links */}

        <div className="hidden md:flex space-x-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'Shop', path: '/shop' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `
                font-medium hover:text-[#D4A853]
                duration-300
                ${
                  isActive
                    ? 'text-[#D4A853]'
                    : isScrolled
                      ? 'text-gray-600'
                      : 'text-gray-200'
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Icons */}

        <div
          className="
          relative flex items-center space-x-7
        "
        >
          {/* Search */}

          <div className="flex items-center">
            <div
              className={`flex items-center overflow-hidden transition-all duration-300 ease-in-out ${
                isSearchOpen
                  ? 'w-64 opacity-100 translate-x-0 mr-3'
                  : 'w-0 opacity-0 translate-x-10'
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                autoFocus={isSearchOpen}
                className="flex-1 outline-none border-b border-[#D4A853] py-1 bg-transparent"
              />

              <button
                onClick={() => setIsSearchOpen(false)}
                className="ml-2 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={`hidden md:flex transition-all duration-300 cursor-pointer ${
                isSearchOpen ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
              }`}
            >
              <Search
                className={`hover:text-[#D4A853] duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-gray-200'
                }`}
              />
            </button>
          </div>

          {/* User */}

          <NavLink to="/user">
            <User
              className={`
              hover:text-[#D4A853]
              duration-300
              ${isScrolled ? 'text-gray-600' : 'text-gray-200'}
              `}
            />
          </NavLink>

          {/* Wishlist */}

          <NavLink to="/user/wishlist" className="relative hidden md:flex">
            <Heart
              className={`
              hover:text-[#D4A853]
              duration-300
              ${isScrolled ? 'text-gray-600' : 'text-gray-200'}
              `}
            />

            {wishlistItems > 0 && (
              <span
                className="
                  absolute -top-2 -right-3
                  text-white text-xs
                  rounded-full
                  bg-[#D4A853]
                  px-1.5
                  "
              >
                {wishlistItems}
              </span>
            )}
          </NavLink>

          {/* Cart */}

          <NavLink to="/cart" className="relative">
            <ShoppingCart
              className={`
              hover:text-[#D4A853]
              duration-300
              ${isScrolled ? 'text-gray-600' : 'text-gray-200'}
              `}
            />

            {totalItems > 0 && (
              <span
                className="
                  absolute -top-2 -right-3
                  text-white text-xs
                  rounded-full
                  bg-[#D4A853]
                  px-1.5
                  "
              >
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Mobile Sidebar */}

      <div
        className={`
        fixed inset-0 z-50 md:hidden
        transition-opacity duration-300
        ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={toggleMobileMenu}
        />

        <div
          className={`
          absolute top-0 left-0
          h-screen w-64
          bg-white shadow-lg
          transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <Sidebar toggleMobileMenu={toggleMobileMenu} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
