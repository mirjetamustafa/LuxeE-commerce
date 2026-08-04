import { ArrowLeft, CircleCheck, Copy, Truck } from 'lucide-react'
import { NavLink, useParams } from 'react-router-dom'
import Select from '../../components/ui/Select'
import ProductCard from '../../components/admin/productOrderDetails/ProductCard'
import Customer from '../../components/admin/productOrderDetails/Customer'
import Address from '../../components/admin/productOrderDetails/Address'
import Payment from '../../components/admin/productOrderDetails/Payment'
import useOrderDetails from '../../hooks/useOrderDetails'
import { useAdminOrders } from '../../hooks/useAdminOrders'

const statusStyles = {
  Pending: 'bg-yellow-100 text-yellow-700',
  Processing: 'bg-blue-100 text-blue-700',
  Shipped: 'bg-indigo-100 text-indigo-700',
  Delivered: 'bg-green-100 text-green-700',
  Cancelled: 'bg-red-100 text-red-700',
}

const ProductOrderDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { order, loading, refreshOrder } = useOrderDetails(id!)
  const { changeOrderStatus } = useAdminOrders()

  if (loading) {
    return <div>Loading...</div>
  }

  if (!order) {
    return <div>Order not found</div>
  }

  const handleStatusChange = async (newStatus: typeof order.status) => {
    await changeOrderStatus(order._id, newStatus)
    await refreshOrder()
  }

  return (
    <div>
      <h3 className="text-2xl font-bold">Product Order Details</h3>
      <div className="mt-10 text-sm font-medium text-slate-500 hover:text-indigo-500">
        <NavLink to="/admin/orders" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          All Orders
        </NavLink>
      </div>

      <div className="flex items-center gap-4 mt-5">
        <h4 className="text-xl font-bold">Order #{order.orderNumber}</h4>
        <p
          className={`
          flex items-center gap-2 px-4 py-0.5 rounded-full text-xs font-medium
          ${statusStyles[order.status]}
        `}
        >
          {order.status}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-xs text-slate-500 font-medium">Change status</p>
          <Select
            label=""
            name="status"
            value={order.status}
            options={[
              { label: 'Pending', value: 'Pending' },
              { label: 'Processing', value: 'Processing' },
              { label: 'Shipped', value: 'Shipped' },
              { label: 'Delivered', value: 'Delivered' },
              { label: 'Cancelled', value: 'Cancelled' },
            ]}
            onChange={(value) =>
              handleStatusChange(value as typeof order.status)
            }
          />
        </div>
      </div>
      <p className="text-sm text-slate-500">
        {order.createdAt} · {order.items.length} items · {order.status}
      </p>

      <div className="border-t border-slate-200 mt-5"></div>

      <div className="flex flex-col md:flex-row gap-4 mt-5">
        <div className="flex-1">
          <ProductCard order={order} />
          <div className="border border-slate-200 bg-white rounded-xl shadow-xs py-5 mt-9 px-6">
            <div className="flex items-center gap-2">
              <div className="text-indigo-700">
                <Truck className="w-5 h-5" />
              </div>
              <div className="text-sm font-semibold">Fulfillment</div>
            </div>

            <div className="flex gap-3 mt-4">
              <div className="">
                <div className="text-green-700 bg-green-100 rounded-full p-1 mt-0.5">
                  <CircleCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="">
                <h6 className="font-semibold">{order.status} order</h6>
                <p className="text-slate-500 text-sm">
                  Delivered to the customer
                </p>
                {order.trackingNumber && (
                  <div className="flex gap-1 text-indigo-600 hover:text-indigo-700 cursor-pointer mt-3">
                    <Copy className="w-4 h-4" />
                    <p className="text-sm font-medium">
                      {order.trackingNumber}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-100">
          <Customer order={order} />
          <Address order={order} />
          <Payment order={order} />
        </div>
      </div>
    </div>
  )
}

export default ProductOrderDetails
