import { useState } from 'react'
import ShippingForm from '../components/checkout/ShippingForm'
import { Check } from 'lucide-react'
import PaymentMethod from '../components/checkout/PaymentMethod'
import ReviewOrder from '../components/checkout/ReviewOrder'
import OrderSummary from '../components/checkout/OrderSummary'
import { useOrder } from '../hooks/useOrder'
import useCart from '../hooks/useCart'
import useCartSummary from '../hooks/useCartSummary'
import { toast } from 'react-toastify'
import type { PaymentMethodTypes } from '../api/order/order.types'
import { useNavigate } from 'react-router-dom'

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
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodTypes>('')
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
  })

  const handlePlaceOrder = async () => {
    const orderData = {
      shippingAddress,
      paymentMethod,
      items,
      totalPrice: total,
    }

    const order = await placeOrder(orderData)
    navigate(`/orderConfirmed/${order._id}`)
    toast.success('Order successfuly created')
  }

  return (
    <div className="bg-[#F9F9F9]  pt-24 pb-20">
      <div className="w-ful md:max-w-6xl mx-9 md:mx-auto py-8">
        <h1 className="text-xl md:text-3xl font-bold font-playfair mb-8">
          Checkout
        </h1>

        <div className="flex justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-2">
            <div className="">
              <div
                className={`w-10 h-10 flex items-center justify-center font-medium rounded-full ${step >= 1 ? 'bg-[#D4A853] text-white' : 'bg-gray-200 text-gray-400'}`}
              >
                {step > 1 ? <Check className="w-4 h-4" /> : <span>1</span>}
              </div>
              <span
                className={`text-xs font-medium ${step >= 1 ? 'text-gray-900' : 'text-gray-400'}`}
              >
                Shipping
              </span>
            </div>
            <div
              className={`w-20 h-0.5 flex mb-5 ${step >= 2 ? 'bg-[#D4A853]' : 'bg-gray-200'}`}
            ></div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="">
              <div
                className={`w-10 h-10 flex items-center justify-center font-medium rounded-full ${step >= 2 ? 'bg-[#D4A853] text-white' : 'bg-gray-200 text-gray-400'}`}
              >
                {step > 2 ? <Check className="w-4 h-4" /> : <span>2</span>}
              </div>
              <span
                className={`text-xs font-medium ${step >= 2 ? 'text-gray-900' : 'text-gray-400'}`}
              >
                Payment
              </span>
            </div>
            <div
              className={`w-20 h-0.5 flex mb-5 ${step >= 3 ? 'bg-[#D4A853]' : 'bg-gray-200'}`}
            ></div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div className="">
              <div
                className={`w-10 h-10 flex items-center justify-center font-medium rounded-full ${step >= 3 ? 'bg-[#D4A853] text-white' : 'bg-gray-200 text-gray-400'}`}
              >
                3
              </div>
              <span
                className={`text-xs font-medium ${step >= 3 ? 'text-gray-900' : 'text-gray-400'}`}
              >
                Review
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-9">
          <div className="flex-1 bg-white my-5">
            {step === 1 && (
              <ShippingForm
                setStep={setStep}
                shippingAddress={shippingAddress}
                setShippingAddress={setShippingAddress}
              />
            )}
            {step === 2 && (
              <PaymentMethod
                setStep={setStep}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                paymentDetails={paymentDetails}
                setPaymentDetails={setPaymentDetails}
              />
            )}
            {step === 3 && (
              <ReviewOrder
                setStep={setStep}
                shippingAddress={shippingAddress}
                paymentMethod={paymentMethod}
                items={items}
                totalPrice={total}
                handlePlaceOrder={handlePlaceOrder}
              />
            )}
          </div>
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
