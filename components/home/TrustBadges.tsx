"use client"

import { TRUST_BADGES } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function TrustBadges() {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {TRUST_BADGES.map((badge, index) => {
                    const Icon = badge.icon
                    return (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 rounded-xl bg-bg-elevated border border-border hover:border-accent-green/50 transition-colors"
                        >
                            <div className="h-14 w-14 rounded-full bg-bg-secondary flex items-center justify-center border border-border shrink-0">
                                <Icon className="h-7 w-7 text-accent-green" />
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="font-display font-bold text-xl text-white mb-2">{badge.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {badge.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
