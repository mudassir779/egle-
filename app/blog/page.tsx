import React from 'react'
import { Metadata } from 'next'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = genMeta({
  title: 'Blog',
  description: 'Latest insights, trends, and best practices in software development and digital solutions.',
  keywords: ['blog', 'software development', 'technology', 'insights', 'tutorials'],
})

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Custom Software Development',
    excerpt: 'Exploring emerging trends and technologies shaping the software development landscape in 2024.',
    date: '2024-01-15',
    category: 'Technology',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: 'Best Practices for Mobile App Development',
    excerpt: 'Essential guidelines for building high-performance, user-friendly mobile applications.',
    date: '2024-01-10',
    category: 'Mobile',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'Cloud Migration: A Complete Guide',
    excerpt: 'Step-by-step guide to migrating your infrastructure to the cloud successfully.',
    date: '2024-01-05',
    category: 'Cloud',
    readTime: '10 min read',
  },
  {
    id: '4',
    title: 'UI/UX Design Principles for Modern Web Apps',
    excerpt: 'Key design principles that enhance user experience and drive engagement.',
    date: '2023-12-28',
    category: 'Design',
    readTime: '6 min read',
  },
  {
    id: '5',
    title: 'Agile Development: A Comprehensive Overview',
    excerpt: 'Understanding agile methodologies and how they improve software development processes.',
    date: '2023-12-20',
    category: 'Methodology',
    readTime: '8 min read',
  },
  {
    id: '6',
    title: 'Security Best Practices for Web Applications',
    excerpt: 'Essential security measures every developer should implement in their applications.',
    date: '2023-12-15',
    category: 'Security',
    readTime: '9 min read',
  },
]

const BlogPage = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[{ label: 'Blog' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-4">
                Our Blog
              </h1>
              <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
                Stay updated with the latest trends, insights, and best practices
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} direction="up" delay={index * 0.1}>
                <Link href={`/blog/${post.id}`}>
                  <Card className="h-full group">
                    <div className="h-48 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold opacity-50">
                        {post.category}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-neutral-medium-gray mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-heading font-semibold text-primary-navy mb-2 group-hover:text-accent-sky-blue transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-neutral-medium-gray text-sm mb-4">
                      {post.excerpt}
                    </p>
                    <div className="text-accent-sky-blue font-medium text-sm group-hover:translate-x-2 transition-transform flex items-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4" />
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

export default BlogPage

