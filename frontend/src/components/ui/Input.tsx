import React, { forwardRef, useState } from 'react'
import clsx from 'clsx'
import { Eye, EyeOff } from 'lucide-react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  variant?: 'default' | 'outline' | 'products' | 'login'
  inputSize?: 'sm' | 'md' | 'lg'
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  isLoading?: boolean
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      variant = 'default',
      inputSize = 'md',
      leftIcon,
      rightIcon,
      isLoading = false,
      type,
      className,
      id,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false)

    const isPassword = type === 'password'

    const baseClasses =
      'w-full rounded-md border transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = clsx({
      'border-gray-200 bg-gray-100 focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/30':
        variant === 'default',

      'border-gray-200 rounded-none focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/30':
        variant === 'login',

      'border-2 border-black focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20':
        variant === 'outline',

      'border border-gray-200 rounded-xs bg-[#F9F9F9] focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/20':
        variant === 'products',
    })

    const sizeClasses = clsx({
      'px-3 py-2 text-sm': inputSize === 'sm',
      'px-7 py-2 text-base': inputSize === 'md',
      'px-5 py-3 text-base': inputSize === 'lg',
    })

    return (
      <div className="w-full">
        {/* LABEL */}
        {label && (
          <label
            htmlFor={id}
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        {/* INPUT WRAPPER */}
        <div className="relative">
          {/* LEFT ICON */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          {/* INPUT */}
          <input
            ref={ref}
            id={id}
            type={isPassword ? (showPassword ? 'text' : 'password') : type}
            disabled={isLoading}
            className={clsx(
              baseClasses,
              variantClasses,
              sizeClasses,
              leftIcon && 'pl-10',
              (rightIcon || isPassword) && 'pr-10',
              error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
              className,
            )}
            {...props}
          />

          {/* RIGHT ICON / PASSWORD TOGGLE */}
          {(rightIcon || isPassword) && (
            <div
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => isPassword && setShowPassword(!showPassword)}
            >
              {isPassword ? (
                showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )
              ) : (
                rightIcon
              )}
            </div>
          )}

          {/* LOADING STATE */}
          {isLoading && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              Loading...
            </div>
          )}
        </div>

        {/* ERROR */}
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

Input.displayName = 'Input'

export default Input
