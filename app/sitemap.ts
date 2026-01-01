import { MetadataRoute } from 'next'
import { SERVICES, NAVIGATION_LINKS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theeaglehub.com'

  const routes = [
    '',
    '/about',
    '/portfolio',
    '/testimonials',
    '/technologies',
    '/contact',
    '/blog',
  ]

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...staticRoutes, ...serviceRoutes]
}

