'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const blogPosts = [
  {
    id: '1',
    title: 'The Future of Custom Software Development',
    excerpt: 'Exploring emerging trends and technologies shaping the software development landscape in 2024.',
    date: '2024-01-15',
    image: '/images/blog-1.jpg',
    category: 'Technology',
  },
  {
    id: '2',
    title: 'Best Practices for Mobile App Development',
    excerpt: 'Essential guidelines for building high-performance, user-friendly mobile applications.',
    date: '2024-01-10',
    image: '/images/blog-2.jpg',
    category: 'Mobile',
  },
  {
    id: '3',
    title: 'Cloud Migration: A Complete Guide',
    excerpt: 'Step-by-step guide to migrating your infrastructure to the cloud successfully.',
    date: '2024-01-05',
    image: '/images/blog-3.jpg',
    category: 'Cloud',
  },
]

const BlogPreview: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection direction="up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights from our experts
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} direction="up" delay={index * 0.1}>
              <Link href={`/blog/${post.id}`}>
                <Card className="h-full group">
                  <div className="h-48 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <div className="text-white text-4xl font-bold opacity-50">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-medium-gray mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-navy mb-2 group-hover:text-accent-sky-blue transition-colors">
                    {post.title}
                  </h3>
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

        <div className="text-center">
          <Link href="/blog">
            <Button variant="outline">Visit Our Blog</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview

