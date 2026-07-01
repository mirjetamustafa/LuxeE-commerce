import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'
import { RouteTypes, type RouteType } from './Routes'

interface Props {
  routeType: RouteType
}

const AuthenticationRoute = ({ routeType }: Props) => {
  const { isAuthenticated, user } = useAuth()
  const location = useLocation()

  // public routes
  if (routeType === RouteTypes.PUBLIC) {
    // Logic for private route
    if (isAuthenticated) {
      if (location.pathname === '/login' || location.pathname === '/register') {
        return <Navigate to={user?.isAdmin ? '/admin' : '/user'} replace />
      }
      return <Outlet />
    }
  }

  // private routes
  if (routeType === RouteTypes.PRIVATE) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />
    }
    return <Outlet />
  }

  // admin routes
  if (routeType === RouteTypes.ADMIN) {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />
    }
    if (!user?.isAdmin) {
      return <Navigate to="/" replace />
    }
    return <Outlet />
  }
  return <Outlet />
}

export default AuthenticationRoute
