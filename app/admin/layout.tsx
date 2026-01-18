import React from 'react'
import Link from 'next/link'
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, BarChart3, LogOut } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 border-r border-neutral-200 bg-white md:block">
        <div className="flex h-16 items-center border-b border-neutral-200 px-6">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="text-xl font-bold">
              <span className="text-primary-600">Axitri</span>
              <span className="text-success-600">ni</span>
            </span>
            <span className="text-xs text-neutral-500">Admin</span>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = false // Replace with actual route checking
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-64 border-t border-neutral-200 p-4">
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors">
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button className="md:hidden">Menu</button>
              <div className="hidden md:block">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-64 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium text-neutral-900">Admin User</p>
                <p className="text-xs text-neutral-600">admin@axitrini.com</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}

