import React from 'react'
import { DollarSign, ShoppingCart, Users, Package, TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils'

const kpis = [
  {
    name: 'Total Revenue',
    value: '$124,567',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-primary-600',
    bgColor: 'bg-primary-100',
  },
  {
    name: 'Orders',
    value: '1,234',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'text-success-600',
    bgColor: 'bg-success-100',
  },
  {
    name: 'Customers',
    value: '5,678',
    change: '+15.3%',
    trend: 'up',
    icon: Users,
    color: 'text-warning-600',
    bgColor: 'bg-warning-100',
  },
  {
    name: 'Products',
    value: '2,456',
    change: '-2.1%',
    trend: 'down',
    icon: Package,
    color: 'text-error-600',
    bgColor: 'bg-error-100',
  },
]

const recentOrders = [
  { id: 'ORD-001', customer: 'John Doe', amount: 299.99, status: 'delivered', date: '2024-01-15' },
  { id: 'ORD-002', customer: 'Jane Smith', amount: 149.99, status: 'shipped', date: '2024-01-14' },
  { id: 'ORD-003', customer: 'Bob Johnson', amount: 89.99, status: 'processing', date: '2024-01-14' },
  { id: 'ORD-004', customer: 'Alice Brown', amount: 199.99, status: 'delivered', date: '2024-01-13' },
  { id: 'ORD-005', customer: 'Charlie Wilson', amount: 349.99, status: 'shipped', date: '2024-01-13' },
]

const statusConfig = {
  delivered: { label: 'Delivered', variant: 'success' as const },
  shipped: { label: 'Shipped', variant: 'default' as const },
  processing: { label: 'Processing', variant: 'warning' as const },
  cancelled: { label: 'Cancelled', variant: 'error' as const },
}

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Dashboard</h1>
        <p className="mt-2 text-neutral-600">Overview of your business performance</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon
          const TrendIcon = kpi.trend === 'up' ? TrendingUp : TrendingDown
          return (
            <Card key={kpi.name}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-600">{kpi.name}</p>
                    <p className="mt-2 text-2xl font-bold text-neutral-900">{kpi.value}</p>
                    <div className="mt-2 flex items-center gap-1">
                      <TrendIcon
                        className={`h-4 w-4 ${
                          kpi.trend === 'up' ? 'text-success-600' : 'text-error-600'
                        }`}
                      />
                      <span
                        className={`text-sm font-medium ${
                          kpi.trend === 'up' ? 'text-success-600' : 'text-error-600'
                        }`}
                      >
                        {kpi.change}
                      </span>
                      <span className="text-sm text-neutral-600">vs last month</span>
                    </div>
                  </div>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${kpi.bgColor}`}>
                    <Icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
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
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => {
                  const status = statusConfig[order.status as keyof typeof statusConfig]
                  return (
                    <tr
                      key={order.id}
                      className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                        {order.id}
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-700">{order.customer}</td>
                      <td className="px-4 py-3 text-sm font-medium text-neutral-900">
                        {formatPrice(order.amount)}
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant={status.variant} size="sm">
                          {status.label}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-sm text-neutral-600">{order.date}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

