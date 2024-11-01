"use client"

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Pause } from "./components/pause"
import { Play } from "./components/play"
import { cn } from "@/lib/utils"

const videos = [
  {
    id: 1,
    url: "/1.mp4",
  },
  {
    id: 2,
    url: "/3.mp4",
  },
  {
    id: 3,
    url: "/2.mp4",
  },
  {
    id: 4,
    url: "/4.mp4",
  },
  {
    id: 5,
    url: "/5.mp4",
  },
]

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(
    Math.floor(videos.length / 2)
  )

  const handleVideoEnded = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length)
  }

  return (
    <div className="h-screen grid place-items-center relative">
      <div className="flex gap-4 px-8">
        {videos.map((video, index) => (
          <Video
            key={video.id}
            url={video.url}
            active={currentVideo === index}
            currentVideo={currentVideo}
            index={index}
            onEnded={handleVideoEnded}
            setCurrentVideo={() => setCurrentVideo(index)}
          />
        ))}
      </div>
      <h1 className="text-4xl font-bold absolute bottom-4 left-0 w-full text-center">
        Gallery
      </h1>
    </div>
  )
}

const Video = ({
  url,
  active,
  onEnded,
  setCurrentVideo,
  index,
  currentVideo,
}: {
  url: string
  active: boolean
  onEnded: () => void
  setCurrentVideo: () => void
  index: number
  currentVideo: number
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [duration, setDuration] = useState(0)
  const progress = useMotionValue(0)
  const animatedProgress = useTransform(progress, [0, duration], [0, 100])
  const springProgress = useSpring(animatedProgress)
  const springProgressWidth = useTransform(
    springProgress,
    (value) => `${value}%`
  )

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    progress.set(videoRef.current.currentTime)
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause()
      setIsPlaying(false)
    } else {
      videoRef.current?.play()
      setIsPlaying(true)
    }
  }

  const calculatedWidth = () => {
    if (active) return "80%"
    const distances = {
      1: "10%",
      2: "6%",
      3: "3%",
      4: "1%",
    }
    const distance = Math.abs(currentVideo - index)

    return distances[distance as keyof typeof distances]
  }

  const calculatedDelay = () => {
    if (active) return 0

    const distance = Math.abs(currentVideo - index)

    return distance * 0.15
  }

  useEffect(() => {
    if (active) {
      videoRef.current?.play()
      setDuration(videoRef.current?.duration || 0)
      setIsPlaying(true)
    } else {
      videoRef.current?.pause()
      setIsPlaying(false)
    }
  }, [active])

  return (
    <motion.div
      initial={{ opacity: 0, width: calculatedWidth() }}
      animate={{
        width: calculatedWidth(),
        opacity: 1,
        transition: {
          opacity: {
            delay: calculatedDelay(),
          },
        },
      }}
      className="relative h-[450px] rounded-xl overflow-hidden"
      onClick={setCurrentVideo}
    >
      <video
        ref={videoRef}
        muted
        playsInline
        controls={false}
        autoPlay={active}
        onTimeUpdate={handleTimeUpdate}
        src={url}
        onEnded={onEnded}
        className={cn(
          "w-full h-full object-cover transition-transform duration-700 ease-in-out",
          !active && "scale-150"
        )}
      />
      <AnimatePresence>
        {active && (
          <motion.div
            key="play-pause"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-4 right-4"
          >
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                onClick={handlePlayPause}
                className="cursor-pointer p-1"
                key={isPlaying ? "pause" : "play"}
                initial={{ y: -10, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isPlaying ? <Pause /> : <Play />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
        {active && (
          <motion.div
            key="progressBar"
            className="absolute top-2 left-2 right-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1 } }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              style={{
                width: springProgressWidth,
              }}
              className="h-1 bg-white rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
