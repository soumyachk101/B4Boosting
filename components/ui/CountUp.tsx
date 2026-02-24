"use client"

import { useEffect, useRef, useState } from "react"
import { formatCompactNumber } from "@/lib/utils"

interface CountUpProps {
    end: number
    duration?: number
    suffix?: string
    prefix?: string
}

export function CountUp({ end, duration = 2000, suffix = "", prefix = "" }: CountUpProps) {
    const [count, setCount] = useState(0)
    const countRef = useRef<HTMLSpanElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.1 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible) return

        let startTime: number
        let animationFrame: number

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime

            // Ease out function
            const percentage = Math.min(progress / duration, 1)
            const easeOut = 1 - Math.pow(1 - percentage, 3)

            const currentCount = Math.floor(easeOut * end)
            setCount(currentCount)

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate)
            } else {
                setCount(end)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationFrame)
    }, [end, duration, isVisible])

    return (
        <span ref={countRef} className="font-display font-bold tabular-nums">
            {prefix}{count === end && end >= 1000 ? formatCompactNumber(end) : count.toLocaleString()}{suffix}
        </span>
    )
}
