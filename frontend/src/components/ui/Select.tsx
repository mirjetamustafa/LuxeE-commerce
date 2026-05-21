// selecet component with label and options
import React from 'react'

interface SelectProps {
  label: string
  options: { value: string; label: string }[]
  onChange: (value: string) => void
}

const Select: React.FC<SelectProps> = ({ label, options, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select
        className="border border-gray-300 w-50 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#D4A853] focus:border-[#D4A853]"
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
