import { CreditCard } from 'lucide-react'
import type { Order } from '../../../api/order/order.types'

interface PaymentProps {
  order: Order
}

const Payment = ({ order }: PaymentProps) => {
  const getPaymentStatus = () => {
    if (order.status === 'Cancelled') {
      return 'Refunded'
    }

    if (order.paymentMethod === 'Cash on Delivery') {
      if (order.status === 'Pending') {
        return 'Pending Payment'
      }

      return 'Paid'
    }

    if (order.status === 'Pending') {
      return 'Pending'
    }

    return 'Paid'
  }

  return (
    <div className="border border-slate-200 bg-white rounded-xl shadow-xs py-5 px-6 mt-6">
      <div className="flex items-center gap-2">
        <CreditCard className="w-5 h-5 text-indigo-700" />
        <div className="font-semibold">Payment</div>
      </div>
      <div className="text-sm text-slate-500 space-y-1 mt-3">
        {order.paymentMethod === 'Credit Card' ? (
          <p className="font-medium">Visa ending in 4242</p>
        ) : (
          <p className="font-medium">Cash on Delivery</p>
        )}

        <p
          className={
            order.status === 'Cancelled'
              ? 'text-red-500 text-sm'
              : 'text-green-600 text-sm'
          }
        >
          {getPaymentStatus()}
        </p>
      </div>
    </div>
  )
}

export default Payment
