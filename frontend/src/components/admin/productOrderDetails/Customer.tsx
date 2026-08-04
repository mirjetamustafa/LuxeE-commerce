import { User } from 'lucide-react'

const Customer = () => {
  return (
    <div className="border border-slate-200 bg-white rounded-xl shadow-xs py-5 px-6">
      <div className="flex items-center gap-2">
        <User className="w-5 h-5 text-indigo-700" />
        <div className="font-semibold">Customer</div>
      </div>
      <p className="font-semibold mt-5">Maya Thompson</p>
      <p className="text-sm text-indigo-700 mt-1">maya.thompson@example.com</p>

      <div className="text-sm text-slate-500 mt-4">Customer since May 2025</div>
    </div>
  )
}

export default Customer
