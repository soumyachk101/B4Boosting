
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getListingById } from "@/lib/actions"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { StarRating } from "@/components/ui/StarRating"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ShieldCheck, Clock, MessageCircle, ChevronRight } from "lucide-react"
import { ProductListingClient } from "./client" // Client component for interactivity

export async function generateStaticParams() {
    return [] // Since we are dynamic from a DB, disable static param pre-gen or fetch top N
}

export default async function ListingPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params
    const listing = await getListingById(resolvedParams.id)

    if (!listing) {
        notFound()
    }

    const game = listing.game
    const seller = listing.seller
    const reviews = listing.reviews

    // Pass data to Client Component for interactivity (Cart, Options)
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="bg-bg-primary/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-4 sm:p-8 lg:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden">
                {/* Surface shine */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <ProductListingClient listing={{ ...listing, gameSlug: game.slug } as any} game={{ ...game, categories: JSON.parse(game.categories) } as any} seller={seller as any} reviews={reviews as any} />
            </div>
        </div>
    )
}
