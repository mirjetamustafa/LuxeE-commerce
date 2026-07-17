import { useEffect, useState } from 'react'
import type { CreateOrderInput, Order } from '../api/order/order.types'
import { createOrder, getMyOrders } from '../api/order/order'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../redux/store'
import { clearUserCart } from '../redux/slices/cartSlice'

export const useOrder = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState<Order | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [getOrders, setGetOrders] = useState<Order[]>([])

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

  const fetchOrder = async () => {
    try {
      const response = await getMyOrders()
      setGetOrders(response.orders)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchOrder()
  }, [])
  return {
    placeOrder,
    getOrders,
    loading,
    order,
    error,
  }
}
