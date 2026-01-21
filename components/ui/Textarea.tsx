import React from 'react'
import { cn } from '@/lib/utils'
import { AlertCircle } from 'lucide-react'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: React.ReactNode
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
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
            <div className="absolute left-3 top-3 text-neutral-400">
              {icon}
            </div>
          )}
          <textarea
            ref={ref}
            className={cn(
              'w-full rounded-lg border bg-white px-4 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 transition-all duration-150 resize-y min-h-[100px]',
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

Textarea.displayName = 'Textarea'


