import { apiRequest } from '../Api'
import type { Cart } from './cart.types'

export const getCart = () =>
  apiRequest<void, Cart>({
    url: '/api/cart',
  })

export const addToCart = (data: { productId: string; quantity: number }) =>
  apiRequest<{ productId: string; quantity: number }, Cart>({
    url: '/api/cart',
    method: 'POST',
    data,
  })

export const updateCartQuantity = (productId: string, quantity: number) =>
  apiRequest<{ quantity: number }, Cart>({
    url: `/api/cart/${productId}`,
    method: 'PUT',
    data: {
      quantity,
    },
  })

export const removeFromCart = (productId: string) =>
  apiRequest<void, Cart>({
    url: `/api/cart/${productId}`,
    method: 'DELETE',
  })

export const clearCart = () =>
  apiRequest<void, { message: string }>({
    url: '/api/cart',
    method: 'DELETE',
  })
