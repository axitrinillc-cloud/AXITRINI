import React from 'react'
import Link from 'next/link'
import { ArrowLeft, Package, Truck, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatPrice, formatDate } from '@/lib/utils'

// Mock order detail - replace with real API call
const mockOrder = {
  id: 'ORD-001',
  date: new Date('2024-01-15'),
  status: 'delivered',
  total: 299.99,
  subtotal: 199.99,
  shipping: 0,
  tax: 16.00,
  items: [
    {
      name: 'Premium Wireless Headphones',
      quantity: 1,
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
    },
  ],
  shippingAddress: {
    name: 'John Doe',
    address: '123 Main St',
    city: 'Birmingham',
    state: 'AL',
    zip: '35203',
    country: 'United States',
  },
  tracking: {
    carrier: 'UPS',
    number: '1Z999AA10123456784',
    estimatedDelivery: new Date('2024-01-20'),
  },
}

const statusConfig = {
  delivered: { label: 'Delivered', variant: 'success' as const },
  shipped: { label: 'Shipped', variant: 'default' as const },
  processing: { label: 'Processing', variant: 'warning' as const },
  cancelled: { label: 'Cancelled', variant: 'error' as const },
}

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const status = statusConfig[mockOrder.status]

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/orders"
        className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Orders
      </Link>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            Order {mockOrder.id}
          </h1>
          <Badge variant={status.variant} size="md">
            {status.label}
          </Badge>
        </div>
        <p className="text-neutral-600">
          Placed on {formatDate(mockOrder.date)}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Order Items */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockOrder.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 rounded-lg border border-neutral-200 p-4"
                >
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900">{item.name}</h3>
                    <p className="text-sm text-neutral-600 mt-1">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-lg font-semibold text-neutral-900 mt-2">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-neutral-900">{mockOrder.shippingAddress.name}</p>
              <p className="text-neutral-600 mt-1">
                {mockOrder.shippingAddress.address}
                <br />
                {mockOrder.shippingAddress.city}, {mockOrder.shippingAddress.state}{' '}
                {mockOrder.shippingAddress.zip}
                <br />
                {mockOrder.shippingAddress.country}
              </p>
            </CardContent>
          </Card>

          {mockOrder.tracking && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  Tracking Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm text-neutral-600">Carrier</p>
                  <p className="font-medium text-neutral-900">{mockOrder.tracking.carrier}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Tracking Number</p>
                  <p className="font-medium text-neutral-900 font-mono">
                    {mockOrder.tracking.number}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Estimated Delivery</p>
                  <p className="font-medium text-neutral-900">
                    {formatDate(mockOrder.tracking.estimatedDelivery)}
                  </p>
                </div>
                <Button variant="outline" className="mt-4">
                  Track Package
                </Button>
              </CardContent>
            </Card>
          )}
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
                  <span className="font-medium">{formatPrice(mockOrder.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="font-medium">
                    {mockOrder.shipping === 0 ? (
                      <span className="text-success-600">Free</span>
                    ) : (
                      formatPrice(mockOrder.shipping)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Tax</span>
                  <span className="font-medium">{formatPrice(mockOrder.tax)}</span>
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(mockOrder.total)}</span>
                </div>
              </div>
              {mockOrder.status === 'delivered' && (
                <Button variant="outline" className="w-full">
                  Write Review
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

