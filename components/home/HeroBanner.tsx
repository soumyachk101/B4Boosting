"use client"

import { motion, Variants } from "framer-motion"
import Link from "next/link"
import { GlowButton } from "@/components/ui/GlowButton"
import { Button } from "@/components/ui/button"
import { CountUp } from "@/components/ui/CountUp"
import { useEffect, useState } from "react"

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50 } },
} satisfies Variants

export function HeroBanner() {
    const [particles, setParticles] = useState<Array<{ style: React.CSSProperties, key: number }>>([])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticles([...Array(20)].map((_, i) => ({
            key: i,
            style: {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animation: `float ${Math.random() * 8 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
            }
        })))
    }, [])

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* Liquid Morphic Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 mix-blend-screen isolate flex justify-center items-center">
                <motion.div
                    className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full bg-accent-green/20 blur-[120px] mix-blend-screen"
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -50, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className="absolute w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-accent-cyan/20 blur-[100px] mix-blend-screen -ml-[30vw]"
                    animate={{
                        x: [0, -80, 40, 0],
                        y: [0, 80, -60, 0],
                        scale: [1, 1.1, 0.8, 1],
                    }}
                    transition={{
                        duration: 18,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
                <motion.div
                    className="absolute w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full bg-accent-blue/10 blur-[140px] mix-blend-screen mt-[20vh]"
                    animate={{
                        x: [0, 60, -90, 0],
                        y: [0, -40, 70, 0],
                        scale: [1, 1.05, 0.95, 1],
                    }}
                    transition={{
                        duration: 25,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                />
            </div>

            {/* Grid overlay for texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center max-w-5xl mx-auto bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[3rem] p-8 md:p-16 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_100px_-20px_rgba(0,255,102,0.15)] relative overflow-hidden"
                >
                    {/* Glass glare */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute -left-40 -top-40 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

                    <motion.div variants={item} className="mb-8 relative z-10">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 text-accent-green text-xs font-bold uppercase tracking-wider">
                            ⚡ #1 Gaming Services Platform
                        </span>
                    </motion.div>

                    <motion.h1 variants={item} className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8">
                        Level Up Your <br />
                        <span className="text-gradient drop-shadow-lg">Gaming Experience</span>
                    </motion.h1>

                    <motion.p variants={item} className="text-gray-300 text-lg md:text-2xl max-w-3xl mb-12 leading-relaxed font-light">
                        Buy boosting, currency, accounts & items — instantly & securely.
                        Join thousands of satisfied gamers today.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mb-16 w-full justify-center">
                        <Link href="/browse">
                            <GlowButton size="lg" className="h-14 px-8 text-base w-full sm:w-auto">
                                Browse Services
                            </GlowButton>
                        </Link>
                        <Link href="/seller">
                            <Button variant="outline" size="lg" className="h-14 px-8 text-base border-border bg-transparent hover:bg-white/5 w-full sm:w-auto">
                                Sell Services
                            </Button>
                        </Link>
                    </motion.div>

                    <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-3xl border-t border-white/5 pt-8">
                        <div className="flex flex-col items-center">
                            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                                <CountUp end={50} suffix="K+" />
                            </div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">Orders</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                                <CountUp end={10} suffix="K+" />
                            </div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">Sellers</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                                <CountUp end={4.9} suffix="★" />
                            </div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">Rating</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                                24/7
                            </div>
                            <span className="text-sm text-gray-500 uppercase tracking-widest font-medium">Support</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative slant */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-bg-primary" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
        </section>
    )
}
