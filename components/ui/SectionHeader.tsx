import { Link } from "lucide-react" // Incorrect import, should be next/link or anchor? Prompt says "See All link".
import NextLink from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
    title: string
    href?: string
    className?: string
}

export function SectionHeader({ title, href, className }: SectionHeaderProps) {
    return (
        <div className={cn("flex items-center justify-between mb-8", className)}>
            <h2 className="text-2xl md:text-3xl font-bold font-display uppercase tracking-tight text-white relative pl-4 after:content-[''] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-full after:bg-accent-green after:rounded-full">
                {title}
            </h2>

            {href && (
                <NextLink
                    href={href}
                    className="group flex items-center text-sm font-medium text-muted-foreground hover:text-accent-green transition-colors"
                >
                    See All
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </NextLink>
            )}
        </div>
    )
}
