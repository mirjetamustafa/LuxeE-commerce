import { useEffect, useState } from 'react'
import { getAllOrders, updateOrderStatus } from '../api/order/order'
import type { Order, OrderStatus } from '../api/order/order.types'

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

  const changeOrderStatus = async (
    id: string,
    status: OrderStatus,
  ): Promise<void> => {
    try {
      setLoading(true)
      const response = await updateOrderStatus(id, status)

      const updateOrder = response.order

      setOrders((prev) =>
        prev.map((order) => (order._id === id ? updateOrder : order)),
      )
      // return updateOrder
    } catch (error) {
      console.error(error)
      throw error
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
    changeOrderStatus,
  }
}
