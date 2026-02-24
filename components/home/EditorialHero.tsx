"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Shield, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
}

const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
}

export function EditorialHero() {
    return (
        <section className="relative w-full min-h-[90vh] flex border-b border-white/5 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-pink/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-30" />

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Left: Huge Typography */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-7 flex flex-col justify-center pt-20 lg:pt-0"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <motion.div variants={itemVariants} className="h-[1px] w-12 bg-accent-violet" />
                        <motion.p variants={itemVariants} className="text-accent-violet font-mono text-sm font-bold tracking-[0.2em] uppercase">
                            B4Boosting Ecosystem
                        </motion.p>
                    </div>

                    <motion.h1 variants={itemVariants} className="text-7xl lg:text-[8rem] leading-[0.85] font-[family-name:var(--font-space)] font-black uppercase text-white mb-6 tracking-tighter mix-blend-difference">
                        Transcend <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-violet to-accent-pink relative z-10">
                            The Meta.
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg lg:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-10 border-l border-white/10 pl-6">
                        Acquire elite gaming assets instantly. Secure high-tier accounts, raw currency, and professional progression from verified grandmasters. Zero compromises.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6">
                        <Link href="/games">
                            <Button className="h-14 px-8 text-lg font-bold bg-white text-black rounded-none border border-white hover:bg-black hover:text-white transition-all duration-300">
                                Explore Ecosystem <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>

                        <div className="flex gap-6 text-sm font-mono text-gray-500 uppercase tracking-widest hidden sm:flex">
                            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-accent-pink" /> Instant</span>
                            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-accent-cyan" /> Secure</span>
                            <span className="flex items-center gap-2"><Crown className="w-4 h-4 text-accent-violet" /> Elite</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right: Abstract 3D Representation */}
                <div className="lg:col-span-5 h-[500px] lg:h-full relative flex items-center justify-center pointer-events-none perspective-1000 hidden lg:flex">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
                        className="relative w-full aspect-square"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Abstract floating hardware/UI slabs */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-gradient-to-br from-bg-elevated to-black border border-white/5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md transform -rotate-6 translate-x-10 translate-y-10 z-10">
                            <div className="absolute inset-0 bg-gradient-to-t from-accent-violet/10 to-transparent rounded-3xl" />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[450px] bg-black border border-accent-pink/20 rounded-3xl shadow-[0_30px_60px_rgba(236,72,153,0.15)] backdrop-blur-xl transform rotate-3 -translate-y-5 z-20 overflow-hidden flex flex-col">
                            {/* Faux UI element inside the slab */}
                            <div className="h-1/2 w-full bg-[url('https://placehold.co/800x600/111/444')] bg-cover bg-center brightness-50 contrast-125" />
                            <div className="p-6 flex-1 bg-gradient-to-b from-black to-bg-secondary">
                                <div className="h-2 w-12 bg-accent-pink mb-4" />
                                <div className="h-4 w-3/4 bg-white/10 mb-2 rounded-sm" />
                                <div className="h-4 w-1/2 bg-white/5 mb-6 rounded-sm" />
                                <div className="h-10 w-full border border-white/10 mt-auto rounded-none bg-white/5" />
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[380px] bg-bg-elevated border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.9)] transform -rotate-12 -translate-x-16 -translate-y-12 z-0" />
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-10 left-6 text-xs font-mono tracking-widest text-gray-500 flex flex-col gap-4 items-center"
            >
                <span className="-rotate-90 origin-left translate-y-6">SCROLL</span>
                <motion.div
                    animate={{ height: ["0%", "100%", "0%"], y: [0, 0, 20] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-[1px] h-16 bg-white/20 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-accent-violet origin-top" />
                </motion.div>
            </motion.div>
        </section>
    )
}
