import { ArrowRight } from 'lucide-react'
import Category1 from '../../assets/images/category1.jfif'
import Category2 from '../../assets/images/category2.jpg'
import Category3 from '../../assets/images/category3.jfif'
import Category4 from '../../assets/images/category4.jfif'
import Category5 from '../../assets/images/category5.jfif'
import { Link } from 'react-router-dom'
const ShopByCategory = () => {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
        Shop by Category
      </h2>
      <p className="text-[#333333]">Explore our curated collections</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          to="/electronics"
          className="group relative w-full max-w-sm overflow-hidden cursor-pointer"
        >
          <img
            src={Category1}
            alt="Category 1"
            className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* text */}
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-2xl font-semibold font-playfair">
              Electronics
            </h2>
            <div className="mt-2 inline-flex items-center gap-2 transition-all duration-300">
              <span className="text-sm font-semibold group-hover:text-[#D4A853]">
                Shop Collection
              </span>
              <span className="opacity-0 translate-x-[-5px] mt-1 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#D4A853] group-hover:translate-x-0">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>

        <Link
          to="/clothing"
          className="group relative w-full max-w-sm overflow-hidden cursor-pointer"
        >
          <img
            src={Category2}
            alt="Category 2"
            className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* text */}
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-2xl font-semibold font-playfair">Clothing</h2>
            <div className="mt-2 inline-flex items-center gap-2 transition-all duration-300">
              <span className="text-sm font-semibold group-hover:text-[#D4A853]">
                Shop Collection
              </span>
              <span className="opacity-0 translate-x-[-5px] mt-1 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#D4A853] group-hover:translate-x-0">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>

        <Link
          to="/healthy-beauty"
          className="group relative w-full max-w-sm overflow-hidden cursor-pointer"
        >
          <img
            src={Category3}
            alt="Category 1"
            className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* text */}
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-2xl font-semibold font-playfair">
              Healthy & Beauty
            </h2>
            <div className="mt-2 inline-flex items-center gap-2 transition-all duration-300">
              <span className="text-sm font-semibold group-hover:text-[#D4A853]">
                Shop Collection
              </span>
              <span className="opacity-0 translate-x-[-5px] mt-1 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#D4A853] group-hover:translate-x-0">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/electronics"
          className="group relative w-full overflow-hidden cursor-pointer"
        >
          <img
            src={Category4}
            alt="Category 4"
            className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* text */}
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-2xl font-semibold font-playfair">
              Home & Living
            </h2>
            <div className="mt-2 inline-flex items-center gap-2 transition-all duration-300">
              <span className="text-sm font-semibold group-hover:text-[#D4A853]">
                Shop Collection
              </span>
              <span className="opacity-0 translate-x-[-5px] mt-1 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#D4A853] group-hover:translate-x-0">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>

        <Link
          to="/clothing"
          className="group relative w-full overflow-hidden cursor-pointer"
        >
          <img
            src={Category5}
            alt="Category 5"
            className="w-full h-80 object-cover transition duration-300 group-hover:scale-105"
          />
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* text */}
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-2xl font-semibold font-playfair">
              Accessories
            </h2>
            <div className="mt-2 inline-flex items-center gap-2 transition-all duration-300">
              <span className="text-sm font-semibold group-hover:text-[#D4A853]">
                Shop Collection
              </span>
              <span className="opacity-0 translate-x-[-5px] mt-1 transition-all duration-300 group-hover:opacity-100 group-hover:text-[#D4A853] group-hover:translate-x-0">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ShopByCategory
