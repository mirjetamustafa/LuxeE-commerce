import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import type {
  LoginInput,
  LoginResponse,
  RegisterInput,
  User,
} from '../api/User/user.types'

import { getMe, loginUser, registerUser } from '../api/User/user'
import { useDispatch } from 'react-redux'
import { clearCartState, fetchCart } from '../redux/slices/cartSlice'

import type { AppDispatch } from '../redux/store'

interface AuthContextType {
  user: User | null
  token: string | null
  login: (data: LoginInput) => Promise<LoginResponse>
  register: (data: RegisterInput) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const loadUser = async () => {
      const savedToken = localStorage.getItem('token')

      if (!savedToken) {
        setUser(null)
        setToken(null)
        dispatch(clearCartState())
        return
      }

      setToken(savedToken)

      try {
        const currentUser = await getMe()

        setUser(currentUser)

        dispatch(fetchCart())
      } catch (error) {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)

        dispatch(clearCartState())
      }
    }

    loadUser()
  }, [dispatch])

  const login = async (data: LoginInput): Promise<LoginResponse> => {
    const response = await loginUser(data)

    const authToken = response.token

    localStorage.setItem('token', authToken)

    setToken(authToken)

    setUser(response)
    dispatch(fetchCart())
    return response
  }

  const register = async (data: RegisterInput) => {
    const response = await registerUser(data)
    const authToken = response.token

    localStorage.setItem('token', authToken)
    setToken(authToken)

    setUser(response)

    dispatch(fetchCart())
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)

    dispatch(clearCartState())
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {' '}
      {children}{' '}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}
