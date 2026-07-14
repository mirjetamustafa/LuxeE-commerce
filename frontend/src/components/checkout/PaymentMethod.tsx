import { CreditCard, Lock } from 'lucide-react'
import { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'

type PaymentMethod = 'credit-card' | 'paypal'

interface PaymentMethodProps {
  setStep: (step: number) => void
}

const PaymentMethod = ({ setStep }: PaymentMethodProps) => {
  const [payment, setPayment] = useState<PaymentMethod>('credit-card')

  const buttonClasses =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold w-full border-2 transition-colors cursor-pointer focus:outline-none'
  return (
    <div className="p-9">
      <h2 className="text-lg md:text-xl font-bold font-playfair mb-8">
        Payment Method
      </h2>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setPayment('credit-card')}
          className={`${buttonClasses} ${
            payment === 'credit-card'
              ? 'bg-[#D4A853]/10 border-[#D4A853]'
              : 'bg-white border-gray-200'
          }`}
        >
          <CreditCard className="w-5 h-5" />
          Credit Card
        </button>
        <button
          onClick={() => setPayment('paypal')}
          className={`${buttonClasses} ${
            payment === 'paypal'
              ? 'bg-[#D4A853]/10 border-[#D4A853]'
              : 'bg-white border-gray-200'
          }`}
        >
          PayPal
        </button>
      </div>

      {payment === 'credit-card' ? (
        <div className="mt-9">
          <form className="space-y-5">
            <Input
              name="cardNumber"
              label="Card Number *"
              placeholder="1234 5678 9012 3456"
              variant="login"
              inputSize="lg"
            />

            <Input
              name="cardholderName"
              label="Cardhoder Name *"
              placeholder=""
              variant="login"
              inputSize="lg"
            />

            <div className="flex flex-col md:flex-row gap-4">
              <Input
                name="expiryDate"
                label="Expiry Date *"
                placeholder="MM/YY"
                variant="login"
                inputSize="lg"
              />
              <Input
                name="cvv"
                label="CVV *"
                placeholder="123"
                variant="login"
                inputSize="lg"
              />
            </div>
            <div className="flex items-center text-gray-600 pt-5 gap-2">
              <Lock className="w-4 h-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>
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
          </form>
        </div>
      ) : (
        <div>
          <p className="text-gray-800 py-9">
            You will be redirected to PayPal to complete your purchase.
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
