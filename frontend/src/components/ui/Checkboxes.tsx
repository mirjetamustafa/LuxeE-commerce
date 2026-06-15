import React from 'react'
import clsx from 'clsx'

interface CheckboxesProps {
  id: string
  label: string
  checked: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkboxes: React.FC<CheckboxesProps> = ({
  id,
  label,
  checked,
  onChange,
}) => {
  return (
    <label htmlFor={id} className="flex cursor-pointer items-center gap-3">
      {/* hidden input */}
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />

      {/* custom checkbox */}
      <div
        className={clsx(
          'relative h-4 w-4 border rounded-xs transition-all duration-200',
          checked ? 'border-[#D4A853]' : 'border-gray-300 bg-white',
        )}
      >
        {/* inner square (animated) */}
        <div
          className={clsx(
            'absolute inset-1 bg-[#D4A853] transition-all duration-200',
            checked ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          )}
        />
      </div>

      {/* label */}
      <span
        className={clsx(
          'text-sm text-gray-700',
          checked ? ' font-medium ' : 'font-normal',
        )}
      >
        {label}
      </span>
    </label>
  )
}

export default Checkboxes
