export interface Product {
  _id: string
  title: string
  description: string
  price: number
  compareAtPrice: number
  sku: string
  status: 'active' | 'draft'
  image: File | null
  hoverImage: File | null
  category: string
  stock: number
  isBestSeller: boolean
  isSale: boolean
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
  image: File | null
  hoverImage: File | null
  category: string
  stock: number
  isBestSeller: boolean
  isSale: boolean
}
