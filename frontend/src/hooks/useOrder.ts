import { useState } from 'react'
import type { CreateOrderInput, Order } from '../api/order/order.types'
import { createOrder } from '../api/order/order'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/store'
import { clearUserCart } from '../redux/slices/cartSlice'

export const useOrder = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState<Order | null>(null)
  const [error, setError] = useState<string | null>(null)

  const placeOrder = async (data: CreateOrderInput) => {
    try {
      setLoading(true)
      setError(null)

      const response = await createOrder(data)

      setOrder(response.order)

      // pastro cart-in pas krijimit te order
      await dispatch(clearUserCart())

      return response.order
    } catch (err: any) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    placeOrder,
    loading,
    order,
    error,
  }
}
