// textarea component with tailwind styles
import React from 'react'

interface TextareaProps {
  label: string
  placeholder?: string
  rows?: number
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  rows = 4,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <textarea
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-[#D4A853] focus:border-[#D4A853] transition-all duration-200"
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  )
}

export default Textarea
