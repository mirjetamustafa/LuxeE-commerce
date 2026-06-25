import { apiRequest } from '../Api'
import type { CreateProductInput, Product } from './product.types'

export const getProducts = () =>
  apiRequest<void, Product>({
    url: '/api/products/',
  })

export const getProductById = (id: string) =>
  apiRequest<void, Product>({
    url: `/api/product/${id}`,
  })

export const createProduct = (data: CreateProductInput) =>
  apiRequest<CreateProductInput, Product>({
    url: '/api/products',
    method: 'POST',
    data,
  })

export const deleteProduct = (id: string) =>
  apiRequest({
    url: `/api/products/${id}`,
    method: 'DELETE',
  })
