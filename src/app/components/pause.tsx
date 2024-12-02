import { motion } from "framer-motion"

export function Pause() {
  return (
    <motion.svg
      initial={{
        y: -10,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: 10,
        opacity: 0,
      }}
      transition={{ duration: 0.2 }}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33301 2.33333C2.33301 2.01117 2.59418 1.75 2.91634 1.75H5.24967C5.57184 1.75 5.83301 2.01117 5.83301 2.33333V11.6667C5.83301 11.9888 5.57184 12.25 5.24967 12.25H2.91634C2.59418 12.25 2.33301 11.9888 2.33301 11.6667V2.33333Z"
        fill="white"
      />
      <path
        d="M8.16634 2.33333C8.16634 2.01117 8.42751 1.75 8.74967 1.75H11.083C11.4052 1.75 11.6663 2.01117 11.6663 2.33333V11.6667C11.6663 11.9888 11.4052 12.25 11.083 12.25H8.74967C8.42751 12.25 8.16634 11.9888 8.16634 11.6667V2.33333Z"
        fill="white"
      />
    </motion.svg>
  )
}
