import { motion } from 'framer-motion'

const contactLinks = [
  {
    label: 'EMAIL',
    value: 'maabhay688@email.com',
    href: 'mailto:maabhay688@email.com',
  },
  {
    label: 'WHATSAPP',
    value: '+91 8848633024',
    href: 'https://wa.me/918848633024',
  },
  {
    label: 'INSTAGRAM',
    value: 'instagram.com/ab.ha.y1',
    href: 'https://www.instagram.com/ab.ha.y1/',
  },
  {
    label: 'GITHUB',
    value: 'github.com/Abhay200-web',
    href: 'https://github.com/Abhay200-web',
  },
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/abhay-ma-506a7b224',
    href: 'https://www.linkedin.com/in/abhay-ma-506a7b224',
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
    <section id="contact" className="section-padding">
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

        {/* Contact Links List */}
        <div className="space-y-0 max-w-3xl border-t border-gray-800">
          {contactLinks.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 py-6 group hover:bg-gray-900/40 transition-colors px-4 -mx-4 rounded-sm"
            >
              <span className="text-xs text-gray-500 tracking-widest font-mono uppercase mb-1 sm:mb-0">
                {item.label}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors">
                  {item.value}
                </span>
                <span className="text-gray-500 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300">
                  ↗
                </span>
              </div>
            </motion.a>
          ))}
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
