import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getGameBySlug, getListingsByGame, getGames } from "@/lib/actions"
import { ListingGrid } from "@/components/listings/ListingGrid"
import { FilterSidebar } from "@/components/listings/FilterSidebar"
import { ChevronRight } from "lucide-react"

export async function generateStaticParams() {
    const games = await getGames()
    return games.map((game) => ({
        slug: game.slug,
    }))
}

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params
    const game = await getGameBySlug(resolvedParams.slug)

    if (!game) {
        notFound()
    }

    const rawListings = await getListingsByGame(game.id)
    const listings = rawListings.map(l => ({
        ...l,
        gameSlug: l.game.slug
    })) as any // Casting temporarily to satisfy grid types while avoiding full schema rebuild

    return (
        <div className="min-h-screen pb-32">
            {/* Minimalist Game Hero Banner */}
            <div className="relative h-[25vh] w-full border-b border-white/10 overflow-hidden bg-bg-secondary flex flex-col justify-end pb-8">
                {/* Background image constrained and highly dimmed */}
                <div className="absolute inset-0 opacity-20 mix-blend-luminosity pointer-events-none">
                    <Image
                        src={game.image}
                        alt={game.name}
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-gray-500 uppercase mb-4">
                            <Link href="/" className="hover:text-white transition-colors">Data_Core</Link>
                            <ChevronRight className="h-3 w-3 text-accent-violet" />
                            <Link href="/games" className="hover:text-white transition-colors">Directory</Link>
                            <ChevronRight className="h-3 w-3 text-accent-violet" />
                            <span className="text-white bg-white/10 px-2 py-0.5">{game.name}</span>
                        </div>
                        <h1 className="font-[family-name:var(--font-space)] font-black text-5xl md:text-7xl uppercase text-white tracking-tighter mix-blend-difference">
                            {game.name}
                        </h1>
                    </div>
                    <div className="bg-black border border-white/10 px-4 py-2 font-mono text-sm tracking-widest uppercase text-accent-pink">
                        Market Active: {listings.length} Nodes
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Brutalist Sidebar */}
                    <aside className="w-full lg:w-[280px] shrink-0 space-y-8">
                        <div className="bg-black/40 p-6 border-l-2 border-accent-violet sticky top-24">
                            <FilterSidebar />
                        </div>
                    </aside>

                    {/* Main Content Grid */}
                    <main className="flex-1">
                        <div className="mb-8 pb-4 border-b border-white/10 flex items-center justify-between">
                            <h2 className="text-xl font-bold font-[family-name:var(--font-space)] uppercase text-white tracking-tight">
                                Available Assets
                            </h2>
                            {/* Monolithic Sort Dropdown */}
                            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider">
                                <span className="text-gray-500">Sort Matrix:</span>
                                <select className="bg-black border border-white/20 px-3 py-2 text-white outline-none focus:border-accent-cyan cursor-pointer rounded-none appearance-none">
                                    <option>Optimal</option>
                                    <option>Ascending Cost</option>
                                    <option>Descending Cost</option>
                                    <option>Recent Data</option>
                                </select>
                            </div>
                        </div>

                        <ListingGrid listings={listings} />

                        {/* Brutalist Pagination Replacement */}
                        <div className="mt-16 flex justify-center gap-1 font-mono text-sm">
                            <button className="h-10 px-4 flex items-center justify-center border border-white/10 bg-black text-gray-500 hover:text-white transition-colors disabled:opacity-20 uppercase tracking-widest" disabled>
                                Prev
                            </button>
                            <button className="h-10 w-10 flex items-center justify-center bg-white text-black font-bold">
                                01
                            </button>
                            <button className="h-10 w-10 flex items-center justify-center border border-white/10 bg-black text-gray-400 hover:border-white transition-colors">
                                02
                            </button>
                            <button className="h-10 w-10 flex items-center justify-center border border-white/10 bg-black text-gray-400 hover:border-white transition-colors">
                                03
                            </button>
                            <div className="flex items-end px-3 text-gray-600">--</div>
                            <button className="h-10 px-4 flex items-center justify-center border border-white/10 bg-black text-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest font-bold">
                                Next
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
