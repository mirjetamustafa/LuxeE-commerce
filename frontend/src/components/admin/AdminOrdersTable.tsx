import { Ellipsis, Eye } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import OrderStatus from './OrderStatus'
import type { Order } from '../../api/order/order.types'

interface Props {
  orders: Order[]
  changeOrderStatus: (id: string, status: Order['status']) => Promise<void>
}

const AdminOrdersTable = ({ orders, changeOrderStatus }: Props) => {
  const [openDropdown, setOpenDropDown] = useState<string | null>(null)
  return (
    <div>
      <table className="w-full text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 text-xs uppercase">
          <tr>
            <th className="px-6 py-4">Order</th>
            <th className="px-6 py-4">Customer</th>
            <th className="px-5 py-4">Date</th>
            <th className="px-5 py-4">Items</th>
            <th className="px-6 py-4">Total</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {orders.map((order) => (
            <tr key={order._id} className="bg-white group hover:bg-gray-50">
              <td className="px-6 py-4 text-gray-600">
                <NavLink
                  to={`/admin/orders/${order._id}`}
                  className="text-indigo-700 hover:underline hover:text-indigo-800"
                >
                  {' '}
                  # {order.orderNumber}
                </NavLink>
              </td>
              <td className="px-6 py-4  last:rounded-b-3xl">
                <div className="flex items-center gap-3 ">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">
                      {order.shippingAddress?.firstName}{' '}
                      {order.shippingAddress?.lastName}
                    </span>
                    <span className="text-xs text-gray-500">
                      {order.shippingAddress?.email}
                    </span>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 text-gray-900">Jun 24, 2026</td>

              <td className="px-6 py-4">{order.items.length} items</td>
              <td className="px-6 py-4">${order.totalPrice}</td>
              <td className="px-6 py-4">
                <div className="flex gap-3 text-gray-900  transition">
                  <OrderStatus
                    status={order.status}
                    onChange={(newStatus) => {
                      changeOrderStatus(order._id, newStatus)
                    }}
                  />
                </div>
              </td>
              <td className="px-6 py-4 relative">
                <button
                  className="text-gray-400 hover:text-gray-700 rounded-md focus:outline-2 focus:outline-indigo-500"
                  onClick={() =>
                    setOpenDropDown(
                      openDropdown === order._id ? null : order._id,
                    )
                  }
                >
                  <Ellipsis className="cursor-pointer" />
                </button>
                {openDropdown === order._id && (
                  <div className="absolute right-12 w-35 rounded-md border border-slate-200 bg-white shadow-lg z-10">
                    <NavLink
                      to={`/admin/orders/${order._id}`}
                      className="block px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      <div className="flex items-center gap-2">
                        {' '}
                        <Eye className="w-4 h-4" /> View Order
                      </div>
                    </NavLink>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminOrdersTable
