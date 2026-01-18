'use client'

import React, { useState } from 'react'
import { Plus, Search, Edit, Trash2, Package } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Badge } from '@/components/ui/Badge'
import { Pagination } from '@/components/ui/Pagination'
import { formatPrice } from '@/lib/utils'

// Mock products data
const mockProducts = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  name: `Product ${i + 1}`,
  sku: `SKU-${String(i + 1).padStart(4, '0')}`,
  price: Math.floor(Math.random() * 200) + 20,
  stock: Math.floor(Math.random() * 100),
  status: Math.random() > 0.3 ? 'active' : 'inactive',
  category: ['Electronics', 'Clothing', 'Home', 'Sports'][i % 4],
}))

export default function AdminProductsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 10

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Products</h1>
          <p className="mt-2 text-neutral-600">Manage your product catalog</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setCurrentPage(1)
            }}
            icon={<Search className="h-5 w-5" />}
            className="max-w-md"
          />
          <div className="flex items-center gap-2">
            <select className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Home</option>
              <option>Sports</option>
            </select>
            <select className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Products ({filteredProducts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {paginatedProducts.length === 0 ? (
            <div className="py-12 text-center">
              <Package className="mx-auto h-12 w-12 text-neutral-400" />
              <p className="mt-4 text-neutral-600">No products found</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Product
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        SKU
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Price
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Stock
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                        Status
                      </th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-neutral-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                      >
                        <td className="px-4 py-3">
                          <p className="font-medium text-neutral-900">{product.name}</p>
                        </td>
                        <td className="px-4 py-3 text-sm text-neutral-600">{product.sku}</td>
                        <td className="px-4 py-3 text-sm text-neutral-600">{product.category}</td>
                        <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                          {formatPrice(product.price)}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-sm font-medium ${
                              product.stock < 10
                                ? 'text-error-600'
                                : product.stock < 50
                                ? 'text-warning-600'
                                : 'text-success-600'
                            }`}
                          >
                            {product.stock}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <Badge
                            variant={product.status === 'active' ? 'success' : 'outline'}
                            size="sm"
                          >
                            {product.status}
                          </Badge>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-end gap-2">
                            <button className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 transition-colors">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="rounded-lg p-2 text-neutral-600 hover:bg-error-50 hover:text-error-600 transition-colors">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
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

