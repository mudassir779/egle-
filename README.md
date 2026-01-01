# The Eagle Hub - Website

A modern, animated website for The Eagle Hub software development company, built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI/UX with custom animations
- 📱 Fully responsive design
- ⚡ Optimized performance
- 🔍 SEO-friendly with metadata and sitemap
- ♿ Accessibility compliant (WCAG 2.1 AA)
- 🎯 Interactive tools (Cost Calculator)
- 📝 Blog system
- 📧 Contact forms with validation
- 🎭 Smooth page transitions and animations

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd "Egle Hub"
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── services/         # Service pages
│   ├── portfolio/         # Portfolio pages
│   ├── blog/              # Blog pages
│   └── ...
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── sections/         # Page sections
│   ├── animations/       # Animation wrappers
│   └── Navigation/      # Navigation components
├── lib/                   # Utilities and helpers
├── public/                # Static assets
└── styles/                # Global styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The site is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables
4. Deploy

## Brand Colors

- **Primary Navy:** `#1B2B4D`
- **Secondary Gold:** `#F4B942`
- **Accent Sky Blue:** `#4A90E2`

## License

Copyright © 2024 The Eagle Hub. All rights reserved.

