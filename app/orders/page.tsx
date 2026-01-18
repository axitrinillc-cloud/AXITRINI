'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Package, ChevronRight, Eye } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatPrice, formatDate } from '@/lib/utils'

// Mock orders data - replace with real API call
const mockOrders = [
  {
    id: 'ORD-001',
    date: new Date('2024-01-15'),
    status: 'delivered',
    total: 299.99,
    items: [
      { name: 'Premium Wireless Headphones', quantity: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100' },
    ],
  },
  {
    id: 'ORD-002',
    date: new Date('2024-01-10'),
    status: 'shipped',
    total: 149.99,
    items: [
      { name: 'Wireless Speaker', quantity: 1, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=100' },
    ],
  },
  {
    id: 'ORD-003',
    date: new Date('2024-01-05'),
    status: 'processing',
    total: 89.99,
    items: [
      { name: 'Designer Backpack', quantity: 1, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100' },
    ],
  },
]

const statusConfig = {
  delivered: { label: 'Delivered', variant: 'success' as const },
  shipped: { label: 'Shipped', variant: 'default' as const },
  processing: { label: 'Processing', variant: 'warning' as const },
  cancelled: { label: 'Cancelled', variant: 'error' as const },
}

export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  if (mockOrders.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <Package className="mx-auto h-16 w-16 text-neutral-400" />
          <h2 className="mt-4 text-2xl font-bold text-neutral-900">No orders yet</h2>
          <p className="mt-2 text-neutral-600">
            When you place an order, it will appear here
          </p>
          <Button className="mt-6" asChild>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">
        My Orders
      </h1>

      <div className="space-y-4">
        {mockOrders.map((order) => {
          const status = statusConfig[order.status]
          const isExpanded = selectedOrder === order.id

          return (
            <Card key={order.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-lg font-semibold text-neutral-900">
                          Order {order.id}
                        </h3>
                        <Badge variant={status.variant}>{status.label}</Badge>
                      </div>
                      <p className="text-sm text-neutral-600">
                        Placed on {formatDate(order.date)}
                      </p>
                      <p className="text-sm font-medium text-neutral-900 mt-1">
                        Total: {formatPrice(order.total)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedOrder(isExpanded ? null : order.id)}
                      >
                        {isExpanded ? 'Hide' : 'View'} Details
                        <ChevronRight
                          className={`ml-2 h-4 w-4 transition-transform ${
                            isExpanded ? 'rotate-90' : ''
                          }`}
                        />
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/orders/${order.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-6 border-t border-neutral-200 pt-6">
                      <h4 className="font-semibold text-neutral-900 mb-4">Order Items</h4>
                      <div className="space-y-3">
                        {order.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-4 rounded-lg border border-neutral-200 p-3"
                          >
                            <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-100">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium text-neutral-900">{item.name}</p>
                              <p className="text-sm text-neutral-600">
                                Quantity: {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm">
                          Track Package
                        </Button>
                        {order.status === 'delivered' && (
                          <Button variant="outline" size="sm">
                            Write Review
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

