'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { cn } from '@/lib/utils'
import Card from './Card'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
  className?: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  content,
  rating,
  image,
  className,
}) => {
  return (
    <Card className={cn('relative', className)}>
      <Quote className="absolute top-4 right-4 w-12 h-12 text-secondary-gold opacity-20" />
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              'w-5 h-5',
              i < rating ? 'fill-secondary-gold text-secondary-gold' : 'text-neutral-medium-gray'
            )}
          />
        ))}
      </div>
      <p className="text-neutral-dark-gray mb-6 italic">{content}</p>
      <div className="flex items-center gap-4">
        {image && (
          <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-light-gray">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <div>
          <p className="font-semibold text-primary-navy">{name}</p>
          <p className="text-sm text-neutral-medium-gray">
            {role} at {company}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard

