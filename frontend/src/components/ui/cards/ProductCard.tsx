import { Link } from 'react-router-dom'

import Button from '../Button'
import { Heart, Star } from 'lucide-react'

interface Product {
  id?: string | number
  title?: string
  price?: number
  compareAtPrice?: number
  image?: string
  hoverImage?: string
  link?: string
  isSale?: boolean
  isBestSeller?: boolean
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden">
      <Link to={product.link ?? '/'} className="block overflow-hidden">
        <div className="relative h-90 w-full overflow-hidden">
          {/* Foto kryesore */}
          <img
            src={`http://localhost:5000/uploads/${product.image}`}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          />
          <div className="flex flex-col absolute top-0 left-0 m-2">
            {product.isSale && (
              <p className="bg-[#D4A853] text-white uppercase font-bold my-1 p-2 text-xs">
                Sale
              </p>
            )}

            {product.isBestSeller && (
              <p className="bg-black text-white uppercase font-bold my-1 p-2 text-xs">
                Bestseller
              </p>
            )}
          </div>

          {/* Foto hover */}
          <img
            src={`http://localhost:5000/uploads/${product.hoverImage ?? product.image}`}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="flex flex-col absolute top-0 left-0 m-2">
            {product.isSale && (
              <p className="bg-[#D4A853] text-white uppercase font-bold my-1 p-2 text-xs">
                Sale
              </p>
            )}

            {product.isBestSeller && (
              <p className="bg-black text-white uppercase font-bold my-1 p-2 text-xs">
                Bestseller
              </p>
            )}
          </div>

          {/* Add to cart */}
          <div
            className="  absolute bottom-4 left-4 right-4
    flex items-center gap-2
    opacity-0 translate-y-4
    transition-all duration-300
    group-hover:opacity-100
    group-hover:translate-y-0
      "
          >
            <Button
              className="
      flex-1
      bg-white
      h-12
      flex items-center justify-center
      text-gray-900
      font-medium
      shadow-md
      hover:bg-gray-900
      hover:text-white
      transition
      cursor-pointer
    "
            >
              Add to Cart
            </Button>
            <Button
              className="
      w-12 h-12
      bg-white
      flex items-center justify-center
      shadow-md
      hover:bg-gray-100
      transition
      cursor-pointer

    "
            >
              <Heart />
            </Button>
          </div>
        </div>
      </Link>

      <div className="p-4">
        <div className="text-base font-medium text-gray-900 hover:text-[#D4A853]">
          <Link to="">{product.title}</Link>
        </div>
        <div className="flex gap-2 mt-2">
          <Star stroke="#D4A853" fill="#D4A853" size={12} />
          <Star stroke="#D4A853" fill="#D4A853" size={12} />
          <Star stroke="#D4A853" fill="#D4A853" size={12} />
          <Star stroke="#D4A853" fill="#D4A853" size={12} />
          <Star stroke="#D4A853" size={12} />
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-lg font-semibold text-gray-900">
            ${Number(product.price)?.toFixed(2)}
          </span>
          {product.compareAtPrice !== 0 && (
            <span className="text-md text-gray-400 line-through">
              ${Number(product.compareAtPrice)?.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard
