'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Briefcase,
  Users,
  Zap,
  Globe,
  Heart,
  TrendingUp,
  Shield,
  Coffee,
  Calendar,
  DollarSign,
  GraduationCap,
  MapPin,
  Send,
  CheckCircle2,
  Target,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'

export const runtime = 'edge'

interface JobPosition {
  id: string
  title: string
  department: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote'
  description: string
  requirements: string[]
}

const openPositions: JobPosition[] = [
  {
    id: '1',
    title: 'E-commerce Operations Manager',
    department: 'Operations',
    location: 'Remote / Birmingham, AL',
    type: 'Full-time',
    description:
      'Lead our e-commerce operations, manage marketplace relationships, and optimize our supply chain processes.',
    requirements: [
      '5+ years in e-commerce operations',
      'Experience with Amazon FBA and marketplace management',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership abilities',
    ],
  },
  {
    id: '2',
    title: 'Product Sourcing Specialist',
    department: 'Sourcing',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Identify and evaluate new product opportunities, negotiate with suppliers, and ensure quality standards.',
    requirements: [
      '3+ years in product sourcing or procurement',
      'Experience with international suppliers',
      'Strong negotiation skills',
      'Attention to detail and quality focus',
    ],
  },
  {
    id: '3',
    title: 'Digital Marketing Analyst',
    department: 'Marketing',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Drive growth through data-driven marketing strategies, optimize campaigns, and analyze performance metrics.',
    requirements: [
      '3+ years in digital marketing',
      'Experience with Amazon PPC and marketplace advertising',
      'Proficiency in analytics tools (Google Analytics, etc.)',
      'Strong data analysis and reporting skills',
    ],
  },
  {
    id: '4',
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Build and maintain automation tools, data analytics platforms, and internal software solutions.',
    requirements: [
      '4+ years of software development experience',
      'Proficiency in modern web technologies (React, Node.js, TypeScript)',
      'Experience with cloud platforms (AWS, Cloudflare)',
      'Strong problem-solving and collaboration skills',
    ],
  },
]

const benefits = [
  {
    icon: DollarSign,
    title: 'Competitive Compensation',
    description: 'Market-rate salaries with performance-based bonuses',
    color: 'primary' as const,
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision insurance',
    color: 'success' as const,
  },
  {
    icon: Coffee,
    title: 'Flexible Work',
    description: 'Remote-first culture with flexible hours',
    color: 'primary' as const,
  },
  {
    icon: Calendar,
    title: 'Time Off',
    description: 'Generous PTO, holidays, and personal days',
    color: 'success' as const,
  },
  {
    icon: GraduationCap,
    title: 'Learning & Growth',
    description: 'Professional development budget and training opportunities',
    color: 'primary' as const,
  },
  {
    icon: Zap,
    title: 'Modern Tools',
    description: 'Latest technology and equipment to do your best work',
    color: 'success' as const,
  },
]

const values = [
  {
    icon: Target,
    title: 'Impact-Driven',
    description: 'Your work directly shapes our brand and customer experience',
  },
  {
    icon: Users,
    title: 'Collaborative',
    description: 'Work with a talented, supportive team of four partners',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Oriented',
    description: 'Be part of a fast-growing company with exciting opportunities',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Build products that reach customers worldwide',
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Apply',
    description: 'Submit your application through the form below or email us directly',
  },
  {
    step: '2',
    title: 'Review',
    description: 'Our team reviews your application and portfolio',
  },
  {
    step: '3',
    title: 'Interview',
    description: 'Video call with the team to discuss your experience and fit',
  },
  {
    step: '4',
    title: 'Decision',
    description: 'We make a decision and extend an offer to successful candidates',
  },
]

export default function CareersPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)

  useEffect(() => {
    setIsVisible(true)

    // Enhanced scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 pt-16 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 pattern-dots opacity-20" />
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

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-primary-600">Build</span>{' '}
              <span className="text-success-600">With Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join a modern commerce brand that&apos;s reshaping how products reach customers
              worldwide. Work with a passionate team building the future of e-commerce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group"
              >
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  document.getElementById('why-join')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Why Join Axitrini
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section id="why-join" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 observe-fade" data-animation="fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Axitrini</span>?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We&apos;re building something special. Here&apos;s what makes us unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift group observe-fade"
                  data-animation="fade-in-up"
                  data-delay={index * 100}
                  style={{ opacity: 0 }}
                >
                  <CardContent className="p-8 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary-50/0 group-hover:to-primary-50/30 transition-all duration-500" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="relative text-2xl font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {value.title}
                    </h3>
                    <p className="relative text-neutral-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 observe-fade" data-animation="fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Benefits</span> & Perks
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We invest in our team&apos;s success and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              const colorClasses = {
                primary: 'bg-primary-100 text-primary-600',
                success: 'bg-success-100 text-success-600',
              }
              return (
                <Card
                  key={index}
                  className="border-0 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift group observe-fade"
                  data-animation="fade-in-up"
                  data-delay={index * 100}
                  style={{ opacity: 0 }}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colorClasses[benefit.color]} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 observe-fade" data-animation="fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Explore opportunities to join our growing team.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((job, index) => (
              <Card
                key={job.id}
                className="border-0 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift observe-fade cursor-pointer"
                data-animation="fade-in-up"
                data-delay={index * 100}
                style={{ opacity: 0 }}
                onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-neutral-900">{job.title}</h3>
                        <Badge variant="default">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-neutral-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <p className="text-neutral-600 leading-relaxed">{job.description}</p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedJob(selectedJob?.id === job.id ? null : job)
                      }}
                      className="md:ml-4"
                    >
                      {selectedJob?.id === job.id ? 'Hide Details' : 'View Details'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  {selectedJob?.id === job.id && (
                    <div className="mt-6 pt-6 border-t border-neutral-200 animate-slide-in">
                      <h4 className="font-semibold text-neutral-900 mb-4">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-neutral-600">
                            <CheckCircle2 className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button
                          asChild
                          className="w-full md:w-auto"
                        >
                          <a href={`mailto:careers@axitrini.com?subject=Application: ${job.title}`}>
                            Apply Now
                            <Send className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {openPositions.length === 0 && (
            <Card className="border-0 shadow-premium">
              <CardContent className="p-12 text-center">
                <Briefcase className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">No Open Positions</h3>
                <p className="text-neutral-600 mb-6">
                  We&apos;re not actively hiring right now, but we&apos;re always interested in
                  connecting with talented people.
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:careers@axitrini.com?subject=General Inquiry">
                    Send Us Your Resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 observe-fade" data-animation="fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Application <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Simple, transparent, and respectful of your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card
                key={index}
                className="border-0 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift group observe-fade text-center"
                data-animation="fade-in-up"
                data-delay={index * 100}
                style={{ opacity: 0 }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-success-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10 text-center observe-fade" data-animation="fade-in-up" style={{ opacity: 0 }}>
          <Shield className="h-16 w-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Don&apos;t See a Fit?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;re always looking for exceptional talent. If you&apos;re passionate about
            e-commerce, technology, or building great products, we&apos;d love to hear from you.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="group"
          >
            <a href="mailto:careers@axitrini.com?subject=General Career Inquiry">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

