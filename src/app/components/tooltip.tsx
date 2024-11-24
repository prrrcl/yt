"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const springAnimation = {
  type: "spring",
  mass: 1.4,
  damping: 25,
  stiffness: 200,
}

export function Tooltip() {
  const [hover, setHover] = useState(false)

  return (
    <div className="relative [filter:url(#goo)]">
      <div
        onMouseMove={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="h-12 w-12 bg-white rounded-full relative z-10 flex items-center justify-center"
      >
        <p className="text-black text-2xl font-bold">?</p>
      </div>
      <AnimatePresence mode="popLayout">
        {hover && (
          <motion.div
            className="absolute z-0 overflow-hidden top-0 left-0 pointer-events-none"
            initial={{ y: 0 }}
            animate={{ y: -130 }}
            exit={{ y: 0 }}
            transition={{ duration: 0.5, ...springAnimation }}
          >
            <motion.div
              initial={{
                width: 48,
                borderRadius: 48,
                height: 48,
              }}
              animate={{
                width: 160,
                borderRadius: 12,
                height: 100,
              }}
              exit={{
                width: 48,
                borderRadius: 48,
                height: 48,
              }}
              transition={{ duration: 0.5, ...springAnimation }}
              className="bg-white"
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.2, ...springAnimation },
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: { duration: 0.2, ...springAnimation },
                }}
                className="text-black absolute inset-0 p-4"
              >
                Subscribe to <span className="font-semibold">@prrrcl</span>{" "}
                channel 🤗
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/** SVG with filter */}
      <svg className="w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
