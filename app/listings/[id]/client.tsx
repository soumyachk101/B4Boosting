"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Listing, Game, SellerProfile, Review } from "@/types"
import { useCartStore } from "@/stores/cartStore"
import { useUIStore } from "@/stores/uiStore"
import { CheckCircle2, ShieldCheck, Clock, MessageCircle, Heart, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarRating } from "@/components/ui/StarRating"
import { PriceConfigurator } from "@/components/listings/PriceConfigurator"
import { GlowButton } from "@/components/ui/GlowButton"
import { formatCurrency } from "@/lib/utils"
import { toast } from "@/components/ui/use-toast"

interface ProductListingClientProps {
    listing: Listing
    game: Game
    seller: SellerProfile | { id: string; name?: string; displayName?: string; avatar: string; rating: number; totalOrders: number; verified: boolean }
    reviews: Review[]
}

export function ProductListingClient({ listing, game, seller, reviews }: ProductListingClientProps) {
    const [price, setPrice] = useState(listing.price)
    const [options, setOptions] = useState<Record<string, string>>({})
    const { addItem } = useCartStore()
    const { setCartOpen } = useUIStore()

    const handleAddToCart = () => {
        addItem({
            id: `${listing.id}-${JSON.stringify(options)}`,
            listingId: listing.id,
            title: listing.title,
            price: price,
            gameSlug: listing.gameSlug,
            gameImage: game?.image || '/placeholder.jpg',
            sellerName: (seller as any).displayName || seller.name || 'Seller',
            quantity: 1,
            options: options,
            addons: []
        })
        toast({
            title: "Added to cart",
            description: `${listing.title} has been added to your cart.`,
        })
        setCartOpen(true)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb would go here */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Header */}
                    <div>
                        <h1 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
                            {listing.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1 text-accent-amber">
                                <Star className="h-4 w-4 fill-current" />
                                <span className="font-bold">{listing.rating}</span>
                                <span className="text-gray-500">({listing.reviewCount} reviews)</span>
                            </div>
                            <Separator orientation="vertical" className="h-4" />
                            <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                Delivery: <span className="text-white font-medium">{listing.deliveryTimeHours} Hours</span>
                            </span>
                            <Separator orientation="vertical" className="h-4" />
                            <span className="flex items-center gap-1">
                                Category: <span className="text-white font-medium">{listing.categoryType}</span>
                            </span>
                        </div>
                    </div>

                    {/* Gallery / Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-bg-secondary">
                        {/* Using game image as placeholder for now, ideally listing image */}
                        <Image
                            src={game?.image || '/placeholder.jpg'}
                            alt={listing.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute top-4 right-4 flex gap-2">
                            <Button variant="secondary" size="icon" className="h-10 w-10 full bg-black/50 backdrop-blur border border-white/10 hover:bg-black/70 rounded-full">
                                <Heart className="h-5 w-5 text-white" />
                            </Button>
                            <Button variant="secondary" size="icon" className="h-10 w-10 full bg-black/50 backdrop-blur border border-white/10 hover:bg-black/70 rounded-full">
                                <Share2 className="h-5 w-5 text-white" />
                            </Button>
                        </div>
                    </div>

                    {/* Tabs: Description, Reviews, FAQ */}
                    <Tabs defaultValue="description" className="w-full">
                        <TabsList className="w-full justify-start border-b border-border bg-transparent p-0 h-auto gap-8 rounded-none">
                            <TabsTrigger value="description" className="bg-transparent border-b-2 border-transparent data-[state=active]:border-accent-green data-[state=active]:bg-transparent rounded-none px-0 py-3 text-base">
                                Description
                            </TabsTrigger>
                            <TabsTrigger value="reviews" className="bg-transparent border-b-2 border-transparent data-[state=active]:border-accent-green data-[state=active]:bg-transparent rounded-none px-0 py-3 text-base">
                                Reviews ({reviews.length})
                            </TabsTrigger>
                            <TabsTrigger value="faq" className="bg-transparent border-b-2 border-transparent data-[state=active]:border-accent-green data-[state=active]:bg-transparent rounded-none px-0 py-3 text-base">
                                FAQ
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="description" className="pt-6 text-gray-300 leading-relaxed font-sans space-y-4">
                            <p>
                                Get the best {game?.name} boosting service from verified professional players.
                                We guarantee fast completion, account safety, and 24/7 support throughout the process.
                            </p>
                            <h3 className="text-white font-bold text-lg mt-4">Why choose us?</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Verified Pro Players</li>
                                <li>VPN Protection included</li>
                                <li>Live stream option available</li>
                                <li>100% money-back guarantee</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-500">
                                Detailed description of the service and what is included in the package.
                                This is a placeholder text for the description.
                            </p>
                        </TabsContent>

                        <TabsContent value="reviews" className="pt-6 space-y-6">
                            {reviews.map((review) => (
                                <div key={review.id} className="border-b border-border pb-6 last:border-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-white">{review.userId.substring(0, 6)}...</span>
                                            <StarRating rating={review.rating} size={12} />
                                        </div>
                                        <span className="text-xs text-gray-500">{new Date(review.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">{review.comment}</p>
                                </div>
                            ))}
                            {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}
                        </TabsContent>

                        <TabsContent value="faq" className="pt-6">
                            <p className="text-gray-500">Frequently Asked Questions will appear here.</p>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Sidebar / Configuration */}
                <div className="space-y-6">
                    <div className="sticky top-24 space-y-6">
                        {/* Order Card */}
                        <div className="bg-bg-secondary rounded-xl border border-border p-6 shadow-xl">
                            <h3 className="font-display font-bold text-xl text-white mb-6">Configure Your Order</h3>

                            <PriceConfigurator
                                listing={listing}
                                onPriceChange={setPrice}
                                onOptionsChange={setOptions}
                            />

                            <Separator className="my-6 bg-border" />

                            <div className="flex justify-between items-end mb-6">
                                <span className="text-gray-400 text-sm">Total Price</span>
                                <span className="font-display font-bold text-3xl text-accent-green">{formatCurrency(price)}</span>
                            </div>

                            <div className="space-y-3">
                                <GlowButton className="w-full h-12 text-base" onClick={handleAddToCart}>
                                    Add to Cart
                                </GlowButton>
                                <Button variant="outline" className="w-full border-border bg-transparent hover:bg-white/5 text-gray-300">
                                    <MessageCircle className="mr-2 h-4 w-4" /> Message Seller
                                </Button>
                            </div>

                            <div className="mt-6 flex flex-col gap-3 text-xs text-gray-500">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-accent-green" />
                                    <span>Secure Transaction Protection</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-accent-green" />
                                    <span>Money Back Guarantee</span>
                                </div>
                            </div>
                        </div>

                        {/* Seller Card */}
                        <div className="bg-bg-elevated rounded-xl border border-border p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <Avatar className="h-12 w-12 border border-border">
                                    <AvatarImage src={seller.avatar} />
                                    <AvatarFallback>{((seller as any).displayName || seller.name || '?')[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <h4 className="font-bold text-white flex items-center gap-1">
                                        {(seller as any).displayName || seller.name}
                                        {'verified' in seller && seller.verified && (
                                            <Badge variant="secondary" className="h-4 px-1 text-[10px] bg-accent-green/10 text-accent-green border-0 rounded">✓</Badge>
                                        )}
                                    </h4>
                                    <div className="flex items-center gap-1 text-xs text-gray-400">
                                        <Star className="h-3 w-3 fill-accent-amber text-accent-amber" />
                                        <span>{seller.rating} Rating</span>
                                        <span>•</span>
                                        <span>{'totalOrders' in seller ? seller.totalOrders : 0} Orders</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-center text-xs">
                                <div className="bg-bg-primary rounded p-2 border border-border">
                                    <div className="text-white font-bold mb-0.5">99.8%</div>
                                    <div className="text-gray-500">Completion</div>
                                </div>
                                <div className="bg-bg-primary rounded p-2 border border-border">
                                    <div className="text-white font-bold mb-0.5">15m</div>
                                    <div className="text-gray-500">Response</div>
                                </div>
                            </div>
                            <Link href={`/seller/${seller.id}`} className="block mt-4 text-center text-sm text-accent-green hover:underline">
                                View Profile
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
