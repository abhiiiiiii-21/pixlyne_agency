import { thumbnail } from '@/data/Thumbnails/thumbnail'
import Image from 'next/image'
import React from 'react'
import { ChevronLeft, ChevronRight, CircleChevronRight } from 'lucide-react' // 👈 Import Chevron icon

const Thumbnail = () => {
    return (
        <div className="flex flex-wrap gap-8">
            {thumbnail.map(({title,thumbnail}, index) => (
                <div
                    key={index}
                    className="group w-96 cursor-pointer bg-[#0E0E0E] hover:bg-[#060606] flex flex-col justify-center rounded-md border border-neutral-900 transition-all duration-300"
                >
                    {/* Thumbnail */}
                    <div className="px-2 pt-2">
                        <Image
                            className="object-cover rounded-md border border-neutral-800 w-full "
                            width={200}
                            height={200}
                            src={thumbnail}
                            alt="preview"
                        />
                    </div>

                    {/* Title section with animated Chevron */}
                    <div className="flex justify-center items-center h-full">
                        <p className="flex items-center gap-2 text-neutral-100 p-4 text-sm transition-all duration-300">
                            {/* Chevron hidden by default */}
                            {title}
                            <CircleChevronRight
                                size={18}
                                fill="white"
                                className="opacity-0 text-black border border-black rounded-full -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Thumbnail
