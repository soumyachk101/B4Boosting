
import { notFound } from "next/navigation"
import Image from "next/image"
import { getSellerProfile } from "@/lib/actions"
import { ListingGrid } from "@/components/listings/ListingGrid"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export async function generateStaticParams() {
    return []
}

export default async function SellerProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params
    const seller = await getSellerProfile(resolvedParams.id)

    if (!seller) {
        notFound()
    }

    const sellerListings = seller.listings.map(l => ({
        ...l,
        gameSlug: l.game.slug
    })) as any

    return (
        <div className="min-h-screen">
            {/* Banner */}
            <div className="h-60 bg-gradient-to-r from-blue-900 to-purple-900 relative">
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="container mx-auto px-4 -mt-20 relative z-10 pb-20">
                <div className="flex flex-col md:flex-row items-end md:items-center gap-6 mb-8">
                    <Avatar className="h-40 w-40 border-4 border-bg-primary shadow-2xl">
                        <AvatarImage src={seller.avatar} />
                        <AvatarFallback>{seller.displayName[0]}</AvatarFallback>
                    </Avatar>
                    <div className="pb-4">
                        <h1 className="font-display font-bold text-4xl text-white flex items-center gap-2">
                            {seller.displayName}
                            {seller.verified && (
                                <Badge variant="secondary" className="h-6 px-2 text-xs bg-accent-green/10 text-accent-green border-0 rounded-md">
                                    Verified Seller
                                </Badge>
                            )}
                        </h1>
                        <div className="flex items-center gap-4 mt-2 text-gray-300">
                            <div className="flex items-center gap-1 text-accent-amber font-bold">
                                <Star className="h-4 w-4 fill-current" />
                                {seller.rating}
                            </div>
                            <span>•</span>
                            <span>{seller.totalOrders} Orders Completed</span>
                            <span>•</span>
                            <div className="flex items-center gap-1 text-green-400">
                                <div className="h-2 w-2 rounded-full bg-green-400" />
                                Online
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-bg-secondary rounded-xl border border-border p-8 min-h-[400px]">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="font-display font-bold text-2xl text-white">Active Listings</h2>
                    </div>

                    <ListingGrid listings={sellerListings} />
                </div>
            </div>
        </div>
    )
}
