import { CreditCard, Lock } from 'lucide-react'

import Input from '../ui/Input'
import Button from '../ui/Button'
import type { PaymentMethodTypes } from '../../api/order/order.types'

interface PaymentMethodProps {
  setStep: (step: number) => void
  paymentMethod: PaymentMethodTypes
  setPaymentMethod: (method: PaymentMethodTypes) => void
  paymentDetails: {
    cardNumber: string
    cardholderName: string
    expiryDate: string
    cvv: string
  }
  setPaymentDetails: (data: {
    cardNumber: string
    cardholderName: string
    expiryDate: string
    cvv: string
  }) => void
}

const PaymentMethod = ({
  setStep,
  paymentMethod,
  setPaymentMethod,
  paymentDetails,
  setPaymentDetails,
}: PaymentMethodProps) => {
  // const [payment, setPayment] = useState<PaymentMethodType>('credit-card')

  const buttonClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold w-full border-2 transition-colors cursor-pointer focus:outline-none'
  return (
    <div className="p-9">
      <h2 className="text-lg md:text-xl font-bold font-playfair mb-8">
        Payment Method
      </h2>
      <div className="flex justify-center gap-4">
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
          Credit Card
        </button>
        <button
          type="button"
          onClick={() => setPaymentMethod('Cash on Delivery')}
          className={`${buttonClasses} ${
            paymentMethod === 'Cash on Delivery'
              ? 'bg-[#D4A853]/10 border-[#D4A853]'
              : 'bg-white border-gray-200'
          }`}
        >
          Cash on Delivery
        </button>
      </div>

      {paymentMethod === 'Credit Card' ? (
        <div className="mt-9">
          <form className="space-y-5">
            <Input
              name="cardNumber"
              label="Card Number *"
              placeholder="1234 5678 9012 3456"
              variant="login"
              inputSize="lg"
              value={paymentDetails.cardNumber}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  cardNumber: e.target.value,
                })
              }
            />

            <Input
              name="cardholderName"
              label="Cardhoder Name *"
              placeholder=""
              variant="login"
              inputSize="lg"
              value={paymentDetails.cardholderName}
              onChange={(e) =>
                setPaymentDetails({
                  ...paymentDetails,
                  cardholderName: e.target.value,
                })
              }
            />

            <div className="flex flex-col md:flex-row gap-4">
              <Input
                name="expiryDate"
                label="Expiry Date *"
                placeholder="MM/YY"
                variant="login"
                inputSize="lg"
                value={paymentDetails.expiryDate}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    expiryDate: e.target.value,
                  })
                }
              />
              <Input
                name="cvv"
                label="CVV *"
                placeholder="123"
                variant="login"
                inputSize="lg"
                value={paymentDetails.cvv}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    cvv: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex items-center text-gray-600 pt-5 gap-2">
              <Lock className="w-4 h-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
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
          </form>
        </div>
      ) : (
        <div>
          <p className="text-gray-800 py-9">
            You will pay when your order is delivered.
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <Button
              variant="secondary"
              size="large"
              fullWidth
              onClick={() => setStep(1)}
            >
              Back
            </Button>
            <Button
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
