import { useEffect, useState } from 'react'
import type { Order } from '../api/order/order.types'
import { getOrderId } from '../api/order/order'

const useOrderDetails = (id: string) => {
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await getOrderId(id)

        setOrder(response.order)
      } finally {
        setLoading(false)
      }
    }
    fetchOrder()
  }, [id])
  return { order, loading }
}

export default useOrderDetails
