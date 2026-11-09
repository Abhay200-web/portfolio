import { useState } from 'react'
import { Navigation } from '@/components/Navigation'
import { GrainOverlay } from '@/components/GrainOverlay'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { WhatIDo } from '@/components/WhatIDo'
import { Work } from '@/components/Work'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { Preloader } from '@/components/Preloader'

export default function Index() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <GrainOverlay />
      <Navigation isLoading={isLoading} />
      <main>
        <Hero isLoading={isLoading} />
        <About />
        <Skills />
        <WhatIDo />
        <Work />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

