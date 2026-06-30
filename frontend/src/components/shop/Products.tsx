import { Search } from 'lucide-react'
import Input from '../ui/Input'
import Select from '../ui/Select'
// import product1 from '../../assets/products/product1.jfif'
// import product2 from '../../assets/products/product2.jfif'
// import product4 from '../../assets/products/product4.jfif'
// import product5 from '../../assets/products/product5.jfif'
// import product6 from '../../assets/products/product6.jfif'
// import product7 from '../../assets/products/pproduct7.jfif'
// import product15 from '../../assets/products/product15.jfif'
// import product16 from '../../assets/products/product16.jfif'
// import product19 from '../../assets/products/product19.jfif'
// import product20 from '../../assets/products/product20.jfif'
// import product26 from '../../assets/products/product26.jfif'
// import product27 from '../../assets/products/product27.jfif'
import ProductCard from '../ui/cards/ProductCard'
import { useProducts } from '../../hooks/useProducts'

const Products = () => {
  // const products = [
  //   {
  //     id: 1,
  //     title: 'Minimalist Wireless Headphones',
  //     price: 249.99,
  //     image: product1,
  //     hoverImage: product2,
  //     link: '/product/1',
  //     isSale: true,
  //     isBestSeller: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'Hydrating Facial Serum',
  //     price: 48.0,
  //     image: product4,
  //     hoverImage: product5,
  //     link: '/product/2',
  //     isSale: false,
  //     isBestSeller: true,
  //   },
  //   {
  //     id: 3,
  //     title: 'Aromatherapy Diffuser',
  //     price: 55.0,
  //     image: product6,
  //     hoverImage: product7,
  //     link: '/product/3',
  //     isSale: false,
  //     isBestSeller: false,
  //   },
  //   {
  //     id: 4,
  //     title: 'Minimalist Leather Tote',
  //     price: 225.99,
  //     image: product15,
  //     hoverImage: product16,
  //     link: '/product/4',
  //     isSale: false,
  //     isBestSeller: true,
  //   },
  //   {
  //     id: 5,
  //     title: 'Organic Cotton Bath Towel Set',
  //     price: 89.99,
  //     image: product19,
  //     hoverImage: product20,
  //     link: '/product/4',
  //     isSale: false,
  //     isBestSeller: false,
  //   },
  //   {
  //     id: 5,
  //     title: 'Ergonomic Desk Chair',
  //     price: 349.99,
  //     image: product26,
  //     hoverImage: product27,
  //     link: '/product/4',
  //     isSale: false,
  //     isBestSeller: true,
  //   },
  //   {
  //     id: 1,
  //     title: 'Minimalist Wireless Headphones',
  //     price: 249.99,
  //     image: product1,
  //     hoverImage: product2,
  //     link: '/product/1',
  //     isSale: true,
  //     isBestSeller: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'Hydrating Facial Serum',
  //     price: 48.0,
  //     image: product4,
  //     hoverImage: product5,
  //     link: '/product/2',
  //     isSale: false,
  //     isBestSeller: true,
  //   },
  //   {
  //     id: 3,
  //     title: 'Aromatherapy Diffuser',
  //     price: 55.0,
  //     image: product6,
  //     hoverImage: product7,
  //     link: '/product/3',
  //     isSale: false,
  //     isBestSeller: false,
  //   },
  //   {
  //     id: 4,
  //     title: 'Minimalist Leather Tote',
  //     price: 225.99,
  //     image: product15,
  //     hoverImage: product16,
  //     link: '/product/4',
  //     isSale: false,
  //     isBestSeller: true,
  //   },
  //   {
  //     id: 5,
  //     title: 'Organic Cotton Bath Towel Set',
  //     price: 89.99,
  //     image: product19,
  //     hoverImage: product20,
  //     link: '/product/4',
  //     isSale: false,
  //     isBestSeller: false,
  //   },
  //   {
  //     id: 5,
  //     title: 'Ergonomic Desk Chair',
  //     price: 349.99,
  //     image: product26,
  //     hoverImage: product27,
  //     link: '/product/4',
  //     isSale: false,
  //     isBestSeller: true,
  //   },
  // ]
  const { products } = useProducts()
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between border-b border-gray-200 pb-5">
        <div className="mt-6">
          <p className="text-gray-700 text-sm">Showing 16 results</p>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
