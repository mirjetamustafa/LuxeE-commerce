import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { getOrderByStripeSession } from '../api/order/order'

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadOrder = async () => {
      const sessionId = searchParams.get('session_id')

      if (!sessionId) {
        console.error('Stripe session ID not found')
        setLoading(false)
        return
      }

      let attempts = 0

      while (attempts < 10) {
        try {
          const response = await getOrderByStripeSession(sessionId)

          if (response.success) {
            // Order u krijua me sukses
            navigate(`/orderConfirmed/${response.order._id}`, {
              replace: true,
            })

            return
          }
        } catch (error) {
          console.log('Order not ready yet...', error)
        }

        attempts += 1

        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      console.error('Order was not created in time')
      setLoading(false)
    }

    loadOrder()
  }, [searchParams, navigate])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Processing your order...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Order could not be found.</p>
    </div>
  )
}

export default CheckoutSuccess
