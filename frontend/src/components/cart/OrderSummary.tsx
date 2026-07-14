import { useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import { setDiscount } from '../../redux/slices/cartSlice'
import Button from '../ui/Button'
import Input from '../ui/Input'
import { useAppDispatch } from '../../redux/hooks'
import { useState } from 'react'
import useCartSammuray from '../../hooks/useCartSammuray'
import { NavLink } from 'react-router-dom'

const OrderSummary = () => {
  const { subtotal, discountAmount, tax, total } = useCartSammuray()

  const [message, setMessage] = useState('')

  const dispatch = useAppDispatch()
  const { discountCode, discount } = useSelector(
    (state: RootState) => state.cart,
  )

  const handleApplyDiscount = () => {
    const code = discountCode.toLocaleUpperCase()

    if (code === 'WELCOME10') {
      dispatch(
        setDiscount({
          code,
          discount: 0.1,
        }),
      )
      setMessage(`Code ${discountCode} applied`)
    } else if (code === 'LUXE20') {
      dispatch(
        setDiscount({
          code,
          discount: 0.2,
        }),
      )
      setMessage(`Code ${discountCode} applied`)
    } else {
      dispatch(
        setDiscount({
          code: '',
          discount: 0,
        }),
      )
      setMessage('Invalid discount code')
    }
  }

  return (
    <div className="p-6">
      <h2 className="text-lg md:text-xl font-bold font-playfair mb-4">
        Order Sammuray
      </h2>
      <div className="flex items-center gap-4 border-b border-gray-200 pb-5">
        <div className="">
          <Input
            label="Discount Code"
            placeholder="Enter code"
            variant="login"
            inputSize="sm"
            value={discountCode}
            onChange={(e) =>
              dispatch(
                setDiscount({
                  code: e.target.value,
                  discount,
                }),
              )
            }
          />
          <div className="flex flex-col">
            {discount > 0 && (
              <span className="text-xs text-green-600 mt-1"> {message} </span>
            )}

            <span className="text-xs text-gray-600 mt-1">
              Try: WELCOME10 or LUXE20
            </span>
          </div>
        </div>
        <div className="">
          <Button variant="default" size="small" onClick={handleApplyDiscount}>
            Apply
          </Button>
        </div>
      </div>

      <div className="border-b border-gray-200 pt-3 pb-6">
        <div className="flex justify-between pt-4">
          <p className="text-sm">Subtotal</p>
          <p className="text-sm font-medium">${subtotal.toFixed(2)}</p>
        </div>
        {discount > 0 && (
          <div className="flex justify-between pt-4 font-medium text-green-600">
            <p className="text-sm">Discount ({discountCode})</p>
            <p className="text-sm font-medium ">
              -${discountAmount.toFixed(2)}
            </p>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <p className="text-sm">Shipping</p>
          <p className="text-sm font-medium uppercase text-green-600">free</p>
        </div>

        <div className="flex justify-between pt-4">
          <p className="text-sm">Estimated Tax</p>
          <p className="text-sm font-medium">${tax.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold font-playfair">Total</p>
        <p className="text-xl font-bold font-playfair">${total.toFixed(2)}</p>
      </div>
      <NavLink to="/checkout">
        <Button variant="primary" size="large" fullWidth>
          Proceed to Checkout
        </Button>
      </NavLink>
      <p className="text-xs text-gray-600 text-center mt-4">
        Secure checkout powered by industry-leading encryption
      </p>
    </div>
  )
}

export default OrderSummary
