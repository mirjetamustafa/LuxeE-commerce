import { useCallback, useEffect, useState } from 'react'
import type { Order } from '../api/order/order.types'
import { getOrderId } from '../api/order/order'

const useOrderDetails = (id: string) => {
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  const refreshOrder = useCallback(async () => {
    if (!id) return

    try {
      setLoading(true)
      const response = await getOrderId(id)
      setOrder(response.order)
    } catch (error) {
      console.error('Error refreshing order:', error)
    } finally {
      setLoading(false)
    }
  }, [id])

  useEffect(() => {
    refreshOrder()
  }, [refreshOrder])
  return { order, loading, refreshOrder, setOrder }
}

export default useOrderDetails
