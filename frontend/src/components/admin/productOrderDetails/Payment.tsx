import { CreditCard } from 'lucide-react'

const Payment = () => {
  return (
    <div className="border border-slate-200 bg-white rounded-xl shadow-xs py-5 px-6 mt-6">
      <div className="flex items-center gap-2">
        <CreditCard className="w-5 h-5 text-indigo-700" />
        <div className="font-semibold">Payment</div>
      </div>
      <div className="text-sm text-slate-500 space-y-1 mt-3">
        <p className="font-medium">Visa ending in 4242</p>
        <p className="text-green-600 text-sm">Paid</p>
      </div>
    </div>
  )
}

export default Payment
