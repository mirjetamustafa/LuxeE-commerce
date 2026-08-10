import type { Product } from '../../api/products/product.types'

interface ProductDescriptionProps {
  product: Product
}

const ProductDescription = ({ product }: ProductDescriptionProps) => {
  const firstDotIndex = product.description.indexOf('.')
  const firstParagraph =
    firstDotIndex !== -1
      ? product.description.slice(0, firstDotIndex + 1)
      : product.description
  const secondParagraph =
    firstDotIndex !== -1
      ? product.description.slice(firstDotIndex + 1).trim()
      : ''
  return (
    <div className="mt-9">
      <h4 className="font-medium text-sm uppercase tracking-wide border-b border-gray-200 pb-2">
        descrition
      </h4>
      <div className="max-w-3xl mt-5 space-y-4">
        <p>{firstParagraph}</p>

        {secondParagraph && <p>{secondParagraph}</p>}
      </div>
    </div>
  )
}

export default ProductDescription
