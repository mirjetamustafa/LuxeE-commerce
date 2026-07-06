import { Outlet } from 'react-router-dom'
import UserSidebar from '../../components/user/UserSidebar'

const User = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-8 mt-20">
        <UserSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default User
