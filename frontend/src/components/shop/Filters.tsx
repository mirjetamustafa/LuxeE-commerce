import { useCategories } from '../../hooks/useCategories'
import Checkboxes from '../ui/Checkboxes'
import PriceRange from '../ui/PriceRange'
import RatingFilter from '../ui/RatingFilter'

interface FiltersProps {
  filters: {
    categories: string[]
    maxPrice: number
    rating: number | null
    search: string
    inStock: boolean
  }

  updateCategories: (value: string) => void
  updatePrice: (value: number) => void
  updateRating: (value: number | null) => void
  updateStock: () => void
  clearFilters: () => void
}

const Filters = ({
  filters,
  updateCategories,
  updatePrice,
  updateRating,
  updateStock,
  clearFilters,
}: FiltersProps) => {
  const { categories } = useCategories()

  return (
    <div>
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold font-playfair">Filters</h3>

        <button
          onClick={clearFilters}
          className="font-playfair text-[#1a1a1a] underline text-xs cursor-pointer hover:text-[#D4A853]"
        >
          Clear All
        </button>
      </div>

      <div className="mt-9">
        <h4 className="text-medium text-sm font-playfair text-[#1a1a1a] uppercase mb-3">
          categories
        </h4>

        <div className="space-y-3">
          {categories.map((category) => (
            <Checkboxes
              key={category._id}
              id={category._id}
              label={category.name}
              checked={filters.categories.includes(category._id)}
              onChange={() => updateCategories(category._id)}
            />
          ))}
        </div>
      </div>

      <div className="my-9">
        <h4 className="text-medium text-sm font-playfair text-[#1a1a1a] uppercase mb-3">
          price range
        </h4>

        <PriceRange
          min={0}
          max={500}
          value={filters.maxPrice}
          onChange={updatePrice}
        />
      </div>

      <div>
        <h4 className="text-medium text-sm font-playfair text-[#1a1a1a] uppercase mb-3">
          minimum rating
        </h4>

        <RatingFilter value={filters.rating} onChange={updateRating} />
      </div>

      <div className="mt-9">
        <h4 className="text-medium text-sm font-playfair text-[#1a1a1a] uppercase mb-3">
          availability
        </h4>

        <Checkboxes
          id="inStockOnly"
          label="In Stock Only"
          checked={filters.inStock}
          onChange={updateStock}
        />
      </div>
    </div>
  )
}

export default Filters
