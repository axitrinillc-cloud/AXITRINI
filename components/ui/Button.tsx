import React from 'react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]'

    const variants = {
      primary:
        'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-md hover:shadow-lg',
      secondary:
        'bg-neutral-200 text-neutral-900 hover:bg-neutral-300 active:bg-neutral-400',
      outline:
        'border-2 border-neutral-300 bg-transparent text-neutral-700 hover:bg-neutral-50 active:bg-neutral-100',
      ghost:
        'bg-transparent text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200',
      destructive:
        'bg-error-600 text-white hover:bg-error-700 active:bg-error-800 shadow-md hover:shadow-lg',
    }

    const sizes = {
      sm: 'h-9 px-3 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-12 px-8 text-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

