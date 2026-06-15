import Filters from '../components/shop/Filters'
import Products from '../components/shop/Products'
import ShopHeroSection from '../components/shop/ShopHeroSection'

const Shop = () => {
  return (
    <div className="mt-20 mx-5 md:mx-0">
      <ShopHeroSection />
      <div className="flex  max-w-7xl mx-auto gap-7">
        <div className="w-100 my-8 hidden md:block">
          <Filters />
        </div>
        <div className="w-full my-6">
          <Products />
        </div>
      </div>
    </div>
  )
}

export default Shop
