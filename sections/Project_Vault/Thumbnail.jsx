"use client";
import { thumbnail } from "@/data/Thumbnails/thumbnail";
import Image from "next/image";
import React, { useState } from "react";
import { CircleChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Variants for staggered grid animation
const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
        },
    },
};

const Thumbnail = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            {/* Thumbnail Grid */}
            <motion.div
                className="flex flex-wrap justify-center gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {thumbnail.map(({ title, thumbnail }, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        onClick={() => setSelectedImage({ src: thumbnail, id: index })}
                        className="group w-96 cursor-pointer bg-[#0E0E0E] hover:bg-[#060606] flex flex-col justify-center rounded-md border border-neutral-900 transition-all duration-300"
                    >
                        {/* Thumbnail */}
                        <div className="px-2 pt-2">
                            <div className="rounded-md border border-neutral-800 overflow-hidden">
                                <Image
                                    className="object-cover rounded-md w-full"
                                    width={200}
                                    height={200}
                                    src={thumbnail}
                                    alt={title}
                                />
                            </div>
                        </div>

                        {/* Title section */}
                        <div className="flex justify-center items-center h-full">
                            <p className="flex items-center gap-2 text-neutral-100 p-4 text-sm transition-all duration-300 font-raleway">
                                {title}
                                <CircleChevronRight
                                    size={18}
                                    fill="white"
                                    className="opacity-0 text-black border border-black rounded-full -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                                />
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Modal Section - Optimized for Performance */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Image wrapper with optimized scale animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ 
                                duration: 0.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="relative max-w-4xl w-[90%] rounded-lg overflow-hidden will-change-transform"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt="Selected preview"
                                width={1200}
                                height={800}
                                className="rounded-lg w-full h-auto object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all hover:rotate-90 duration-300 backdrop-blur-sm border border-white/20 cursor-pointer"
                        >
                            <X size={24} strokeWidth={2} />
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Thumbnail;