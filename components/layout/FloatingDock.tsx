"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Home, Gamepad2, Search, ShoppingBag, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/stores/cartStore"
import { useUIStore } from "@/stores/uiStore"
import { CartSheet } from "../cart/CartSheet"

const navItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Games", href: "/games", icon: Gamepad2 },
    { label: "Search", href: "/search", icon: Search },
    { label: "Cart", href: "/cart", icon: ShoppingBag, isButton: true },
    { label: "Profile", href: "/login", icon: User },
]

export function FloatingDock() {
    const pathname = usePathname()
    const { items } = useCartStore()
    const { setCartOpen } = useUIStore()
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
            >
                <div className="flex items-center gap-2 p-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        const isActive = pathname === item.href

                        if (item.label === 'Cart') {
                            return (
                                <button
                                    key={item.label}
                                    onClick={() => setCartOpen(true)}
                                    className={cn(
                                        "relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group hover:bg-white/10"
                                    )}
                                >
                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    {cartCount > 0 && (
                                        <span className="absolute top-2 right-2 w-3 h-3 bg-accent-pink rounded-full flex items-center justify-center text-[8px] font-bold text-white shadow-[0_0_10px_rgba(236,72,153,0.8)]">
                                            {cartCount}
                                        </span>
                                    )}
                                </button>
                            )
                        }

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group",
                                    isActive ? "bg-white/10" : "hover:bg-white/5"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="dock-indicator"
                                        className="absolute inset-0 rounded-full border border-accent-violet/50 bg-accent-violet/10 shadow-[inset_0_0_10px_rgba(139,92,246,0.2)]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <Icon className={cn(
                                    "w-5 h-5 relative z-10 transition-colors",
                                    isActive ? "text-accent-violet" : "text-gray-400 group-hover:text-white"
                                )} />

                                {/* Tooltip */}
                                <div className="absolute -top-10 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 px-3 py-1 bg-black border border-white/10 rounded-md text-xs font-medium text-white shadow-xl pointer-events-none">
                                    {item.label}
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </motion.div>

            <CartSheet />
        </>
    )
}
