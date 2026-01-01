import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/Button'
import { generateMetadata as genMeta } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import Link from 'next/link'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find((s) => s.id === params.slug)
  if (!service) {
    return genMeta({ title: 'Service Not Found' })
  }
  return genMeta({
    title: service.title,
    description: service.description,
    keywords: [service.title, 'software development', 'custom software'],
  })
}

const ServicePage = ({ params }: ServicePageProps) => {
  const service = SERVICES.find((s) => s.id === params.slug)

  if (!service) {
    notFound()
  }

  const technologies = ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'MongoDB']
  const benefits = [
    'Scalable architecture that grows with your business',
    'Modern technology stack for optimal performance',
    'Expert team with years of experience',
    'Agile development methodology',
    'Comprehensive testing and quality assurance',
    'Ongoing support and maintenance',
  ]

  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[
        { label: 'Services', href: '/services' },
        { label: service.title },
      ]} />

      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-neutral-light-gray">
                {service.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <AnimatedSection direction="right">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary-navy mb-4">
                  Why Choose Our {service.title}?
                </h2>
                <p className="text-neutral-medium-gray mb-6">
                  We deliver cutting-edge solutions tailored to your specific needs. Our team combines
                  technical expertise with business acumen to create software that drives results.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-navy font-bold text-sm">✓</span>
                      </div>
                      <span className="text-neutral-dark-gray">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <Card>
                <h3 className="text-2xl font-heading font-semibold text-primary-navy mb-4">
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-light-gray">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-primary-navy mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-neutral-medium-gray mb-8">
                Let's discuss your project and see how we can help bring your vision to life.
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ServicePage

