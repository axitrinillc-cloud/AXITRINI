'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/Logo'

export function BrandNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neutral-200/80 bg-white/95 backdrop-blur-lg shadow-sm'
          : 'border-b border-transparent bg-white/60 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="group transition-transform duration-300 hover:scale-105">
            <Logo href="/brand" size="md" />
          </div>
          <Button
            size="sm"
            className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg"
            asChild
          >
            <a
              href="https://www.amazon.com/stores/page/YOUR_AMAZON_STORE_ID"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 flex items-center">
                Shop on Amazon
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-success-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

