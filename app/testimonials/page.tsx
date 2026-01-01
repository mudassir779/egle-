import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import TestimonialCard from '@/components/ui/TestimonialCard'
import { generateMetadata as genMeta } from '@/lib/seo'

export const metadata: Metadata = genMeta({
  title: 'Testimonials',
  description: 'Read what our clients say about working with The Eagle Hub.',
  keywords: ['testimonials', 'reviews', 'client feedback', 'customer satisfaction'],
})

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'The Eagle Hub transformed our business with their innovative software solution. Their team was professional, responsive, and delivered beyond our expectations. The project was completed on time and within budget.',
    rating: 5,
    image: '/images/testimonial-1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Global Finance',
    content: 'Outstanding work on our enterprise platform. The scalability and performance exceeded all our requirements. Highly recommend their services to anyone looking for quality software development.',
    rating: 5,
    image: '/images/testimonial-2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'HealthPlus',
    content: 'Working with The Eagle Hub was a game-changer. They understood our vision and brought it to life with precision and expertise. The support team is always available when we need them.',
    rating: 5,
    image: '/images/testimonial-3.jpg',
  },
  {
    name: 'David Thompson',
    role: 'Product Manager',
    company: 'Retail Corp',
    content: 'The e-commerce platform they built for us has significantly increased our online sales. The user experience is exceptional and the backend is rock solid.',
    rating: 5,
    image: '/images/testimonial-4.jpg',
  },
  {
    name: 'Lisa Wang',
    role: 'Director of IT',
    company: 'FinanceFirst',
    content: 'Their mobile banking app exceeded all our security and performance requirements. The development process was smooth and transparent throughout.',
    rating: 5,
    image: '/images/testimonial-5.jpg',
  },
  {
    name: 'James Wilson',
    role: 'CEO',
    company: 'SalesPro',
    content: 'The custom CRM system has revolutionized how we manage our sales pipeline. The team was responsive to our needs and delivered exactly what we asked for.',
    rating: 5,
    image: '/images/testimonial-6.jpg',
  },
]

const TestimonialsPage = () => {
  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[{ label: 'Testimonials' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-4">
                Client Testimonials
              </h1>
              <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
                Don&apos;t just take our word for it—hear from our satisfied clients
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <TestimonialCard {...testimonial} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default TestimonialsPage

