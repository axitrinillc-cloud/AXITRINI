'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface TabsProps {
  defaultValue?: string
  children: React.ReactNode
  className?: string
}

export function Tabs({ defaultValue, children, className }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <div className={cn('w-full', className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            activeTab,
            setActiveTab,
          } as any)
        }
        return child
      })}
    </div>
  )
}

interface TabsListProps {
  children: React.ReactNode
  className?: string
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div
      className={cn(
        'inline-flex h-11 items-center justify-center rounded-lg bg-neutral-100 p-1',
        className
      )}
      role="tablist"
    >
      {children}
    </div>
  )
}

interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  activeTab?: string
  setActiveTab?: (value: string) => void
  className?: string
}

export function TabsTrigger({
  value,
  children,
  activeTab,
  setActiveTab,
  className,
}: TabsTriggerProps) {
  const isActive = activeTab === value

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-all duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        isActive
          ? 'bg-white text-primary-600 shadow-sm'
          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50',
        className
      )}
      onClick={() => setActiveTab?.(value)}
      role="tab"
      aria-selected={isActive}
    >
      {children}
    </button>
  )
}

interface TabsContentProps {
  value: string
  children: React.ReactNode
  activeTab?: string
  className?: string
}

export function TabsContent({
  value,
  children,
  activeTab,
  className,
}: TabsContentProps) {
  if (activeTab !== value) return null

  return (
    <div
      className={cn('mt-4 focus-visible:outline-none', className)}
      role="tabpanel"
    >
      {children}
    </div>
  )
}

