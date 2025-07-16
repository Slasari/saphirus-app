import React from 'react'
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  fullWidth?: boolean
  onClick?: () => void
}
export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  onClick,
}: ButtonProps) {
  const baseClasses =
    'py-2 px-6 rounded-sm font-medium transition-all duration-200 focus:outline-none cursor-pointer'
  const variantClasses = {
    primary: 'bg-primary hover:bg-primaryHover text-white',
    secondary:
      'bg-transparent border border-primary text-primary hover:bg-primaryHover hover:text-white active:bg-primaryHover',
    tertiary: 
      'bg-primary text-white' 
  }
  const widthClass = fullWidth ? 'w-full' : ''
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
