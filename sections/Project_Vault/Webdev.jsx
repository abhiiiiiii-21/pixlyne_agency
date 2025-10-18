import { web_development } from '@/data/Web Development/webdev'
import React, { useRef } from 'react'
import { CircleChevronRight } from 'lucide-react'

const Webdev = () => {
  return (
    <div className="flex flex-wrap gap-8">
      {web_development.map(({ title, video, websiteLink, thumbnail }, index) => {
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
            href={websiteLink}
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
    </div>
  )
}

export default Webdev
