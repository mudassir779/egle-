'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2'
    
    const variants = {
      primary: 'bg-secondary-gold text-primary-navy hover:bg-opacity-90 hover:shadow-medium focus:ring-secondary-gold',
      secondary: 'bg-transparent border-2 border-secondary-gold text-secondary-gold hover:bg-secondary-gold hover:text-primary-navy focus:ring-secondary-gold',
      outline: 'bg-transparent border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-neutral-white focus:ring-primary-navy',
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    const {
      onAnimationStart,
      onAnimationEnd,
      onDragStart,
      onDrag,
      onDragEnd,
      ...motionProps
    } = props

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...(motionProps as any)}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button

