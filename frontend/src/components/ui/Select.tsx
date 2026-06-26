// selecet component with label and options
import React from 'react'

export type Option = {
  label: string
  value: string
}

interface SelectProps {
  label?: string
  name: string
  value: string
  options: Option[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<SelectProps> = ({
  label,
  name,
  value,
  options,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#D4A853] focus:border-[#D4A853]"
        onChange={onChange}
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
