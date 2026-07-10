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
  _id: string
  name: string
  email: string
  isAdmin: boolean
  token: string
}

export interface RegisterResponse {
  _id: string
  name: string
  email: string
  isAdmin: boolean
  token: string
}

export interface User {
  _id: string
  name: string
  email: string
  isAdmin: boolean
}
