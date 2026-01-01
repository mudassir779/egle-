import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import { Code, Globe, Smartphone, Palette, Cloud, Lightbulb, ShoppingCart, Building, ArrowRight } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Services',
  description: 'Comprehensive digital solutions including custom software, web apps, mobile apps, and more.',
  keywords: ['services', 'software development', 'web development', 'mobile apps'],
})

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

const ServicesPage = () => {
  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[{ label: 'Services' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-4">
                Our Services
              </h1>
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
                      <h3 className="text-xl font-heading font-semibold text-primary-navy mb-2 group-hover:text-accent-sky-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-neutral-medium-gray text-sm mb-4">
                        {service.description}
                      </p>
                      <div className="text-accent-sky-blue font-medium text-sm group-hover:translate-x-2 transition-transform flex items-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Card>
                  </Link>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ServicesPage

