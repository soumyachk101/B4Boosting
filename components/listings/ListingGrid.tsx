"use client"

import { Listing } from "@/types"
import { ListingCard } from "./ListingCard"

interface ListingGridProps {
    listings: Listing[]
}

export function ListingGrid({ listings }: ListingGridProps) {
    if (listings.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h3 className="font-display text-xl font-bold text-white mb-2">No listings found</h3>
                <p className="text-gray-400">Try adjusting your filters or search query.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    )
}
