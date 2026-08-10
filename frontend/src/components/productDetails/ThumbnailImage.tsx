import { useState } from 'react'
import type { Product } from '../../api/products/product.types'

interface ThumbnailImagesProps {
  product: Product
}

const ThumbnailImage = ({ product }: ThumbnailImagesProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [product.image, product.hoverImage].filter(
    (image): image is string => Boolean(image),
  )

  return (
    <div>
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
  )
}

export default ThumbnailImage
