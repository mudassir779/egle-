'use client'

import React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import { NAVIGATION_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set())

  const toggleExpanded = (name: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(name)) {
      newExpanded.delete(name)
    } else {
      newExpanded.add(name)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 shadow-large lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading font-bold text-xl text-primary-navy">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-light-gray rounded-lg"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-2">
                {NAVIGATION_LINKS.map((link) => (
                  <div key={link.name}>
                    {'submenu' in link && link.submenu ? (
                      <>
                        <button
                          onClick={() => toggleExpanded(link.name)}
                          className="w-full flex items-center justify-between py-3 px-4 text-left text-neutral-dark-gray hover:bg-neutral-light-gray rounded-lg transition-colors"
                        >
                          <span className="font-medium">{link.name}</span>
                          {expandedItems.has(link.name) ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                        <AnimatePresence>
                          {expandedItems.has(link.name) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1">
                                {link.submenu.map((subLink: { name: string; href: string }) => (
                                  <Link
                                    key={subLink.name}
                                    href={subLink.href}
                                    onClick={onClose}
                                    className="block py-2 px-4 text-sm text-neutral-medium-gray hover:text-primary-navy hover:bg-neutral-light-gray rounded-lg transition-colors"
                                  >
                                    {subLink.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block py-3 px-4 text-neutral-dark-gray hover:bg-neutral-light-gray rounded-lg transition-colors font-medium"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block mt-4 btn-primary text-center"
                >
                  Get Started
                </Link>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu

