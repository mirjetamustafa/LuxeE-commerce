import Category1 from '../../assets/images/category1.jfif'
import Category2 from '../../assets/images/category2.jpg'
import Category3 from '../../assets/images/category3.jfif'
import Category4 from '../../assets/images/category4.jfif'
import Category5 from '../../assets/images/category5.jfif'
import CategoryCard from '../ui/cards/CategoryCard'

const categoriesTop = [
  {
    title: 'Electronics',
    image: Category1,
    link: '/electronics',
  },
  {
    title: 'Clothing',
    image: Category2,
    link: '/clothing',
  },
  {
    title: 'Healthy & Beauty',
    image: Category3,
    link: '/healthy-beauty',
  },
]

const categoriesBottom = [
  {
    title: 'Home & Living',
    image: Category4,
    link: '/home-living',
  },
  {
    title: 'Accessories',
    image: Category5,
    link: '/accessories',
  },
]

const ShopByCategory = () => {
  return (
    <div className="flex flex-col items-center md:items-start py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
        Shop by Category
      </h2>
      <p className="text-[#333333]">Explore our curated collections</p>

      {/* TOP GRID */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {categoriesTop.map((item, i) => (
          <CategoryCard key={i} item={item} />
        ))}
      </div>

      {/* BOTTOM GRID */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 h-66 w-full">
        {categoriesBottom.map((item, i) => (
          <CategoryCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ShopByCategory
