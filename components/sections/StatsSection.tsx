'use client'

import React from 'react'
import { Calendar, FolderOpen, Users, Globe, UserCheck, Layers } from 'lucide-react'
import AnimatedSection from '@/components/animations/AnimatedSection'
import StatCounter from '@/components/ui/StatCounter'
import { COMPANY_INFO } from '@/lib/constants'

const StatsSection: React.FC = () => {
  const stats = [
    {
      value: COMPANY_INFO.stats.yearsInBusiness,
      label: 'Years in Business',
      icon: Calendar,
    },
    {
      value: COMPANY_INFO.stats.projectsCompleted,
      label: 'Projects Completed',
      icon: FolderOpen,
    },
    {
      value: COMPANY_INFO.stats.activeClients,
      label: 'Active Clients',
      icon: Users,
    },
    {
      value: COMPANY_INFO.stats.countriesServed,
      label: 'Countries Served',
      icon: Globe,
    },
    {
      value: COMPANY_INFO.stats.teamMembers,
      label: 'Team Members',
      icon: UserCheck,
    },
    {
      value: COMPANY_INFO.stats.technologiesMastered,
      label: 'Technologies Mastered',
      icon: Layers,
    },
  ]

  return (
    <section className="section-padding bg-gradient-primary text-white">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-neutral-light-gray max-w-2xl mx-auto">
              Delivering excellence across industries and borders
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <AnimatedSection key={index} direction="up" delay={index * 0.1}>
                <StatCounter
                  value={stat.value}
                  label={stat.label}
                  icon={<Icon className="w-8 h-8" />}
                  className="text-white"
                />
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection

