import { Clock, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'

const ServiceFeatures = () => {
  return (
    <div className="bg-gray-100  border-gray-200 mb-5 px-9 bg-offwhite py-12 border-b">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8">
        <div className="flex flex-col items-center">
          <Truck className="w-8 h-8 mb-2 text-[#D4A853]" />
          <h3 className="font-playfair font-semibold mb-1">Free Shipping</h3>
          <p className="text-sm text-gray-900">On orders over $50</p>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck className="w-8 h-8 mb-2 text-[#D4A853]" />
          <h3 className="font-playfair font-semibold mb-1">Secure Payment</h3>
          <p className="text-sm text-gray-900">100% protected</p>
        </div>
        <div className="flex flex-col items-center">
          <RefreshCcw className="w-8 h-8 mb-2 text-[#D4A853]" />
          <h3 className="font-playfair font-semibold mb-1">Easy Returns</h3>
          <p className="text-sm text-gray-900">30-day return policy</p>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="w-8 h-8 mb-2 text-[#D4A853]" />
          <h3 className="font-playfair font-semibold mb-1">24/7 Support</h3>
          <p className="text-sm text-gray-900">Always here for you</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceFeatures
