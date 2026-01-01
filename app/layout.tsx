import type { Metadata } from 'next'
import { Montserrat, Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import { generateMetadata as genMeta, generateSchemaMarkup } from '@/lib/seo'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-code',
  display: 'swap',
})

export const metadata: Metadata = genMeta({
  title: 'Home',
  description: 'The Eagle Hub - Custom software development and digital solutions. Empowering businesses through intelligent technology.',
  keywords: ['software development', 'web development', 'mobile apps', 'custom software', 'IT consulting'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateSchemaMarkup('Organization')
  const websiteSchema = generateSchemaMarkup('WebSite')

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${firaCode.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-body">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}

