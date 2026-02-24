"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Game } from "@/types"
import { cn } from "@/lib/utils"

interface GameShowcaseListProps {
    title: string
    games: Game[]
    accentColor?: "violet" | "pink" | "cyan"
}

export function GameShowcaseList({ title, games, accentColor = "violet" }: GameShowcaseListProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    const accentMap = {
        violet: "group-hover:text-accent-violet border-accent-violet",
        pink: "group-hover:text-accent-pink border-accent-pink",
        cyan: "group-hover:text-accent-cyan border-accent-cyan"
    }

    const bgAccentMap = {
        violet: "bg-accent-violet",
        pink: "bg-accent-pink",
        cyan: "bg-accent-cyan"
    }

    return (
        <section className="py-24 border-b border-white/5 relative">
            <div className="container mx-auto px-6">

                {/* Minimalist Header */}
                <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-6">
                    <div>
                        <p className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-2">Live Market Data</p>
                        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space)] uppercase tracking-tighter text-white">
                            {title}
                        </h2>
                    </div>
                    <Link href="/games" className="hidden md:flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors">
                        View Matrix <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Accordion List */}
                <div className="flex flex-col gap-2">
                    {games.map((game, index) => {
                        const isHovered = hoveredId === game.id
                        const parsedCategories = typeof game.categories === 'string' ? JSON.parse(game.categories) : game.categories

                        return (
                            <Link
                                href={`/games/${game.slug}`}
                                key={game.id}
                                onMouseEnter={() => setHoveredId(game.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={cn(
                                    "group relative flex flex-col justify-end overflow-hidden border border-white/5 bg-bg-secondary transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                    isHovered ? "h-[320px] md:h-[400px]" : "h-[80px] md:h-[100px]"
                                )}
                            >
                                {/* Background Imagery (Visible on Hover) */}
                                <div className={cn(
                                    "absolute inset-0 transition-opacity duration-700 pointer-events-none",
                                    isHovered ? "opacity-100" : "opacity-0"
                                )}>
                                    <Image
                                        src={game.image}
                                        alt={game.name}
                                        fill
                                        className={cn(
                                            "object-cover transition-transform duration-[10s] ease-out",
                                            isHovered ? "scale-110" : "scale-100"
                                        )}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                                    {/* Scanline overlay for that monolithic computer aesthetic */}
                                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDAgNE0yIDBMMiA0IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIGZpbGw9Im5vbmUiPjwvcGF0aD4KPC9zdmc+')] opacity-50 mix-blend-overlay pointer-events-none" />
                                </div>

                                {/* Persistent Row Content */}
                                <div className="relative z-10 w-full px-6 md:px-10 h-[80px] md:h-[100px] min-h-[80px] md:min-h-[100px] flex items-center justify-between bg-black/40 backdrop-blur-sm border-t border-white/5 transition-colors duration-300 group-hover:bg-transparent group-hover:backdrop-blur-none group-hover:border-transparent">
                                    <div className="flex items-center gap-6">
                                        <span className="font-mono text-gray-600 text-sm font-bold w-6 hidden md:block opacity-50 group-hover:opacity-100 transition-opacity">
                                            {(index + 1).toString().padStart(2, '0')}
                                        </span>
                                        <h3 className={cn("text-2xl md:text-4xl font-black uppercase tracking-tighter transition-colors duration-300", accentMap[accentColor], !isHovered && "text-white")}>
                                            {game.name}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-8">
                                        <div className="hidden md:flex items-center gap-3">
                                            {parsedCategories.slice(0, 2).map((cat: string) => (
                                                <span key={cat} className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 group-hover:border-white/30 group-hover:text-white transition-colors">
                                                    {cat}
                                                </span>
                                            ))}
                                        </div>
                                        <div className={cn(
                                            "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300",
                                            isHovered ? `border-transparent ${bgAccentMap[accentColor]} text-black scale-110 shadow-[0_0_20px_rgba(255,255,255,0.2)]` : "border-white/20 text-white"
                                        )}>
                                            <ArrowUpRight className={cn("w-5 h-5 transition-transform duration-300", isHovered && "rotate-45")} />
                                        </div>
                                    </div>
                                </div>

                                {/* Extra Information shown when expanded */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="absolute top-10 left-6 md:left-24 max-w-lg z-10"
                                        >
                                            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6 drop-shadow-md">
                                                Explore premium dedicated services, exclusive accounts, and verified currency markets engineered strictly for top-tier competitive play in {game.name}.
                                            </p>
                                            <div className="inline-flex h-10 items-center justify-center px-6 font-mono text-xs font-bold uppercase tracking-wider bg-white text-black border border-white hover:bg-black hover:text-white transition-all cursor-pointer">
                                                Establish Uplink
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Vertical Accent Line */}
                                <div className={cn(
                                    "absolute left-0 top-0 bottom-0 w-1 transition-all duration-500",
                                    isHovered ? bgAccentMap[accentColor] : "bg-transparent"
                                )} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
