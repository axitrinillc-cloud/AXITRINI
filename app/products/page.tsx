'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { products } from '@/lib/products'
import { formatPrice } from '@/lib/utils'

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 mb-4">
          Our <span className="gradient-text">Products</span>
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Three carefully curated products, each representing our commitment to quality and
          excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 mb-16">
        {products.map((product, index) => {
          const discount = product.originalPrice
            ? Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              )
            : 0

          return (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift observe-fade"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant={product.badge === 'Best Seller' ? 'error' : 'default'}
                        className="shadow-lg"
                      >
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                  {discount > 0 && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="error" className="shadow-lg">
                        {discount}% OFF
                      </Badge>
                    </div>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <Badge variant="outline" className="bg-white">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-warning-400 text-warning-400" />
                    <span className="text-sm font-semibold text-neutral-700">
                      {product.rating}
                    </span>
                    <span className="text-sm text-neutral-500">
                      ({product.reviewCount.toLocaleString()} reviews)
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{product.name}</h3>
                  <p className="text-neutral-600 mb-4 text-sm">{product.tagline}</p>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-bold text-neutral-900">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-neutral-500 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <Button className="w-full group" size="lg" asChild>
                    <div>
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Button>
                </CardContent>
              </Link>
            </Card>
          )
        })}
      </div>

      {/* Why Only 3 Products Section */}
      <div className="max-w-4xl mx-auto">
        <Card className="border-0 shadow-premium">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
              Quality Over Quantity
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                At Axitrini, we believe in the power of focus. Instead of offering hundreds of
                products, we&apos;ve carefully selected just three exceptional items that we&apos;re
                genuinely proud to stand behind.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                Each product in our collection has been:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-neutral-700 mb-6">
                <li>Thoroughly researched and tested</li>
                <li>Refined based on customer feedback</li>
                <li>Optimized for performance and value</li>
                <li>Backed by our quality guarantee</li>
              </ul>
              <p className="text-lg text-neutral-700 leading-relaxed">
                This focused approach allows us to ensure every product meets our high standards
                and delivers exceptional value to our customers.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
