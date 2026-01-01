'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Button from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'

const FinalCTA: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-primary text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-secondary-gold rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-accent-sky-blue rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <p className="text-xl text-neutral-light-gray mb-8">
              Let's discuss your project and explore how we can help you achieve your goals
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="bg-white text-primary-navy hover:bg-opacity-90 group">
                  Schedule Consultation
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="secondary" size="lg" className="bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-primary-navy">
                  View Our Work
                </Button>
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-neutral-light-gray">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-secondary-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 hover:text-secondary-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA

