'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Globe, Smartphone, Palette, Cloud, Lightbulb, ShoppingCart, Building } from 'lucide-react'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Lightbulb,
  ShoppingCart,
  Building,
}

const ServicesOverview: React.FC = () => {
  return (
    <section className="section-padding bg-neutral-light-gray">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Code
            return (
              <AnimatedSection key={service.id} direction="up" delay={index * 0.1}>
                <Link href={`/services/${service.id}`}>
                  <Card className="h-full group">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-medium-gray text-sm">
                      {service.description}
                    </p>
                    <div className="mt-4 text-accent-sky-blue font-medium text-sm group-hover:translate-x-2 transition-transform">
                      Learn More →
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview

