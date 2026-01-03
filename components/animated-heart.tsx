"use client"

import { motion } from "framer-motion"

export function AnimatedHeart() {
    return (
        <motion.span
            className="inline-block mx-1"
            animate={{
                scale: [1, 1.2, 1],
            }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            }}
        >
            ❤️
        </motion.span>
    )
}
