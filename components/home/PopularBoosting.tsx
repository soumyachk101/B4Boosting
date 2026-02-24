import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { getGames } from "@/lib/actions"
import { FadeIn } from "@/components/ui/FadeIn"

export async function PopularBoosting() {
    const games = await getGames()
    const boostingGames = games
        .filter(game => {
            try {
                return JSON.parse(game.categories).includes('BOOSTING')
            } catch (e) {
                return false
            }
        })
        .slice(0, 3)

    return (
        <section>
            <SectionHeader title="Popular Boosting Services" href="/categories/boosting" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {boostingGames.map((game, index) => (
                    <FadeIn key={game.id} delay={0.15 * index} direction="up" distance={30}>
                        <Link
                            href={`/games/${game.slug}?category=BOOSTING`}
                            className="group relative block h-64 rounded-xl overflow-hidden border border-border bg-bg-elevated hover:border-accent-green transition-all shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.15)]"
                        >
                            <Image
                                src={game.image}
                                alt={game.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                                <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-accent-green transition-colors">
                                    {game.name}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-300">Boosting Services</span>
                                    <span className="px-3 py-1 rounded bg-accent-green text-black text-xs font-bold">
                                        From $4.99
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}
