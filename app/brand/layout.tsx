import type { Metadata } from 'next'
import { BrandNavbar } from '@/components/layout/BrandNavbar'

export const metadata: Metadata = {
  title: 'Axitrini - Modern Commerce. Trusted Brands.',
  description:
    'Axitrini builds product brands that thrive on trusted marketplaces. Quality products, seamless fulfillment, modern commerce. Shop our brands on Amazon.',
  openGraph: {
    title: 'Axitrini - Modern Commerce. Trusted Brands.',
    description:
      'Axitrini builds product brands that thrive on trusted marketplaces. Quality products, seamless fulfillment, modern commerce.',
    type: 'website',
  },
}

export default function BrandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <BrandNavbar />
      <main className="flex-1">{children}</main>
    </div>
  )
}

