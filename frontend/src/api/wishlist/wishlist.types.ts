import type { Product } from '../products/product.types'

export interface Wishlist {
  _id: string
  customer: string
  products: Product[]
  createdAt: string
  updatedAt: string
}
