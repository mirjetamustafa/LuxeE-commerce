import { NavLink } from 'react-router-dom'
import { useOrder } from '../../hooks/useOrder'

const OrderHistory = () => {
  const { getOrders } = useOrder()
  return (
    <div className="bg-white p-6 shadow-xs my-20 space-y-6">
      <h2 className="text-xl md:text-2xl font-bold font-playfair mb-4">
        Order History
      </h2>
      {getOrders.map((order) => (
        <div key={order._id} className="border border-gray-200 p-6">
          <>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  Order{' '}
                  <span className="font-medium text-gray-600">
                    {order.orderNumber}
                  </span>
                </p>
                <p className="text-xs text-gray-400">
                  Placed on Oct {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`flex items-center text-xs px-3 py-1 font-medium rounded-full ${
                    order.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : order.status === 'Delivered'
                        ? 'bg-green-100 text-green-700'
                        : order.status === 'Cancelled'
                          ? 'bg-red-100 text-red-700'
                          : order.status === 'Processing'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {order.status}
                </span>
                <span className="font-medium">
                  ${order.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex justify-between border-t border-gray-200 pt-3 mt-4">
              <p className="text-sm">{order.items.length} Items(s)</p>
              <NavLink
                to="/order-details/LUXE-8F92A1"
                className="text-sm font-medium text-[#D4A853] hover:text-[#C09A4A]"
              >
                View Details
              </NavLink>
            </div>
          </>
        </div>
      ))}
    </div>
  )
}

export default OrderHistory
