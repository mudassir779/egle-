import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import { generateMetadata as genMeta } from '@/lib/seo'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

const blogPosts: Record<string, any> = {
  '1': {
    title: 'The Future of Custom Software Development',
    excerpt: 'Exploring emerging trends and technologies shaping the software development landscape in 2024.',
    date: '2024-01-15',
    category: 'Technology',
    readTime: '5 min read',
    content: `
      <p>The software development landscape is constantly evolving, and 2024 brings exciting new trends and technologies that are reshaping how we build applications.</p>
      
      <h2>Emerging Technologies</h2>
      <p>Artificial Intelligence and Machine Learning are becoming integral parts of modern software development. From code generation to automated testing, AI is transforming the development process.</p>
      
      <h2>Cloud-Native Development</h2>
      <p>Cloud-native architectures are now the standard for scalable applications. Microservices, containerization, and serverless computing enable developers to build more resilient and efficient systems.</p>
      
      <h2>Low-Code and No-Code Platforms</h2>
      <p>While traditional development remains crucial, low-code and no-code platforms are democratizing software creation, allowing non-technical users to build applications.</p>
      
      <h2>Conclusion</h2>
      <p>As we move forward, developers must stay adaptable, continuously learning new technologies while maintaining focus on delivering value to users.</p>
    `,
  },
  '2': {
    title: 'Best Practices for Mobile App Development',
    excerpt: 'Essential guidelines for building high-performance, user-friendly mobile applications.',
    date: '2024-01-10',
    category: 'Mobile',
    readTime: '7 min read',
    content: `
      <p>Mobile app development requires careful consideration of performance, user experience, and platform-specific guidelines.</p>
      
      <h2>Performance Optimization</h2>
      <p>Optimize app performance by minimizing bundle size, implementing lazy loading, and using efficient data structures. Regular performance testing is crucial.</p>
      
      <h2>User Experience</h2>
      <p>Focus on intuitive navigation, fast load times, and responsive design. Test on multiple devices and screen sizes to ensure consistency.</p>
      
      <h2>Platform Guidelines</h2>
      <p>Follow iOS and Android design guidelines to create native-feeling experiences. Respect platform conventions for navigation and interactions.</p>
    `,
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug]
  if (!post) {
    return genMeta({ title: 'Post Not Found' })
  }
  return genMeta({
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, 'blog', 'software development'],
    type: 'article',
    publishedTime: post.date,
  })
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[
        { label: 'Blog', href: '/blog' },
        { label: post.title },
      ]} />

      <article className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection direction="up">
            <Link href="/blog" className="inline-flex items-center gap-2 text-neutral-medium-gray hover:text-primary-navy mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>

            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-secondary-gold bg-opacity-20 text-secondary-gold rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-neutral-medium-gray">
                <div className="flex items-center gap-1">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </AnimatedSection>
        </div>
      </article>

      <Footer />
    </main>
  )
}

export default BlogPostPage

