import { Star } from 'lucide-react'
import clsx from 'clsx'

interface RatingFilterProps {
  value: number | null
  onChange: (rating: number) => void
}

const ratings = [4, 3, 2, 1]

const RatingFilter = ({ value, onChange }: RatingFilterProps) => {
  return (
    <div className="space-y-3">
      {ratings.map((rating) => (
        <label key={rating} className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={value === rating}
            onChange={() => onChange(rating)}
            className="hidden"
          />
          <div
            className={clsx(
              'relative h-4 w-4 border rounded-xs transition-all duration-200',
              value === rating
                ? 'border-[#D4A853]'
                : 'border-gray-300 bg-white',
            )}
          >
            {/* inner square (animated) */}
            <div
              className={clsx(
                'absolute inset-1 bg-[#D4A853] transition-all duration-200',
                value === rating
                  ? 'scale-100 opacity-100'
                  : 'scale-0 opacity-0',
              )}
            />
          </div>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={12}
                fill={star <= rating ? '#D4A853' : 'none'}
                color={star <= rating ? '#D4A853' : '#D1D5DB'}
              />
            ))}
            <span className="ml-2 text-sm">& Up</span>
          </div>
        </label>
      ))}
    </div>
  )
}

export default RatingFilter
