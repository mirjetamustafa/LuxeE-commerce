import { Minus, Plus, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

interface CartItemProps {
  image: string
  title: string
  category?: string
  price: number
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}

const CartItem = ({
  image,
  title,
  category,
  price,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <NavLink
          to=""
          className="w-full h-full md:w-32 aspect-square flex-shrink-0 group overflow-hidden"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />
        </NavLink>

        <div className="flex flex-grow flex-col">
          <div className="flex justify-between items-start mb-2">
            <div>
              <NavLink
                to=""
                className="font-medium text-sm md:text-base hover:text-[#D4A853]"
              >
                {title}
              </NavLink>

              <p className="mt-1 text-xs md:text-sm text-gray-500">
                {category}
              </p>
            </div>
            <button onClick={onRemove}>
              <X className="h-5 w-5 text-gray-400 hover:text-red-600 cursor-pointer" />
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-auto">
            <div className="flex w-fit items-center border border-gray-300 mt-2 md:mt-0">
              <button
                onClick={onDecrease}
                className="p-2 hover:text-[#D4A853] cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>

              <span className="px-4 md:px-6 text-sm md:text-base">
                {quantity}
              </span>

              <button
                onClick={onIncrease}
                className="p-2 hover:text-[#D4A853] cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="text-right">
              <p className="font-semibold">${price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
