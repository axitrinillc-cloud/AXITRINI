'use client'

import React, { useState } from 'react'
import { Search, Mail, Phone, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { Pagination } from '@/components/ui/Pagination'
import { formatPrice } from '@/lib/utils'

// Mock customers data
const mockCustomers = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  name: `Customer ${i + 1}`,
  email: `customer${i + 1}@example.com`,
  phone: `+1 (555) ${String(100 + i).padStart(3, '0')}-${String(1000 + i).padStart(4, '0')}`,
  orders: Math.floor(Math.random() * 20),
  totalSpent: Math.floor(Math.random() * 5000) + 100,
  joinDate: new Date(2024, 0, 15 - (i % 30)),
  status: Math.random() > 0.2 ? 'active' : 'inactive',
}))

export default function AdminCustomersPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const customersPerPage = 10

  const filteredCustomers = mockCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage)
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * customersPerPage,
    currentPage * customersPerPage
  )

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Customers</h1>
        <p className="mt-2 text-neutral-600">Manage your customer database</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <Input
            placeholder="Search customers..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            icon={<Search className="h-5 w-5" />}
            className="max-w-md"
          />
        </CardContent>
      </Card>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Customers ({filteredCustomers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {paginatedCustomers.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-neutral-600">No customers found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Customer
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Contact
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Orders
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Total Spent
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Join Date
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedCustomers.map((customer) => (
                      <tr
                        key={customer.id}
                        className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                      >
                        <td className="px-4 py-3">
                          <p className="font-medium text-neutral-900">{customer.name}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                              <Mail className="h-4 w-4" />
                              {customer.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-neutral-600">
                              <Phone className="h-4 w-4" />
                              {customer.phone}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-neutral-600">
                          {customer.orders}
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                          {formatPrice(customer.totalSpent)}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2 text-sm text-neutral-600">
                            <Calendar className="h-4 w-4" />
                            {customer.joinDate.toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={customer.status === 'active' ? 'success' : 'outline'}
                            size="sm"
                          >
                            {customer.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
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

