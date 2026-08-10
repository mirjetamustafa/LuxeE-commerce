import {
  Heart,
  Minus,
  Plus,
  RefreshCcw,
  ShieldCheck,
  Star,
  Truck,
} from 'lucide-react'
import Button from '../ui/Button'
import type { Product } from '../../api/products/product.types'

interface ProductActionsProps {
  product: Product
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
  handleAddToCart: () => Promise<void>
  handleBuyNow: () => Promise<void>
  handleWishlist: () => Promise<void>
  isWishlisted: boolean
}

const ProductActions = ({
  product,
  quantity,
  increaseQuantity,
  decreaseQuantity,
  handleAddToCart,
  handleBuyNow,
  handleWishlist,
  isWishlisted,
}: ProductActionsProps) => {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
        {product.title}
      </h1>
      <div className="flex items-center gap-3 mt-3">
        <div className="flex gap-2">
          <Star stroke="#D4A853" fill="#D4A853" size={15} />
          <Star stroke="#D4A853" fill="#D4A853" size={15} />
          <Star stroke="#D4A853" fill="#D4A853" size={15} />
          <Star stroke="#D4A853" fill="#D4A853" size={15} />
          <Star stroke="#D4A853" size={15} />
        </div>
        <p className="text-sm">4.5 (89 reviews)</p>
        <p className="text-gray-300">|</p>
        {product.status === 'active' ? (
          <p className="text-sm text-green-600 font-medium">In Stock</p>
        ) : (
          <p className="text-sm text-red-600 font-medium">Out of Stock</p>
        )}
      </div>
      <div className="flex items-center gap-4 mt-4">
        <p className="text-2xl font-semibold">${product.price.toFixed(2)}</p>
        {product.compareAtPrice ? (
          <p className="text-gray-400 text-lg line-through">
            ${product.compareAtPrice.toFixed(2)}
          </p>
        ) : null}
      </div>
      <p className="leading-relaxed mb-8 mt-4">
        {product.description.split('.')[0]}
      </p>

      <div className="border-y border-gray-200 pb-7 ">
        <div className="mt-4">
          <p className="text-sm text-gray-900">Size — XS</p>
          <div className="flex gap-4 mt-4">
            <button className="bg-black text-white py-3 px-5 text-sm font-medium hover:bg-gray-800">
              XS
            </button>
            <button className="border border-gray-200 cursor-pointer text-gray-800 py-3 px-5 text-sm font-medium hover:border-gray-900">
              S
            </button>
            <button className="border border-gray-200 cursor-pointer text-gray-800 py-3 px-5 text-sm font-medium hover:border-gray-900">
              M
            </button>
            <button className="border border-gray-200 cursor-pointer text-gray-800 py-3 px-5 text-sm font-medium hover:border-gray-900">
              L
            </button>
            <button className="border border-gray-200 cursor-pointer text-gray-800 py-3 px-5 text-sm font-medium hover:border-gray-900">
              XL
            </button>
          </div>

          <div className="flex items-center gap-4 mt-5">
            <div className="flex gap-2 border border-gray-200">
              <button
                className="px-3 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                onClick={decreaseQuantity}
              >
                <Minus size={15} />
              </button>
              <span className="px-3 py-2 text-gray-800">{quantity}</span>
              <button
                className="px-3 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                onClick={increaseQuantity}
              >
                <Plus size={15} />
              </button>
            </div>
            <p className="text-sm">Ships within 1-2 business days</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-5">
            <Button
              variant="secondary"
              size="medium"
              fullWidth
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              variant="primary"
              size="medium"
              fullWidth
              onClick={handleBuyNow}
            >
              Buy It Now
            </Button>

            <Button variant="wishlist" size="small" onClick={handleWishlist}>
              <Heart
                className={
                  isWishlisted
                    ? 'text-[#D4A853] fill-[#D4A853] w-6 h-6 '
                    : 'text-gray-700 w-6 h-6 '
                }
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-sm">
            <Truck className="w-5 h-5 text-[#D4A853]" />
            <span>Free shipping over $50</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <ShieldCheck className="w-5 h-5 text-[#D4A853]" />
            <span>2-year warranty included</span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-3 text-sm">
            <RefreshCcw className="w-5 h-5 text-[#D4A853]" />
            <span>2-year warranty included</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductActions
