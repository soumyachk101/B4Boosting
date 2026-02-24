import { getGames } from "@/lib/actions"
import { EditorialHero } from "@/components/home/EditorialHero"
import { GameShowcaseList } from "@/components/home/GameShowcaseList"
import { FadeIn } from "@/components/ui/FadeIn"

export default async function Home() {
  const games = await getGames()

  // Create specific showcases from the game data
  const accountsShowcase = games.slice(0, 4) as any // Example logic for showcase 1
  const boostingShowcase = games.slice(4, 9) as any // Example logic for showcase 2

  return (
    <>
      <FadeIn duration={1} direction="none">
        <EditorialHero />
      </FadeIn>

      <FadeIn duration={0.8} delay={0.2} direction="up" distance={50}>
        <GameShowcaseList
          title="Premium Hardware & Accounts"
          games={accountsShowcase}
          accentColor="violet"
        />
      </FadeIn>

      <FadeIn duration={0.8} delay={0.3} direction="up" distance={50}>
        <GameShowcaseList
          title="Elite Strategic Boosting"
          games={boostingShowcase}
          accentColor="pink"
        />
      </FadeIn>

      {/* Spacer for bottom dock */}
      <div className="h-40 pointer-events-none" />
    </>
  )
}
