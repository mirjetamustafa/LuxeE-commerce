import { apiRequest } from '../Api'
import type { Category } from './categories.type'

export const getCategory = () =>
  apiRequest<Category[]>({
    url: '/api/categories',
  })
