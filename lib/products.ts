// Axitrini Product Catalog - 3 Core Products

export interface Product {
  id: string
  name: string
  tagline: string
  price: number
  originalPrice?: number
  images: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  stockCount?: number
  description: string
  keyFeatures: string[]
  specifications: Record<string, string>
  category: string
  amazonUrl: string
  badge?: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    tagline: 'Immersive Sound. All-Day Comfort.',
    price: 199.99,
    originalPrice: 249.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=1200',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=1200',
    ],
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    stockCount: 150,
    description: `Experience premium sound quality with these wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium materials for ultimate comfort. Perfect for music lovers, professionals, and anyone who demands the best audio experience.`,
    keyFeatures: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (5 min = 3 hours)',
      'Premium comfort design',
      'Bluetooth 5.0 connectivity',
      'Hi-Fi audio quality',
    ],
    specifications: {
      'Driver Size': '40mm',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 ohms',
      'Battery Life': '30 hours',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack',
      'Noise Cancellation': 'Active',
    },
    category: 'electronics',
    amazonUrl: 'https://www.amazon.com/dp/YOUR_PRODUCT_ASIN_1',
    badge: 'Best Seller',
  },
  {
    id: '2',
    name: 'Smart Fitness Tracker',
    tagline: 'Your Health. Your Data. Your Control.',
    price: 149.99,
    originalPrice: 199.99,
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200',
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=1200',
      'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=1200',
      'https://images.unsplash.com/photo-1551818255-d8f8b45c8c59?w=1200',
    ],
    rating: 4.9,
    reviewCount: 892,
    inStock: true,
    stockCount: 200,
    description: `Track your fitness journey with precision. This smart fitness tracker monitors your heart rate, sleep patterns, steps, and more. Water-resistant design means you can wear it anywhere, anytime. Sync seamlessly with your smartphone for comprehensive health insights.`,
    keyFeatures: [
      '24/7 Heart Rate Monitoring',
      'Sleep tracking & analysis',
      'Water-resistant (5ATM)',
      '14-day battery life',
      '50+ workout modes',
      'Smartphone app sync',
    ],
    specifications: {
      'Display': '1.4" AMOLED',
      'Battery Life': '14 days',
      'Water Resistance': '5ATM',
      'Sensors': 'Heart rate, Accelerometer, Gyroscope',
      'Connectivity': 'Bluetooth 5.0',
      'Weight': '45g',
      'Compatibility': 'iOS & Android',
    },
    category: 'electronics',
    amazonUrl: 'https://www.amazon.com/dp/YOUR_PRODUCT_ASIN_2',
    badge: 'New',
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    tagline: 'Comfort Meets Productivity.',
    price: 299.99,
    originalPrice: 399.99,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=1200',
      'https://images.unsplash.com/photo-1541558866410-3dfda80fc33f?w=1200',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1200',
    ],
    rating: 4.7,
    reviewCount: 634,
    inStock: true,
    stockCount: 75,
    description: `Transform your workspace with this premium ergonomic office chair. Designed for comfort during long work sessions, it features adjustable lumbar support, breathable mesh back, and smooth-rolling casters. Your back will thank you.`,
    keyFeatures: [
      'Adjustable lumbar support',
      'Breathable mesh material',
      '360° swivel & smooth casters',
      'Height adjustable (17"-21")',
      'Weight capacity: 300 lbs',
      'Easy assembly (15 minutes)',
    ],
    specifications: {
      'Material': 'Mesh & Nylon',
      'Weight Capacity': '300 lbs',
      'Height Range': '17" - 21"',
      'Base': '5-star nylon base',
      'Casters': 'Smooth-rolling',
      'Warranty': '5 years',
      'Assembly': 'Required (tools included)',
    },
    category: 'furniture',
    amazonUrl: 'https://www.amazon.com/dp/YOUR_PRODUCT_ASIN_3',
    badge: 'Premium',
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getAllProducts(): Product[] {
  return products
}

