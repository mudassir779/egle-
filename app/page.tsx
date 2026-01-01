import React from 'react'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Hero from '@/components/sections/Hero'
import ServicesOverview from '@/components/sections/ServicesOverview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import ProcessTimeline from '@/components/sections/ProcessTimeline'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import BlogPreview from '@/components/sections/BlogPreview'
import FinalCTA from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <ProcessTimeline />
      <StatsSection />
      <TestimonialsSection />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </main>
  )
}

