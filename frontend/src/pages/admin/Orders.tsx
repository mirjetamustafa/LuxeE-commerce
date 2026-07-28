import { Search } from 'lucide-react'
import Input from '../../components/ui/Input'
import Select from '../../components/ui/Select'
import AdminOrdersTable from '../../components/admin/AdminOrdersTable'

const Orders = () => {
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
          <p className="text-2xl mt-2 font-bold  text-slate-900">4</p>
          <p className="text-xs mt-1  text-slate-500">Pending and processing</p>
        </div>
        <div className="border border-amber-200 bg-amber-50 rounded-xl shadow-xs p-5">
          <p className="text-sm font-medium  text-slate-500">In transit</p>
          <p className="text-2xl mt-2 font-bold  text-slate-900">2</p>
          <p className="text-xs mt-1  text-slate-500">
            Shipped, awaiting delivery
          </p>
        </div>
        <div className="border border-emerald-200 bg-emerald-50 rounded-xl shadow-xs p-5">
          <p className="text-sm font-medium  text-slate-500">Completed</p>
          <p className="text-2xl mt-2 font-bold  text-slate-900">3</p>
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
            />
          </div>
          <div className="flex gap-2 ">
            <Select
              label=""
              name=""
              value=""
              options={[
                { value: 'last-30-days', label: 'Last 30 days' },
                { value: 'last-7-days', label: 'Last 7 days' },
                { value: 'thisMonth', label: 'This Month' },
                { value: 'allTime', label: 'All time' },
              ]}
              onChange={(value) => console.log(value)}
            />

            <Select
              label=""
              name=""
              value=""
              options={[
                { value: 'allStatuses', label: 'All statuses' },
                { value: 'pending', label: 'Pending' },
                { value: 'processing', label: 'Processing' },

                { value: 'shipped', label: 'Shipped' },
                { value: 'delivered', label: 'Delivered' },
                { value: 'cancelled', label: 'Cancelled' },
              ]}
              onChange={(value) => console.log(value)}
            />
          </div>
        </div>
        <AdminOrdersTable />
      </div>
    </div>
  )
}

export default Orders
