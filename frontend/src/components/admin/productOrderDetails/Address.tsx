import { MapPin } from 'lucide-react'

const Address = () => {
  return (
    <div className="border border-slate-200 bg-white rounded-xl shadow-xs py-5 px-6 mt-6">
      <div className="flex items-center gap-2">
        <MapPin className="w-5 h-5 text-indigo-700" />
        <div className="font-semibold">Shipping Address</div>
      </div>
      <div className="text-sm text-slate-500 space-y-1 mt-3">
        <p className="">Maya Thompson</p>
        <p className="">142 Willoughby Street</p>
        <p className="">Brooklyn, NY 11201</p>
        <p className="">United States</p>
      </div>
    </div>
  )
}

export default Address
