"use client"

import { motion } from "framer-motion"

interface FadeInProps {
    children: React.ReactNode
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    distance?: number
    duration?: number
    className?: string
}

export function FadeIn({
    children,
    delay = 0,
    direction = "up",
    distance = 30,
    duration = 0.6,
    className = "",
}: FadeInProps) {

    const getHiddenPosition = () => {
        switch (direction) {
            case "up": return { y: distance, opacity: 0 }
            case "down": return { y: -distance, opacity: 0 }
            case "left": return { x: distance, opacity: 0 }
            case "right": return { x: -distance, opacity: 0 }
            case "none": return { opacity: 0 }
            default: return { y: distance, opacity: 0 }
        }
    }

    return (
        <motion.div
            initial={getHiddenPosition()}
            whileInView={{
                y: 0,
                x: 0,
                opacity: 1
            }}
            viewport={{ once: true, amount: 0.1, margin: "50px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Custom cubic-bezier for a smooth snap-into-place
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
