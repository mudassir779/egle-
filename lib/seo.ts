import { Metadata } from 'next'
import { COMPANY_INFO } from './constants'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const siteName = COMPANY_INFO.name
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | ${COMPANY_INFO.tagline}`
  const metaDescription = description || COMPANY_INFO.description
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://theeaglehub.com'
  const ogImage = image || `${siteUrl}/og-image.jpg`
  const pageUrl = url || siteUrl

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type,
      url: pageUrl,
      title: fullTitle,
      description: metaDescription,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export function generateSchemaMarkup(type: 'Organization' | 'WebSite' | 'Service' | 'Article', data?: any) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  if (type === 'Organization') {
    return {
      ...baseSchema,
      name: COMPANY_INFO.name,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://theeaglehub.com',
      logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://theeaglehub.com'}/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone,
        contactType: 'Customer Service',
        email: COMPANY_INFO.email,
      },
      sameAs: Object.values(COMPANY_INFO.social),
    }
  }

  if (type === 'WebSite') {
    return {
      ...baseSchema,
      name: COMPANY_INFO.name,
      url: process.env.NEXT_PUBLIC_SITE_URL || 'https://theeaglehub.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://theeaglehub.com'}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }
  }

  return { ...baseSchema, ...data }
}

