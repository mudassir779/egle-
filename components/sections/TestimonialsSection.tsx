'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AnimatedSection from '@/components/animations/AnimatedSection'
import TestimonialCard from '@/components/ui/TestimonialCard'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'The Eagle Hub transformed our business with their innovative software solution. Their team was professional, responsive, and delivered beyond our expectations.',
    rating: 5,
    image: '/images/testimonial-1.jpg',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Global Finance',
    content: 'Outstanding work on our enterprise platform. The scalability and performance exceeded all our requirements. Highly recommend their services.',
    rating: 5,
    image: '/images/testimonial-2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'HealthPlus',
    content: 'Working with The Eagle Hub was a game-changer. They understood our vision and brought it to life with precision and expertise.',
    rating: 5,
    image: '/images/testimonial-3.jpg',
  },
]

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-neutral-light-gray">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
              Trusted by businesses worldwide for exceptional results
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <TestimonialCard {...testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:bg-neutral-light-gray transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-primary-navy" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-medium flex items-center justify-center hover:bg-neutral-light-gray transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-primary-navy" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-secondary-gold w-8'
                    : 'bg-neutral-medium-gray'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/testimonials" className="text-accent-sky-blue hover:underline font-medium">
            Read More Reviews →
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

