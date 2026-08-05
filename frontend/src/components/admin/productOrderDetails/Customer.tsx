import { User } from 'lucide-react'
import type { Order } from '../../../api/order/order.types'

interface CustomerProps {
  order: Order
}

const Customer = ({ order }: CustomerProps) => {
  return (
    <div className="border border-slate-200 bg-white rounded-xl shadow-xs py-5 px-6">
      <div className="flex items-center gap-2">
        <User className="w-5 h-5 text-indigo-700" />
        <div className="font-semibold">Customer</div>
      </div>
      <p className="font-semibold mt-5">
        {order.shippingAddress.firstName} {order.shippingAddress.lastName}
      </p>
      <p className="text-sm text-indigo-700 mt-1">
        {order.shippingAddress.email}
      </p>

      <div className="text-sm text-slate-500 mt-4">
        Customer since{' '}
        {order.customer.createdAt &&
          new Date(order.customer.createdAt).toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
          })}
      </div>
    </div>
  )
}

export default Customer
