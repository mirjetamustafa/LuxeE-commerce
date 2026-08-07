import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct'
import { Heart, Minus, Plus, Star } from 'lucide-react'
import Button from '../components/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import { addProductToCart } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import { addProductToWishlist } from '../redux/slices/wishlistSlice'

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [quantity, setQuantity] = useState<number>(1)
  const { product, loading } = useProduct(id)

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const wishlistItems = useSelector((state: RootState) => state.wishlist.items)

  const handleAddToCart = async () => {
    try {
      await dispatch(
        addProductToCart({
          productId: product?._id,
          quantity,
        }),
      ).unwrap()
    } catch (error) {
      toast.error('Faed to add product to cart')
      console.error(error)
    }
  }

  const handleBuyNow = async () => {
    try {
      await dispatch(
        addProductToCart({
          productId: product?._id,
          quantity,
        }),
      ).unwrap()
      navigate('/checkout')
    } catch (error) {
      console.error(error)
    }
  }

  const handleWishlist = async () => {
    try {
      await dispatch(addProductToWishlist(product?._id)).unwrap()
    } catch (error) {
      console.error(error)
    }
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!product) {
    return <div>Product not found</div>
  }
  const isWishlisted = wishlistItems.some((item) => item._id === product._id)

  const images = [product?.image, product?.hoverImage].filter(Boolean)

  return (
    <div className=" max-w-6xl mx-auto mb-20 mt-30">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-2">
            {/* Thumbnail Images */}
            <div className="flex-col gap-4">
              {images.map((img) => (
                <img
                  key={img}
                  src={`http://localhost:5000${img}`}
                  alt={product.title}
                  className={`w-30 h-30 object-cover cursor-pointer border-2 ${selectedImage === img ? 'border-[#D4A853]' : 'border-transparent'}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative">
              <img
                src={
                  selectedImage
                    ? `http://localhost:5000${selectedImage}`
                    : `http://localhost:5000${images[0]}`
                }
                alt={product.title}
                className="w-full h-[500px] object-cover object-center"
              />

              <div className="flex flex-col absolute top-0 left-0 m-2">
                {product.isSale && (
                  <p className="bg-[#D4A853] text-white uppercase font-bold my-1 p-2 text-xs">
                    Sale
                  </p>
                )}

                {product.isBestSeller && (
                  <p className="bg-black text-white uppercase font-bold my-1 p-2 text-xs">
                    Bestseller
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-2">
            {product.title}
          </h1>
          <div className="flex items-center gap-3 mt-3">
            <div className="flex gap-2">
              <Star stroke="#D4A853" fill="#D4A853" size={15} />
              <Star stroke="#D4A853" fill="#D4A853" size={15} />
              <Star stroke="#D4A853" fill="#D4A853" size={15} />
              <Star stroke="#D4A853" fill="#D4A853" size={15} />
              <Star stroke="#D4A853" size={15} />
            </div>
            <p className="text-sm">4.5 (89 reviews)</p>
            <p className="text-gray-300">|</p>
            {product.status === 'active' ? (
              <p className="text-sm text-green-600 font-medium">In Stock</p>
            ) : (
              <p className="text-sm text-red-600 font-medium">Out of Stock</p>
            )}
          </div>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-2xl font-semibold">
              ${product.price.toFixed(2)}
            </p>
            {product.compareAtPrice ? (
              <p className="text-gray-400 text-lg line-through">
                ${product.compareAtPrice.toFixed(2)}
              </p>
            ) : null}
          </div>
          <p className="leading-relaxed mb-8 mt-4">
            {product.description.split('.')[0]}
          </p>

          <div className="border-t border-gray-200 ">
            <div className="mt-4">
              <p className="text-sm text-gray-900">Size — XS</p>
              <div className="flex gap-4 mt-4">
                <button className="bg-black text-white py-3 px-5 text-sm font-medium hover:bg-gray-800">
                  XS
                </button>
                <button className="border border-gray-200 cursor-pointer text-gray-800 py-3 px-5 text-sm font-medium hover:border-gray-900">
                  S
                </button>
                <button className="border border-gray-200 cursor-pointer text-gray-800 py-3 px-5 text-sm font-medium hover:border-gray-900">
                  M
                </button>
                <button className="border border-gray-200 cursor-pointer text-gray-800 py-3 px-5 text-sm font-medium hover:border-gray-900">
                  L
                </button>
                <button className="border border-gray-200 cursor-pointer text-gray-800 py-3 px-5 text-sm font-medium hover:border-gray-900">
                  XL
                </button>
              </div>

              <div className="flex items-center gap-4 mt-5">
                <div className="flex gap-2 border border-gray-200">
                  <button
                    className="px-3 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    onClick={decreaseQuantity}
                  >
                    <Minus size={15} />
                  </button>
                  <span className="px-3 py-2 text-gray-800">{quantity}</span>
                  <button
                    className="px-3 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    onClick={increaseQuantity}
                  >
                    <Plus size={15} />
                  </button>
                </div>
                <p className="text-sm">Ships within 1-2 business days</p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-5">
                <Button
                  variant="secondary"
                  size="medium"
                  fullWidth
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="primary"
                  size="medium"
                  fullWidth
                  onClick={handleBuyNow}
                >
                  Buy It Now
                </Button>

                <Button
                  variant="wishlist"
                  size="small"
                  onClick={handleWishlist}
                >
                  <Heart
                    className={
                      isWishlisted
                        ? 'text-[#D4A853] fill-[#D4A853] w-6 h-6 '
                        : 'text-gray-700 w-6 h-6 '
                    }
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
