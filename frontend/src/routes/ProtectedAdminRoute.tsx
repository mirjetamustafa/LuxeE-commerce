import { Navigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const ProtectedAdminRoute = ({ children }: any) => {
  const token = localStorage.getItem('token')

  if (!token) return <Navigate to="/login" />

  const decoded: any = jwtDecode(token)

  if (!decoded.isAdmin) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedAdminRoute
