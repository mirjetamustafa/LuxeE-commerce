import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const useCartSammuray = () => {
  const { cart, discount } = useSelector((state: RootState) => state.cart)

  const subtotal =
    cart?.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    ) || 0

  const discountAmount = subtotal * discount
  const shipping = 0
  const tax = (subtotal - discountAmount) * 0.08
  const total = subtotal - discountAmount + shipping + tax

  return { subtotal, discount, discountAmount, shipping, tax, total }
}

export default useCartSammuray
