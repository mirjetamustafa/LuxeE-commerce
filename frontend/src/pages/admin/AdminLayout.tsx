import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#F9F9F9]">
      <Sidebar />

      <div className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
