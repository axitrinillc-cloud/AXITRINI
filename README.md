# AXITRINI - Premium E-commerce Platform

A modern, premium e-commerce web application built with Next.js 14, TypeScript, and Tailwind CSS. Designed to provide a Stripe/Square-level user experience with a focus on conversion optimization and professional credibility.

## Features

### Storefront
- **Home Page**: Hero section, featured categories, best sellers, trust indicators, newsletter signup
- **Product Listing (PLP)**: Advanced filtering, sorting, grid/list views, pagination
- **Product Detail (PDP)**: Image gallery, variant selection, reviews, specifications
- **Shopping Cart**: Quantity management, order summary, persistent storage
- **Checkout**: Multi-step form, secure payment UI, order summary
- **Account & Orders**: Profile management, order history, order tracking

### Admin Dashboard
- **Dashboard**: KPI cards, recent orders overview
- **Products Management**: Full CRUD operations, inventory tracking, search & filters
- **Orders Management**: Order tracking, status management, customer details
- **Analytics**: Business metrics and performance indicators

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (with persistence)
- **Icons**: Lucide React
- **Form Handling**: React Hook Form (ready for integration)

## Design System

### Colors
- **Primary**: Blue palette (primary-50 to primary-950)
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green for positive actions
- **Warning**: Amber for alerts
- **Error**: Red for errors

### Typography
- Headings: Bold, tracking-tight
- Body: System font stack with Inter preference
- Scale: Responsive from mobile to desktop

### Spacing
- Consistent 4px base unit
- Scale: 4, 8, 12, 16, 24, 32, 48px

### Components
All components are reusable and follow consistent patterns:
- Button (primary, secondary, outline, ghost, destructive)
- Input (with error states, icons, helper text)
- Card (header, content, footer variants)
- Badge (status indicators)
- Modal & Drawer (for mobile menus and dialogs)
- Toast (notifications)
- Tabs, Pagination, Skeleton loaders

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
axitrini/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard pages
│   ├── account/           # User account pages
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── orders/            # Order history
│   ├── products/          # Product pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/
│   ├── layout/            # Navbar, Footer
│   └── ui/                # Reusable UI components
├── lib/
│   ├── store.ts           # Zustand cart store
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Mobile drawer menus
- Responsive grids and tables

### Accessibility
- Keyboard navigation
- Focus rings
- ARIA labels
- Proper semantic HTML
- Color contrast compliance

### Performance
- Next.js optimizations
- Image optimization ready
- Code splitting
- Minimal dependencies

### State Management
- Cart persisted to localStorage
- Zustand for global state
- Ready for API integration

## Customization

### Theme Colors
Edit `tailwind.config.ts` to customize the color palette.

### Components
All components are in `components/ui/` and can be customized as needed.

### API Integration
Replace mock data in pages with real API calls. The structure is ready for:
- Product API endpoints
- Order management
- User authentication
- Payment processing

## Roadmap

- [ ] Authentication system (NextAuth.js recommended)
- [ ] Payment integration (Stripe/PayPal)
- [ ] Product image upload
- [ ] Email notifications
- [ ] Advanced analytics
- [ ] Inventory management
- [ ] Multi-vendor support
- [ ] Internationalization

## License

Copyright © 2024 AXITRINI LLC. All rights reserved.

## Support

For support, email support@axitrini.com or visit our website.

