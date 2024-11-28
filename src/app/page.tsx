"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const withBlur = true

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden grid place-items-center bg-[#EEECEE]">
      <motion.div
        initial={{
          background:
            "radial-gradient(100% 100% at 75% 100%, rgba(188, 122, 142, 0) 0%, rgba(188, 122, 142, 0) 25%, rgba(188, 122, 142, 0) 50%, rgba(232, 104, 147, 0) 100%), radial-gradient(100% 50% at 0% 100%, rgba(194, 174, 181, 0) 0%, rgba(194, 174, 181, 0) 25%, rgba(194, 174, 181, 0) 50%, rgba(194, 174, 181, 0) 100%), radial-gradient(100% 100% at 0% 50%, rgba(242, 186, 178, 0) 0%, rgba(242, 186, 178, 0) 25%, rgba(242, 186, 178, 0) 50%, rgba(242, 186, 178, 0) 100%)",
        }}
        animate={{
          background:
            "radial-gradient(100% 100% at 75% 100%, #aa808c 0%, rgba(188, 122, 142, 0.75) 25%, rgba(204, 116, 144, 0.5) 50%, rgba(232, 104, 147, 0) 100%), radial-gradient(100% 50% at 0% 100%, #c2aeb5 0%, rgba(194, 174, 181, 0.75) 25%, rgba(194, 174, 181, 0.5) 50%, rgba(194, 174, 181, 0) 100%), radial-gradient(100% 100% at 0% 50%, #f2bab2 0%, rgba(242, 186, 178, 0.75) 25%, rgba(242, 186, 178, 0.5) 50%, rgba(242, 186, 178, 0) 100%)",
        }}
        transition={{
          delay: 1.4,
          duration: 2,
        }}
        className="absolute inset-0"
      ></motion.div>

      {[1, 2].map((item) => (
        <motion.div
          key={item}
          initial={{
            scale: 0,
            x: "-50%",
            y: "-50%",
            filter: withBlur ? "blur(90px)" : undefined,
          }}
          animate={{
            scale: [0, 1.4, 1],
            x: ["-50%", "-30%", "0%"],
            y: ["-50%", "-70%", "-100%"],
            filter: withBlur ? "blur(190px)" : undefined,
            opacity: [1, 1, 0],
            transition: {
              ease: "linear",
              duration: 2.4,
              delay: 1.2,
            },
          }}
          className="absolute left-1/2 top-1/2 w-[24rem] h-[24rem] rounded-full p-7"
        >
          <div className="bg-[rgba(234,176,165,1)] absolute w-[115%] h-[115%] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute inset-0 bg-white mix-blend-overlay rounded-full" />
          <div className="absolute inset-0 bg-white mix-blend-overlay rounded-full" />
        </motion.div>
      ))}

      <motion.div
        initial={{
          x: "-50%",
          y: "-50%",
          opacity: 0,
          filter: withBlur ? "blur(90px)" : undefined,
        }}
        animate={{
          scale: [1, 1.5],
          opacity: [0, 1],
          x: ["-50%", "20%"],
          y: ["-50%", "-100%"],
          filter: withBlur ? "blur(150px)" : undefined,
        }}
        transition={{
          duration: 2,
          delay: 1.8,
        }}
        className="absolute mix-blend-overlay h-[24rem] bg-white w-[24rem] top-1/2 left-1/2 rounded-full"
      />
      <motion.p
        className="absolute top-[60%] left-1/2 -translate-x-1/2 text-black text-3xl text-center font-bold font-serif"
        initial={{
          opacity: 0,
          filter: withBlur ? "blur(90px)" : undefined,
        }}
        animate={{
          opacity: [0, 1],
          filter: withBlur ? "blur(0px)" : undefined,
        }}
        transition={{
          duration: 2,
          delay: 1.6,
        }}
      >
        Say hello on comments
      </motion.p>
      <Image
        className="mix-blend-multiply"
        src="/img.png"
        width={100}
        height={100}
        alt=""
      />
    </div>
  )
}
