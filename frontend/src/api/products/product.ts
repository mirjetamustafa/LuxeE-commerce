import { apiRequest } from '../Api'
import type { Product } from './product.types'

export const getProducts = (params?: string) =>
  apiRequest<void, Product[]>({
    url: `/api/products?${params ?? ''}`,
  })

export const getProductById = (id: string) =>
  apiRequest<void, Product>({
    url: `/api/products/${id}`,
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
