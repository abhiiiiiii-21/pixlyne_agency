import { motion } from "motion/react";

export default function LongForm() {
    return (
        <div className="flex items-center justify-center h-screen font-raleway">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl font-light text-white tracking-widest"
            >
                Coming Soon<span className="animate-pulse">...</span>
            </motion.h1>
        </div>
    );
}
