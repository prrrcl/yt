"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [open, setOpen] = useState(false)
  const [feedback, setFeedback] = useState("")

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(e.target.value)
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setFeedback("")
      setOpen(false)
    }
  }

  return (
    <div className="grid place-items-center h-screen" onKeyUp={handleKeyUp}>
      <h1 className="text-2xl font-bold absolute bottom-5 left-1/2 -translate-x-1/2">
        Feedback
      </h1>
      <motion.div
        className={cn(
          "relative border rounded-lg flex flex-col justify-end",
          !open && "bg-black/5 bg-white hover:bg-black/5 transition-colors"
        )}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {open && (
            <motion.div
              initial={{
                height: 32,
                width: 100,
                opacity: 0,
              }}
              animate={{
                height: 150,
                width: 200,
                opacity: 1,
              }}
              exit={{
                height: 32,
                width: 100,
                opacity: 0,
              }}
              transition={{
                ease: "easeInOut",
              }}
              className="overflow-hidden flex flex-col p-2"
              key="feedback-modal"
            >
              <textarea
                value={feedback}
                onChange={handleChangeTextArea}
                className="resize-none flex-1 outline-none focus:outline-none"
                placeholder="Feedback"
              />
              <div className="flex justify-between">
                <div className="flex space-x-1">
                  <button
                    onClick={() => setFeedback((old) => old + "🚀")}
                    className="border rounded-md aspect-square"
                  >
                    🚀
                  </button>
                  <button
                    onClick={() => setFeedback((old) => old + "💬")}
                    className="border rounded-md aspect-square"
                  >
                    💬
                  </button>
                  <button
                    onClick={() => setFeedback((old) => old + "🚫")}
                    className="border rounded-md aspect-square"
                  >
                    🚫
                  </button>
                </div>
                <button className="border rounded-md px-2 py-1">Send</button>
              </div>
            </motion.div>
          )}
          {!open && (
            <motion.button
              key="feedback-button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                ease: "easeInOut",
              }}
              onClick={() => setOpen(true)}
              className="px-3 py-1 font-semibold"
            >
              Feedback
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
