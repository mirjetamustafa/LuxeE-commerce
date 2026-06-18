import { apiRequest } from '../Api'
import type { LoginInput, RegisterInput } from './user.types'

export const loginUser = (credentials: LoginInput) => {
  return apiRequest({
    url: '/api/auth/login',
    method: 'POST',
    data: credentials,
  })
}

export const registerUser = (data: RegisterInput) => {
  return apiRequest({
    url: '/api/auth/register',
    method: 'POST',
    data: data,
  })
}
