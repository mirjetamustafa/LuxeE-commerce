import { apiRequest } from '../Api'
import type {
  LoginInput,
  LoginResponse,
  RegisterInput,
  RegisterResponse,
  User,
} from './user.types'

export const loginUser = (credentials: LoginInput): Promise<LoginResponse> => {
  return apiRequest<LoginInput, LoginResponse>({
    url: '/api/auth/login',
    method: 'POST',
    data: credentials,
  })
}

export const getMe = () =>
  apiRequest<void, User>({
    url: '/api/auth/me',
  })

export const registerUser = (
  data: RegisterInput,
): Promise<RegisterResponse> => {
  return apiRequest({
    url: '/api/auth/register',
    method: 'POST',
    data: data,
  })
}
