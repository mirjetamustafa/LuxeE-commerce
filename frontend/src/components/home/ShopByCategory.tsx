import { ArrowRight } from 'lucide-react'
import Category1 from '../../assets/images/category1.jfif'
import Category2 from '../../assets/images/category2.jpg'
import Category3 from '../../assets/images/category3.jfif'
import Category4 from '../../assets/images/category4.jfif'
import Category5 from '../../assets/images/category5.jfif'
import { Link } from 'react-router-dom'

interface Category {
  title: string
  image: string
  link: string
}

interface Props {
  item: Category
}

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

const CategoryCard = ({ item }: Props) => {
  return (
    <Link
      to={item.link}
      className="group relative w-full overflow-hidden cursor-pointer"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      <div className="absolute bottom-5 left-5 text-white">
        <h2 className="text-2xl font-semibold font-playfair">{item.title}</h2>

        <div className="mt-2 inline-flex items-center gap-2">
          <span className="text-sm font-semibold group-hover:text-[#D4A853]">
            Shop Collection
          </span>

          <span className="opacity-0 translate-x-[-5px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#D4A853]">
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  )
}

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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {categoriesBottom.map((item, i) => (
          <CategoryCard key={i} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ShopByCategory
