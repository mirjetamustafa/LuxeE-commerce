import { NavLink } from 'react-router-dom'

const OrderHistory = () => {
  return (
    <div className="bg-white p-6 shadow-xs my-20 space-y-6">
      <h2 className="text-xl md:text-2xl font-bold font-playfair mb-4">
        Order History
      </h2>

      <div className="border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">
              Order{' '}
              <span className="font-medium text-gray-600">LUXE-8F92A1</span>
            </p>
            <p className="text-xs text-gray-400">Placed on Oct 12, 2025</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center text-xs px-3 py-1 font-medium rounded-full bg-green-100 text-green-700">
              Delivered
            </span>
            <span className="font-medium">$124.99</span>
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-3 mt-4">
          <p className="text-sm">2 item(s)</p>
          <NavLink
            to="/order-details/LUXE-8F92A1"
            className="text-sm font-medium text-[#D4A853] hover:text-[#C09A4A]"
          >
            View Details
          </NavLink>
        </div>
      </div>

      <div className="border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-600">
              Order{' '}
              <span className="font-medium text-gray-600">LUXE-3B47C9</span>
            </p>
            <p className="text-xs text-gray-400">Placed on Sep 05, 2025</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center text-xs px-3 py-1 font-medium rounded-full bg-[#D4A853]/10 text-[#C09A4A]">
              Processing
            </span>
            <span className="font-medium">$349.00</span>
          </div>
        </div>
        <div className="flex justify-between border-t border-gray-200 pt-3 mt-4">
          <p className="text-sm">1 item(s)</p>
          <NavLink
            to="/order-details/LUXE-3B47C9"
            className="text-sm font-medium text-[#D4A853] hover:text-[#C09A4A]"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory
