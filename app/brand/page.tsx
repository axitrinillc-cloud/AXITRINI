'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Package,
  Search,
  TrendingUp,
  Truck,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Globe,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

export default function BrandPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Enhanced scroll observer with multiple animation types
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const animationType = element.dataset.animation || 'fade-in-up'
            const delay = parseInt(element.dataset.delay || '0')
            
            setTimeout(() => {
              element.classList.add(animationType)
              element.style.opacity = '1'
            }, delay)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.observe-fade')
    elements.forEach((el) => observer.observe(el))

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      observer.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section - Enhanced */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 pt-16 overflow-hidden"
      >
        {/* Animated background elements with parallax */}
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div 
          className="absolute top-20 right-20 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl animate-pulse animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-success-200/20 rounded-full blur-3xl animate-pulse animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute particle"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 25}%`,
              width: `${4 + (i % 3) * 2}px`,
              height: `${4 + (i % 3) * 2}px`,
              background: i % 2 === 0 ? 'rgba(14, 165, 233, 0.4)' : 'rgba(34, 197, 94, 0.4)',
              borderRadius: '50%',
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}

        <div
          className={`mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 mb-8 animate-scale-in hover:scale-105 transition-transform duration-300">
            <Sparkles className="h-4 w-4 text-primary-600 animate-pulse" />
            <span className="text-sm font-medium text-neutral-700">
              Modern Commerce Brand
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
            <span className="inline-block gradient-text-animated animate-bounce-in">
              Axitri
            </span>
            <span className="inline-block text-success-600 animate-bounce-in delay-150">
              ni
            </span>
          </h1>

          <p className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-700 mb-6 text-reveal delay-300">
            Commerce. Delivered.
          </p>

          <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed text-reveal delay-500">
            We build product brands that thrive on trusted marketplaces.
            <br className="hidden md:block" />
            <span className="text-neutral-500">
              Quality products, seamless fulfillment, modern commerce.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-scale-in delay-700">
            <Button
              size="lg"
              className="group relative overflow-hidden pulse-glow hover:scale-105 transition-all duration-300"
              asChild
            >
              <a
                href="https://www.amazon.com/stores/page/YOUR_AMAZON_STORE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 flex items-center"
              >
                Shop on Amazon
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-success-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 hover:border-primary-300 hover:bg-primary-50/50 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#story" className="flex items-center">
                Our Story
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto observe-fade animate-scale-in delay-1000">
            {[
              { value: '50+', label: 'Products' },
              { value: '100K+', label: 'Customers' },
              { value: '4.8★', label: 'Rating' },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer hover:scale-110 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text-animated mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 uppercase tracking-wider group-hover:text-neutral-900 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-0.5 bg-gradient-to-b from-neutral-400 to-transparent rounded-full" />
            <span className="text-xs text-neutral-500 uppercase tracking-wider">Scroll</span>
          </div>
        </div>
      </section>

      {/* Brand Story Section - Enhanced */}
      <section
        id="story"
        className="relative py-32 md:py-40 bg-white overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-50/30 rounded-full blur-3xl -z-10" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="observe-fade">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                Our Story
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-12">
              Built for{' '}
              <span className="gradient-text">Modern Commerce</span>
            </h2>
          </div>

          <div className="prose prose-lg prose-neutral max-w-none space-y-8 observe-fade">
            <div className="relative pl-8 border-l-4 border-primary-200">
              <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-light">
                Axitrini is a modern commerce brand founded by four partners who saw an opportunity
                to bridge the gap between quality products and trusted marketplaces.{' '}
                <span className="font-semibold text-neutral-900">
                  We don&apos;t just sell products - we build brands.
                </span>
                <br />
                <br />
                Instead of overwhelming customers with hundreds of options, we&apos;ve carefully selected
                just three exceptional products. Each one represents our commitment to quality,
                innovation, and customer satisfaction.
              </p>
            </div>

            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              Our approach is elegantly simple: we research, source, and curate products that meet
              the highest standards. Then we partner with Amazon to ensure reliable fulfillment and
              exceptional customer experience. This model allows us to focus on what we do
              best - building brands that customers trust - while leveraging Amazon&apos;s world-class
              logistics network.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-transparent border border-primary-100">
                <Zap className="h-6 w-6 text-primary-600 mb-3" />
                <p className="text-neutral-700 font-medium">
                  We operate behind the scenes, creating seamless experiences for customers who shop
                  where they already trust.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-gradient-to-br from-success-50 to-transparent border border-success-100">
                <Shield className="h-6 w-6 text-success-600 mb-3" />
                <p className="text-neutral-700 font-medium">
                  Every product we launch represents our commitment to quality, reliability, and
                  modern commerce excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate Section - Enhanced */}
      <section className="relative py-32 md:py-40 bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 observe-fade">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
                Our Process
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
              How We{' '}
              <span className="gradient-text">Operate</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-light">
              A streamlined approach to modern commerce
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Search,
                title: 'Product Research',
                description:
                  'We identify market opportunities through data-driven research and consumer insights. Every product we develop starts with understanding what customers actually need.',
                color: 'primary',
                delay: '0',
                animation: 'animate-slide-in-left',
              },
              {
                icon: Package,
                title: 'Quality Sourcing',
                description:
                  'We work directly with trusted suppliers and manufacturers to ensure every product meets our standards. Quality isn\'t negotiable - it\'s foundational.',
                color: 'success',
                delay: '150',
                animation: 'animate-fade-in-up',
              },
              {
                icon: TrendingUp,
                title: 'Marketplace Optimization',
                description:
                  'We optimize our product listings for discovery, conversion, and customer satisfaction. Our brands are built to perform where customers already shop.',
                color: 'warning',
                delay: '300',
                animation: 'animate-fade-in-up',
              },
              {
                icon: Truck,
                title: 'Trusted Fulfillment',
                description:
                  'Through Amazon\'s fulfillment network, we ensure fast, reliable delivery. Customers get the convenience they expect, backed by Amazon\'s trusted infrastructure.',
                color: 'primary',
                delay: '450',
                animation: 'animate-slide-in-right',
              },
            ].map((item, index) => {
              const Icon = item.icon
              const colorClasses = {
                primary: 'bg-primary-100 text-primary-600',
                success: 'bg-success-100 text-success-600',
                warning: 'bg-warning-100 text-warning-600',
              }

              return (
                <Card
                  key={index}
                  className="border-0 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift group observe-fade magnetic"
                  data-animation={item.animation}
                  data-delay={item.delay}
                  style={{ opacity: 0 }}
                >
                  <CardContent className="p-8 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-50/0 group-hover:to-primary-50/30 transition-all duration-500" />
                    <div
                      className={`relative flex h-16 w-16 items-center justify-center rounded-2xl ${colorClasses[item.color as keyof typeof colorClasses]} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="relative text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="relative text-neutral-600 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                    <div className="relative mt-6 pt-6 border-t border-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold text-primary-600 flex items-center gap-2">
                        Learn more
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Marketplace Redirect Section - Enhanced */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-white via-primary-50/20 to-success-50/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent_50%)]" />
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="observe-fade">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 mb-8">
              <Globe className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-neutral-700">
                Available on Amazon
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 mb-8">
              Shop Our Brands on{' '}
              <span className="gradient-text">Amazon</span>
            </h2>

            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              All Axitrini products are sold and fulfilled through Amazon&apos;s trusted marketplace.
              <br className="hidden md:block" />
              Experience the convenience and reliability you expect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto observe-fade">
            {[
              'Fast, reliable shipping',
              "Amazon's customer service",
              'Secure checkout',
              'Easy returns',
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-neutral-200/50 hover:bg-white hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-success-600" />
                </div>
                <span className="text-lg font-medium text-neutral-700">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 observe-fade">
            <Button
              size="lg"
              className="group relative overflow-hidden glow hover:glow-success transition-all duration-300 min-w-[200px]"
              asChild
            >
              <a
                href="https://www.amazon.com/stores/page/YOUR_AMAZON_STORE_ID"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Visit Our Amazon Store
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-success-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group border-2 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-300 min-w-[200px]"
              asChild
            >
              <a
                href="https://www.amazon.com/s?me=YOUR_SELLER_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="observe-fade">
            <div className="inline-block p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-neutral-200/50 max-w-2xl">
              <p className="text-base md:text-lg text-neutral-700 italic leading-relaxed">
                &quot;We&apos;ve chosen Amazon as our fulfillment partner because we believe in delivering the
                best possible customer experience.{' '}
                <span className="font-semibold text-neutral-900 not-italic">
                  When you shop our brands, you&apos;re shopping with confidence.
                </span>
                &quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="relative border-t border-neutral-200 bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                <span className="text-primary-600">Axitri</span>
                <span className="text-success-600">ni</span>
              </h3>
              <p className="text-lg text-neutral-600 mb-6 font-light">
                Modern Commerce. Trusted Brands.
              </p>
              <a
                href="mailto:contact@axitrini.com"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors font-medium group"
              >
                contact@axitrini.com
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 mb-6 text-lg">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="text-neutral-600 hover:text-neutral-900 transition-colors group flex items-center gap-2"
                    >
                      {item}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-neutral-900 mb-6 text-lg">Disclaimer</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Products are sold and fulfilled through Amazon marketplace. Axitrini does not
                process direct transactions on this website.
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-neutral-200 text-center">
            <p className="text-sm text-neutral-500">
              &copy; {new Date().getFullYear()} Axitrini. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
