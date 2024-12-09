"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function Phone() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.3], ["100%", "0%"])
  return (
    <motion.div
      style={{ y }}
      className="relative aspect-[562/1226] max-h-[639px]"
    >
      <Image
        src="/iphone-mockup.avif"
        alt="iphone mockup"
        fill
        className="object-contain"
      />
    </motion.div>
  )
}
