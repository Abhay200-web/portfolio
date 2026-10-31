import { motion } from 'framer-motion'
import { Mail, Instagram, Github, Linkedin } from 'lucide-react'

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.89-9.9 9.89zM20.5 3.5A11.8 11.8 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.88c0 2.09.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.85 11.85 0 0 0 5.68 1.45h.01c6.54 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.43-8.42z" />
  </svg>
)

const contactLinks = [
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:maabhay688@email.com',
    title: 'Email',
    message: 'Click and send an email to Abhay and get a free quote.',
  },
  {
    label: 'WhatsApp',
    icon: WhatsAppIcon,
    href: 'https://wa.me/918848633024',
    title: 'WhatsApp',
    message: 'Chat with Abhay directly. Quick replies and a free quote.',
  },
  {
    label: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/ab.ha.y1/',
    title: 'Instagram',
    message: 'Follow my work and say hi in the DMs.',
  },
  {
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/Abhay200-web',
    title: 'GitHub',
    message: 'Browse my projects and source code.',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/abhay-ma-506a7b224',
    title: 'LinkedIn',
    message: "Let's connect professionally.",
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[10vw] lg:text-hero leading-none tracking-tight mb-8 text-white uppercase"
        >
          LET'S BUILD SOMETHING.
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-800 mb-12 lg:mb-16"
        />

        {/* Subtitle */}
        <motion.div
          {...fadeInUp}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-light leading-snug">
            Have a project, idea or opportunity?<br />
            <span className="text-white font-normal underline underline-offset-8">Let's talk.</span>
          </h3>
        </motion.div>

        {/* Contact Icons */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-8 pb-16 border-t border-gray-800 max-w-3xl">
          {contactLinks.map((item, index) => {
            const Icon = item.icon
            const isMail = item.href.startsWith('mailto:')
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative group"
              >
                <a
                  href={item.href}
                  target={isMail ? undefined : '_blank'}
                  rel={isMail ? undefined : 'noopener noreferrer'}
                  aria-label={item.label}
                  className="flex items-center justify-center w-14 h-14 rounded-full border border-gray-700 text-gray-300 bg-white/[0.03] transition-all duration-300 hover:text-white hover:border-white/40 hover:bg-white/10 focus-visible:text-white focus-visible:border-white/40 focus-visible:outline-none"
                >
                  <Icon className="w-6 h-6" />
                </a>

                {/* Glass popup */}
                <div
                  role="tooltip"
                  className="pointer-events-none absolute z-20 w-60 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/10
                    opacity-0 transition-all duration-300
                    top-full left-0 mt-3 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0
                    sm:top-1/2 sm:left-full sm:mt-0 sm:ml-4 sm:-translate-y-1/2 sm:-translate-x-2 sm:group-hover:translate-x-0 sm:group-focus-within:translate-x-0 sm:group-hover:-translate-y-1/2 sm:group-focus-within:-translate-y-1/2
                    group-hover:opacity-100 group-focus-within:opacity-100"
                >
                  <p className="text-xs font-mono tracking-widest uppercase text-gray-300 mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm text-white leading-snug">{item.message}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Abhay. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Python Full-Stack Developer & UI/UX Designer
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
