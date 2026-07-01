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
} from '../api/User/user.types'

import { loginUser, registerUser } from '../api/User/user'

interface User {
  isAdmin: boolean
}

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

  useEffect(() => {
    const savedToken = localStorage.getItem('token')

    if (savedToken) setToken(savedToken)
    else setUser(null)
  }, [])

  const login = async (data: LoginInput) => {
    const response = await loginUser(data)

    const authToken = `Bearer ${response.token}`

    localStorage.setItem('token', authToken)

    setToken(authToken)

    setUser({
      isAdmin: response.isAdmin,
    })
    return response
  }

  const register = async (data: RegisterInput) => {
    const response = await registerUser(data)
    const authToken = response.token

    localStorage.setItem('token', authToken)
    setToken(authToken)

    setUser({
      isAdmin: response.isAdmin,
    })
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
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
