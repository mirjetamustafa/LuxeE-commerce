import type { OrderItem, ShippingAddress } from '../../api/order/order.types'
import Button from '../ui/Button'

interface ReviewOrderProps {
  setStep: (step: number) => void
  shippingAddress: ShippingAddress | null
  paymentMethod: string
  items: OrderItem[]
  totalPrice: number
  handlePlaceOrder: () => void
}
const ReviewOrder = ({
  setStep,
  shippingAddress,
  paymentMethod,
  items,
  totalPrice,
  handlePlaceOrder,
}: ReviewOrderProps) => {
  return (
    <div className="p-9">
      <h2 className="text-lg md:text-xl font-bold font-playfair mb-8">
        Review Your Order
      </h2>
      <div className="border-b border-gray-300 pb-6">
        <h4 className="font-medium font-playfair">Shipping Address</h4>
        <div className="mt-3 text-sm text-[#333333]">
          {shippingAddress ? (
            <>
              <p>
                {shippingAddress.firstName} {shippingAddress.lastName}
              </p>
              <p>{shippingAddress.streetAddress} </p>
              <p>
                {shippingAddress.city}, {shippingAddress.state}{' '}
                {shippingAddress.zipCode}{' '}
              </p>
              <p>{shippingAddress.email} </p>
              <p>{shippingAddress.phone} </p>
            </>
          ) : (
            <p>No shipping information</p>
          )}
        </div>
      </div>

      <div className="border-b border-gray-300 pb-6">
        <h4 className="font-medium font-playfair mt-5">Payment Method</h4>
        <div className="mt-3 text-sm text-[#333333]">
          <p>{paymentMethod}</p>
        </div>
      </div>

      <div className="pb-6">
        <h4 className="font-medium font-playfair mt-5">Order Items</h4>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="flex justify-between mt-3 text-sm ">
              <p className="text-[#333333]">
                {item.name} × {item.quantity}
              </p>
              <p className="font-medium">${item.price}</p>
            </div>
          ))
        ) : (
          <p className="text-sm mt-3">No items</p>
        )}
        <div className="border-t border-gray-300 pt-4 mt-4 flex justify-between font-bold">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-7">
        <Button
          type="button"
          variant="secondary"
          size="large"
          fullWidth
          onClick={() => setStep(2)}
        >
          Back
        </Button>
        <Button
          type="button"
          variant="primary"
          size="large"
          fullWidth
          onClick={handlePlaceOrder}
        >
          Place Order
        </Button>
      </div>
    </div>
  )
}

export default ReviewOrder
