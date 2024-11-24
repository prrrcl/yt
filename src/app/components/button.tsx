"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export function Button() {
  const [active, setActive] = useState("Send form")

  return (
    <motion.button
      initial={{ width: 300 }}
      animate={{
        width: active === "Apply" ? 300 : 350,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15,
        duration: 0.5,
        delay: 0.2,
      }}
      onMouseMove={() => setActive("Apply")}
      onMouseLeave={() => setActive("Send form")}
      className="relative bg-white/10 rounded-full h-16 px-4 py-2 flex origin-center justify-center items-center"
    >
      <div className="absolute inset-0 [filter:url(#threshold)] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={active}
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            exit={{ filter: "blur(10px)" }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeInOut" }}
            className="text-4xl font-bold whitespace-nowrap"
          >
            {active}
          </motion.span>
        </AnimatePresence>
      </div>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>
    </motion.button>
  )
}
