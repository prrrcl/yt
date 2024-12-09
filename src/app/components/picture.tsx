"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function Picture({
  children,
  yOrigin,
  xOrigin,
  rotateOrigin,
}: {
  children: React.ReactNode
  yOrigin: number
  xOrigin: number
  rotateOrigin: number
}) {
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 0.3], [yOrigin, 0])
  const x = useTransform(scrollYProgress, [0, 0.3], [xOrigin, 0])
  const rotate = useTransform(scrollYProgress, [0, 0.3], [rotateOrigin, 0])

  return (
    <motion.div
      style={{ y, x, rotate }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <div className="relative aspect-square overflow-hidden w-full">
        {children}
      </div>
    </motion.div>
  )
}
