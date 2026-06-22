import {
  ArrowDownRight,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  ShoppingBag,
  TriangleAlert,
} from 'lucide-react'
import AdminCard from '../../components/admin/AdminCard'
import RevenueChart from '../../components/ui/charts/RevenueChart'
import OrdersChart from '../../components/ui/charts/OrdersChart'

const Dashboard = () => {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold font-playfair">Admin Dashboard</h1>
      <p className="text-gray-500 mt-1">
        Overview of your store's performance today.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        <AdminCard
          title="Total Revenue"
          icon={<DollarSign size={18} />}
          price={24592.5}
          icon1={<ArrowUpRight size={15} />}
          percent={12.5}
          iconClassName="bg-indigo-50 text-indigo-500"
        />
        <AdminCard
          title="Total Orders"
          icon={<ShoppingBag size={18} />}
          orders={342}
          icon1={<ArrowUpRight size={15} />}
          percent={5.2}
          iconClassName="bg-indigo-50 text-indigo-500"
        />
        <AdminCard
          title="Avg. Order Value"
          icon={<CreditCard size={18} />}
          price={71.9}
          icon1={<ArrowDownRight size={15} />}
          percent={12.5}
          iconClassName="bg-indigo-50 text-indigo-500"
          icon1ClassName="text-red-600"
        />
        <AdminCard
          title="Low Stock Alerts"
          icon={<TriangleAlert size={18} />}
          lowStock={4}
          iconClassName="bg-red-50 text-red-600"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-9">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <OrdersChart />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
