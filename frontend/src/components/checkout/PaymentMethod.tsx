import { CreditCard, Lock } from 'lucide-react'

import Button from '../ui/Button'
import type { PaymentMethodTypes } from '../../api/order/order.types'

interface PaymentMethodProps {
  setStep: (step: number) => void
  paymentMethod: PaymentMethodTypes | ''
  setPaymentMethod: (method: PaymentMethodTypes) => void
}

const PaymentMethod = ({
  setStep,
  paymentMethod,
  setPaymentMethod,
}: PaymentMethodProps) => {
  const buttonClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold w-full border-2 transition-colors cursor-pointer focus:outline-none'

  return (
    <div className="p-9">
      <h2 className="text-lg md:text-xl font-bold font-playfair mb-8">
        Payment Method
      </h2>

      {/* PAYMENT OPTIONS */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {/* CREDIT CARD */}
        <button
          type="button"
          onClick={() => setPaymentMethod('Credit Card')}
          className={`${buttonClasses} ${
            paymentMethod === 'Credit Card'
              ? 'bg-[#D4A853]/10 border-[#D4A853]'
              : 'bg-white border-gray-200'
          }`}
        >
          <CreditCard className="w-5 h-5" />

          <span>Credit Card</span>
        </button>

        {/* CASH ON DELIVERY */}
        <button
          type="button"
          onClick={() => setPaymentMethod('Cash on Delivery')}
          className={`${buttonClasses} ${
            paymentMethod === 'Cash on Delivery'
              ? 'bg-[#D4A853]/10 border-[#D4A853]'
              : 'bg-white border-gray-200'
          }`}
        >
          <span>Cash on Delivery</span>
        </button>
      </div>

      {/* CREDIT CARD */}
      {paymentMethod === 'Credit Card' && (
        <div className="mt-9">
          <div className="border border-gray-200 p-5">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-[#D4A853]/10 rounded-full">
                <CreditCard className="w-5 h-5 text-[#D4A853]" />
              </div>

              <div>
                <h3 className="font-medium">Pay securely with Stripe</h3>

                <p className="text-sm text-gray-500 mt-1">
                  You will enter your card details securely on Stripe.
                </p>
              </div>
            </div>
          </div>

          {/* SECURITY MESSAGE */}
          <div className="flex items-center text-gray-600 pt-5 gap-2">
            <Lock className="w-4 h-4" />

            <span className="text-sm">
              Your payment information is secure and encrypted
            </span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 mt-7">
            <Button
              type="button"
              variant="secondary"
              size="large"
              fullWidth
              onClick={() => setStep(1)}
            >
              Back
            </Button>

            <Button
              type="button"
              variant="primary"
              size="large"
              fullWidth
              onClick={() => setStep(3)}
            >
              Review Order
            </Button>
          </div>
        </div>
      )}

      {/* CASH ON DELIVERY */}
      {paymentMethod === 'Cash on Delivery' && (
        <div className="mt-9">
          <div className="border border-gray-200 p-5">
            <h3 className="font-medium">Cash on Delivery</h3>

            <p className="text-sm text-gray-500 mt-2">
              You will pay when your order is delivered.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 mt-7">
            <Button
              type="button"
              variant="secondary"
              size="large"
              fullWidth
              onClick={() => setStep(1)}
            >
              Back
            </Button>

            <Button
              type="button"
              variant="primary"
              size="large"
              fullWidth
              onClick={() => setStep(3)}
            >
              Review Order
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentMethod
