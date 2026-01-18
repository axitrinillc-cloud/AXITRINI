'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  href?: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'text' | 'image' | 'auto' // auto tries image first, falls back to text
}

export function Logo({
  href,
  className = '',
  size = 'md',
  variant = 'auto',
}: LogoProps) {
  const sizeClasses = {
    sm: { image: 'h-6', text: 'text-lg' },
    md: { image: 'h-8', text: 'text-xl' },
    lg: { image: 'h-10', text: 'text-2xl' },
    xl: { image: 'h-12', text: 'text-3xl' },
  }

  const LogoContent = () => {
    // If variant is 'text', always show text
    if (variant === 'text') {
      return (
        <span className={`font-bold ${sizeClasses[size].text} ${className}`}>
          <span className="text-primary-600">Axitri</span>
          <span className="text-success-600">ni</span>
        </span>
      )
    }

    // If variant is 'image', try to show image (will need error handling)
    if (variant === 'image') {
      return (
        <div className={`relative ${sizeClasses[size].image} w-auto ${className}`}>
          <Image
            src="/logo.svg"
            alt="Axitrini"
            width={size === 'sm' ? 90 : size === 'md' ? 120 : size === 'lg' ? 150 : 180}
            height={size === 'sm' ? 30 : size === 'md' ? 40 : size === 'lg' ? 50 : 60}
            className="h-full w-auto"
            priority
          />
        </div>
      )
    }

    // 'auto' variant: Show text for now, can be enhanced to check for image
    return (
      <span className={`font-bold ${sizeClasses[size].text} ${className}`}>
        <span className="text-primary-600">Axitri</span>
        <span className="text-success-600">ni</span>
      </span>
    )
  }

  if (href) {
    return (
      <Link href={href} className="flex items-center">
        <LogoContent />
      </Link>
    )
  }

  return <LogoContent />
}
