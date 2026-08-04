import productImage from '../../../assets/products/product1.jfif'

const ProductCard = () => {
  return (
    <div className="border border-slate-200 bg-white rounded-xl shadow-xs py-5 ">
      <div className="flex justify-between items-center px-6">
        <h4 className="font-semibold mb-2">Items ordered</h4>
        <p className="text-sm text-slate-500">3 items</p>
      </div>

      <div className=" border-b border-slate-200 my-2"></div>

      <div className="flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-3">
          <img
            src={productImage}
            alt="Product"
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <h5 className="text-lg font-medium">Running Shoes</h5>
            <p className="text-xs text-slate-500">SKU: APP-SHO-RUN-GRY</p>
            <p className="text-sm text-gray-500">Quantity: 1</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="font-semibold">$129.99</p>
          <p className="text-xs text-slate-500">$56.88 each</p>
        </div>
      </div>

      <div className="flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-3">
          <img
            src={productImage}
            alt="Product"
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="flex flex-col">
            <h5 className="text-lg font-medium">Running Shoes</h5>
            <p className="text-xs text-slate-500">SKU: APP-SHO-RUN-GRY</p>
            <p className="text-sm text-gray-500">Quantity: 1</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="font-semibold">$129.99</p>
          <p className="text-xs text-slate-500">$56.88 each</p>
        </div>
      </div>
      <div className="ml-auto max-w-sm border-t border-slate-200 py-3 px-6 text-sm">
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <p className="">Subtotal</p>
            <p className="">$183.48</p>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm">Shipping</p>
            <p className="text-sm">Free</p>
          </div>
        </div>
        <div className="flex justify-between border-t border-slate-200 pt-3 font-bold text-base">
          <p className="">Total</p>
          <p className="">$183.48</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
