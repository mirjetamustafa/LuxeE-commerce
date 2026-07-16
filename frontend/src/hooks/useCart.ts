import { useSelector } from 'react-redux'
import type { RootState } from '../redux/store'

const useCart = () => {
  const { cart } = useSelector((state: RootState) => state.cart)

  const items =
    cart?.items.map((item) => ({
      product: item.product._id,
      name: item.product.title,
      quantity: item.quantity,
      price: item.product.price,
    })) || []

  return {
    items,
  }
}

export default useCart
