'use client'

import React from 'react'
import { User, Mail, Phone, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function AccountPage() {
  // Mock user data - replace with real auth
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St',
    city: 'Birmingham',
    state: 'AL',
    zip: '35203',
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">
        Account Settings
      </h1>

      <div className="space-y-6">
        {/* Profile Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="First Name"
                defaultValue={user.firstName}
              />
              <Input
                label="Last Name"
                defaultValue={user.lastName}
              />
            </div>
            <Input
              type="email"
              label="Email"
              defaultValue={user.email}
              icon={<Mail className="h-5 w-5" />}
            />
            <Input
              type="tel"
              label="Phone"
              defaultValue={user.phone}
              icon={<Phone className="h-5 w-5" />}
            />
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        {/* Address */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Default Shipping Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              label="Address"
              defaultValue={user.address}
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Input
                label="City"
                defaultValue={user.city}
              />
              <Input
                label="State"
                defaultValue={user.state}
              />
              <Input
                label="ZIP Code"
                defaultValue={user.zip}
              />
            </div>
            <Button>Update Address</Button>
          </CardContent>
        </Card>

        {/* Password */}
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              label="Current Password"
            />
            <Input
              type="password"
              label="New Password"
            />
            <Input
              type="password"
              label="Confirm New Password"
            />
            <Button>Update Password</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

