'use client'

import React, { useState } from 'react'
import { Search, Eye } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Pagination } from '@/components/ui/Pagination'
import { formatPrice, formatDate } from '@/lib/utils'

// Mock orders data
const mockOrders = Array.from({ length: 50 }, (_, i) => ({
  id: `ORD-${String(i + 1).padStart(3, '0')}`,
  customer: `Customer ${i + 1}`,
  email: `customer${i + 1}@example.com`,
  amount: Math.floor(Math.random() * 500) + 50,
  status: ['delivered', 'shipped', 'processing', 'cancelled'][Math.floor(Math.random() * 4)],
  date: new Date(2024, 0, 15 - (i % 30)),
  items: Math.floor(Math.random() * 5) + 1,
}))

const statusConfig = {
  delivered: { label: 'Delivered', variant: 'success' as const },
  shipped: { label: 'Shipped', variant: 'default' as const },
  processing: { label: 'Processing', variant: 'warning' as const },
  cancelled: { label: 'Cancelled', variant: 'error' as const },
}

export default function AdminOrdersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const ordersPerPage = 10

  const filteredOrders = mockOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.email.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage)
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Orders</h1>
        <p className="mt-2 text-neutral-600">Manage and track customer orders</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Input
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
              icon={<Search className="h-5 w-5" />}
              className="max-w-md"
            />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value)
                setCurrentPage(1)
              }}
              className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">All Status</option>
              <option value="processing">Processing</option>
              <option value="shipped">Shipped</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Orders ({filteredOrders.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {paginatedOrders.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-neutral-600">No orders found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Order ID
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Customer
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Items
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Amount
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Date
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedOrders.map((order) => {
                      const status = statusConfig[order.status as keyof typeof statusConfig]
                      return (
                        <tr
                          key={order.id}
                          className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                        >
                          <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                            {order.id}
                          </td>
                          <td className="px-4 py-3">
                            <p className="text-sm font-medium text-neutral-900">{order.customer}</p>
                            <p className="text-xs text-neutral-600">{order.email}</p>
                          </td>
                          <td className="px-4 py-3 text-sm text-neutral-600">{order.items}</td>
                          <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                            {formatPrice(order.amount)}
                          </td>
                          <td className="px-4 py-3">
                            <Badge variant={status.variant} size="sm">
                              {status.label}
                            </Badge>
                          </td>
                          <td className="px-4 py-3 text-sm text-neutral-600">
                            {formatDate(order.date)}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center justify-end">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              {totalPages > 1 && (
                <div className="mt-6">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

