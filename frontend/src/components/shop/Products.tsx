import { Search } from 'lucide-react'
import Input from '../ui/Input'
import Select from '../ui/Select'

import ProductCard from '../ui/cards/ProductCard'
import { useProducts } from '../../hooks/useProducts'

const Products = () => {
  const { products } = useProducts()
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-200 pb-5">
        <div className="mt-6">
          <p className="text-gray-700 text-sm">
            Showing {products.length} results
          </p>
        </div>
        <div className="flex gap-4">
          <div className="mt-2">
            <Input
              variant="products"
              inputSize="md"
              placeholder="Search products..."
              leftIcon={<Search size={15} />}
            />
          </div>

          <Select
            label=""
            options={[
              { value: 'featured', label: 'Featured' },
              { value: 'newestArrivals', label: 'Newest Arrivals' },
              { value: 'price-low', label: 'Price: Low to High' },
              { value: 'price-high', label: 'Price: High to Low' },
              { value: 'rating', label: 'Highest Rated' },
            ]}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-9 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
