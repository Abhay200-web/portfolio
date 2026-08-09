import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Me</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Full Stack Development & UI/UX"
              className="w-full h-[400px] lg:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              FULL-STACK ENGINEERING — FRONTEND, BACKEND & DATABASE
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
              I'm a Python Full-Stack Developer with a background in UI/UX design. I enjoy working across the entire product development process — from understanding an idea and designing the interface to building the frontend, backend and database systems behind it.
            </p>
          </motion.div>
        </div>

        {/* Highlight / Philosophy Statement */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[7vw] lg:text-section leading-none tracking-tight text-gray-300">
            "BUILDING PRODUCTS THAT ARE<br />
            <span className="text-white underline underline-offset-8">NOT ONLY FUNCTIONAL</span>,<br />
            BUT ALSO SIMPLE AND INTUITIVE."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            CORE PHILOSOPHY & PRODUCT VISION
          </p>
        </motion.div>

        {/* Second Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div
            {...fadeInUp}
            className="flex items-center"
          >
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
              I've worked on web applications, mobile applications, management systems, marketplaces and internal software tools. My focus is building products that are not only functional, but also simple and intuitive to use.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="UI/UX & Product Design"
              className="w-full h-[400px] lg:h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              APPLICATIONS, MARKETPLACES & MANAGEMENT SYSTEMS
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
