import { Link } from 'react-router-dom'
import limited from '../../assets/images/limited.jfif'
import Button from '../ui/Button'
const LimitedOffer = () => {
  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-stretch">
        <div className="bg-[#1a1a1a]">
          <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center h-full">
            <p className="font-bold text-amber tracking-widest mb-4 block text-sm text-[#D4A853] uppercase">
              limited time offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-200 font-playfair font-bold mb-6 leading-tight">
              The Summer <br /> Essentials Sale
            </h2>

            <p className="text-gray-300 mb-8 max-w-md">
              Upgrade your daily routine with our premium collection. Enjoy up
              to 30% off selected items, plus free shipping on all orders over
              $50.
            </p>
            <Link to="/shop">
              <Button variant="primary" size="medium">
                Shop The Sale
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-full">
          <img src={limited} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default LimitedOffer
