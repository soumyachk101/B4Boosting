"use client"

import Image from "next/image"
import Link from "next/link"
import { Game } from "@/types"
import { cn } from "@/lib/utils"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface GameCardProps {
    game: Game
    className?: string
}

export function GameCard({ game, className }: GameCardProps) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={`/games/${game.slug}`} className={cn("block group perspective-1000", className)}>
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="relative aspect-[3/4] overflow-hidden rounded-xl bg-card border border-border transition-colors duration-300 group-hover:border-accent-green group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(0,255,136,0.15)] group-hover:z-10"
            >
                {/* 3D Glare overlay */}
                <motion.div
                    className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: useTransform(
                            () => `radial-gradient(circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)`
                        )
                    }}
                />

                <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90" />

                <div
                    className="absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-300 group-hover:-translate-y-2 z-10"
                    style={{ transform: "translateZ(30px)" }} // Pop text out in 3D space
                >
                    <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-accent-green transition-colors drop-shadow-md">
                        {game.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        {game.categories[0]}
                    </p>
                </div>
            </motion.div>
        </Link>
    )
}
