// textarea component with tailwind styles
import React from 'react'

interface TextareaProps {
  label: string
  name: string
  value: string
  placeholder?: string
  rows?: number
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  value,
  placeholder,
  rows = 4,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#D4A853] focus:border-[#D4A853] transition-all duration-200"
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  )
}

export default Textarea
