import { Heart, MapPin, Package, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { useAuth } from '../../lib/AuthContext'

const UserSidebar = () => {
  const { logout } = useAuth()
  return (
    <div className="my-20">
      <div className="w-64 bg-white text-white p-5 mb-6 shadow-xs">
        <div className="flex items-center gap-2 mb-6">
          <div className="flex items-center justify-center bg-[#D4A853] w-10 h-10 rounded-full">
            M
          </div>
          <div className="">
            <h2 className="text-gray-800 font-semibold font-playfair">
              John Doe
            </h2>
            <p className="text-xs text-gray-800">john.doe@example.com</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-9">
          <div className="">
            <NavLink
              to="/user"
              end
              className={({ isActive }) =>
                `flex gap-2 items-center text-sm font-semibold px-3 py-2 ${isActive ? 'border-l-2 border-[#D4A853] pl-3  bg-[#D4A853]/10 text-[#D4A853]' : 'text-gray-800'}`
              }
            >
              <User size={18} />
              Profile Settings
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/user/order-history"
              className={({ isActive }) =>
                `flex gap-2 items-center text-sm font-semibold px-3 py-2 ${isActive ? 'border-l-2 border-[#D4A853] pl-3  bg-[#D4A853]/10 text-[#D4A853]' : 'text-gray-800'}`
              }
            >
              <Package size={18} />
              Order History
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/user/saved-address"
              className={({ isActive }) =>
                `flex gap-2 items-center text-sm font-semibold px-3 py-2 ${isActive ? 'border-l-2 border-[#D4A853] pl-3  bg-[#D4A853]/10 text-[#D4A853]' : 'text-gray-800'}`
              }
            >
              <MapPin size={18} />
              Saved Address
            </NavLink>
          </div>

          <div>
            <NavLink
              to="/user/wishlist"
              className={({ isActive }) =>
                `flex gap-2 items-center text-sm font-semibold px-3 py-2 ${isActive ? 'border-l-2 border-[#D4A853] pl-3  bg-[#D4A853]/10 text-[#D4A853]' : 'text-gray-800'}`
              }
            >
              <Heart size={18} />
              Wishlist
            </NavLink>
          </div>
        </div>
      </div>

      <Button variant="logout" size="medium" fullWidth onClick={logout}>
        Logout
      </Button>
    </div>
  )
}

export default UserSidebar
