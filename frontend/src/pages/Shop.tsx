import Filters from '../components/shop/Filters'
import Products from '../components/shop/Products'
import ShopHeroSection from '../components/shop/ShopHeroSection'
import useProductFilters from '../hooks/useProductFilters'

const Shop = () => {
  const {
    products,
    filters,
    updateCategories,
    updatePrice,
    updateRating,
    updateStock,
    updateSearch,
    clearFilters,
  } = useProductFilters()
  return (
    <div className="mt-20 mx-5 md:mx-0">
      <ShopHeroSection />
      <div className="flex  max-w-7xl mx-auto gap-7">
        <div className="w-100 my-8 hidden md:block">
          <Filters
            filters={filters}
            updateCategories={updateCategories}
            updatePrice={updatePrice}
            updateRating={updateRating}
            updateStock={updateStock}
            clearFilters={clearFilters}
          />
        </div>
        <div className="w-full my-6">
          <Products products={products} updateSearch={updateSearch} />
        </div>
      </div>
    </div>
  )
}

export default Shop
