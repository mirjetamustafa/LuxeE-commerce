import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../ui/Button'
import { CirclePlus, LayoutDashboard, Menu, Package, X } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../../lib/AuthContext'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const { logout } = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  return (
    <div className="sticky top-0 h-screen">
      <div className="hidden md:flex">
        <div className="w-64 bg-slate-900 text-white p-5 flex flex-col min-h-screen">
          <div>
            <h2 className="text-xl font-bold mb-6 px-3 border-b border-gray-700 pb-3">
              Admin Panel
            </h2>

            <nav className="flex flex-col gap-3">
              <NavLink
                to="/admin"
                className="flex gap-2 items-center hover:bg-indigo-600 px-3 py-2 rounded-md"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </NavLink>

              <NavLink
                to="/admin/products"
                className="flex gap-2 items-center hover:bg-indigo-600 px-3 py-2 rounded-md"
              >
                <Package />
                Products
              </NavLink>

              <NavLink
                to="/admin/add-product"
                className="flex gap-2 items-center hover:bg-indigo-600 px-3 py-2 rounded-md"
              >
                <CirclePlus />
                Add Product
              </NavLink>
            </nav>
          </div>

          <div className="mt-auto">
            <Button
              variant="admin"
              size="medium"
              fullWidth
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      <div className="inline md:hidden">
        <button
          className="mt-9 px-2 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Menu size={20} />
        </button>

        <div
          className={`fixed top-0 left-0 h-full w-64 bg-slate-900 p-5 z-50 text-white transform transition-transform duration-300 ${
            open ? 'translate-x-0' : '-translate-x-full'
          } md:hidden flex flex-col min-h-screen`}
        >
          <div className="">
            <div className="flex justify-between items-center px-3 border-b border-gray-700 mb-6">
              <h2 className="text-xl font-bold mb-6 ">Admin Panel</h2>

              <button
                onClick={() => setOpen(false)}
                className="text-white cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              <NavLink
                className="flex gap-2 items-center hover:bg-indigo-600 px-3 py-2 rounded-md"
                onClick={() => setOpen(false)}
                to="/admin"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </NavLink>

              <NavLink
                className="flex gap-2 items-center hover:bg-indigo-600 px-3 py-2 rounded-md"
                onClick={() => setOpen(false)}
                to="/admin/products"
              >
                <Package />
                Products
              </NavLink>

              <NavLink
                className="flex gap-2 items-center hover:bg-indigo-600 px-3 py-2 rounded-md"
                onClick={() => setOpen(false)}
                to="/admin/add-product"
              >
                <CirclePlus />
                Add Product
              </NavLink>
            </nav>
          </div>
          <div className="mt-auto">
            <Button
              variant="admin"
              size="medium"
              fullWidth
              onClick={handleLogout}
            >
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
