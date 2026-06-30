import { useEffect, useState } from 'react'
import type { Product } from '../api/products/product.types'
import { deleteProduct, getProducts } from '../api/products/product'
import { toast } from 'react-toastify'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const products = await getProducts()
      setProducts(products)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  const handlDelete = async (id: string) => {
    try {
      await deleteProduct(id)
      toast.success('Product deleted successfully')
      await fetchProducts()
    } catch (err) {
      console.error(err)
      toast.error('Failed to delete product')
    }
  }

  return { products, loading, handlDelete }
}
