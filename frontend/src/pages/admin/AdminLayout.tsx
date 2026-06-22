import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F9F9F9]">
      <Sidebar />

      <div className="flex-1 overflow-y-auto  bg-gray-100 p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
