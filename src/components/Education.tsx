import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const certificates = [
  {
    rec: 'REC 001 / 003',
    code: '0-1',
    tabAlign: 'justify-start',
    tabLabel: 'ONETEAM SOLUTIONS',
    title: 'Full-Stack Development',
    issuer: 'ONETEAM SOLUTIONS',
    role: 'FULL-STACK DEVELOPER CERTIFICATE',
    description:
      'Hands-on training in full-stack web development, covering frontend and backend application development, REST APIs, databases, and building complete web applications.',
  },
  {
    rec: 'REC 002 / 003',
    code: '0-2',
    tabAlign: 'justify-end',
    tabLabel: 'IRONHUB INFOTECH',
    title: 'UI/UX Development',
    issuer: 'IRONHUB INFOTECH',
    role: 'UI/UX DESIGN & DEVELOPMENT',
    description:
      'Practical experience in UI/UX development, focusing on interface design, user experience, wireframing, prototyping, and creating responsive, user-focused digital experiences.',
  },
  {
    rec: 'REC 003 / 003',
    code: '0-3',
    tabAlign: 'justify-center',
    tabLabel: 'PEACELAB',
    title: 'Web Development',
    issuer: 'PEACELAB',
    role: 'WEB DEVELOPMENT PROGRAM',
    description:
      'Training in modern web development fundamentals, covering the development of responsive and functional websites using core web technologies.',
  },
]

function CertificateFolder({
  cert,
  index,
  total,
  scrollYProgress,
}: {
  cert: (typeof certificates)[number]
  index: number
  total: number
  scrollYProgress: MotionValue<number>
}) {
  // Extended scroll ranges with dedicated hold/pause duration for reading
  const step = 0.30
  const start = index * step
  const openEnd = start + 0.08    // Opening phase
  const holdEnd = openEnd + 0.16   // Dedicated reading hold phase
  const slideEnd = holdEnd + 0.08  // Slide away phase

  // Smooth transforms with reading pause
  const innerCardHeight = useTransform(scrollYProgress, [start, openEnd], [0, 190])
  const innerOpacity = useTransform(scrollYProgress, [start + 0.02, openEnd], [0, 1])
  const cardY = useTransform(scrollYProgress, [holdEnd, slideEnd], [0, -650])
  const cardOpacity = useTransform(scrollYProgress, [holdEnd + 0.03, slideEnd], [1, 0])

  return (
                <motion.div
                  style={{
                    y: index === total - 1 ? 0 : cardY,
                    opacity: index === total - 1 ? 1 : cardOpacity,
                    zIndex: total - index,
                  }}
                  className="w-full relative mb-[-40px] transition-shadow duration-300"
                >
                  {/* Protruding Manila Folder Tab */}
                  <div className={`flex w-full px-4 ${cert.tabAlign}`}>
                    <div className="bg-[#E4DFD3] border-t border-x border-[#CBC5B6] text-black text-xs font-mono px-6 py-2 rounded-t-md flex items-center gap-3 shadow-md">
                      <span className="bg-black text-white text-[10px] font-mono px-2 py-0.5 rounded-sm">
                        {cert.code}
                      </span>
                      <span className="font-bold tracking-wider uppercase">
                        {cert.tabLabel}
                      </span>
                    </div>
                  </div>

                  {/* Manila Folder Body */}
                  <div className="w-full bg-[#E4DFD3] border border-[#CBC5B6] rounded-b-lg rounded-tr-lg p-4 md:p-5 pb-4 md:pb-5 shadow-xl">
                    
                    {/* Dark Terminal Inner Opened Card (Folds open on scroll) */}
                    <motion.div
                      style={{
                        height: innerCardHeight,
                        opacity: innerOpacity,
                      }}
                      className="w-full bg-[#141414] text-white rounded-md overflow-hidden flex flex-col justify-between p-4 md:p-5 mb-2 shadow-2xl border border-neutral-800"
                    >
                      {/* Inner Card Top Header */}
                      <div className="flex justify-between items-center text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
                        <span>{cert.rec}</span>
                        <span className="text-neutral-500 uppercase">{cert.code}</span>
                      </div>

                      {/* Inner Card Description */}
                      <p className="text-xs md:text-sm text-neutral-200 leading-relaxed font-mono font-light my-2">
                        "{cert.description}"
                      </p>

                      {/* Inner Card Footer / Issuer */}
                      <div className="pt-2 border-t border-neutral-800 flex justify-between items-end">
                        <div>
                          <h3 className="text-sm md:text-base font-bold tracking-wider text-white uppercase">
                            {cert.issuer}
                          </h3>
                          <p className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest mt-0.5">
                            {cert.role} — {cert.title}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-1 bg-neutral-900 text-neutral-400 border border-neutral-800 rounded hidden sm:inline-block">
                          VERIFIED
                        </span>
                      </div>
                    </motion.div>

                    {/* Folder Header Label (when folder is stacked) */}
                    <div className="flex justify-between items-center text-xs font-mono text-[#333] pt-1">
                      <span className="font-bold tracking-widest uppercase">
                        {cert.title}
                      </span>
                      <span className="text-neutral-600 uppercase text-[11px]">
                        {cert.issuer}
                      </span>
                    </div>

                  </div>
                </motion.div>
  )
}

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="education" className="relative section-padding bg-[#161616] text-black border-y border-neutral-800/40">
      <div className="max-w-7xl mx-auto mb-12">
        {/* Section Header */}
        <div className="mb-4">
          <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">
            Official Credentials
          </span>
          <div className="w-8 h-px bg-neutral-700 mt-2" />
        </div>

        <h2 className="font-display text-[10vw] lg:text-section leading-none tracking-tight text-white uppercase">
          CERTIFICATIONS
        </h2>
      </div>

      {/* Sticky Folder Deck Container */}
      <div ref={containerRef} className="relative h-[400vh] w-full">
        <div className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-8">
          <div className="w-full max-w-4xl relative flex flex-col items-center [perspective:1200px]">
            
            {certificates.map((cert, index) => (
              <CertificateFolder
                key={cert.code}
                cert={cert}
                index={index}
                total={certificates.length}
                scrollYProgress={scrollYProgress}
              />
            ))}

            {/* Manila Folder Deck Base Cover */}
            <div className="w-full bg-[#DFD9CB] border border-[#CBC5B6] rounded-b-md px-6 py-3.5 flex justify-between items-center text-xs font-mono text-neutral-800 shadow-md relative z-0 mt-1">
              <span className="font-bold tracking-widest">CERTIFICATIONS / 03 FILES</span>
              <span className="text-neutral-600">SCROLL TO UNLOCK RECORDS</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
