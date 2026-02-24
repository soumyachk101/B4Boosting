"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, ShoppingBag, MessageSquare, Settings, LogOut, User } from "lucide-react"

const DASHBOARD_NAV = [
    { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { label: 'My Orders', href: '/dashboard/orders', icon: ShoppingBag },
    { label: 'Messages', href: '/dashboard/messages', icon: MessageSquare },
    { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 min-h-[80vh]">
            {/* Sidebar */}
            <aside className="w-full md:w-64 shrink-0">
                <div className="bg-bg-secondary rounded-xl border border-border p-4 sticky top-24">
                    <div className="flex items-center gap-3 mb-6 px-2">
                        <div className="h-10 w-10 rounded-full bg-accent-green/20 flex items-center justify-center text-accent-green font-bold">
                            JD
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">John Doe</div>
                            <div className="text-xs text-gray-500">Member since 2026</div>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {DASHBOARD_NAV.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-accent-green/10 text-accent-green"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    <Icon className="h-4 w-4" />
                                    {item.label}
                                </Link>
                            )
                        })}
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-400/10 transition-colors mt-4">
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </button>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}
