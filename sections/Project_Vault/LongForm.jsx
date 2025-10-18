import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CircleChevronRight } from 'lucide-react'
import { web_development } from '@/data/WebDevelopment/webdev'
import { longForm } from '@/data/LongForm/longForm'

const Webdev = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState(null)
  const modalVideoRef = useRef(null)

  const openModal = (videoUrl) => {
    setActiveVideo(videoUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      modalVideoRef.current.currentTime = 0
    }
    setActiveVideo(null)
  }

  // Auto-play when modal opens
  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0
      modalVideoRef.current.play().catch(() => {
        // autoplay may be blocked; user can press play
      })
    }
  }, [isModalOpen])

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isModalOpen) closeModal()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isModalOpen])

  return (
    <div className="flex flex-wrap gap-8" aria-hidden={isModalOpen}>
      {longForm.map(({ title, video, thumbnail }, index) => {
        const videoRef = useRef(null)

        const handleMouseEnter = () => {
          if (videoRef.current) {
            videoRef.current.play()
          }
        }

        const handleMouseLeave = () => {
          if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
          }
        }

        return (
          <a
            key={index}
            href={video}
            onClick={(e) => {
              e.preventDefault()
              openModal(video)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') openModal(video)
            }}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group w-96 cursor-pointer bg-[#0E0E0E] hover:bg-[#060606] flex flex-col justify-center rounded-md border border-neutral-900 transition-all duration-300"
          >
            {/* Video Thumbnail */}
            <div className="px-2 pt-2">
              <video
                ref={videoRef}
                src={video}
                poster={thumbnail}
                muted
                playsInline
                preload="none"
                className="object-cover rounded-md border border-neutral-800 w-full h-56 transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title section with animated Chevron */}
            <div className="flex justify-center items-center h-full">
              <p className="flex items-center gap-2 text-neutral-100 p-4 text-sm transition-all duration-300">
                {title}
                <CircleChevronRight
                  size={18}
                  fill="white"
                  className="opacity-0 text-black border border-black rounded-full -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </p>
            </div>
          </a>
        )
      })}

      {/* Modal player */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ y: 32, scale: 0.94, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative w-[90vw] max-w-4xl bg-black rounded-lg shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                aria-label="Close video"
                className="absolute top-3 right-3 z-20 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              >
                ✕
              </button>

              <div className="aspect-video bg-black">
                <motion.video
                  ref={modalVideoRef}
                  src={activeVideo}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.99, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Webdev
