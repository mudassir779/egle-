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
import TestimonialCard from '@/components/ui/TestimonialCard'
import { generateMetadata as genMeta } from '@/lib/seo'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, TrendingUp, Clock, Users as UsersIcon } from 'lucide-react'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

const caseStudies: Record<string, any> = {
  'ecommerce-platform': {
    title: 'E-Commerce Platform',
    client: 'Retail Corp',
    industry: 'E-commerce',
    challenge: 'Retail Corp needed a scalable e-commerce solution to handle growing traffic and complex inventory management across multiple warehouses.',
    solution: 'We developed a modern, cloud-based e-commerce platform with real-time inventory synchronization, advanced search capabilities, and seamless payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'Redis'],
    timeline: '6 months',
    team: '8 members',
    results: [
      '50% increase in online conversions',
      '70% reduction in page load time',
      '99.9% uptime achieved',
      'Support for 100K+ products',
    ],
    testimonial: {
      name: 'David Thompson',
      role: 'Product Manager',
      company: 'Retail Corp',
      content: 'The platform exceeded our expectations. Sales have increased significantly and the user experience is exceptional.',
      rating: 5,
    },
  },
  'healthcare-system': {
    title: 'Healthcare Management System',
    client: 'HealthPlus',
    industry: 'Healthcare',
    challenge: 'HealthPlus required a HIPAA-compliant system to manage patient records, appointments, and billing while ensuring data security and privacy.',
    solution: 'We built a comprehensive healthcare management system with encrypted data storage, role-based access control, and automated appointment scheduling.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'AWS', 'HIPAA Compliance'],
    timeline: '8 months',
    team: '10 members',
    results: [
      '70% reduction in administrative time',
      '100% HIPAA compliance achieved',
      '50% faster patient check-in process',
      'Real-time appointment scheduling',
    ],
    testimonial: {
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'HealthPlus',
      content: 'The system has streamlined our operations significantly. Patient satisfaction has improved and our staff can focus on care rather than paperwork.',
      rating: 5,
    },
  },
  'mobile-banking': {
    title: 'Mobile Banking App',
    client: 'FinanceFirst',
    industry: 'Finance',
    challenge: 'FinanceFirst needed a secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.',
    solution: 'We developed a native mobile app with bank-level security, biometric authentication, real-time transaction processing, and intuitive financial dashboards.',
    technologies: ['React Native', 'Node.js', 'Firebase', 'Stripe', 'Biometric Auth', 'AWS'],
    timeline: '7 months',
    team: '9 members',
    results: [
      '100K+ downloads in first month',
      '4.8/5 app store rating',
      'Zero security breaches',
      '50% increase in mobile transactions',
    ],
    testimonial: {
      name: 'Lisa Wang',
      role: 'Director of IT',
      company: 'FinanceFirst',
      content: 'The app has transformed how our customers interact with banking. Security and user experience are both exceptional.',
      rating: 5,
    },
  },
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug]
  if (!caseStudy) {
    return genMeta({ title: 'Case Study Not Found' })
  }
  return genMeta({
    title: caseStudy.title,
    description: `Case study: ${caseStudy.title} - ${caseStudy.solution}`,
    keywords: [caseStudy.title, caseStudy.industry, 'case study', 'portfolio'],
  })
}

const CaseStudyPage = ({ params }: CaseStudyPageProps) => {
  const caseStudy = caseStudies[params.slug]

  if (!caseStudy) {
    notFound()
  }

  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[
        { label: 'Portfolio', href: '/portfolio' },
        { label: caseStudy.title },
      ]} />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-neutral-light-gray hover:text-secondary-gold mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Portfolio
            </Link>
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">
                {caseStudy.industry}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {caseStudy.title}
              </h1>
              <p className="text-xl text-neutral-light-gray mb-8">
                Client: {caseStudy.client}
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{caseStudy.timeline}</span>
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-5 h-5" />
                  <span>{caseStudy.team}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection direction="right">
              <Card>
                <h2 className="text-2xl font-heading font-bold text-primary-navy mb-4">
                  The Challenge
                </h2>
                <p className="text-neutral-medium-gray">
                  {caseStudy.challenge}
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <Card>
                <h2 className="text-2xl font-heading font-bold text-primary-navy mb-4">
                  Our Solution
                </h2>
                <p className="text-neutral-medium-gray">
                  {caseStudy.solution}
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-neutral-light-gray">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold text-primary-navy mb-4">
                Technologies Used
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {caseStudy.technologies.map((tech: string) => (
                <Badge key={tech} variant="primary" size="lg">
                  {tech}
                </Badge>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary-navy mb-4">
                Results & Impact
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.results.map((result: string, index: number) => (
                <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                  <Card className="text-center">
                    <TrendingUp className="w-12 h-12 text-secondary-gold mx-auto mb-4" />
                    <p className="text-neutral-dark-gray font-medium">{result}</p>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-neutral-light-gray">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-primary-navy mb-8 text-center">
                Client Testimonial
              </h2>
              <TestimonialCard {...caseStudy.testimonial} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-neutral-light-gray mb-8">
                Let&apos;s discuss how we can help bring your vision to life
              </p>
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-opacity-90">
                  Start Your Project
                  <ExternalLink className="inline-block ml-2 w-5 h-5" />
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

export default CaseStudyPage

