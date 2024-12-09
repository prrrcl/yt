"use client"

import Image from "next/image"
import { Picture } from "./picture"
import { motion, useScroll, useTransform } from "framer-motion"

export function Screen1() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1])

  const scale = useTransform(scrollYProgress, [0.4, 0.45], [1, 0.8])
  const screenOpacity = useTransform(scrollYProgress, [0.4, 0.45], [1, 0])

  return (
    <motion.div
      style={{
        scale,
        opacity: screenOpacity,
      }}
      className="absolute left-3 right-3 top-7 bottom-7 origin-bottom"
    >
      <div className="z-20 absolute inset-0 py-10">
        <div className="relative w-full h-full">
          <Picture yOrigin={-200} xOrigin={400} rotateOrigin={10}>
            <Image
              className="object-cover"
              src="/screen1-1.avif"
              fill
              alt="screen1-1"
            />
          </Picture>
          <Picture yOrigin={-120} xOrigin={200} rotateOrigin={30}>
            <Image
              className="object-cover"
              src="/screen1-3.avif"
              fill
              alt="screen1-3"
            />
          </Picture>
          <Picture yOrigin={30} xOrigin={300} rotateOrigin={10}>
            <Image
              className="object-cover"
              src="/screen1-4.avif"
              fill
              alt="screen1-4"
            />
          </Picture>
          <Picture yOrigin={80} xOrigin={500} rotateOrigin={-10}>
            <Image
              className="object-cover"
              src="/screen1-5.png"
              fill
              alt="screen1-5"
            />
          </Picture>
          <Picture yOrigin={-80} xOrigin={430} rotateOrigin={-10}>
            <Image
              className="object-cover"
              src="/screen1-2.avif"
              fill
              alt="screen1-2"
            />
          </Picture>
        </div>
      </div>
      <motion.div
        style={{
          opacity,
        }}
        className="absolute top-0 left-0 right-0 bottom-0 z-0 overflow-hidden rounded-3xl"
      >
        <Image src="/screen2-1.avif" fill alt="screen1-bg" />
      </motion.div>
    </motion.div>
  )
}
