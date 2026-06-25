export interface Product {
  _id: string
  title: string
  description: string
  price: number
  compareAtPrice: number
  sku: string
  status: 'active' | 'draft'
  image: string
  category: string
  stock: number
  createdAt: string
  updatedAt: string
}

export interface CreateProductInput {
  title: string
  description: string
  price: number
  compareAtPrice: number
  sku: string
  status: 'active' | 'draft'
  image: string
  category: string
  stock: number
}
