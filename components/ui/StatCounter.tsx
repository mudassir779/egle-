'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  duration?: number
  icon?: React.ReactNode
  className?: string
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  suffix = '',
  prefix = '',
  duration = 2000,
  icon,
  className,
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0
    const endValue = value

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, duration])

  return (
    <div ref={ref} className={cn('text-center', className)}>
      {icon && <div className="flex justify-center mb-4 text-accent-sky-blue">{icon}</div>}
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy mb-2">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-neutral-medium-gray font-medium">{label}</div>
    </div>
  )
}

export default StatCounter

