"use client"

import Image from "next/image"
import { Picture } from "./picture"
import { motion, useScroll, useTransform } from "framer-motion"

export function Screen2() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0.4, 0.45], ["100%", "0%"])

  return (
    <motion.div className="absolute left-3 right-3 top-7 bottom-7 origin-bottom overflow-hidden">
      <motion.div
        style={{
          y,
        }}
        className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden rounded-3xl"
      >
        <Image src="/screen3-1.avif" fill alt="screen1-bg" />
      </motion.div>
    </motion.div>
  )
}
