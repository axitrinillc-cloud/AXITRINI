import React from 'react'
import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, icon, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-neutral-700 mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              'w-full rounded-lg border bg-white px-4 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 transition-all duration-150',
              'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
              error && 'border-error-500 focus:ring-error-500 focus:border-error-500',
              icon && 'pl-10',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1.5 flex items-center gap-1.5 text-sm text-error-600">
            <AlertCircle className="h-4 w-4" />
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

