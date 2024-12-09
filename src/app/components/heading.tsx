"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function Heading() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 0.3], ["0%", "-100.5%"])
  return (
    <div className="overflow-hidden flex-1 flex items-center">
      <motion.h1
        style={{ x }}
        className="text-[8rem] whitespace-nowrap font-semibold -tracking-wider"
      >
        Join Lapse and transform the way you create and share
      </motion.h1>
    </div>
  )
}
