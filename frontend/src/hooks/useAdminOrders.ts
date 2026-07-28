import { useEffect, useState } from 'react'
import { getAllOrders } from '../api/order/order'
import type { Order } from '../api/order/order.types'

export const useAdminOrders = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(false)

  const fetchOrders = async () => {
    try {
      setLoading(true)

      const response = await getAllOrders()

      setOrders(response.orders)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return {
    orders,
    loading,
    fetchOrders,
  }
}
