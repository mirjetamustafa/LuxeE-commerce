import type { Order } from '../../../api/order/order.types'

interface Props {
  order: Order
}

const ProductCard = ({ order }: Props) => {
  return (
    <div className="border border-slate-200 bg-white rounded-xl shadow-xs py-5 ">
      <div className="flex justify-between items-center px-6">
        <h4 className="font-semibold mb-2">Items ordered</h4>
        <p className="text-sm text-slate-500">{order.items.length} items</p>
      </div>

      <div className=" border-b border-slate-200 my-2"></div>

      {order.items.map((item, index) => (
        <div
          key={item.product._id}
          className={
            index !== order.items.length - 1 ? 'border-b border-slate-200' : ''
          }
        >
          <div className="flex justify-between items-center px-6 py-3 ">
            <div className="flex items-center gap-3">
              <img
                src={`http://localhost:5000${item.product.image}`}
                alt={item.product.title}
                className="w-16 h-16 object-cover rounded-md"
              />

              <div className="flex flex-col">
                <h5 className="text-lg font-medium">{item.product.title}</h5>

                <p className="text-xs text-slate-500">
                  SKU: {item.product.sku}
                </p>

                <p className="text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="ml-auto max-w-sm border-t border-slate-200 py-3 px-6 text-sm">
        <div className="space-y-5">
          <div className="flex justify-between items-center">
            <p>Subtotal</p>
            <p>${order.totalPrice.toFixed(2)}</p>
          </div>

          <div className="flex justify-between items-center mb-3">
            <p className="text-sm">Shipping</p>
            <p className="text-sm">Free</p>
          </div>
        </div>

        <div className="flex justify-between border-t border-slate-200 pt-3 font-bold text-base">
          <p>Total</p>
          <p>${order.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
