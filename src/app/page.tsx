"use client"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const slides = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg"]

const MotionImage = motion(Image)

export default function Home() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearTimeout(timeout)
  }, [active])

  return (
    <div className="h-screen relative">
      <div className="max-w-3xl mx-auto">
        <div className="w-full aspect-square md:aspect-video relative overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
              key={slides[active]}
              className="w-full h-full"
            >
              <MotionImage
                initial={{ x: -100, scale: 1.1 }}
                animate={{ x: 0, scale: 1 }}
                exit={{ x: 100, scale: 1.1 }}
                transition={{ duration: 1, ease: [0.85, 0, 0.15, 1] }}
                src={slides[active]}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-4 left-4 flex gap-2 text-white">
            {slides.map((slide, index) => (
              <SlideLabel key={slide} index={index} active={active}>
                SLIDE {index + 1}
              </SlideLabel>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const SlideLabel = ({
  children,
  index,
  active,
}: {
  children: React.ReactNode
  index: number
  active: number
}) => {
  return (
    <div className="relative">
      <p className="text-white/40 uppercase">{children}</p>
      <AnimatePresence initial={false} mode="popLayout">
        {active >= index && (
          <motion.p
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.85, 0, 0.15, 1] }}
            className="text-white uppercase absolute top-0 left-0 w-full h-full"
          >
            {children}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
