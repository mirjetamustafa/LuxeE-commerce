// Button component with variants and sizes
import React from 'react'
import clsx from 'clsx'

const Button = ({
  variant = 'default',
  size = 'medium',
  fullWidth = false,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'blur'
    | 'ghost'
    | 'admin'
    | 'edit'
    | 'delete'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}) => {
  const baseClasses =
    'inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4A853] focus:ring-offset-2 transition-colors cursor-pointer duration-200'
  const variantClasses = clsx({
    'bg-[#D4A853] text-white hover:bg-[#C09A4A]': variant === 'primary',
    'bg-[#F9F9F9] text-gray-900 border border-gray-500 hover:bg-black hover:bg-black hover:text-white':
      variant === 'secondary',
    'bg-black text-white  hover:bg-[#D4A853]': variant === 'default',
    'bg-white/10 border border-white/20 text-white backdrop-blur-xs hover:bg-white/20 transition-all duration-300':
      variant === 'blur',
    'bg-white text-gray-800  hover:bg-gray-100 shadow-md': variant === 'ghost',

    'bg-indigo-600 text-white hover:bg-indigo-700 rounded-md':
      variant === 'admin',
    'text-gray-600 hover:text-indigo-700': variant === 'edit',
    'text-gray-600 hover:text-red-700': variant === 'delete',
  })
  const sizeClasses = clsx({
    'px-4 py-2 text-sm': size === 'small',
    'px-6 py-3 text-base font-semibold': size === 'medium',
    'px-6 py-3 text-lg font-medium': size === 'large',
  })

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses,
        sizeClasses,
        fullWidth && 'w-full',
      )}
      {...props}
    />
  )
}

export default Button
