import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'

const Sidebar = () => {
  return (
    <div className="hidden md:inline">
      <div className="w-64 bg-black text-white p-5 flex flex-col min-h-screen">
        <div>
          <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

          <nav className="flex flex-col gap-3">
            <NavLink to="/admin" className="hover:text-[#D4A853]">
              Dashboard
            </NavLink>

            <NavLink to="/admin/products" className="hover:text-[#D4A853]">
              Products
            </NavLink>

            <NavLink to="/admin/add-product" className="hover:text-[#D4A853]">
              Add Product
            </NavLink>
          </nav>
        </div>

        <div className="mt-auto">
          <Button variant="primary" size="medium" fullWidth>
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
