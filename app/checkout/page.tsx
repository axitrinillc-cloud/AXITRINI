'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useCart } from '@/lib/store'
import { useToast } from '@/components/ui/Toast'
import { formatPrice } from '@/lib/utils'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCart()
  const { showToast } = useToast()
  const [isProcessing, setIsProcessing] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: 'United States',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const subtotal = getTotal()
  const shipping = subtotal > 50 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.email) newErrors.email = 'Email is required'
    if (!formData.firstName) newErrors.firstName = 'First name is required'
    if (!formData.lastName) newErrors.lastName = 'Last name is required'
    if (!formData.address) newErrors.address = 'Address is required'
    if (!formData.city) newErrors.city = 'City is required'
    if (!formData.state) newErrors.state = 'State is required'
    if (!formData.zip) newErrors.zip = 'ZIP code is required'
    if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required'
    if (!formData.cardName) newErrors.cardName = 'Cardholder name is required'
    if (!formData.cardExpiry) newErrors.cardExpiry = 'Expiry date is required'
    if (!formData.cardCvv) newErrors.cardCvv = 'CVV is required'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      showToast('Please fill in all required fields', 'error')
      return
    }

    setIsProcessing(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    showToast('Order placed successfully!', 'success')
    clearCart()
    router.push('/orders')
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900">Your cart is empty</h2>
          <p className="mt-2 text-neutral-600">
            Add items to your cart before checkout
          </p>
          <Button className="mt-6" onClick={() => router.push('/products')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-neutral-900 mb-8">
        Checkout
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  type="email"
                  name="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                />
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card>
              <CardHeader>
                <CardTitle>Shipping Address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    name="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                  />
                </div>
                <Input
                  name="address"
                  label="Address"
                  value={formData.address}
                  onChange={handleChange}
                  error={errors.address}
                />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <Input
                    name="city"
                    label="City"
                    value={formData.city}
                    onChange={handleChange}
                    error={errors.city}
                  />
                  <Input
                    name="state"
                    label="State"
                    value={formData.state}
                    onChange={handleChange}
                    error={errors.state}
                  />
                  <Input
                    name="zip"
                    label="ZIP Code"
                    value={formData.zip}
                    onChange={handleChange}
                    error={errors.zip}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Payment Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  name="cardNumber"
                  label="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  error={errors.cardNumber}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
                <Input
                  name="cardName"
                  label="Cardholder Name"
                  value={formData.cardName}
                  onChange={handleChange}
                  error={errors.cardName}
                  placeholder="John Doe"
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    name="cardExpiry"
                    label="Expiry Date"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    error={errors.cardExpiry}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                  <Input
                    name="cardCvv"
                    label="CVV"
                    value={formData.cardCvv}
                    onChange={handleChange}
                    error={errors.cardCvv}
                    placeholder="123"
                    maxLength={4}
                    type="password"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-neutral-600">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-medium">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-neutral-200 pt-4 space-y-2">
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
                </div>
                <div className="border-t border-neutral-200 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isProcessing}
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Complete Order
                </Button>
                <p className="text-xs text-center text-neutral-500">
                  Your payment information is secure and encrypted
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  )
}

