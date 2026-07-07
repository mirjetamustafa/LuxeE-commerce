// sidebar component for mobile view

import { Heart, Search, User, X } from 'lucide-react'
import { NavLink, Link } from 'react-router-dom'
import Input from '../ui/Input'
const Sidebar = ({ toggleMobileMenu }: { toggleMobileMenu: () => void }) => {
  return (
    <div className="bg-white pt-4 flex flex-col h-screen">
      <div className="flex justify-between items-center px-4 pb-5">
        <div className="text-xl font-bold text-gray-800 font-playfair uppercase">
          <Link to="/">
            Luxe<span className="text-[#D4A853]">.</span>
          </Link>
        </div>
        <button
          className="text-gray-600 hover:text-[#D4A853] cursor-pointer duration-300"
          onClick={toggleMobileMenu}
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="border-y border-gray-200 p-4">
        <Input
          type="search"
          placeholder="Search products..."
          leftIcon={<Search className="w-5 h-5" />}
          inputSize="sm"
        />
      </div>
      <nav className="flex flex-col space-y-2 mt-4 px-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-medium rounded-md p-4 duration-300 ${
              isActive
                ? 'text-[#D4A853] bg-[#D4A853]/10'
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            `font-medium rounded-md p-4 duration-300 ${
              isActive
                ? 'text-[#D4A853] bg-[#D4A853]/10'
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-medium rounded-md p-4 duration-300 ${
              isActive
                ? 'text-[#D4A853] bg-[#D4A853]/10'
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `font-medium rounded-md p-4 duration-300 ${
              isActive
                ? 'text-[#D4A853] bg-[#D4A853]/10'
                : 'text-gray-600 hover:bg-gray-100'
            }`
          }
        >
          Contact
        </NavLink>
      </nav>

      <div className="mt-auto border-t  border-gray-200 bg-gray-50 p-4">
        <div className="flex justify-around">
          <p className="flex flex-col items-center font-semibold text-gray-600 hover:text-[#D4A853] cursor-pointer ">
            <NavLink to="/login">
              <User className="w-5 h-5" />
              <span className="text-xs">Account</span>
            </NavLink>
          </p>
          <NavLink to="/user/wishlist">
            <p className="flex flex-col items-center font-semibold text-gray-600 hover:text-[#D4A853] cursor-pointer">
              <Heart className="w-5 h-5" />
              <span className="text-xs">Wishlist</span>
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
