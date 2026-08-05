import { MapPin } from 'lucide-react'
import type { Order } from '../../../api/order/order.types'

interface AddressProps {
  order: Order
}

const Address = ({ order }: AddressProps) => {
  return (
    <div className="border border-slate-200 bg-white rounded-xl shadow-xs py-5 px-6 mt-6">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-indigo-700" />
        <div className="font-semibold">Shipping Address</div>
      </div>
      <div className="text-sm text-slate-500 space-y-1 mt-3">
        <p className="">
          {order.shippingAddress.firstName} {order.shippingAddress.lastName}
        </p>
        <p className="">{order.shippingAddress.streetAddress}</p>
        <p className="">
          {order.shippingAddress.city}, {order.shippingAddress.zipCode}
        </p>
        <p className="">{order.shippingAddress.state}</p>
      </div>
    </div>
  )
}

export default Address
