import CartItem from '../components/cart/CartItem'
import product1 from '../assets/products/product10.jfif'
import product2 from '../assets/products/product2.jfif'
import OrderSummary from '../components/cart/OrderSummary'
import { NavLink } from 'react-router-dom'
import { MoveLeft } from 'lucide-react'
const Cart = () => {
  return (
    <div className="bg-[#F9F9F9]  pt-24 pb-20">
      <div className="max-w-6xl mx-9 md:mx-auto">
        <h1 className="text-xl md:text-3xl font-bold font-playfair mb-8">
          Shopping Cart
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="bg-white shadow-sm p-4">
              <CartItem
                image={product1}
                title="Hydrating Facial Serum"
                category="Health & Beauty"
                price={48.0}
                quantity={1}
                onIncrease={() => console.log('Increase')}
                onDecrease={() => console.log('Decrease')}
                onRemove={() => console.log('Remove')}
              />
              <CartItem
                image={product2}
                title="Hydrating Facial Serum"
                category="Health & Beauty"
                price={48}
                quantity={1}
                onIncrease={() => console.log('Increase')}
                onDecrease={() => console.log('Decrease')}
                onRemove={() => console.log('Remove')}
              />
              <CartItem
                image={product1}
                title="Hydrating Facial Serum"
                category="Health & Beauty"
                price={48}
                quantity={1}
                onIncrease={() => console.log('Increase')}
                onDecrease={() => console.log('Decrease')}
                onRemove={() => console.log('Remove')}
              />
            </div>
            <NavLink
              to="/shop"
              className="flex items-center gap-1 mt-5 font-semibold text-gray-900 hover:text-[#D4A853]"
            >
              <MoveLeft className="w-4 h-4 mt-0.5" />
              Continue Shopping
            </NavLink>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white shadow-sm">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
