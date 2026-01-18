'use client'

import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  side?: 'left' | 'right'
}

export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  side = 'right',
}: DrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'fixed top-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-premium-lg transition-transform duration-250 ease-smooth',
          side === 'left' ? 'left-0' : 'right-0',
          isOpen ? 'translate-x-0' : side === 'left' ? '-translate-x-full' : 'translate-x-full'
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
      >
        {(title || true) && (
          <div className="flex items-center justify-between border-b border-neutral-200 p-4">
            {title && (
              <h2 id="drawer-title" className="text-xl font-semibold">
                {title}
              </h2>
            )}
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 transition-colors"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        <div className="overflow-y-auto h-[calc(100vh-73px)]">{children}</div>
      </div>
    </>
  )
}

