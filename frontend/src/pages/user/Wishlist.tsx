import { Link } from 'react-router-dom'

import { X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../redux/store'
import { useEffect } from 'react'
import {
  fetchWishlist,
  removeProductToWishlist,
} from '../../redux/slices/wishlistSlice'
import { toast } from 'react-toastify'

const Wishlist = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { items } = useSelector((state: RootState) => state.wishlist)

  useEffect(() => {
    dispatch(fetchWishlist())
  }, [dispatch])

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    productId: string,
  ) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch(removeProductToWishlist(productId))
    toast.success('Product deleted succesfully')
  }

  return (
    <div className="bg-white p-6 shadow-xs my-20">
      <h2 className="text-xl md:text-2xl font-bold font-playfair mb-4">
        Your Wishlist
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((product) => (
          <div key={product._id} className="group overflow-hidden">
            <Link
              to={`/products/${product._id}`}
              className="block overflow-hidden"
            >
              <div className="relative h-60 w-full overflow-hidden">
                {/* Foto kryesore */}
                <img
                  src={`http://localhost:5000${product.image}`}
                  alt={product.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="flex flex-col absolute top-0 right-0 m-2">
                  <button
                    onClick={(e) => handleDelete(e, product._id)}
                    className="bg-white text-gray-700 rounded-full p-1 cursor-pointer hover:text-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </Link>

            <div className="p-4">
              <div className="text-sm font-medium text-gray-900 hover:text-[#D4A853]">
                <Link to={`/products/${product._id}`}> {product.title} </Link>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist
