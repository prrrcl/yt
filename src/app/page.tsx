"use client"

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const MotionLink = motion(Link)

export default function Home() {
  const [hover, setHover] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20)
  })

  useEffect(() => {
    if (typeof window !== undefined) {
      if (isMobileNavOpen) document.body.classList.add("overflow-hidden")
      if (!isMobileNavOpen) document.body.classList.remove("overflow-hidden")
    }
  }, [isMobileNavOpen])

  return (
    <div className="">
      <nav
        id="desktop-nav"
        onMouseLeave={() => setHover(null)}
        className="md:flex hidden justify-center h-10 items-center sticky top-0"
      >
        <div
          style={{
            maskImage:
              "linear-gradient(to bottom, black 20%, transparent 100%)",
          }}
          className="absolute left-0 right-0 top-0 h-20 pointer-events-none backdrop-blur-lg"
        />
        <AnimatePresence mode="popLayout">
          {isScrolled && (
            <div
              key="nav-items"
              className="flex items-center justify-center space-x-4"
            >
              {["Home", "About", "Contact"].map((item, index) => (
                <MotionLink
                  onMouseEnter={() => setHover(item)}
                  key={item}
                  href={item}
                  className="relative"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.05 * index,
                  }}
                >
                  <span>{item}</span>
                  <AnimatePresence>
                    {hover === item && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 bottom-0 h-px bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{
                          opacity: 0,
                          transition: {
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.2,
                          },
                        }}
                      />
                    )}
                  </AnimatePresence>
                </MotionLink>
              ))}
            </div>
          )}
          {!isScrolled && (
            <div
              key="logo"
              className="flex items-center justify-center space-x-0.5"
            >
              {["P", "R", "R", "R", "C", "L"].map((letter, index) => (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: 0.05 * index,
                  }}
                  key={`${letter}-${index}`}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          )}
        </AnimatePresence>
      </nav>
      <nav
        id="mobile-nav"
        className="md:hidden z-20 flex justify-center h-10 items-center sticky top-0"
      >
        <div
          style={{
            maskImage:
              "linear-gradient(to bottom, black 20%, transparent 100%)",
          }}
          className="absolute left-0 right-0 top-0 h-20 pointer-events-none backdrop-blur-lg"
        />
        <span className="tracking-widest relative z-10">PRRRCL</span>
        <button
          onClick={() => setIsMobileNavOpen((old) => !old)}
          className="absolute right-2 top-1/2 -translate-y-1/2 space-y-1 flex flex-col justify-center items-center h-6 w-6"
        >
          <motion.span
            animate={{
              rotate: isMobileNavOpen ? 45 : 0,
              y: isMobileNavOpen ? 6 : 0,
            }}
            className="min-w-3 h-px bg-white block"
          />
          <motion.span
            animate={{
              opacity: isMobileNavOpen ? 0 : 1,
              x: isMobileNavOpen ? 5 : 0,
            }}
            className="min-w-3 h-px bg-white block"
          />
          <motion.span
            animate={{
              rotate: isMobileNavOpen ? -45 : 0,
              y: isMobileNavOpen ? -4 : 0,
            }}
            className="min-w-3 h-px bg-white block"
          />
        </button>
      </nav>
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            className="fixed inset-0 z-10 bg-black/20 backdrop-blur-md flex flex-col justify-center space-y-5 items-center"
          >
            {["Home", "About", "Contact"].map((item, index) => (
              <MotionLink
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.05 * index,
                }}
                key={item}
                href={item}
              >
                {item}
              </MotionLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <main className="max-w-40 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        cupiditate fugit, sed a facilis magni hic nisi sit provident esse quia
        incidunt sequi iure magnam nemo adipisci, laudantium voluptas mollitia?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem distinctio
        debitis iure enim culpa omnis libero iusto, error repudiandae veritatis,
        ex, dignissimos adipisci. Deleniti non ullam molestiae, labore quasi
        earum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam voluptatum doloremque dicta beatae praesentium dolorum ipsum
        excepturi rem aut atque, quis aliquam in hic quo maiores, blanditiis
        alias aspernatur odit? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Aspernatur a, tempora repellat autem eveniet
        consequuntur. Omnis, ratione, qui consequatur repellendus eum ut
        provident, quae minima beatae neque sint quaerat reprehenderit!
      </main>
    </div>
  )
}
