import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

interface PreloaderProps {
  onComplete: () => void
}

const stackImages = [
  '/hero-image.jpg',
  'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
]

export function Preloader({ onComplete }: PreloaderProps) {
  // Phase 1: Fan out 3D stack of cards
  // Phase 2: Expand main hero image to full screen
  // Phase 3: Complete & vanish
  const [phase, setPhase] = useState<number>(1)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const startedRef = useRef(false)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true

    // Disable scrolling while loading
    document.body.style.overflow = 'hidden'

    const t1 = setTimeout(() => setPhase(2), 1000)
    const t2 = setTimeout(() => {
      setPhase(3)
      document.body.style.overflow = ''
      onCompleteRef.current()
    }, 1900)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
          {/* 3D Perspective Container */}
          <div className="relative flex items-center justify-center w-full h-full [perspective:1200px]">
            
            {/* Phase 1 & 2: 3D Stack of Cards & Expansion */}
            {phase >= 1 && (
              <div className="relative flex items-center justify-center w-full h-full">
                {stackImages.map((img, i) => {
                  const isMain = i === 0

                  // Calculate 3D rotations & offsets for fanning out
                  const offsets = [
                    { rotateY: 15, rotateZ: -6, x: -60, y: -20, z: -100 },
                    { rotateY: -12, rotateZ: 8, x: 50, y: -10, z: -50 },
                    { rotateY: 8, rotateZ: -4, x: -10, y: 30, z: 0 },
                  ]
                  const currentOffset = offsets[i % offsets.length]

                  return (
                    <motion.div
                      key={i}
                      initial={{
                        scale: 0.5,
                        opacity: 0,
                        rotateY: 0,
                        rotateZ: 0,
                        x: 0,
                        y: 0,
                        z: 0,
                        width: '240px',
                        height: '320px',
                        borderRadius: '12px',
                      }}
                      animate={
                        phase === 1
                          ? {
                              scale: 1,
                              opacity: 1,
                              rotateY: currentOffset.rotateY,
                              rotateZ: currentOffset.rotateZ,
                              x: currentOffset.x,
                              y: currentOffset.y,
                              z: currentOffset.z,
                              width: '260px',
                              height: '340px',
                              borderRadius: '8px',
                            }
                          : isMain
                          ? {
                              scale: 1,
                              opacity: 1,
                              rotateY: 0,
                              rotateZ: 0,
                              x: 0,
                              y: 0,
                              z: 0,
                              width: '100vw',
                              height: '100vh',
                              borderRadius: '0px',
                            }
                          : {
                              scale: 1.2,
                              opacity: 0,
                              x: currentOffset.x * 2.5,
                              y: currentOffset.y * 2.5,
                            }
                      }
                      transition={{
                        duration: phase === 1 ? 0.8 : 0.9,
                        ease: [0.76, 0, 0.24, 1],
                        delay: phase === 1 ? i * 0.08 : 0,
                      }}
                      className={`absolute overflow-hidden shadow-2xl ${
                        isMain ? 'z-30' : i === 1 ? 'z-20' : 'z-10'
                      }`}
                    >
                      <img
                        src={img}
                        alt="Hero load preview"
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay on secondary cards */}
                      {!isMain && (
                        <div className="absolute inset-0 bg-black/30" />
                      )}
                    </motion.div>
                  )
                })}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
