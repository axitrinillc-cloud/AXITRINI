import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900">Settings</h1>
        <p className="mt-2 text-neutral-600">Manage your store settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Store Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Store Name" defaultValue="AXITRINI" />
            <Input label="Store Email" type="email" defaultValue="contact@axitrini.com" />
            <Input label="Phone" type="tel" defaultValue="+1 (555) 123-4567" />
            <Input label="Address" />
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Shipping Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Free Shipping Threshold" type="number" defaultValue="50" />
            <Input label="Default Shipping Rate" type="number" defaultValue="9.99" />
            <Input label="Processing Time (days)" type="number" defaultValue="1" />
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Payment Methods
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm text-neutral-700">Credit Card</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-neutral-700">PayPal</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-neutral-700">Apple Pay</span>
                </label>
              </div>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tax Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input label="Tax Rate (%)" type="number" defaultValue="8" />
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Tax Calculation
              </label>
              <select className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Apply to all products</option>
                <option>Exclude shipping</option>
                <option>Custom rules</option>
              </select>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

