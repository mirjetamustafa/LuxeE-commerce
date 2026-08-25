import { useState } from 'react'
import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import ShippingForm from '../components/checkout/ShippingForm'
import PaymentMethod from '../components/checkout/PaymentMethod'
import ReviewOrder from '../components/checkout/ReviewOrder'
import OrderSummary from '../components/checkout/OrderSummary'

import { useOrder } from '../hooks/useOrder'
import useCart from '../hooks/useCart'
import useCartSummary from '../hooks/useCartSummary'

import type { PaymentMethodTypes } from '../api/order/order.types'
import { createCheckoutSession } from '../api/stripe/checkout'

const Checkout = () => {
  const { placeOrder } = useOrder()
  const { items } = useCart()
  const { total } = useCartSummary()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [shippingAddress, setShippingAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
  })

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodTypes | ''>(
    '',
  )

  // STEP 1: CASH ON DELIVERY
  const handlePlaceOrder = async () => {
    if (!paymentMethod) {
      toast.error('Please select a payment method')
      return
    }
    try {
      const orderData = {
        shippingAddress,
        paymentMethod,
        items,
        totalPrice: total,
      }

      const order = await placeOrder(orderData)

      navigate(`/orderConfirmed/${order._id}`)

      toast.success('Order successfully created')
    } catch (error) {
      console.error(error)

      toast.error('Unable to create order')
    }
  }

  // STEP 2: STRIPE CHECKOUT
  const handleCheckout = async () => {
    try {
      const response = await createCheckoutSession(shippingAddress)

      window.location.href = response.url
    } catch (error) {
      console.error(error)

      toast.error('Unable to start checkout')
    }
  }

  // Decide which payment action to execute
  const handlePayment = async () => {
    if (paymentMethod === 'Credit Card') {
      await handleCheckout()
      return
    }

    if (paymentMethod === 'Cash on Delivery') {
      await handlePlaceOrder()
      return
    }

    toast.error('Please select a payment method')
  }

  return (
    <div className="bg-[#F9F9F9] pt-24 pb-20">
      <div className="w-full md:max-w-6xl mx-9 md:mx-auto py-8">
        <h1 className="text-xl md:text-3xl font-bold font-playfair mb-8">
          Checkout
        </h1>

        {/* CHECKOUT STEPS */}
        <div className="flex justify-center items-center gap-2">
          {/* STEP 1 */}
          <div className="flex justify-center items-center gap-2">
            <div>
              <div
                className={`w-10 h-10 flex items-center justify-center font-medium rounded-full ${
                  step >= 1
                    ? 'bg-[#D4A853] text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {step > 1 ? <Check className="w-4 h-4" /> : <span>1</span>}
              </div>

              <span
                className={`text-xs font-medium ${
                  step >= 1 ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                Shipping
              </span>
            </div>

            <div
              className={`w-20 h-0.5 flex mb-5 ${
                step >= 2 ? 'bg-[#D4A853]' : 'bg-gray-200'
              }`}
            />
          </div>

          {/* STEP 2 */}
          <div className="flex justify-center items-center gap-2">
            <div>
              <div
                className={`w-10 h-10 flex items-center justify-center font-medium rounded-full ${
                  step >= 2
                    ? 'bg-[#D4A853] text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                {step > 2 ? <Check className="w-4 h-4" /> : <span>2</span>}
              </div>

              <span
                className={`text-xs font-medium ${
                  step >= 2 ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                Payment
              </span>
            </div>

            <div
              className={`w-20 h-0.5 flex mb-5 ${
                step >= 3 ? 'bg-[#D4A853]' : 'bg-gray-200'
              }`}
            />
          </div>

          {/* STEP 3 */}
          <div className="flex justify-center items-center gap-2">
            <div>
              <div
                className={`w-10 h-10 flex items-center justify-center font-medium rounded-full ${
                  step >= 3
                    ? 'bg-[#D4A853] text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
              >
                <span>3</span>
              </div>

              <span
                className={`text-xs font-medium ${
                  step >= 3 ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                Review
              </span>
            </div>
          </div>
        </div>

        {/* CHECKOUT CONTENT */}
        <div className="flex flex-col md:flex-row gap-9">
          {/* LEFT SIDE */}
          <div className="flex-1 bg-white my-5">
            {/* SHIPPING */}
            {step === 1 && (
              <ShippingForm
                setStep={setStep}
                shippingAddress={shippingAddress}
                setShippingAddress={setShippingAddress}
              />
            )}

            {/* PAYMENT */}
            {step === 2 && (
              <PaymentMethod
                setStep={setStep}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
              />
            )}

            {/* REVIEW */}
            {step === 3 && (
              <ReviewOrder
                setStep={setStep}
                shippingAddress={shippingAddress}
                paymentMethod={paymentMethod}
                items={items}
                totalPrice={total}
                handlePayment={handlePayment}
              />
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-[350px] my-0 md:my-5">
            <div className="sticky top-24 bg-white">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
