import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const ordersData = [
  { day: 'Mon', orders: 45 },
  { day: 'Tue', orders: 30 },
  { day: 'Wed', orders: 120 },
  { day: 'Thu', orders: 60 },
  { day: 'Fri', orders: 75 },
  { day: 'Sat', orders: 55 },
  { day: 'Sun', orders: 65 },
]

export default function OrdersChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs">
      <h2 className="mb-6 text-xl font-semibold">Orders by Day</h2>

      <div className="h-[300px] text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={ordersData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />

            <XAxis dataKey="day" tickLine={false} axisLine={false} />

            <YAxis tickLine={false} axisLine={false} />

            <Tooltip />

            <Bar dataKey="orders" fill="#10b981" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
