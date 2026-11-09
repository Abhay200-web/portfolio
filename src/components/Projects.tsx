import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const projects = [
  {
    rec: 'DEPLOYMENT 001 / 002',
    code: '0-1',
    tabAlign: 'justify-start',
    tabLabel: 'ASSETHIVE3D',
    title: '3D Assets Marketplace',
    url: 'https://assethive3d.com',
    host: 'assethive3d.com',
    image: '/projects/assethive3d.webp',
    role: 'FULL-STACK DEVELOPER',
    description:
      'A 3D asset marketplace in the vein of Sketchfab and TurboSquid. It sells high, mid and low poly game-ready models, plus plugins that automate workflows in 3ds Max, Blender, Maya and other 3D tools.',
    stack: ['Python', 'Django', 'React', 'PostgreSQL', 'Cloudflare R2', 'Stripe'],
    infra: 'Frontend: Cloudflare Pages · API + PostgreSQL: Render',
    github: '',
  },
  {
    rec: 'DEPLOYMENT 002 / 002',
    code: '0-2',
    tabAlign: 'justify-end',
    tabLabel: 'OUTSOURCING CAD WORKS',
    title: 'Architectural Services Landing Page',
    url: 'https://www.outsourcingcadworks.com/campaigns-for-architectural-services/',
    host: 'outsourcingcadworks.com',
    image: '/projects/outsourcingcadworks.webp',
    role: 'FRONTEND DEVELOPER',
    description:
      'A conversion-focused one-page campaign site for an architectural and CAD drafting company, built to present their services and capture leads.',
    stack: ['HTML', 'CSS', 'React JS', 'Responsive Design'],
    infra: 'Live campaign page',
    github: '',
  },
]

type Project = (typeof projects)[number]

function useIsMobile() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return mobile
}

function LiveBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-emerald-400 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      LIVE
    </span>
  )
}

