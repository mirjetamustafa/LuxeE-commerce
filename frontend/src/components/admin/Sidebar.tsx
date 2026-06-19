import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { CirclePlus, LayoutDashboard, Package } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="hidden md:inline">
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
          <Button variant="admin" size="medium" fullWidth>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
