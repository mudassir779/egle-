'use client'

import React, { useState } from 'react'
import { Metadata } from 'next'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { ExternalLink } from 'lucide-react'

// Metadata handled in layout or via generateMetadata for static pages

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    client: 'Retail Corp',
    industry: 'E-commerce',
    service: 'Web Application',
    description: 'Scalable e-commerce solution with advanced inventory management and payment integration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    image: '/images/project-1.jpg',
    results: '50% increase in conversions',
  },
  {
    id: 'healthcare-system',
    title: 'Healthcare Management System',
    client: 'HealthPlus',
    industry: 'Healthcare',
    service: 'Enterprise Solution',
    description: 'HIPAA-compliant patient management and scheduling system.',
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    image: '/images/project-2.jpg',
    results: '70% reduction in admin time',
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    client: 'FinanceFirst',
    industry: 'Finance',
    service: 'Mobile App',
    description: 'Secure mobile banking application with biometric authentication.',
    technologies: ['React Native', 'Node.js', 'Firebase', 'Stripe'],
    image: '/images/project-3.jpg',
    results: '100K+ downloads in first month',
  },
  {
    id: 'crm-system',
    title: 'Custom CRM System',
    client: 'SalesPro',
    industry: 'Sales',
    service: 'Custom Software',
    description: 'Comprehensive CRM solution with advanced analytics and automation.',
    technologies: ['Angular', '.NET', 'SQL Server', 'Azure'],
    image: '/images/project-4.jpg',
    results: '35% increase in sales',
  },
  {
    id: 'learning-platform',
    title: 'Online Learning Platform',
    client: 'EduTech',
    industry: 'Education',
    service: 'Web Application',
    description: 'Interactive learning platform with video streaming and assessments.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    image: '/images/project-5.jpg',
    results: '10K+ active students',
  },
  {
    id: 'iot-dashboard',
    title: 'IoT Dashboard',
    client: 'SmartTech',
    industry: 'IoT',
    service: 'Web Application',
    description: 'Real-time IoT monitoring dashboard with data visualization.',
    technologies: ['React', 'Python', 'InfluxDB', 'Grafana'],
    image: '/images/project-6.jpg',
    results: 'Real-time monitoring for 1M+ devices',
  },
]

const PortfolioPage = () => {
  const [filter, setFilter] = useState<string>('all')
  const industries = ['all', ...Array.from(new Set(projects.map((p) => p.industry)))]
  const services = ['all', ...Array.from(new Set(projects.map((p) => p.service)))]

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true
    return project.industry === filter || project.service === filter
  })

  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-4">
                Our Portfolio
              </h1>
              <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
                Showcasing successful projects that have transformed businesses across industries
              </p>
            </div>
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  filter === 'all'
                    ? 'bg-secondary-gold text-primary-navy'
                    : 'bg-neutral-light-gray text-neutral-dark-gray hover:bg-neutral-medium-gray'
                }`}
              >
                All Projects
              </button>
              {industries.slice(1).map((industry) => (
                <button
                  key={industry}
                  onClick={() => setFilter(industry)}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    filter === industry
                      ? 'bg-secondary-gold text-primary-navy'
                      : 'bg-neutral-light-gray text-neutral-dark-gray hover:bg-neutral-medium-gray'
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} direction="up" delay={index * 0.1}>
                <Link href={`/portfolio/${project.id}`}>
                  <Card className="h-full group">
                    <div className="h-48 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">
                        {project.title}
                      </div>
                    </div>
                    <div className="mb-2">
                      <Badge variant="accent" size="sm" className="mr-2">
                        {project.industry}
                      </Badge>
                      <Badge variant="primary" size="sm">
                        {project.service}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary-navy mb-2 group-hover:text-accent-sky-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-medium-gray text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="default" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-accent-sky-blue font-medium text-sm group-hover:translate-x-2 transition-transform flex items-center gap-2">
                      View Case Study
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PortfolioPage

