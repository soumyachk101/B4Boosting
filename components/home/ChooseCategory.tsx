"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sword, Coins, User, Gift } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FadeIn } from "@/components/ui/FadeIn"

const CATEGORIES = [
    { id: 'currency', label: 'Currency', icon: Coins, description: 'Buy gold, coins, and orbs for your favorite MMOs at the best market rates.', image: 'https://placehold.co/600x400/0D1117/00FF88?text=Currency' },
    { id: 'accounts', label: 'Accounts', icon: User, description: 'Instant delivery of high-end accounts. Smurfs, skins, and ranked ready.', image: 'https://placehold.co/600x400/0D1117/3B82F6?text=Accounts' },
    { id: 'boosting', label: 'Boosting', icon: Sword, description: 'Professional boosting by verified top-tier players. Fast, safe, and anonymous.', image: 'https://placehold.co/600x400/0D1117/FFB800?text=Boosting' },
    { id: 'giftcards', label: 'Gift Cards', icon: Gift, description: 'Discounted gift cards for Steam, PlayStation, Xbox, and more.', image: 'https://placehold.co/600x400/0D1117/FF5555?text=Gift+Cards' },
]

export function ChooseCategory() {
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0])

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Image Preview */}
                <FadeIn direction="right" distance={50} delay={0.2}>
                    <div className="relative h-[400px] lg:h-[500px] w-full rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_20px_50px_-12px_rgba(0,0,0,0.8)]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory.id}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={activeCategory.image}
                                    alt={activeCategory.label}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-8 max-w-md">
                                    <h3 className="font-display font-bold text-4xl text-white mb-2 tracking-tight drop-shadow-lg">{activeCategory.label}</h3>
                                    <p className="text-gray-200 text-lg drop-shadow-md">{activeCategory.description}</p>
                                    <Button className="mt-8 bg-gradient-to-b from-accent-green to-[#00cc6a] text-black border-t border-white/40 shadow-[0_5px_15px_rgba(0,255,136,0.3),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:shadow-[0_8px_25px_rgba(0,255,136,0.5),inset_0_1px_1px_rgba(255,255,255,0.9)] active:shadow-inner active:scale-95 transition-all w-full sm:w-auto font-bold text-lg h-12 rounded-xl">
                                        Browse {activeCategory.label}
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </FadeIn>

                {/* Right: Buttons */}
                <div className="flex flex-col gap-4">
                    <FadeIn direction="up"><h2 className="font-display font-bold text-3xl mb-6">Choose Your Service</h2></FadeIn>
                    {CATEGORIES.map((cat, index) => {
                        const Icon = cat.icon
                        const isActive = activeCategory.id === cat.id
                        return (
                            <FadeIn key={cat.id} delay={0.1 * index} direction="left" distance={20}>
                                <button
                                    onClick={() => setActiveCategory(cat)}
                                    className={cn(
                                        "flex items-center gap-6 p-6 rounded-2xl border transition-all duration-400 text-left group relative overflow-hidden",
                                        isActive
                                            ? "bg-gradient-to-br from-bg-elevated to-bg-secondary border-accent-green/50 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,255,136,0.15)] scale-[1.02]"
                                            : "bg-black/40 border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)] hover:bg-bg-elevated/80 hover:border-white/10 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_5px_15px_rgba(0,0,0,0.5)]"
                                    )}
                                >
                                    {isActive && <div className="absolute inset-0 bg-accent-green/5 opacity-50 pointer-events-none mix-blend-screen" />}
                                    <div className={cn(
                                        "h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 transform relative z-10 shadow-inner",
                                        isActive ? "bg-gradient-to-b from-[#2eff9e] to-[#00b35c] text-black shadow-[0_0_20px_rgba(0,255,136,0.4),inset_0_1px_1px_rgba(255,255,255,0.8)]" : "bg-bg-primary text-gray-400 border border-white/10 group-hover:text-white"
                                    )}>
                                        <Icon className={cn("h-7 w-7", isActive ? "" : "group-hover:scale-110 transition-transform")} />
                                    </div>
                                    <div>
                                        <h3 className={cn("font-display font-bold text-lg mb-1", isActive ? "text-white" : "text-gray-300")}>
                                            {cat.label}
                                        </h3>
                                        <span className={cn("text-sm", isActive ? "text-accent-green" : "text-gray-500")}>
                                            View available offers →
                                        </span>
                                    </div>
                                </button>
                            </FadeIn>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
