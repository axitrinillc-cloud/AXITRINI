'use client'

import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Building2,
  Globe,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { useToast } from '@/components/ui/Toast'

export const runtime = 'edge'

interface ContactInfo {
  icon: React.ElementType
  title: string
  content: string
  link?: string
  color: 'primary' | 'success'
}

const contactMethods: ContactInfo[] = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'contact@axitrini.com',
    link: 'mailto:contact@axitrini.com',
    color: 'primary',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (205) 555-0123',
    link: 'tel:+12055550123',
    color: 'success',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Birmingham, Alabama, USA',
    color: 'primary',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 9:00 AM - 5:00 PM CST',
    color: 'success',
  },
]

const faqs = [
  {
    question: 'How can I reach your customer support?',
    answer:
      'You can reach us via email at contact@axitrini.com or use the contact form above. We typically respond within 24-48 hours during business days.',
  },
  {
    question: 'Where are your products sold?',
    answer:
      'Our products are sold through trusted marketplaces like Amazon. Visit our brand page to find links to our Amazon store.',
  },
  {
    question: 'Do you offer wholesale or bulk orders?',
    answer:
      'Yes, we work with businesses and partners. Please contact us with your requirements, and our team will get back to you with pricing and availability.',
  },
  {
    question: 'How can I partner with Axitrini?',
    answer:
      'We&apos;re always interested in working with suppliers, manufacturers, and strategic partners. Reach out through our contact form or email us directly.',
  },
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  const { showToast } = useToast()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      showToast('Please fill in all required fields correctly', 'error')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // In production, you would send the form data to your API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      setIsSubmitted(true)
      showToast('Message sent successfully! We\'ll get back to you soon.', 'success')
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 pt-16 overflow-hidden"
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
              <span className="text-primary-600">Get in</span>{' '}
              <span className="text-success-600">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Have a question or want to work with us? We&apos;d love to hear from you.
              Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-5" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              const colorClasses = {
                primary: 'bg-primary-100 text-primary-600',
                success: 'bg-success-100 text-success-600',
              }

              const content = method.link ? (
                <a
                  href={method.link}
                  className="text-neutral-600 hover:text-primary-600 transition-colors"
                >
                  {method.content}
                </a>
              ) : (
                <span className="text-neutral-600">{method.content}</span>
              )

              return (
                <Card
                  key={index}
                  className="border-0 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover-lift group observe-fade cursor-pointer"
                  data-animation="fade-in-up"
                  data-delay={index * 100}
                  style={{ opacity: 0 }}
                  onClick={() => method.link && window.open(method.link, '_self')}
                >
                  <CardContent className="p-8 h-full flex flex-col items-center text-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl ${colorClasses[method.color]} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {method.title}
                    </h3>
                    <div className="text-neutral-600 leading-relaxed">{content}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 to-primary-50/20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="mb-8 observe-fade" data-animation="fade-in-up" style={{ opacity: 0 }}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-xl text-neutral-600">
                  Fill out the form below and we&apos;ll get back to you within 24-48 hours.
                </p>
              </div>

              {isSubmitted ? (
                <Card className="border-0 shadow-premium">
                  <CardContent className="p-12 text-center">
                    <div className="flex justify-center mb-6">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success-100 text-success-600">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      Thank you for contacting us. We&apos;ve received your message and will get
                      back to you as soon as possible.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-premium observe-fade" data-animation="fade-in-up" data-delay="100" style={{ opacity: 0 }}>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          type="text"
                          name="name"
                          label="Full Name *"
                          value={formData.name}
                          onChange={handleChange}
                          error={errors.name}
                          placeholder="John Doe"
                          icon={<MessageSquare className="h-4 w-4" />}
                        />
                        <Input
                          type="email"
                          name="email"
                          label="Email Address *"
                          value={formData.email}
                          onChange={handleChange}
                          error={errors.email}
                          placeholder="john@example.com"
                          icon={<Mail className="h-4 w-4" />}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          type="tel"
                          name="phone"
                          label="Phone Number"
                          value={formData.phone}
                          onChange={handleChange}
                          error={errors.phone}
                          placeholder="+1 (555) 123-4567"
                          icon={<Phone className="h-4 w-4" />}
                        />
                        <Input
                          type="text"
                          name="company"
                          label="Company (Optional)"
                          value={formData.company}
                          onChange={handleChange}
                          error={errors.company}
                          placeholder="Your Company"
                          icon={<Building2 className="h-4 w-4" />}
                        />
                      </div>

                      <Input
                        type="text"
                        name="subject"
                        label="Subject *"
                        value={formData.subject}
                        onChange={handleChange}
                        error={errors.subject}
                        placeholder="What is this regarding?"
                      />

                      <Textarea
                        name="message"
                        label="Message *"
                        value={formData.message}
                        onChange={handleChange}
                        error={errors.message}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        helperText="Minimum 10 characters"
                      />

                      <Button
                        type="submit"
                        size="lg"
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                        className="w-full md:w-auto group"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              <Card className="border-0 shadow-premium observe-fade" data-animation="fade-in-up" data-delay="200" style={{ opacity: 0 }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary-600" />
                    Why Contact Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-neutral-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <span>General inquiries about our products</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <span>Partnership and collaboration opportunities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <span>Wholesale and bulk order inquiries</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <span>Media and press inquiries</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success-600 mt-0.5 flex-shrink-0" />
                      <span>Customer support and assistance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-premium observe-fade" data-animation="fade-in-up" data-delay="300" style={{ opacity: 0 }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary-600" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    We aim to respond to all inquiries within <strong>24-48 hours</strong> during
                    business days (Monday - Friday, 9 AM - 5 PM CST). For urgent matters, please
                    call us directly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-5" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 observe-fade" data-animation="fade-in-up" style={{ opacity: 0 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-neutral-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 shadow-premium hover:shadow-premium-lg transition-all duration-300 observe-fade"
                data-animation="fade-in-up"
                data-delay={index * 100}
                style={{ opacity: 0 }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed pl-7">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


