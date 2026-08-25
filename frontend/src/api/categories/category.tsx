import { apiRequest } from '../Api'
import type { Category } from './categories.type'

export const getCategory = (): Promise<Category[]> =>
  apiRequest<void, Category[]>({
    url: '/api/categories',
    method: 'GET',
  })
