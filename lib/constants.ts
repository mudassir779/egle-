export const BRAND_COLORS = {
  primary: {
    navy: '#1B2B4D',
  },
  secondary: {
    gold: '#F4B942',
    amber: '#F4B942',
  },
  accent: {
    skyBlue: '#4A90E2',
  },
  neutral: {
    white: '#FFFFFF',
    lightGray: '#F5F7FA',
    mediumGray: '#8B95A5',
    darkGray: '#2C3E50',
  },
} as const

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Custom Software Development', href: '/services/custom-software' },
      { name: 'Web Application Development', href: '/services/web-apps' },
      { name: 'Mobile App Development', href: '/services/mobile-apps' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'Cloud Solutions & DevOps', href: '/services/cloud-devops' },
      { name: 'IT Consulting & Strategy', href: '/services/it-consulting' },
      { name: 'E-commerce Solutions', href: '/services/ecommerce' },
      { name: 'Enterprise Solutions', href: '/services/enterprise' },
    ],
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
] as const

export const COMPANY_INFO = {
  name: 'The Eagle Hub',
  tagline: 'Empowering Businesses Through Intelligent Technology',
  description: 'Custom software solutions that scale with your vision',
  email: 'info@theeaglehub.com',
  phone: '+1 (XXX) XXX-XXXX',
  address: {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  },
  social: {
    linkedin: 'https://linkedin.com/company/theeaglehub',
    twitter: 'https://twitter.com/theeaglehub',
    facebook: 'https://facebook.com/theeaglehub',
    instagram: 'https://instagram.com/theeaglehub',
    github: 'https://github.com/theeaglehub',
  },
  stats: {
    yearsInBusiness: 5,
    projectsCompleted: 150,
    activeClients: 50,
    countriesServed: 12,
    teamMembers: 25,
    technologiesMastered: 30,
  },
} as const

export const SERVICES = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    description: 'Tailored software solutions built to your exact specifications',
    icon: 'Code',
  },
  {
    id: 'web-apps',
    title: 'Web Application Development',
    description: 'Modern, scalable web applications using cutting-edge technologies',
    icon: 'Globe',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    icon: 'Smartphone',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design that enhances user experience and engagement',
    icon: 'Palette',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Solutions & DevOps',
    description: 'Cloud infrastructure, CI/CD pipelines, and DevOps automation',
    icon: 'Cloud',
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Strategy',
    description: 'Strategic technology guidance to transform your business',
    icon: 'Lightbulb',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration',
    icon: 'ShoppingCart',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Solutions',
    description: 'Large-scale systems for enterprise-level requirements',
    icon: 'Building',
  },
] as const

export const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Discovery',
    description: 'Understanding your business needs and goals',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'Design',
    description: 'Creating wireframes and visual designs',
    icon: 'DraftingCompass',
  },
  {
    step: 3,
    title: 'Development',
    description: 'Building your solution with best practices',
    icon: 'Code',
  },
  {
    step: 4,
    title: 'Testing',
    description: 'Rigorous quality assurance and testing',
    icon: 'CheckCircle',
  },
  {
    step: 5,
    title: 'Launch',
    description: 'Deployment and go-live support',
    icon: 'Rocket',
  },
  {
    step: 6,
    title: 'Support',
    description: 'Ongoing maintenance and updates',
    icon: 'Headphones',
  },
] as const

export const WHY_CHOOSE_US = [
  {
    title: 'Agile Development Process',
    description: 'Flexible, iterative approach that adapts to your needs',
    icon: 'Zap',
  },
  {
    title: 'Dedicated Project Management',
    description: 'Expert project managers ensure smooth delivery',
    icon: 'Users',
  },
  {
    title: 'Scalable Architecture',
    description: 'Built to grow with your business from day one',
    icon: 'TrendingUp',
  },
  {
    title: 'Post-Launch Support',
    description: '24/7 support and continuous improvements',
    icon: 'Shield',
  },
] as const

