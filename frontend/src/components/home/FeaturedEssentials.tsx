import ProductCard from '../ui/cards/ProductCard'
import product1 from '../../assets/products/product1.jfif'
import product2 from '../../assets/products/product2.jfif'
import product4 from '../../assets/products/product4.jfif'
import product5 from '../../assets/products/product5.jfif'
import product6 from '../../assets/products/product6.jfif'
import product7 from '../../assets/products/pproduct7.jfif'
import product15 from '../../assets/products/product15.jfif'
import product16 from '../../assets/products/product16.jfif'
import product19 from '../../assets/products/product19.jfif'
import product20 from '../../assets/products/product20.jfif'
import product26 from '../../assets/products/product26.jfif'
import product27 from '../../assets/products/product27.jfif'

const FeaturedEssentials = () => {
  const products = [
    {
      id: 1,
      title: 'Minimalist Wireless Headphones',
      price: 249.99,
      image: product1,
      hoverImage: product2,
      link: '/product/1',
      isSale: true,
      isBestSeller: true,
    },
    {
      id: 2,
      title: 'Hydrating Facial Serum',
      price: 48.0,
      image: product4,
      hoverImage: product5,
      link: '/product/2',
      isSale: false,
      isBestSeller: true,
    },
    {
      id: 3,
      title: 'Aromatherapy Diffuser',
      price: 55.0,
      image: product6,
      hoverImage: product7,
      link: '/product/3',
      isSale: false,
      isBestSeller: false,
    },
    {
      id: 4,
      title: 'Minimalist Leather Tote',
      price: 225.99,
      image: product15,
      hoverImage: product16,
      link: '/product/4',
      isSale: false,
      isBestSeller: true,
    },
    {
      id: 5,
      title: 'Organic Cotton Bath Towel Set',
      price: 89.99,
      image: product19,
      hoverImage: product20,
      link: '/product/4',
      isSale: false,
      isBestSeller: false,
    },
    {
      id: 5,
      title: 'Ergonomic Desk Chair',
      price: 349.99,
      image: product26,
      hoverImage: product27,
      link: '/product/4',
      isSale: false,
      isBestSeller: true,
    },
  ]

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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedEssentials
