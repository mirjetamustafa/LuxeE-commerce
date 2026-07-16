import { Check } from 'lucide-react'
import { NavLink, useParams } from 'react-router-dom'
import Button from '../ui/Button'
import useOrderDetails from '../../hooks/useOrderDetails'

const OrderConfirmed = () => {
  const { id } = useParams()

  const { order, loading } = useOrderDetails(id!)

  if (loading) {
    return <p>Loadng...</p>
  }

  return (
    <div className="pt-24 pb-20 bg-[#F9F9F9] flex items-center justify-center">
      <div className="bg-white shadow-lg p-12 w-120 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold font-playfair mb-8">
          Order Confirmed!
        </h2>
        <p className="mb-2">Thank you for your purchase</p>
        <p className="mb-6 text-sm">
          Order Number:{' '}
          <span className="font-bold text-xs">{order.orderNumber} </span>
        </p>

        <p className="mb-6 text-sm">
          A confirmation emai has been sent to <br />{' '}
          {order?.shippingAddress.email}
        </p>

        <div className="flex flex-col gap-2">
          <NavLink to="/shop">
            <Button variant="primary" fullWidth>
              Continue Shopping
            </Button>
          </NavLink>
          <NavLink to="/user/order-history">
            <Button variant="secondary" fullWidth>
              View Order Details
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmed
