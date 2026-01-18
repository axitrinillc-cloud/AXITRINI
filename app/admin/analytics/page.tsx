import React from 'react'
import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Users, Package } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Analytics</h1>
        <p className="mt-2 text-neutral-600">Business insights and performance metrics</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600">Revenue</p>
                <p className="mt-2 text-2xl font-bold text-neutral-900">$124,567</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-success-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+12.5%</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-primary-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600">Orders</p>
                <p className="mt-2 text-2xl font-bold text-neutral-900">1,234</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-success-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+8.2%</span>
                </div>
              </div>
              <ShoppingCart className="h-8 w-8 text-success-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600">Customers</p>
                <p className="mt-2 text-2xl font-bold text-neutral-900">5,678</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-success-600">
                  <TrendingUp className="h-4 w-4" />
                  <span>+15.3%</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-warning-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-neutral-600">Products</p>
                <p className="mt-2 text-2xl font-bold text-neutral-900">2,456</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-error-600">
                  <TrendingDown className="h-4 w-4" />
                  <span>-2.1%</span>
                </div>
              </div>
              <Package className="h-8 w-8 text-error-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="py-12 text-center text-neutral-600">
              Chart placeholder - Integrate with your preferred charting library
              <br />
              (e.g., Recharts, Chart.js, or similar)
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="py-12 text-center text-neutral-600">
              Chart placeholder - Integrate with your preferred charting library
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

