import { Search } from 'lucide-react'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import AdminOrdersTable from '../../components/admin/AdminOrdersTable'
import { useAdminOrders } from '../../hooks/useAdminOrders'
import { useState } from 'react'

const Orders = () => {
  const { orders, changeOrderStatus } = useAdminOrders()
  const [statusFilter, setStatusFilter] = useState('allStatuses')
  const [search, setSearch] = useState('')
  const [dataFilter, setDataFilter] = useState('allTime')

  const openOrders = orders.filter(
    (order) => order.status === 'Pending' || order.status === 'Processing',
  ).length

  const inTransit = orders.filter((order) => order.status === 'Shipped').length

  const completed = orders.filter(
    (order) => order.status === 'Delivered',
  ).length

  const filteredOrders = orders.filter((order) => {
    const searchValue = search.toLocaleLowerCase().trim()
    const matchesSearch =
      order.orderNumber.toLocaleLowerCase().includes(searchValue) ||
      order.shippingAddress.firstName
        .toLocaleLowerCase()
        .includes(searchValue) ||
      order.shippingAddress.lastName
        .toLocaleLowerCase()
        .includes(searchValue) ||
      order.shippingAddress.email.toLocaleLowerCase().includes(searchValue)

    const matchesStatus =
      statusFilter === 'allStatuses' ||
      order.status.toLocaleLowerCase() === statusFilter

    const orderDate = new Date(order.createdAt)
    const now = new Date()

    let matchesDate = true

    if (dataFilter === 'last-30-days') {
      const thirtyDaysAgo = new Date()
      thirtyDaysAgo.setDate(now.getDate() - 30)

      matchesDate = orderDate >= thirtyDaysAgo
    }

    if (dataFilter === 'thisMonth') {
      matchesDate =
        orderDate.getMonth() === now.getMonth() &&
        orderDate.getFullYear() === now.getFullYear()
    }
    return matchesSearch && matchesStatus && matchesDate
  })

  return (
    <div className="mt-5">
      <div className="mb-9">
        <div>
          <h3 className="text-2xl font-bold ">Orders</h3>
          <p className="text-gray-500 mt-1">
            Track, fulfill, and manage every customer order.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border border-slate-200 bg-white rounded-xl shadow-xs p-5">
          <p className="text-sm font-medium  text-slate-500">Open orders</p>
          <p className="text-2xl mt-2 font-bold  text-slate-900">
            {openOrders}
          </p>
          <p className="text-xs mt-1  text-slate-500">Pending and processing</p>
        </div>
        <div className="border border-amber-200 bg-amber-50 rounded-xl shadow-xs p-5">
          <p className="text-sm font-medium  text-slate-500">In transit</p>
          <p className="text-2xl mt-2 font-bold  text-slate-900">{inTransit}</p>
          <p className="text-xs mt-1  text-slate-500">
            Shipped, awaiting delivery
          </p>
        </div>
        <div className="border border-emerald-200 bg-emerald-50 rounded-xl shadow-xs p-5">
          <p className="text-sm font-medium  text-slate-500">Completed</p>
          <p className="text-2xl mt-2 font-bold  text-slate-900">{completed}</p>
          <p className="text-xs mt-1  text-slate-500">Delivered to customers</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 p-2 mt-15 rounded-xl">
        <div className="flex justify-between gap-2 bg-white rounded-xl p-5">
          <div className="w-150 mt-1">
            <Input
              variant="addProducts"
              inputSize="sm"
              placeholder="Search order, customer, or email..."
              leftIcon={<Search size={18} />}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 ">
            <Select
              label=""
              name=""
              value={dataFilter}
              options={[
                { value: 'last-30-days', label: 'Last 30 days' },
                { value: 'last-7-days', label: 'Last 7 days' },
                { value: 'thisMonth', label: 'This Month' },
                { value: 'allTime', label: 'All time' },
              ]}
              onChange={(value) => setDataFilter(value)}
            />

            <Select
              label=""
              name=""
              value={statusFilter}
              options={[
                { value: 'allStatuses', label: 'All statuses' },
                { value: 'pending', label: 'Pending' },
                { value: 'processing', label: 'Processing' },
                { value: 'shipped', label: 'Shipped' },
                { value: 'delivered', label: 'Delivered' },
                { value: 'cancelled', label: 'Cancelled' },
              ]}
              onChange={(value) => setStatusFilter(value)}
            />
          </div>
        </div>
        <AdminOrdersTable
          orders={filteredOrders}
          changeOrderStatus={changeOrderStatus}
        />
      </div>
    </div>
  )
}

export default Orders
