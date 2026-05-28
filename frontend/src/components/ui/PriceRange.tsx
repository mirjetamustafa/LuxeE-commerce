// price range component with type input range for filtering products by price
import React from 'react'

interface PriceRangeProps {
  min: number
  max: number
  onChange: (value: number) => void
}

const PriceRange: React.FC<PriceRangeProps> = ({ min, max, onChange }) => {
  const [value, setValue] = React.useState(min)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <div className="w-50">
      <label
        htmlFor="price-range"
        className="mb-2 flex justify-between text-sm font-medium text-gray-700"
      >
        <span>$0</span>
        <span>${value}</span>
      </label>
      <input
        id="price-range"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default PriceRange
