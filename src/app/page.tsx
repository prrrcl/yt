"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion, Transition } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const transition: Transition = {
  duration: 0.3,
  ease: [0.42, 0, 0.58, 1],
}

const rotations = [-2, 2, -4, 4, 0]

const expandedPositions = [
  {
    x: "-150%",
    y: "20%",
    rotate: -10,
  },
  {
    x: "30%",
    y: "-110%",
    rotate: -20,
  },
  {
    x: "-160%",
    y: "-100%",
    rotate: 20,
  },
  {
    x: "30%",
    y: "30%",
    rotate: 20,
  },
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-96 group relative">
        <p
          className={cn(
            "text-white group-hover:text-white/50 transition-all duration-300",
            open && "text-white/0 group-hover:text-white/0"
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut qui
          laborum at asperiores id error, quas, eius culpa nesciunt modi
          officiis quisquam.{" "}
          <button onMouseMove={() => setOpen(true)} className="text-white">
            Gallery
          </button>{" "}
          Quae, perferendis? Accusantium ipsam odio illo commodi aspernatur.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut qui
          laborum at asperiores id error, quas, eius culpa nesciunt modi
          officiis quisquam.
        </p>
        <AnimatePresence>
          {open && (
            <div
              className="absolute inset-0"
              onMouseLeave={() => {
                setOpen(false)
                setExpanded(false)
              }}
            >
              {[4, 3, 2, 1].map((image, index) => (
                <motion.div
                  key={image}
                  onClick={() => setExpanded(true)}
                  initial={{
                    x: "-50%",
                    y: "-50%",
                    rotate: rotations[index % rotations.length],
                    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                  }}
                  animate={{
                    x: expanded
                      ? expandedPositions[index % expandedPositions.length].x
                      : "-50%",
                    y: expanded
                      ? expandedPositions[index % expandedPositions.length].y
                      : "-50%",
                    rotate: expanded
                      ? expandedPositions[index % expandedPositions.length]
                          .rotate
                      : rotations[index % rotations.length],
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                  exit={{
                    clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
                  }}
                  transition={{
                    ...transition,
                    delay: expanded ? 0 : index * 0.1,
                  }}
                  className="absolute w-full aspect-square top-1/2 left-1/2"
                >
                  <Image
                    src={`/${image}.jpg`}
                    alt={`Image ${image}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
