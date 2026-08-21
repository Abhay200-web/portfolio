import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'DEVELOPMENT',
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'FastAPI',
      'Uvicorn',
      'Ollama Python SDK',
      'Qwen 2.5 VL 3B',
      'Trimesh',
      'NumPy',
      'Pandas',
      'OpenPyXL',
      'Tkinter',
      'PyRender',
      'PyOpenGL',
      'Matplotlib',
      'Pillow',
      'React',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Three.js',
      'REST APIs',
      'MySQL',
      'PostgreSQL',
      'Boto3',
      'Powerbase',
      'Git',
    ],
  },
  {
    category: 'DESIGN',
    skills: [
      'UI/UX Design',
      'Figma',
      'Wireframing',
      'Prototyping',
      'Responsive Design',
      'Design Systems',
    ],
  },
  {
    category: 'TOOLS',
    skills: [
      'Cursor IDE',
      'Antigravity IDE',
      'Claude Code',
      'Claude Design',
      'Stripe',
      'PayPal',
      'Razorpay',
      'Cloudflare',
      'Cloudflare D1',
      'Docker',
      'Render',
      'AWS',
      'S3',
      'R2',
      'MCP',
      'Git',
      'GitHub',
      'WordPress',
      'Postman',
      'VS Code',
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24 text-white"
        >
          SKILLS
        </motion.h2>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {skillCategories.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
              className="flex flex-col"
            >
              {/* Category Header */}
              <div className="border-b border-gray-800 pb-4 mb-6 flex justify-between items-baseline">
                <h3 className="text-xl font-medium tracking-wider text-white">
                  {group.category}
                </h3>
                <span className="text-xs text-gray-500 tracking-widest">
                  0{groupIdx + 1}
                </span>
              </div>

              {/* Skills Items */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: groupIdx * 0.1 + index * 0.04 }}
                    className="px-4 py-2 bg-neutral-900/80 border border-neutral-800 text-gray-300 text-sm md:text-base font-light rounded-sm hover:border-neutral-600 hover:text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
