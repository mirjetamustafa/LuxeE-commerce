import CartItem from '../components/cart/CartItem'
import OrderSummary from '../components/cart/OrderSummary'
import { NavLink } from 'react-router-dom'
import { MoveLeft, ShoppingBag } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../redux/hooks'
import type { RootState } from '../redux/store'
import {
  updateQuantity,
  removeProductFromCart,
} from '../redux/slices/cartSlice'
import Button from '../components/ui/Button'
const Cart = () => {
  const dispatch = useAppDispatch()
  const cart = useSelector((state: RootState) => state.cart.cart)

  return (
    <div className="bg-[#F9F9F9]  pt-24 pb-20">
      <div className="max-w-6xl mx-9 md:mx-auto">
        {!cart || cart.items.length === 0 ? (
          <div className="text-center px-4 max-w-6xl mt-20">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-100 mb-6">
              <ShoppingBag className="w-8 h-8 text-gray-300" />
            </div>
            <h2 className="text-2xl font-playfair font-bold my-3">
              Your cart is empty
            </h2>

            <p className="mb-8 ">
              Looks like you haven't added anything to your cart yet. <br />{' '}
              Start shopping to fill it up!
            </p>
            <NavLink to="/shop">
              <Button>Continue Shopping</Button>
            </NavLink>
          </div>
        ) : (
          <>
            <h1 className="text-xl md:text-3xl font-bold font-playfair mb-8">
              Shopping Cart
            </h1>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full lg:w-2/3">
                <div className="bg-white shadow-sm p-4">
                  {cart?.items.map((item) => (
                    <CartItem
                      key={item.product._id}
                      image={`http://localhost:5000${item.product.image}`}
                      title={item.product.title}
                      category={item.product.category?.name}
                      price={item.product.price}
                      quantity={item.quantity}
                      onIncrease={() => {
                        dispatch(
                          updateQuantity({
                            productId: item.product._id,
                            quantity: item.quantity + 1,
                          }),
                        )
                      }}
                      onDecrease={() => {
                        if (item.quantity > 1) {
                          dispatch(
                            updateQuantity({
                              productId: item.product._id,
                              quantity: item.quantity - 1,
                            }),
                          )
                        }
                      }}
                      onRemove={() => {
                        dispatch(removeProductFromCart(item.product._id))
                      }}
                    />
                  ))}
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
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
