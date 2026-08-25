import { useEffect, useState } from 'react'
import { getProducts } from '../api/products/product'
import type { Product } from '../api/products/product.types'

interface Filters {
  categories: string[]
  maxPrice: number
  rating: number | null
  search: string
  inStock: boolean
}

const useProductFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    maxPrice: 500,
    rating: null,
    search: '',
    inStock: false,
  })

  const [products, setProducts] = useState<Product[]>([])

  const updateCategories = (categoryId: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(categoryId)
        ? prev.categories.filter((id) => id !== categoryId)
        : [...prev.categories, categoryId],
    }))
  }

  const updatePrice = (price: number) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: price,
    }))
  }

  const updateRating = (rating: number | null) => {
    setFilters((prev) => ({
      ...prev,
      rating,
    }))
  }

  const updateSearch = (value: string) => {
    setFilters((prev) => ({
      ...prev,
      search: value,
    }))
  }

  const updateStock = () => {
    setFilters((prev) => ({
      ...prev,
      inStock: !prev.inStock,
    }))
  }

  useEffect(() => {
    const params = new URLSearchParams()

    if (filters.categories.length) {
      params.append('categories', filters.categories.join(','))
    }

    if (filters.maxPrice) {
      params.append('maxPrice', filters.maxPrice.toString())
    }

    if (filters.rating) {
      params.append('rating', filters.rating.toString())
    }

    if (filters.search) {
      params.append('search', filters.search)
    }

    if (filters.inStock) {
      params.append('inStock', 'true')
    }

    getProducts(params.toString()).then((data) => {
      setProducts(data)
    })
  }, [filters])

  const clearFilters = () => {
    setFilters({
      categories: [],
      maxPrice: 500,
      rating: null,
      search: '',
      inStock: false,
    })
  }

  return {
    products,
    filters,
    updateCategories,
    updatePrice,
    updateRating,
    updateSearch,
    updateStock,
    clearFilters,
  }
}

export default useProductFilters
