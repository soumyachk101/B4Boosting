"use client"

import Image from "next/image"
import Link from "next/link"
import { Listing } from "@/types"
import { formatCurrency } from "@/lib/utils"
import { StarRating } from "@/components/ui/StarRating"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

interface ListingCardProps {
    listing: Listing
}

export function ListingCard({ listing }: ListingCardProps) {
    const parsedTags = typeof listing.tags === 'string' ? JSON.parse(listing.tags) : listing.tags

    return (
        <Link
            href={`/listings/${listing.id}`}
            className="group relative flex flex-col h-full bg-bg-secondary border border-white/10 hover:border-accent-violet transition-colors duration-300 overflow-hidden"
        >
            {/* Minimalist Top Indicator */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-white/5 group-hover:bg-accent-violet transition-colors z-10" />

            {/* Brutalist Content Container */}
            <div className="p-5 flex-1 flex flex-col relative z-20">
                {/* Title and ID */}
                <div className="flex justify-between items-start mb-6">
                    <h3 className="font-[family-name:var(--font-space)] font-bold uppercase text-white leading-tight line-clamp-2 pr-4 group-hover:text-accent-pink transition-colors">
                        {listing.title}
                    </h3>
                    <span className="font-mono text-[10px] text-gray-500 tracking-widest shrink-0 mt-1">
                        #{listing.id.substring(0, 6).toUpperCase()}
                    </span>
                </div>

                {/* Seller Block */}
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/5">
                    <div className="relative h-10 w-10 border border-white/20 grayscale group-hover:grayscale-0 transition-all rounded-sm overflow-hidden mix-blend-luminosity hover:mix-blend-normal">
                        <Image
                            src={listing.seller.avatar}
                            alt={listing.seller.displayName || (listing.seller as any).name || "Seller Avatar"}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="font-mono text-sm font-bold text-gray-300 uppercase shrink-0">
                                {listing.seller.displayName || (listing.seller as any).name}
                            </span>
                            {listing.seller.rating >= 4.5 && (
                                <Badge variant="secondary" className="h-4 px-1 text-[8px] bg-accent-violet/20 text-accent-violet border-0 rounded-none uppercase tracking-widest">
                                    Verified
                                </Badge>
                            )}
                        </div>
                        <StarRating rating={listing.seller.rating} size={10} />
                    </div>
                </div>

                {/* Tags Grid */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {parsedTags.slice(0, 3).map((tag: string) => (
                        <span key={tag} className="font-mono text-[9px] uppercase tracking-wider px-2 py-1 bg-black text-gray-400 border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer / Price */}
                <div className="mt-auto flex items-end justify-between pt-4">
                    <div>
                        <p className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-accent-pink inline-block animate-pulse" />
                            {listing.deliveryTimeHours < 1 ? 'Instant Transfer' : `${listing.deliveryTimeHours}H Delivery`}
                        </p>
                        <p className="font-[family-name:var(--font-space)] font-black text-2xl text-white">
                            {formatCurrency(listing.price)}
                        </p>
                    </div>

                    <div className="w-10 h-10 flex items-center justify-center bg-white/5 text-gray-400 group-hover:bg-accent-violet group-hover:text-white transition-all border border-white/10 group-hover:border-transparent">
                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                    </div>
                </div>
            </div>

            {/* Background Texture on Hover */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0Pgo8cGF0aCBkPSJNMCAwTDAgNE0yIDBMMiA0IiBzdHJva2U9InJnYmEoMTM5LCA5MiwgMjQ2LCAwLjEpIiBmaWxsPSJub25lIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen" />
        </Link>
    )
}
