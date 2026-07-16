import useCartSammuray from '../../hooks/useCartSummary'

const OrderSummary = () => {
  const { subtotal, discount, tax, total } = useCartSammuray()
  return (
    <div className="p-9">
      <h2 className="font-bold font-playfair mb-8">Order Summary</h2>

      <div className="border-b border-gray-200 pb-6">
        <div className="flex justify-between mt-3 text-sm ">
          <p className="">Subtotal</p>
          <p className="font-medium">{subtotal.toFixed(2)}</p>
        </div>
        {discount > 0 && (
          <div className="flex justify-between mt-3 text-green-700 text-sm ">
            <p className="">Discount</p>
            <p className="font-medium">{discount.toFixed(2)}</p>
          </div>
        )}

        <div className="flex justify-between mt-3 text-sm ">
          <p className="">Shipping</p>
          <p className="font-medium">FREE</p>
        </div>
        <div className="flex justify-between mt-3 text-sm ">
          <p className="">Tax</p>
          <p className="font-medium"> {tax.toFixed(2)} </p>
        </div>
      </div>

      <div className="flex justify-between mt-3 font-bold text-lg font-playfair ">
        <p className="">Total</p>
        <p className="">{total.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default OrderSummary
