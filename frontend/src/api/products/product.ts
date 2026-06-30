import { apiRequest } from '../Api'
import type { Product } from './product.types'

export const getProducts = () =>
  apiRequest<void, Product[]>({
    url: '/api/products/',
  })

export const getProductById = (id: string) =>
  apiRequest<void, Product>({
    url: `/api/product/${id}`,
  })

export const createProduct = (data: FormData) =>
  apiRequest<FormData, Product>({
    url: '/api/products',
    method: 'POST',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const updateProduct = (id: string, data: FormData) =>
  apiRequest<FormData, Product>({
    url: `/api/products/${id}`,
    method: 'PUT',
    data,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

export const deleteProduct = (id: string) =>
  apiRequest<void, void>({
    url: `/api/products/${id}`,
    method: 'DELETE',
  })
