import { Link } from 'react-router-dom'
import product1 from '../../assets/products/product1.jfif'
import product2 from '../../assets/products/product3.jfif'
import product3 from '../../assets/products/product5.jfif'
import product4 from '../../assets/products/product17.jfif'
import product5 from '../../assets/products/product9.jfif'
import product6 from '../../assets/products/product13.jfif'
import { X } from 'lucide-react'

const Wishlist = () => {
  return (
    <div className="bg-white p-6 shadow-xs my-20">
      <h2 className="text-xl md:text-2xl font-bold font-playfair mb-4">
        Your Wishlist
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="group overflow-hidden">
          <Link to={'/'} className="block overflow-hidden">
            <div className="relative h-60 w-full overflow-hidden">
              {/* Foto kryesore */}
              <img
                src={product1}
                alt=""
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col absolute top-0 right-0 m-2">
                <button className="bg-white text-gray-700 rounded-full p-1 cursor-pointer hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <div className="text-sm font-medium text-gray-900 hover:text-[#D4A853]">
              <Link to="">Minimalist Wireless Headphones</Link>
            </div>
            <p className="text-sm font-medium text-gray-900">$249.99</p>
          </div>
        </div>

        <div className="group overflow-hidden">
          <Link to={'/'} className="block overflow-hidden">
            <div className="relative h-60 w-full overflow-hidden">
              {/* Foto kryesore */}
              <img
                src={product2}
                alt=""
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col absolute top-0 right-0 m-2">
                <button className="bg-white text-gray-700 rounded-full p-1 cursor-pointer hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <div className="text-sm font-medium text-gray-900 hover:text-[#D4A853]">
              <Link to="">Minimalist Wireless Headphones</Link>
            </div>
            <p className="text-sm font-medium text-gray-900">$249.99</p>
          </div>
        </div>

        <div className="group overflow-hidden">
          <Link to={'/'} className="block overflow-hidden">
            <div className="relative h-60 w-full overflow-hidden">
              {/* Foto kryesore */}
              <img
                src={product3}
                alt=""
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col absolute top-0 right-0 m-2">
                <button className="bg-white text-gray-700 rounded-full p-1 cursor-pointer hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <div className="text-sm font-medium text-gray-900 hover:text-[#D4A853]">
              <Link to="">Minimalist Wireless Headphones</Link>
            </div>
            <p className="text-sm font-medium text-gray-900">$249.99</p>
          </div>
        </div>

        <div className="group overflow-hidden">
          <Link to={'/'} className="block overflow-hidden">
            <div className="relative h-60 w-full overflow-hidden">
              {/* Foto kryesore */}
              <img
                src={product4}
                alt=""
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col absolute top-0 right-0 m-2">
                <button className="bg-white text-gray-700 rounded-full p-1 cursor-pointer hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <div className="text-sm font-medium text-gray-900 hover:text-[#D4A853]">
              <Link to="">Minimalist Wireless Headphones</Link>
            </div>
            <p className="text-sm font-medium text-gray-900">$249.99</p>
          </div>
        </div>
        <div className="group overflow-hidden">
          <Link to={'/'} className="block overflow-hidden">
            <div className="relative h-60 w-full overflow-hidden">
              {/* Foto kryesore */}
              <img
                src={product5}
                alt=""
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col absolute top-0 right-0 m-2">
                <button className="bg-white text-gray-700 rounded-full p-1 cursor-pointer hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <div className="text-sm font-medium text-gray-900 hover:text-[#D4A853]">
              <Link to="">Minimalist Wireless Headphones</Link>
            </div>
            <p className="text-sm font-medium text-gray-900">$249.99</p>
          </div>
        </div>
        <div className="group overflow-hidden">
          <Link to={'/'} className="block overflow-hidden">
            <div className="relative h-60 w-full overflow-hidden">
              {/* Foto kryesore */}
              <img
                src={product6}
                alt=""
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col absolute top-0 right-0 m-2">
                <button className="bg-white text-gray-700 rounded-full p-1 cursor-pointer hover:text-red-600">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Link>

          <div className="p-4">
            <div className="text-sm font-medium text-gray-900 hover:text-[#D4A853]">
              <Link to="">Minimalist Wireless Headphones</Link>
            </div>
            <p className="text-sm font-medium text-gray-900">$249.99</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
