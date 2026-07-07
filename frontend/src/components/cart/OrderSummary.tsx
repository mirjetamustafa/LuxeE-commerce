import Button from '../ui/Button'
import Input from '../ui/Input'

const OrderSummary = () => {
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
          />
          <span className="text-xs text-gray-600">
            Try: WELCOME10 or LUXE20
          </span>
        </div>
        <div className="">
          <Button variant="default" size="small">
            Apply
          </Button>
        </div>
      </div>

      <div className="border-b border-gray-200 pt-3 pb-6">
        <div className="flex justify-between pt-4">
          <p className="text-sm">Subtotal</p>
          <p className="text-sm font-medium">$338.00</p>
        </div>

        <div className="flex justify-between pt-4">
          <p className="text-sm">Shipping</p>
          <p className="text-sm font-medium uppercase text-green-600">free</p>
        </div>

        <div className="flex justify-between pt-4">
          <p className="text-sm">Estimated Tax</p>
          <p className="text-sm font-medium">$27.04</p>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold font-playfair">Total</p>
        <p className="text-xl font-bold font-playfair">$365.04</p>
      </div>
      <Button variant="primary" size="large" fullWidth>
        Proceed to Checkout
      </Button>
      <p className="text-xs text-gray-600 text-center mt-4">
        Secure checkout powered by industry-leading encryption
      </p>
    </div>
  )
}

export default OrderSummary
