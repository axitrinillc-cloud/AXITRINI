'use client'

import React, { useState, use } from 'react'
import { Star, Truck, RotateCcw, Shield, Minus, Plus, Heart, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent } from '@/components/ui/Card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { useCart } from '@/lib/store'
import { useToast } from '@/components/ui/Toast'
import { formatPrice } from '@/lib/utils'
import { getProductById } from '@/lib/products'
import { notFound } from 'next/navigation'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
    })
    showToast('Added to cart', 'success')
  }

  const handleBuyNow = () => {
    handleAddToCart()
    window.location.href = '/checkout'
  }

  const handleAmazonRedirect = () => {
    window.open(product.amazonUrl, '_blank', 'noopener,noreferrer')
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square overflow-hidden rounded-xl bg-neutral-100 mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square w-20 overflow-hidden rounded-lg border-2 transition-all ${
                  selectedImage === index
                    ? 'border-primary-500'
                    : 'border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            {product.badge && (
              <Badge
                variant={product.badge === 'Best Seller' ? 'error' : 'default'}
                className="mb-2"
              >
                {product.badge}
              </Badge>
            )}
            {discount > 0 && (
              <Badge variant="error" className="mb-2 ml-2">
                {discount}% OFF
              </Badge>
            )}
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              {product.name}
            </h1>
            <p className="text-xl text-neutral-600 mt-2">{product.tagline}</p>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-warning-400 text-warning-400" />
              <span className="font-semibold text-neutral-900">{product.rating}</span>
              <span className="text-neutral-600">
                ({product.reviewCount.toLocaleString()} reviews)
              </span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-neutral-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-neutral-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <p className="text-sm font-medium text-neutral-700 mb-2">Quantity</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
              {product.inStock && product.stockCount && (
                <span className="text-sm text-neutral-600">
                  {product.stockCount} in stock
                </span>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mb-8 flex flex-col gap-3">
            <Button
              size="lg"
              className="w-full group relative overflow-hidden glow hover:glow-success transition-all duration-300"
              onClick={handleAmazonRedirect}
            >
              <span className="relative z-10 flex items-center justify-center">
                Buy on Amazon
                <ExternalLink className="ml-2 h-5 w-5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-success-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1"
              >
                Add to Cart
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="px-4"
                aria-label="Add to favorites"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Trust Info */}
          <div className="space-y-3 border-t border-neutral-200 pt-6">
            <div className="flex items-start gap-3">
              <Truck className="h-5 w-5 text-primary-600 mt-0.5" />
              <div>
                <p className="font-medium text-neutral-900">Free Shipping</p>
                <p className="text-sm text-neutral-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <RotateCcw className="h-5 w-5 text-success-600 mt-0.5" />
              <div>
                <p className="font-medium text-neutral-900">30-Day Returns</p>
                <p className="text-sm text-neutral-600">Hassle-free returns</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-warning-600 mt-0.5" />
              <div>
                <p className="font-medium text-neutral-900">Secure Checkout</p>
                <p className="text-sm text-neutral-600">SSL encrypted payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-12">
        <Tabs defaultValue="description">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="features">Key Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount.toLocaleString()})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line text-neutral-700 leading-relaxed text-lg">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="features" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-600 mt-2" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="specifications" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-neutral-200 pb-3">
                      <dt className="text-sm font-medium text-neutral-500">{key}</dt>
                      <dd className="mt-1 text-base text-neutral-900">{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <p className="text-lg text-neutral-600 mb-4">
                    Reviews are displayed on Amazon. Click &quot;Buy on Amazon&quot; to see customer
                    reviews and ratings.
                  </p>
                  <Button variant="outline" onClick={handleAmazonRedirect}>
                    View Reviews on Amazon
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
