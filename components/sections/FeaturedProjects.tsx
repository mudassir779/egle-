'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'

interface Project {
  id: string
  title: string
  client: string
  description: string
  image: string
  technologies: string[]
  link: string
}

const featuredProjects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    client: 'Retail Corp',
    description: 'Scalable e-commerce solution with advanced inventory management',
    image: '/images/project-1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    link: '/portfolio/ecommerce-platform',
  },
  {
    id: '2',
    title: 'Healthcare Management System',
    client: 'HealthPlus',
    description: 'HIPAA-compliant patient management and scheduling system',
    image: '/images/project-2.jpg',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    link: '/portfolio/healthcare-system',
  },
  {
    id: '3',
    title: 'Mobile Banking App',
    client: 'FinanceFirst',
    description: 'Secure mobile banking application with biometric authentication',
    image: '/images/project-3.jpg',
    technologies: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
    link: '/portfolio/mobile-banking',
  },
]

const FeaturedProjects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <section className="section-padding bg-neutral-light-gray">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
              Showcasing our expertise through successful client collaborations
            </p>
          </div>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-large overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="h-64 md:h-auto bg-gradient-primary flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <h3 className="text-2xl font-heading font-bold mb-2">
                        {featuredProjects[currentIndex].title}
                      </h3>
                      <p className="text-neutral-light-gray mb-4">
                        {featuredProjects[currentIndex].client}
                      </p>
                      <p className="text-sm opacity-90">
                        {featuredProjects[currentIndex].description}
                      </p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProjects[currentIndex].technologies.map((tech) => (
                        <Badge key={tech} variant="primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Link href={featuredProjects[currentIndex].link}>
                      <Button variant="primary" className="w-full md:w-auto">
                        View Case Study
                        <ExternalLink className="inline-block ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center hover:bg-neutral-light-gray transition-colors z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6 text-primary-navy" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-medium flex items-center justify-center hover:bg-neutral-light-gray transition-colors z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6 text-primary-navy" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-secondary-gold w-8'
                    : 'bg-neutral-medium-gray'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/portfolio">
            <Button variant="outline">View Full Portfolio</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects

