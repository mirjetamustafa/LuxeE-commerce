import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useProduct from '../hooks/useProduct'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import { addProductToCart } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import {
  addProductToWishlist,
  removeProductToWishlist,
} from '../redux/slices/wishlistSlice'
import ThumbnailImage from '../components/productDetails/ThumbnailImage'
import ProductActions from '../components/productDetails/ProductActions'
import ProductDescription from '../components/productDetails/ProductDescription'
import RelatedProducts from '../components/productDetails/RelatedProducts'
import { useProducts } from '../hooks/useProducts'

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>()
  const [quantity, setQuantity] = useState<number>(1)

  const { product, loading } = useProduct(id)
  const { products } = useProducts()

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const wishlistItems = useSelector((state: RootState) => state.wishlist.items)

  const isWishlisted = wishlistItems.some((item) => item._id === product?._id)

  const handleAddToCart = async () => {
    if (!product?._id) return

    try {
      await dispatch(
        addProductToCart({
          productId: product._id,
          quantity,
        }),
      ).unwrap()
    } catch (error) {
      toast.error('Failed to add product to cart')
      console.error(error)
    }
  }

  const handleBuyNow = async () => {
    if (!product?._id) return

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
    if (!product?._id) return

    try {
      if (isWishlisted) {
        await dispatch(removeProductToWishlist(product._id)).unwrap()
      } else {
        await dispatch(addProductToWishlist(product?._id)).unwrap()
      }
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

  return (
    <div className="mx-5 max-w-6xl md:mx-auto mb-20 mt-30">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full">
          <ThumbnailImage product={product} />
        </div>

        <div className="w-full">
          <ProductActions
            product={product}
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            handleAddToCart={handleAddToCart}
            handleBuyNow={handleBuyNow}
            handleWishlist={handleWishlist}
            isWishlisted={isWishlisted}
          />
        </div>
      </div>

      <div className="">
        <ProductDescription product={product} />
      </div>

      <RelatedProducts product={product} products={products} />
    </div>
  )
}

export default ProductDetails
