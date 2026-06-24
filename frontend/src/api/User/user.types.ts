export interface LoginInput {
  email: string
  password: string
}

export interface RegisterInput {
  name: string
  email: string
  password: string
}

export interface LoginResponse {
  token: string
  isAdmin: boolean
}

export interface RegisterResponse {
  token: string
}
