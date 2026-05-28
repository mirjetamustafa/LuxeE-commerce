// Navbar component for the e-commerce website with tailwind css styling with logo, home, shop, about, contact, search, cart, user, and favorite icons and resonsive design for mobile devices

import { Search, ShoppingCart, User, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-around">
        <div className="text-2xl font-bold text-gray-800 font-playfair uppercase">
          <Link to="/">
            Luxe<span className="text-[#D4A853]">.</span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-600 font-medium hover:text-[#D4A853] duration-300 "
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-gray-600 font-medium hover:text-[#D4A853] duration-300 "
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-gray-600 font-medium hover:text-[#D4A853] duration-300 "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 font-medium hover:text-[#D4A853] duration-300 "
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="text-gray-600 hover:text-[#D4A853] cursor-pointer duration-300 " />
          <ShoppingCart className="text-gray-600 hover:text-[#D4A853] cursor-pointer duration-300 " />
          <User className="text-gray-600 hover:text-[#D4A853] cursor-pointer duration-300 " />
          <Heart className="text-gray-600 hover:text-[#D4A853] cursor-pointer duration-300 " />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
