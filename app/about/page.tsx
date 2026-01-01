import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import { generateMetadata as genMeta } from '@/lib/seo'
import { COMPANY_INFO } from '@/lib/constants'
import { Target, Eye, Award, Users, Building2, Heart } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'About Us',
  description: 'Learn about The Eagle Hub - our mission, vision, values, and the team behind exceptional software solutions.',
  keywords: ['about us', 'software development company', 'team', 'mission', 'vision'],
})

const AboutPage = () => {
  const values = [
    { icon: Target, title: 'Vision', description: 'Forward-thinking solutions that anticipate future needs' },
    { icon: Award, title: 'Precision', description: 'Meticulous attention to detail in every line of code' },
    { icon: Heart, title: 'Reliability', description: 'Consistent delivery and long-term partnership' },
    { icon: Building2, title: 'Innovation', description: 'Cutting-edge technology implementation' },
    { icon: Users, title: 'Integrity', description: 'Transparent communication and ethical practices' },
  ]

  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[{ label: 'About Us' }]} />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-6">
                About The Eagle Hub
              </h1>
              <p className="text-lg text-neutral-medium-gray">
                {COMPANY_INFO.description}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-neutral-light-gray">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <div>
                <h2 className="text-3xl font-heading font-bold text-primary-navy mb-4">Our Story</h2>
                <p className="text-neutral-medium-gray mb-4">
                  Founded with a vision to empower businesses through intelligent technology, The Eagle Hub
                  has grown from a small team of passionate developers to a trusted partner for companies
                  worldwide.
                </p>
                <p className="text-neutral-medium-gray mb-4">
                  We believe that great software is not just about code—it&apos;s about understanding your business,
                  anticipating your needs, and delivering solutions that drive real results.
                </p>
                <p className="text-neutral-medium-gray">
                  Today, we&apos;re proud to have delivered {COMPANY_INFO.stats.projectsCompleted}+ successful projects
                  and built lasting relationships with clients across {COMPANY_INFO.stats.countriesServed} countries.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="left">
              <div className="bg-gradient-primary rounded-xl h-64 md:h-96 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl font-bold mb-2">{COMPANY_INFO.stats.yearsInBusiness}+</div>
                  <div className="text-xl">Years of Excellence</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">
                Mission & Vision
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="up">
              <Card>
                <Eye className="w-12 h-12 text-accent-sky-blue mb-4" />
                <h3 className="text-2xl font-heading font-semibold text-primary-navy mb-3">Our Vision</h3>
                <p className="text-neutral-medium-gray">
                  To be the leading software development partner that businesses trust to transform their
                  digital presence and drive innovation in their industries.
                </p>
              </Card>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <Card>
                <Target className="w-12 h-12 text-secondary-gold mb-4" />
                <h3 className="text-2xl font-heading font-semibold text-primary-navy mb-3">Our Mission</h3>
                <p className="text-neutral-medium-gray">
                  To deliver exceptional software solutions that empower businesses to achieve their goals,
                  through innovative technology, expert craftsmanship, and unwavering commitment to excellence.
                </p>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-light-gray">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">
                Our Core Values
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <AnimatedSection key={value.title} direction="up" delay={index * 0.1}>
                  <Card className="text-center">
                    <Icon className="w-12 h-12 text-accent-sky-blue mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold text-primary-navy mb-2">
                      {value.title}
                    </h3>
                    <p className="text-neutral-medium-gray text-sm">
                      {value.description}
                    </p>
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

export default AboutPage

