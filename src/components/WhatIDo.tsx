import { motion } from 'framer-motion'

interface ServiceItem {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  colSpan: string
}

const services: ServiceItem[] = [
  {
    id: 'fullstack',
    number: '01',
    title: 'FULL-STACK DEVELOPMENT',
    description:
      'Building complete web applications across frontend, backend, APIs, databases, authentication, and deployment.',
    tags: ['Python', 'Django', 'React', 'REST APIs', 'PostgreSQL', 'MySQL'],
    colSpan: 'md:col-span-2',
  },
  {
    id: 'uiux',
    number: '02',
    title: 'UI/UX DESIGN',
    description:
      'Designing intuitive interfaces and user experiences that balance visual quality, usability, responsiveness, and functionality.',
    tags: ['Figma', 'Wireframes', 'Prototyping', 'Responsive Design', 'Design Systems'],
    colSpan: 'md:col-span-1',
  },
  {
    id: 'ai',
    number: '03',
    title: 'AI INTEGRATION & AI AGENTS',
    description:
      'Integrating AI into digital products and building AI-powered workflows and agents that can automate tasks, process information, and interact with applications and services.',
    tags: ['AI Integration', 'LLM Applications', 'AI Agents', 'Automation', 'API Integration'],
    colSpan: 'md:col-span-1',
  },
  {
    id: 'products',
    number: '04',
    title: 'DIGITAL PRODUCTS',
    description:
      'Turning ideas into functional digital products—from defining the user experience and designing the interface to developing and delivering the final application.',
    tags: ['Product Development', 'Web Applications', 'SaaS', 'Marketplaces', 'Internal Tools'],
    colSpan: 'md:col-span-1',
  },
  {
    id: 'wordpress',
    number: '05',
    title: 'WORDPRESS & WEBSITE MANAGEMENT',
    description:
      'Building, customizing, and maintaining WordPress websites with a focus on performance, usability, content management, and ongoing updates.',
    tags: ['WordPress', 'Website Development', 'Customization', 'Maintenance', 'Performance'],
    colSpan: 'md:col-span-1',
  },
  {
    id: 'marketing',
    number: '06',
    title: 'DIGITAL MARKETING',
    description:
      'Helping digital products and businesses establish a stronger online presence through website optimization, content strategy, SEO fundamentals, and digital marketing initiatives.',
    tags: ['SEO', 'Content Strategy', 'Social Media', 'Website Optimization', 'Digital Presence'],
    colSpan: 'md:col-span-2',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function WhatIDo() {
  return (
    <section id="what-i-do" className="section-padding bg-[#161616] text-white overflow-hidden border-y border-neutral-800/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Label matching site design */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Services</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Section Title matching the screenshot style */}
        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24 text-white uppercase"
        >
          WHAT I DO
        </motion.h2>

        {/* Technical Bracket Boxes Grid matching screenshot layout */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className={`relative px-8 py-10 sm:p-10 md:p-12 bg-[#0a0a0a]/80 group hover:bg-[#0a0a0a] transition-all duration-300 ${item.colSpan}`}
            >
              {/* ASCII / Technical Bracket Corner & Side Lines */}
              {/* Top border line with downward corner ticks ┌ ┐ */}
              <div className="absolute top-0 left-0 right-0 h-px bg-neutral-600/90 group-hover:bg-white transition-colors duration-300" />
              <div className="absolute top-0 left-0 w-px h-4 bg-neutral-600/90 group-hover:bg-white transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-px h-4 bg-neutral-600/90 group-hover:bg-white transition-colors duration-300" />

              {/* Left and Right vertical side lines │ │ */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-px h-12 sm:h-16 bg-neutral-600/90 group-hover:bg-white transition-colors duration-300" />
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-px h-12 sm:h-16 bg-neutral-600/90 group-hover:bg-white transition-colors duration-300" />

              {/* Bottom border line with upward corner ticks └ ┘ */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-neutral-600/90 group-hover:bg-white transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-px h-4 bg-neutral-600/90 group-hover:bg-white transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-px h-4 bg-neutral-600/90 group-hover:bg-white transition-colors duration-300" />

              {/* Card Content */}
              <div className="flex flex-col items-center text-center relative z-10">
                {/* Number */}
                <span className="font-mono text-sm text-neutral-400 tracking-widest mb-3 group-hover:text-neutral-300 transition-colors">
                  {item.number} —
                </span>

                {/* Title in Monospace font - Bigger */}
                <h3 className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider text-white uppercase transition-colors max-w-xl leading-snug">
                  {item.title}
                </h3>

                {/* Description - Bigger */}
                <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl group-hover:text-white transition-colors">
                  {item.description}
                </p>

                {/* Tech Stack List - Bigger */}
                <div className="mt-6 font-mono text-xs sm:text-sm md:text-base text-neutral-400 tracking-wide group-hover:text-neutral-300 transition-colors">
                  {item.tags.join(' · ')}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
