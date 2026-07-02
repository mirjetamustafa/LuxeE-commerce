import { Outlet } from 'react-router-dom'
import UserSidebar from '../../components/user/UserSidebar'

const User = () => {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="flex max-w-5xl mx-auto  mt-20">
        <UserSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default User
