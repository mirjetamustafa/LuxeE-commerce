import { apiRequest } from '../Api'
import type {
  LoginInput,
  LoginResponse,
  RegisterInput,
  RegisterResponse,
} from './user.types'

export const loginUser = (credentials: LoginInput): Promise<LoginResponse> => {
  return apiRequest({
    url: '/api/auth/login',
    method: 'POST',
    data: credentials,
  })
}

export const registerUser = (
  data: RegisterInput,
): Promise<RegisterResponse> => {
  return apiRequest({
    url: '/api/auth/register',
    method: 'POST',
    data: data,
  })
}