function BrowserPreview({ project }: { project: Project }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.host} live`}
      className="group block rounded-md overflow-hidden border border-neutral-700 bg-[#1c1c1c] h-full flex flex-col"
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-3 py-2 bg-[#262626] border-b border-neutral-700 shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-neutral-600" />
          <span className="w-2 h-2 rounded-full bg-neutral-600" />
          <span className="w-2 h-2 rounded-full bg-neutral-600" />
        </div>
        <div className="flex-1 flex items-center gap-2 bg-[#141414] rounded px-2.5 py-1 text-[10px] font-mono text-neutral-400 truncate">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400 shrink-0">
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <span className="truncate">{project.host}</span>
        </div>
      </div>

      {/* Preview */}
      <div className="relative flex-1 min-h-0 overflow-hidden bg-[#0f0f0f]">
        {!imgFailed ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-neutral-600 font-mono">
            <span className="text-2xl md:text-3xl font-bold tracking-widest text-neutral-500">
              {project.host}
            </span>
            <span className="text-[10px] tracking-widest">PREVIEW</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-mono tracking-widest text-white border border-white/60 px-4 py-2 rounded-full">
            OPEN LIVE SITE ↗
          </span>
        </div>
      </div>
    </a>
  )
}

function ProjectFolder({
  project,
  index,
  total,
  scrollYProgress,
  isMobile,
}: {
  project: Project
  index: number
  total: number
  scrollYProgress: MotionValue<number>
  isMobile: boolean
}) {
  const step = 0.4
  const start = index * step
  const openEnd = start + 0.12
  const holdEnd = openEnd + 0.2
  const slideEnd = holdEnd + 0.1

  const openHeight = isMobile ? 600 : 380
  const innerCardHeight = useTransform(scrollYProgress, [start, openEnd], [0, openHeight])
  const innerOpacity = useTransform(scrollYProgress, [start + 0.02, openEnd], [0, 1])
  const cardY = useTransform(scrollYProgress, [holdEnd, slideEnd], [0, -800])
  const cardOpacity = useTransform(scrollYProgress, [holdEnd + 0.03, slideEnd], [1, 0])
  const isLast = index === total - 1

  return (
    <motion.div
      style={{
        y: isLast ? 0 : cardY,
        opacity: isLast ? 1 : cardOpacity,
        zIndex: total - index,
      }}
      className="w-full relative mb-[-40px]"
    >
      {/* Folder tab */}
      <div className={`flex w-full px-4 ${project.tabAlign}`}>
        <div className="bg-[#E4DFD3] border-t border-x border-[#CBC5B6] text-black text-xs font-mono px-6 py-2 rounded-t-md flex items-center gap-3 shadow-md">
          <span className="bg-black text-white text-[10px] font-mono px-2 py-0.5 rounded-sm">
            {project.code}
          </span>
          <span className="font-bold tracking-wider uppercase">{project.tabLabel}</span>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
          </span>
        </div>
      </div>

      {/* Folder body */}
      <div className="w-full bg-[#E4DFD3] border border-[#CBC5B6] rounded-b-lg rounded-tr-lg p-4 md:p-5 shadow-xl">
        <motion.div
          style={{ height: innerCardHeight, opacity: innerOpacity }}
          className="w-full bg-[#141414] text-white rounded-md overflow-hidden flex flex-col p-4 md:p-5 mb-2 shadow-2xl border border-neutral-800"
        >
          {/* Header */}
          <div className="flex justify-between items-center text-xs font-mono text-neutral-400 pb-3 border-b border-neutral-800 shrink-0">
            <span>{project.rec}</span>
            <LiveBadge />
          </div>

          <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-4 md:gap-6 pt-4">
            <div className="min-h-[200px] md:min-h-0">
              <BrowserPreview project={project} />
            </div>

            <div className="flex flex-col justify-between min-h-0">
              <div>
                <p className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase mb-1">
                  {project.role}
                </p>
                <h3 className="text-base md:text-xl font-bold tracking-wide uppercase text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-xs md:text-[13px] text-neutral-300 leading-relaxed font-mono font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 text-[10px] font-mono text-neutral-400 border border-neutral-700 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-neutral-800">
                <p className="text-[10px] font-mono text-neutral-500 mb-3">{project.infra}</p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-400 hover:bg-emerald-300 text-black text-xs font-mono font-bold tracking-widest px-4 py-2 rounded transition-colors"
                  >
                    VISIT LIVE SITE ↗
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-mono tracking-widest px-4 py-2 rounded border border-neutral-700 text-neutral-300 hover:border-neutral-400 transition-colors"
                    >
                      SOURCE ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Folder label (stacked state) */}
        <div className="flex justify-between items-center text-xs font-mono text-[#333] pt-1">
          <span className="font-bold tracking-widest uppercase">{project.title}</span>
          <span className="text-neutral-600 uppercase text-[11px]">{project.host}</span>
        </div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="projects"
      className="relative section-padding bg-[#161616] text-black border-y border-neutral-800/40"
    >
      <div className="max-w-7xl mx-auto mb-12">
        <div className="mb-4">
          <span className="text-xs font-mono text-neutral-500 tracking-widest uppercase">
            Live Deployments
          </span>
          <div className="w-8 h-px bg-neutral-700 mt-2" />
        </div>
        <h2 className="font-display text-[10vw] lg:text-section leading-none tracking-tight text-white uppercase">
          PROJECTS
        </h2>
      </div>

      <div ref={containerRef} className="relative h-[320vh] w-full">
        <div className="sticky top-0 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-8">
          <div className="w-full max-w-5xl relative flex flex-col items-center [perspective:1200px]">
            {projects.map((project, index) => (
              <ProjectFolder
                key={project.code}
                project={project}
                index={index}
                total={projects.length}
                scrollYProgress={scrollYProgress}
                isMobile={isMobile}
              />
            ))}

            <div className="w-full bg-[#DFD9CB] border border-[#CBC5B6] rounded-b-md px-6 py-3.5 flex justify-between items-center text-xs font-mono text-neutral-800 shadow-md relative z-0 mt-1">
              <span className="font-bold tracking-widest">PROJECTS / 02 LIVE</span>
              <span className="text-neutral-600">SCROLL TO OPEN FILES</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
