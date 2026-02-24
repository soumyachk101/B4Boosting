import { SectionHeader } from "@/components/ui/SectionHeader"
import { GameCard } from "@/components/ui/GameCard"
import { getGames } from "@/lib/actions"
import { FadeIn } from "@/components/ui/FadeIn"

export async function PopularCurrency() {
    const games = await getGames()
    const currencyGames = games
        .filter(game => {
            try {
                return JSON.parse(game.categories).includes('CURRENCY')
            } catch (e) {
                return false
            }
        })
        .slice(0, 6)

    return (
        <section>
            <SectionHeader title="Popular Currency" href="/categories/currency" />

            <div className="relative group">
                <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4 snap-x">
                    {currencyGames.map((game, index) => (
                        <FadeIn key={game.id} delay={0.1 * index} direction="left" distance={40} className="min-w-[160px] md:min-w-[200px] snap-center">
                            <div>
                                <GameCard game={{ ...game, categories: JSON.parse(game.categories) }} />
                                <div className="mt-3 text-center">
                                    <p className="text-sm font-medium text-gray-400">From <span className="text-accent-green font-bold">$0.99</span></p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="absolute top-0 right-0 bottom-6 w-24 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none md:block hidden" />
            </div>
        </section>
    )
}
