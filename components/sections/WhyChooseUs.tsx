'use client'

import React from 'react'
import { Zap, Users, TrendingUp, Shield } from 'lucide-react'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import { WHY_CHOOSE_US } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Users,
  TrendingUp,
  Shield,
}

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">
              Why Choose The Eagle Hub
            </h2>
            <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Zap
            return (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-medium-gray">
                    {feature.description}
                  </p>
                </Card>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

