import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { web_development } from '@/data/WebDevelopment/webdev' // Make sure this path is correct
import { CircleChevronRight } from 'lucide-react'

// Define variants *outside* the component to prevent re-declaration on every render.

// 1. Container Variants (for staggering)
// This remains similar to the previous version to keep the staggered effect.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children by 0.1 seconds
      delay: 0.2
    },
  },
}

// 2. Item Variants (for the pop-in effect)

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 1.05, // <-- START at 1.5
    y: 0,  
  },
  visible: {
    opacity: 1,
    y: 0,
    // --- 4-Step Keyframe Animation ---
    scale: [1.05, 1, 1.07, 1], // Step 1: 1.5->1, Step 2: 1->1.5->1
    boxShadow: [
      "0 0 0px 0px rgba(0,0,0,0)",         // 1. Start (at 1.5): No shadow
      "0 0 1px 1px rgba(255,222,173,0.6)", // 2. Midway (at 1): Strong shadow
      "0 0 0px 0px  rgba(0,0,0,0) ",       // 3. Midway (at 1.5): Medium shadow
      "0 0 0px 0px rgba(0,0,0,0)",       // 4. End (at 1): No shadow
    ],
    transition: {
      // --- Spring physics for slide-up and fade-in (remains the same) ---
      opacity: { type: "spring", damping: 10, stiffness: 100, mass: 0.8 },
      y: { type: "spring", damping: 10, stiffness: 100, mass: 0.8 },

      // --- Tween physics for the new 4-step keyframes ---
      scale: {
        duration: 3, // Increased total duration for the longer sequence
        ease: "easeInOut",
        // This is the key: it controls the timing of the 4 keyframes
        // [0 -> 0.33] = 1s for (1.5 -> 1)
        // [0.33 -> 0.6] = 0.8s for (1 -> 1.5)
        // [0.6 -> 1] = 1.2s for (1.5 -> 1)
        times: [0, 0.33, 0.55, 1]
      },
      boxShadow: {
        duration: 3, // Must match scale
        ease: "easeInOut",
        times: [0, 0.33, 0.55, 1] // Must match scale
      }
    },
  },
}




const Webdev = () => {
  return (
    <motion.div
      className="flex flex-wrap gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{  amount: 0.1 }} // Animation triggers once when 10% of the container is visible
    >
      {web_development.map(({ title, video, websiteLink, thumbnail }, index) => {
        const videoRef = useRef(null)

        const handleMouseEnter = () => {
          if (videoRef.current) videoRef.current.play()
        }

        const handleMouseLeave = () => {
          if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
          }
        }

        return (
          <motion.a
            key={index}
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="group w-96 cursor-pointer bg-[#0E0E0E] hover:bg-[#060606] flex flex-col justify-center rounded-md border border-neutral-900  relative overflow-hidden" // Added relative and overflow-hidden for potential bg effect
            variants={itemVariants}
          >
            {/* Optional: Background 'push' effect - not directly visible but can be styled */}
            {/* <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-900/0 to-cyan-500/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: itemVariants.visible.scale[1] > 1 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            /> */}

            {/* Video Thumbnail */}
            <div className="px-2 pt-2 z-10"> {/* Ensure content is above potential pseudo-background */}
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

            {/* Title section */}
            <div className="flex justify-center items-center h-full z-10">
              <p className="flex items-center gap-2 text-neutral-100 p-4 text-sm transition-all duration-300">
                {title}
                <CircleChevronRight
                  size={18}
                  fill="white"
                  className="opacity-0 text-black border border-black rounded-full -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                />
              </p>
            </div>
          </motion.a>
        )
      })}
    </motion.div>
  )
}

export default Webdev