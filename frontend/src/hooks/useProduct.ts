import { useEffect, useState } from 'react'
import type { Product } from '../api/products/product.types'
import { getProductById } from '../api/products/product'

const useProduct = (id?: string) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return

      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  return { product, loading }
}

export default useProduct
