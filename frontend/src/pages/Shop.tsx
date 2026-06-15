import Filters from '../components/shop/Filters'
import ShopHeroSection from '../components/shop/ShopHeroSection'

const Shop = () => {
  return (
    <div className="mt-20">
      <ShopHeroSection />
      <div className="flex items-center max-w-7xl mx-auto gap-5">
        <div className="w-100 ">
          <Filters />
        </div>
        <div className="w-full shrink bg-red-200">02</div>
      </div>
    </div>
  )
}

export default Shop
