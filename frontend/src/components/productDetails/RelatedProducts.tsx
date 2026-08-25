import { NavLink } from 'react-router-dom'
import type { Product } from '../../api/products/product.types'

interface RelatedProductProps {
  product: Product
  products: Product[]
}

const RelatedProducts = ({ product, products }: RelatedProductProps) => {
  const relatedProducts = products.filter(
    (item) =>
      item.category?._id === product.category?._id && item._id !== product._id,
  )

  return (
    <div className="border-t border-gray-200 mt-20 py-16">
      <h2 className="text-2xl font-playfair font-bold mb-8">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {relatedProducts.map((item) => (
          <div className="flex flex-col" key={item._id}>
            <NavLink
              to={`/product/${item._id}`}
              className="group relative block w-full h-80 overflow-hidden cursor-pointer"
            >
              <img
                src={`${import.meta.env.VITE_SERVER_URL}${item.image}`}
                alt={item.title}
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </NavLink>
            <NavLink
              to={`/product/${item._id}`}
              className="font-medium hover:text-[#D4A853] mt-2"
            >
              {item.title}
            </NavLink>
            <span className="font-semibold mt-1">${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
