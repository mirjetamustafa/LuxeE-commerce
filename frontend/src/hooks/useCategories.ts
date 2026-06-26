import { useEffect, useState } from 'react'
import { getCategory } from '../api/categories/category'
import type { Category } from '../api/categories/categories.type'

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategory()
        setCategories(res.data || res || [])
      } catch (error) {
        console.error('Error fetching categories:', error)
        setCategories([])
      }
    }
    fetchCategories()
  }, [])

  return { categories }
}
