'use client'

import React, { useState } from 'react'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { ChevronRight, ChevronLeft, Calculator, CheckCircle } from 'lucide-react'

interface CalculatorData {
  platform: 'web' | 'mobile' | 'both' | ''
  features: string[]
  timeline: '1-3' | '3-6' | '6-12' | '12+' | ''
  complexity: 'simple' | 'medium' | 'complex' | ''
}

const CostCalculatorPage = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<CalculatorData>({
    platform: '',
    features: [],
    timeline: '',
    complexity: '',
  })
  const [estimate, setEstimate] = useState<number | null>(null)

  const features = [
    'User Authentication',
    'Payment Integration',
    'Real-time Chat',
    'Admin Dashboard',
    'Analytics & Reporting',
    'Push Notifications',
    'File Upload',
    'Search Functionality',
  ]

  const calculateEstimate = () => {
    let base = 0

    // Platform base
    if (data.platform === 'web') base = 15000
    else if (data.platform === 'mobile') base = 20000
    else if (data.platform === 'both') base = 35000

    // Features
    base += data.features.length * 3000

    // Complexity multiplier
    if (data.complexity === 'simple') base *= 0.8
    else if (data.complexity === 'complex') base *= 1.5

    // Timeline adjustment
    if (data.timeline === '1-3') base *= 1.2
    else if (data.timeline === '12+') base *= 0.9

    setEstimate(Math.round(base))
    setStep(5)
  }

  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[
        { label: 'Tools', href: '/tools' },
        { label: 'Cost Calculator' },
      ]} />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <Calculator className="w-16 h-16 text-accent-sky-blue mx-auto mb-4" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-4">
                Project Cost Calculator
              </h1>
              <p className="text-lg text-neutral-medium-gray">
                Get an instant estimate for your project
              </p>
            </div>
          </AnimatedSection>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-neutral-medium-gray">
                Step {step} of 4
              </span>
              <span className="text-sm font-medium text-neutral-medium-gray">
                {Math.round((step / 4) * 100)}%
              </span>
            </div>
            <div className="w-full bg-neutral-light-gray rounded-full h-2">
              <div
                className="bg-secondary-gold h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          <Card>
            {/* Step 1: Platform */}
            {step === 1 && (
              <AnimatedSection direction="up">
                <h2 className="text-2xl font-heading font-bold text-primary-navy mb-6">
                  What platform are you building for?
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {(['web', 'mobile', 'both'] as const).map((platform) => (
                    <button
                      key={platform}
                      onClick={() => {
                        setData({ ...data, platform })
                        setStep(2)
                      }}
                      className={`p-6 border-2 rounded-lg text-left transition-all ${
                        data.platform === platform
                          ? 'border-secondary-gold bg-secondary-gold bg-opacity-10'
                          : 'border-neutral-medium-gray hover:border-accent-sky-blue'
                      }`}
                    >
                      <div className="font-semibold text-primary-navy mb-2 capitalize">
                        {platform === 'both' ? 'Web & Mobile' : platform}
                      </div>
                      <div className="text-sm text-neutral-medium-gray">
                        {platform === 'web' && 'Desktop and web browsers'}
                        {platform === 'mobile' && 'iOS and Android apps'}
                        {platform === 'both' && 'Complete cross-platform solution'}
                      </div>
                    </button>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Step 2: Features */}
            {step === 2 && (
              <AnimatedSection direction="up">
                <h2 className="text-2xl font-heading font-bold text-primary-navy mb-6">
                  Select features you need
                </h2>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  {features.map((feature) => (
                    <button
                      key={feature}
                      onClick={() => {
                        const newFeatures = data.features.includes(feature)
                          ? data.features.filter((f) => f !== feature)
                          : [...data.features, feature]
                        setData({ ...data, features: newFeatures })
                      }}
                      className={`p-4 border-2 rounded-lg text-left transition-all ${
                        data.features.includes(feature)
                          ? 'border-secondary-gold bg-secondary-gold bg-opacity-10'
                          : 'border-neutral-medium-gray hover:border-accent-sky-blue'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {data.features.includes(feature) && (
                          <CheckCircle className="w-5 h-5 text-secondary-gold" />
                        )}
                        <span className="font-medium text-primary-navy">{feature}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ChevronLeft className="inline-block mr-2 w-4 h-4" />
                    Back
                  </Button>
                  <Button variant="primary" onClick={() => setStep(3)}>
                    Next
                    <ChevronRight className="inline-block ml-2 w-4 h-4" />
                  </Button>
                </div>
              </AnimatedSection>
            )}

            {/* Step 3: Timeline */}
            {step === 3 && (
              <AnimatedSection direction="up">
                <h2 className="text-2xl font-heading font-bold text-primary-navy mb-6">
                  What's your timeline?
                </h2>
                <div className="space-y-3 mb-6">
                  {(['1-3', '3-6', '6-12', '12+'] as const).map((timeline) => (
                    <button
                      key={timeline}
                      onClick={() => {
                        setData({ ...data, timeline })
                        setStep(4)
                      }}
                      className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                        data.timeline === timeline
                          ? 'border-secondary-gold bg-secondary-gold bg-opacity-10'
                          : 'border-neutral-medium-gray hover:border-accent-sky-blue'
                      }`}
                    >
                      <div className="font-semibold text-primary-navy">
                        {timeline === '1-3' && '1-3 months'}
                        {timeline === '3-6' && '3-6 months'}
                        {timeline === '6-12' && '6-12 months'}
                        {timeline === '12+' && '12+ months'}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <ChevronLeft className="inline-block mr-2 w-4 h-4" />
                    Back
                  </Button>
                </div>
              </AnimatedSection>
            )}

            {/* Step 4: Complexity */}
            {step === 4 && (
              <AnimatedSection direction="up">
                <h2 className="text-2xl font-heading font-bold text-primary-navy mb-6">
                  How complex is your project?
                </h2>
                <div className="space-y-3 mb-6">
                  {(['simple', 'medium', 'complex'] as const).map((complexity) => (
                    <button
                      key={complexity}
                      onClick={() => {
                        setData({ ...data, complexity })
                        calculateEstimate()
                      }}
                      className={`w-full p-4 border-2 rounded-lg text-left transition-all ${
                        data.complexity === complexity
                          ? 'border-secondary-gold bg-secondary-gold bg-opacity-10'
                          : 'border-neutral-medium-gray hover:border-accent-sky-blue'
                      }`}
                    >
                      <div className="font-semibold text-primary-navy capitalize mb-1">
                        {complexity}
                      </div>
                      <div className="text-sm text-neutral-medium-gray">
                        {complexity === 'simple' && 'Basic features, standard design'}
                        {complexity === 'medium' && 'Moderate features, custom design'}
                        {complexity === 'complex' && 'Advanced features, complex integrations'}
                      </div>
                    </button>
                  ))}
                </div>
                <Button variant="outline" onClick={() => setStep(3)}>
                  <ChevronLeft className="inline-block mr-2 w-4 h-4" />
                  Back
                </Button>
              </AnimatedSection>
            )}

            {/* Step 5: Estimate */}
            {step === 5 && estimate && (
              <AnimatedSection direction="up">
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-secondary-gold mx-auto mb-4" />
                  <h2 className="text-3xl font-heading font-bold text-primary-navy mb-4">
                    Estimated Cost
                  </h2>
                  <div className="text-5xl font-bold text-secondary-gold mb-6">
                    ${estimate.toLocaleString()}
                  </div>
                  <p className="text-neutral-medium-gray mb-8">
                    This is a rough estimate. Contact us for a detailed quote tailored to your specific needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="primary" size="lg" onClick={() => window.location.href = '/contact'}>
                      Get Detailed Quote
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => {
                      setStep(1)
                      setData({ platform: '', features: [], timeline: '', complexity: '' })
                      setEstimate(null)
                    }}>
                      Calculate Again
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default CostCalculatorPage

