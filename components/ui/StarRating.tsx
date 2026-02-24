import { Star, StarHalf } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
    rating: number
    maxRating?: number
    size?: number
    className?: string
}

export function StarRating({ rating, maxRating = 5, size = 16, className }: StarRatingProps) {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0)

    return (
        <div className={cn("flex items-center space-x-0.5", className)}>
            {[...Array(fullStars)].map((_, i) => (
                <Star
                    key={`full-${i}`}
                    size={size}
                    className="fill-accent-amber text-accent-amber"
                />
            ))}
            {hasHalfStar && (
                <div className="relative">
                    <Star size={size} className="text-muted-foreground/30 fill-muted-foreground/30" />
                    <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                        <Star size={size} className="text-accent-amber fill-accent-amber" />
                    </div>
                </div>
            )}
            {[...Array(emptyStars)].map((_, i) => (
                <Star
                    key={`empty-${i}`}
                    size={size}
                    className="text-muted-foreground/30 fill-muted-foreground/30"
                />
            ))}
        </div>
    )
}
