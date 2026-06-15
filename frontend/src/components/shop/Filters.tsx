import { useState } from 'react'
import Checkboxes from '../ui/Checkboxes'
import PriceRange from '../ui/PriceRange'
import RatingFilter from '../ui/RatingFilter'

const Filters = () => {
  const [categories, setCategories] = useState<string[]>([])
  const [maxPrice, setMaxPrice] = useState(500)
  const [selectedRating, setSelectedRating] = useState<number | null>(null)

  const handleCategoryChange = (category: string) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category],
    )
  }

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold font-playfair">Filters</h3>
        <button className="font-playfair text-[#1a1a1a] underline text-xs cursor-pointer hover:text-[#D4A853]">
          Clear All
        </button>
      </div>

      <div className="mt-9">
        <h4 className="text-medium text-sm font-playfair text-[#1a1a1a] uppercase mb-3">
          categories
        </h4>
        <div className="space-y-3">
          <Checkboxes
            id="electronics"
            label="Electronics"
            checked={categories.includes('Electronics')}
            onChange={() => handleCategoryChange('Electronics')}
          />
          <Checkboxes
            id="clothing"
            label="Clothig"
            checked={categories.includes('Clothig')}
            onChange={() => handleCategoryChange('Clothig')}
          />
          <Checkboxes
            id="health&&beauty"
            label="Health & Beauty"
            checked={categories.includes('Health & Beauty')}
            onChange={() => handleCategoryChange('Health & Beauty')}
          />
          <Checkboxes
            id="home&living"
            label="Home & Living"
            checked={categories.includes('Home & Living')}
            onChange={() => handleCategoryChange('Home & Living')}
          />
          <Checkboxes
            id="Accessories"
            label="Accessories"
            checked={categories.includes('Accessories')}
            onChange={() => handleCategoryChange('Accessories')}
          />
        </div>
      </div>

      <div className="my-9">
        <h4 className="text-medium text-sm font-playfair text-[#1a1a1a] uppercase mb-3">
          price range
        </h4>
        <PriceRange min={0} max={500} value={maxPrice} onChange={setMaxPrice} />
      </div>
      <div className="">
        <h4 className="text-medium text-sm font-playfair text-[#1a1a1a] uppercase mb-3">
          minimum rating
        </h4>
        <RatingFilter value={selectedRating} onChange={setSelectedRating} />
      </div>
      <div className="mt-9">
        <h4 className="text-medium text-sm font-playfair text-[#1a1a1a] uppercase mb-3">
          availability
        </h4>
        <div className="space-y-3">
          <Checkboxes
            id="inStockOnly"
            label="In Stock Only"
            checked={categories.includes('In Stock Only')}
            onChange={() => handleCategoryChange('In Stock Only')}
          />
        </div>
      </div>
    </div>
  )
}

export default Filters
