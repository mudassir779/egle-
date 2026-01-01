import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Code, Globe, Smartphone, Database, Cloud, Wrench } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Technologies & Expertise',
  description: 'Explore our technology stack and expertise across modern development platforms and tools.',
  keywords: ['technologies', 'tech stack', 'programming languages', 'frameworks', 'tools'],
})

const technologies = {
  'Front-End': {
    icon: Globe,
    techs: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'Bootstrap'],
  },
  'Back-End': {
    icon: Code,
    techs: ['Node.js', 'Python', 'PHP', 'Ruby on Rails', '.NET Core', 'Express', 'Django', 'Laravel', 'NestJS', 'FastAPI'],
  },
  'Mobile': {
    icon: Smartphone,
    techs: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)', 'Xamarin', 'Ionic'],
  },
  'Databases': {
    icon: Database,
    techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'Elasticsearch', 'SQL Server'],
  },
  'Cloud & DevOps': {
    icon: Cloud,
    techs: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitHub Actions'],
  },
  'Tools & Platforms': {
    icon: Wrench,
    techs: ['Git', 'GitHub', 'GitLab', 'Jira', 'Figma', 'Postman', 'Swagger', 'Google Analytics'],
  },
}

const TechnologiesPage = () => {
  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[{ label: 'Technologies' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-4">
                Technologies & Expertise
              </h1>
              <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
                We work with cutting-edge technologies to build modern, scalable solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(technologies).map(([category, data], index) => {
              const Icon = data.icon
              return (
                <AnimatedSection key={category} direction="up" delay={index * 0.1}>
                  <Card className="h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-heading font-semibold text-primary-navy">
                        {category}
                      </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.techs.map((tech) => (
                        <Badge key={tech} variant="default">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
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

export default TechnologiesPage

