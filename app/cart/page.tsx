'use client'

import React from 'react'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useCart } from '@/lib/store'
import { formatPrice } from '@/lib/utils'

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart()
  const subtotal = getTotal()
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-16 w-16 text-neutral-400" />
          <h2 className="mt-4 text-2xl font-bold text-neutral-900">Your cart is empty</h2>
          <p className="mt-2 text-neutral-600">
            Start shopping to add items to your cart
          </p>
          <Button className="mt-6" asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">
        Shopping Cart
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-neutral-900">{item.name}</h3>
                        {item.variant && (
                          <p className="text-sm text-neutral-600">Variant: {item.variant}</p>
                        )}
                        <p className="mt-1 text-lg font-semibold text-neutral-900">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-neutral-400 hover:text-error-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="flex items-center gap-2 rounded-lg border border-neutral-300">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center hover:bg-neutral-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center hover:bg-neutral-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-neutral-900">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-end">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-success-600">Free</span>
                    ) : (
                      formatPrice(shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Tax</span>
                  <span className="font-medium">{formatPrice(tax)}</span>
                </div>
                {subtotal < 50 && (
                  <p className="text-xs text-neutral-500">
                    Add {formatPrice(50 - subtotal)} more for free shipping
                  </p>
                )}
              </div>
              <div className="border-t border-neutral-200 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              <Button size="lg" className="w-full" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Link
                href="/products"
                className="block text-center text-sm text-primary-600 hover:text-primary-700 transition-colors"
              >
                Continue Shopping
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

