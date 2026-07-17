import { apiRequest } from '../Api'
import type { Wishlist } from './wishlist.types'

export const getWishlist = () =>
  apiRequest<void, Wishlist>({
    url: '/api/wishlist',
  })

export const addToWishlist = (data: { productId: string }) =>
  apiRequest<{ productId: string }, Wishlist>({
    url: '/api/wishlist',
    method: 'POST',
    data,
  })

export const removeFromWishlist = (productId: string) =>
  apiRequest<void, Wishlist>({
    url: `/api/wishlist/${productId}`,
    method: 'DELETE',
  })
