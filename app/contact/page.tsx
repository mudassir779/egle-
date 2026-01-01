'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'
import Breadcrumbs from '@/components/Navigation/Breadcrumbs'
import AnimatedSection from '@/components/animations/AnimatedSection'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { COMPANY_INFO } from '@/lib/constants'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main id="main-content">
      <Header />
      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection direction="up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-navy mb-4">
                Get In Touch
              </h1>
              <p className="text-lg text-neutral-medium-gray max-w-2xl mx-auto">
                Ready to start your project? Let's discuss how we can help bring your vision to life.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-primary-navy mb-1">
                        Email Us
                      </h3>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-accent-sky-blue hover:underline"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-primary-navy mb-1">
                        Call Us
                      </h3>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        className="text-accent-sky-blue hover:underline"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-primary-navy mb-1">
                        Office Hours
                      </h3>
                      <p className="text-neutral-medium-gray">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="left">
              <Card>
                {isSubmitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-700">
                    <CheckCircle className="w-5 h-5" />
                    <span>Thank you! We'll get back to you soon.</span>
                  </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Input
                    label="Name"
                    {...register('name')}
                    error={errors.name?.message}
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    {...register('email')}
                    error={errors.email?.message}
                    required
                  />
                  <Input
                    label="Phone (Optional)"
                    type="tel"
                    {...register('phone')}
                    error={errors.phone?.message}
                  />
                  <Input
                    label="Company (Optional)"
                    {...register('company')}
                    error={errors.company?.message}
                  />
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark-gray mb-2">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('service')}
                      className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sky-blue"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="web-apps">Web Application Development</option>
                      <option value="mobile-apps">Mobile App Development</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="cloud-devops">Cloud Solutions & DevOps</option>
                      <option value="it-consulting">IT Consulting & Strategy</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                      <option value="enterprise">Enterprise Solutions</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-dark-gray mb-2">
                      Project Budget (Optional)
                    </label>
                    <select
                      {...register('budget')}
                      className="w-full px-4 py-3 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sky-blue"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                  <Textarea
                    label="Project Description"
                    rows={5}
                    {...register('message')}
                    error={errors.message?.message}
                    required
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="inline-block ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ContactPage

