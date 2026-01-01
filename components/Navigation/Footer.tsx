'use client'

import React from 'react'
import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram, Github, Mail, Phone } from 'lucide-react'
import { NAVIGATION_LINKS, COMPANY_INFO } from '@/lib/constants'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: COMPANY_INFO.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: COMPANY_INFO.social.twitter, label: 'Twitter' },
    { icon: Facebook, href: COMPANY_INFO.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: COMPANY_INFO.social.instagram, label: 'Instagram' },
    { icon: Github, href: COMPANY_INFO.social.github, label: 'GitHub' },
  ]

  return (
    <footer className="bg-primary-navy text-neutral-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="font-heading font-bold text-xl">{COMPANY_INFO.name}</span>
            </div>
            <p className="text-neutral-medium-gray mb-4">{COMPANY_INFO.description}</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-medium-gray hover:text-secondary-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.find((link) => link.name === 'Services')?.submenu?.slice(0, 5).map((subLink) => (
                <li key={subLink.name}>
                  <Link
                    href={subLink.href}
                    className="text-neutral-medium-gray hover:text-secondary-gold transition-colors"
                  >
                    {subLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-neutral-medium-gray hover:text-secondary-gold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-neutral-medium-gray hover:text-secondary-gold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-medium-gray text-sm">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-neutral-medium-gray hover:text-secondary-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-medium-gray hover:text-secondary-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

