import React, { forwardRef } from 'react'
import clsx from 'clsx'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  variant?: 'default' | 'outline'
  inputSize?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      variant = 'default',
      inputSize = 'md',
      icon,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      'w-full rounded-md border transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = clsx({
      'border-gray-300 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/30':
        variant === 'default',

      'border-2 border-black focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20':
        variant === 'outline',
    })

    const sizeClasses = clsx({
      'px-3 py-2 text-sm': inputSize === 'sm',
      'px-4 py-3 text-base': inputSize === 'md',
      'px-5 py-4 text-lg': inputSize === 'lg',
    })

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            id={id}
            className={clsx(
              baseClasses,
              variantClasses,
              sizeClasses,
              icon && 'pl-10', // 👉 hap vend për icon
              error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
              className,
            )}
            {...props}
          />
        </div>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
