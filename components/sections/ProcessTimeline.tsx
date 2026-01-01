'use client'

import React from 'react'
import { Search, DraftingCompass, Code, CheckCircle, Rocket, Headphones } from 'lucide-react'
import AnimatedSection from '@/components/animations/AnimatedSection'
import { PROCESS_STEPS } from '@/lib/constants'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  DraftingCompass,
  Code,
  CheckCircle,
  Rocket,
  Headphones,
}

const ProcessTimeline: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-light-gray transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {PROCESS_STEPS.map((step, index) => {
              const Icon = iconMap[step.icon] || Code
              return (
                <AnimatedSection key={step.step} direction="up" delay={index * 0.1}>
                  <div className="relative">
                    <div className="bg-white rounded-xl p-6 text-center border-2 border-neutral-light-gray hover:border-secondary-gold transition-colors">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-secondary-gold mb-2">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-heading font-semibold text-primary-navy mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-medium-gray">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline

