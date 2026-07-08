import ProductCard from '../ui/cards/ProductCard'
import Button from '../ui/Button'
import { Link } from 'react-router-dom'
import { useProducts } from '../../hooks/useProducts'

const FeaturedEssentials = () => {
  const { products } = useProducts()

  return (
    <div className="w-full bg-[#F9F9F9] flex flex-col items-center py-12">
      <div className="max-w-6xl px-4 my-8">
        <h2 className="text-3xl font-playfair text-center font-bold mb-4">
          Featured Essentials
        </h2>
        <p className="max-w-2xl text-lg mx-auto text-gray-800">
          Handpicked favorites that combine exceptional craftsmanship with
          timeless design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 6).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <Link to="/shop">
        <Button variant="secondary" size="medium">
          View All Products
        </Button>
      </Link>
    </div>
  )
}

export default FeaturedEssentials
