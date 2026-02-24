"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Search, ShoppingBag, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_ITEMS } from "@/lib/constants"
import { useCartStore } from "@/stores/cartStore"
import { useUIStore } from "@/stores/uiStore"
import { Button } from "@/components/ui/button"

import { MobileNav } from "./MobileNav"
import { CartSheet } from "../cart/CartSheet"
import { GlowButton } from "../ui/GlowButton"
import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { items } = useCartStore()
    const { setCartOpen } = useUIStore()
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={cn(
            "sticky top-0 z-40 w-full transition-all duration-300 border-b border-transparent",
            isScrolled ? "bg-bg-primary/80 backdrop-blur-md border-border" : "bg-transparent border-transparent"
        )}>
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Left: Logo */}
                <div className="flex items-center gap-4">
                    <MobileNav />
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-10 w-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-accent-green/20 blur-lg rounded-full group-hover:bg-accent-green/40 transition-all duration-500" />
                            <div className="relative h-8 w-8 bg-black border border-accent-green rotate-45 flex items-center justify-center shadow-[0_0_15px_rgba(0,255,136,0.3)] group-hover:shadow-[0_0_25px_rgba(0,255,136,0.6)] transition-all duration-500">
                                <div className="h-4 w-4 bg-accent-green -rotate-45" />
                            </div>
                        </div>
                        <span className="font-display font-bold text-2xl tracking-tight text-white group-hover:text-accent-green transition-colors duration-300">
                            B4Boosting
                        </span>
                    </Link>
                </div>

                {/* Center: Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1">
                    <ul className="flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.label} className="group relative px-4 py-2">
                                <Link
                                    href={item.href}
                                    className="font-display font-medium text-sm lg:text-base text-gray-300 hover:text-white transition-colors uppercase tracking-wide flex items-center gap-1"
                                >
                                    {item.label}
                                </Link>

                                {/* Mega Dropdown */}
                                {item.subItems && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out w-[600px]">
                                        <div className="bg-[#0D1117] border-t-2 border-accent-green shadow-xl rounded-b-xl p-6 grid grid-cols-2 gap-x-8 gap-y-4 relative overflow-hidden">
                                            {/* Background decoration */}
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/5 blur-3xl rounded-full pointer-events-none" />

                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.label}
                                                    href={subItem.href}
                                                    className="flex items-center gap-3 group/item p-2 rounded-lg hover:bg-white/5 transition-colors"
                                                >
                                                    <div className="h-8 w-8 rounded bg-bg-elevated flex items-center justify-center border border-border group-hover/item:border-accent-green/50 transition-colors">
                                                        {/* Placeholder icon logic */}
                                                        <div className="h-4 w-4 bg-accent-green/20 rounded-full" />
                                                    </div>
                                                    <span className="text-sm font-medium text-gray-300 group-hover/item:text-white group-hover/item:translate-x-1 transition-all">
                                                        {subItem.label}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 group">
                    <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/5 hidden sm:flex">
                        <Search className="h-5 w-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-white hover:bg-white/5 relative"
                        onClick={() => setCartOpen(true)}
                    >
                        <ShoppingBag className="h-5 w-5" />
                        {cartCount > 0 && (
                            <span className="absolute top-0 right-0 h-4 w-4 bg-accent-green text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Button>

                    <div className="w-px h-6 bg-border mx-2 hidden sm:block" />

                    <Link href="/login" className="hidden sm:block">
                        <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/5">
                            Sign In
                        </Button>
                    </Link>

                    <Link href="/register" className="hidden sm:block">
                        <GlowButton className="h-9 px-4 text-xs lg:text-sm">
                            Get Started
                        </GlowButton>
                    </Link>
                </div>
            </div>

            <CartSheet />
        </header>
    )
}
