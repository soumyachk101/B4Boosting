"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button')) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener("mousemove", updateMousePosition)
        window.addEventListener("mouseover", handleMouseOver)

        return () => {
            window.removeEventListener("mousemove", updateMousePosition)
            window.removeEventListener("mouseover", handleMouseOver)
        }
    }, [])

    return (
        <>
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-accent-green rounded-full pointer-events-none z-[100] mix-blend-screen"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.1 }}
            />
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-accent-green/50 rounded-full pointer-events-none z-[99] bg-accent-green/5 mix-blend-screen"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.8 : 1,
                    backgroundColor: isHovering ? "rgba(0,255,136,0.15)" : "rgba(0,255,136,0.05)",
                    borderColor: isHovering ? "rgba(0,255,136,0.8)" : "rgba(0,255,136,0.5)"
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.2 }}
            />
        </>
    )
}
