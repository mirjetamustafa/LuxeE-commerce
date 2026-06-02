// Button component with variants and sizes
import React from 'react'
import clsx from 'clsx'

const Button = ({
  variant = 'default',
  size = 'medium',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary' | 'secondary' | 'blur' | 'ghost'
  size?: 'small' | 'medium' | 'large'
}) => {
  const baseClasses =
    'focus:outline-none focus:ring-2 focus:ring-[#D4A853] focus:ring-offset-2 transition-colors cursor-pointer duration-200'
  const variantClasses = clsx({
    'bg-[#D4A853] text-white hover:bg-[#C09A4A]': variant === 'primary',
    'bg-white text-gray-800 border border-gray-300 hover:bg-black hover:bg-black hover:text-white':
      variant === 'secondary',
    'bg-black text-white  hover:bg-[#D4A853]': variant === 'default',
    'bg-white/10 border border-white/20 text-white backdrop-blur-xs hover:bg-white/20 transition-all duration-300':
      variant === 'blur',
    'bg-white text-gray-800  hover:bg-gray-100': variant === 'ghost',
  })
  const sizeClasses = clsx({
    'px-4 py-2 text-sm': size === 'small',
    'px-6 py-3 text-base': size === 'medium',
    'px-6 py-3 w-full text-xl': size === 'large',
  })

  return (
    <button
      className={clsx(baseClasses, variantClasses, sizeClasses)}
      {...props}
    />
  )
}

export default Button
