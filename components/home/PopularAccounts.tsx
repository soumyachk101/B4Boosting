import Image from "next/image"
import Link from "next/link"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { getGames } from "@/lib/actions"
import { FadeIn } from "@/components/ui/FadeIn"

export async function PopularAccounts() {
    const games = await getGames()
    const accountGames = games
        .filter(game => {
            try {
                return JSON.parse(game.categories).includes('ACCOUNTS')
            } catch (e) {
                return false
            }
        })
        .slice(0, 8)

    return (
        <section>
            <SectionHeader title="Popular Accounts" href="/categories/accounts" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
                {accountGames.map((game, index) => (
                    <FadeIn key={game.id} delay={0.1 * index} direction="up" distance={20}>
                        <Link
                            href={`/games/${game.slug}?category=ACCOUNTS`}
                            className="group relative h-28 md:h-36 block rounded-2xl overflow-hidden border border-white/5 bg-gradient-to-br from-bg-elevated to-bg-secondary shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_15px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_10px_30px_rgba(0,0,0,0.8)] hover:border-white/10 hover:-translate-y-1 transition-all duration-300"
                        >
                            <Image
                                src={game.image}
                                alt={game.name}
                                fill
                                className="object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-4 md:p-5">
                                <div className="w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-display font-bold text-white text-lg md:text-xl leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-green group-hover:to-[#00cc6a] transition-all drop-shadow-md">
                                        {game.name}
                                    </h3>
                                    <p className="text-xs md:text-sm text-gray-400 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                        Accounts from <span className="text-white font-mono bg-white/10 px-1.5 py-0.5 rounded text-xs ml-1 shadow-inner border border-white/5">$15</span>
                                    </p>
                                </div>
                            </div>
                            {/* Skeuomorphic inner shine */}
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none group-hover:ring-white/20 transition-all duration-300" />
                        </Link>
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}
