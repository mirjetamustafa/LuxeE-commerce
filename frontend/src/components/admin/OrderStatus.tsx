import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import type { OrderStatus } from '../../api/order/order.types'

interface Props {
  status: OrderStatus
  onChange?: (status: OrderStatus) => void
}

const statuses: OrderStatus[] = [
  'Pending',
  'Processing',
  'Shipped',
  'Delivered',
  'Cancelled',
]

const statusStyles = {
  Pending: 'bg-yellow-100 text-yellow-700',
  Processing: 'bg-blue-100 text-blue-700',
  Shipped: 'bg-indigo-100 text-indigo-700',
  Delivered: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
}

const OrderStatusDropdown = ({ status, onChange }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className={`
          flex items-center gap-2 px-4 py-0.5 rounded-full text-sm font-medium
          ${statusStyles[status]}
        `}
      >
        {status}
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute mt-2 w-36 bg-white border rounded-lg shadow-lg z-20">
          {statuses.map((item) => (
            <button
              key={item}
              onClick={() => {
                onChange?.(item)
                setOpen(false)
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrderStatusDropdown
