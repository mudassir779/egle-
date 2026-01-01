'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'

const Hero: React.FC = () => {
  const trustIndicators = [
    { value: `${COMPANY_INFO.stats.projectsCompleted}+`, label: 'Projects Delivered' },
    { value: `${COMPANY_INFO.stats.activeClients}+`, label: 'Active Clients' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-navy via-primary-navy to-accent-sky-blue pt-20">
      {/* Static Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-sky-blue rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {COMPANY_INFO.tagline}
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-light-gray mb-8">
            {COMPANY_INFO.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" size="lg" className="bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-primary-navy">
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-4 border border-white border-opacity-20"
              >
                <div className="text-2xl md:text-3xl font-bold text-secondary-gold mb-1">
                  {indicator.value}
                </div>
                <div className="text-sm text-neutral-light-gray">
                  {indicator.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

