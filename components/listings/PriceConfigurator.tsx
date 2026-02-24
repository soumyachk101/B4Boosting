"use client"

import { useState, useEffect } from "react"
import { Listing, CategoryType } from "@/types"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { RANK_TIERS } from "@/lib/constants"
import { formatCurrency } from "@/lib/utils"
// Missing RadioGroup, Select components. I'll use native selects/radios for now or basic HTML to ensure functionality without waiting for more components.
// Ideally usage of Radix Select/RadioGroup is better but I'll stick to native for speed and reliability in this batch.

interface PriceConfiguratorProps {
    listing: Listing
    onPriceChange: (price: number) => void
    onOptionsChange: (options: Record<string, string>) => void
}

export function PriceConfigurator({ listing, onPriceChange, onOptionsChange }: PriceConfiguratorProps) {
    const [options, setOptions] = useState<Record<string, string>>({})
    const [quantity, setQuantity] = useState(1)

    // Initialize defaults
    useEffect(() => {
        let initialOptions: Record<string, string> = {}

        if (listing.categoryType === 'BOOSTING') {
            const ranks = RANK_TIERS[listing.gameSlug as keyof typeof RANK_TIERS] || ['Rank 1', 'Rank 2', 'Rank 3']
            initialOptions = {
                currentRank: ranks[0],
                targetRank: ranks[1] || ranks[0]
            }
        } else if (listing.categoryType === 'ACCOUNTS') {
            initialOptions = { edition: 'Standard' }
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOptions(initialOptions)
        onOptionsChange(initialOptions)
    }, [listing.categoryType, listing.gameSlug]) // eslint-disable-line react-hooks/exhaustive-deps

    // Calculate Price Logic
    useEffect(() => {
        let calculatedPrice = listing.price

        if (listing.categoryType === 'BOOSTING') {
            const ranks = RANK_TIERS[listing.gameSlug as keyof typeof RANK_TIERS] || []
            if (ranks.length > 0) {
                const currentIdx = ranks.indexOf(options.currentRank)
                const targetIdx = ranks.indexOf(options.targetRank)
                if (targetIdx > currentIdx) {
                    // Simple pricing model: base price + (diff * multiplier)
                    const diff = targetIdx - currentIdx
                    calculatedPrice = listing.price + (diff * 10)
                }
            }
        } else if (listing.categoryType === 'CURRENCY') {
            calculatedPrice = listing.price * quantity
        }

        onPriceChange(calculatedPrice)
    }, [options, quantity, listing.price, listing.categoryType, listing.gameSlug, onPriceChange])


    const handleOptionChange = (key: string, value: string) => {
        const newOptions = { ...options, [key]: value }
        setOptions(newOptions)
        onOptionsChange(newOptions)
    }

    if (listing.categoryType === 'BOOSTING') {
        const ranks = RANK_TIERS[listing.gameSlug as keyof typeof RANK_TIERS] || ['Rank 1', 'Rank 2', 'Rank 3']
        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label>Current Rank</Label>
                    <select
                        className="w-full h-10 rounded-md border border-input bg-bg-secondary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        value={options.currentRank || ''}
                        onChange={(e) => handleOptionChange('currentRank', e.target.value)}
                    >
                        {ranks.map(rank => (
                            <option key={rank} value={rank}>{rank}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <Label>Target Rank</Label>
                    <select
                        className="w-full h-10 rounded-md border border-input bg-bg-secondary px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        value={options.targetRank || ''}
                        onChange={(e) => handleOptionChange('targetRank', e.target.value)}
                    >
                        {ranks.map(rank => (
                            <option key={rank} value={rank}>{rank}</option>
                        ))}
                    </select>
                </div>
            </div>
        )
    }

    if (listing.categoryType === 'CURRENCY') {
        return (
            <div className="space-y-6">
                <div className="space-y-2">
                    <Label>Quantity (Millions)</Label>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            -
                        </Button>
                        <Input
                            type="number"
                            className="text-center w-24"
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        />
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </Button>
                    </div>
                    <div className="flex gap-2 mt-2">
                        {[10, 50, 100].map(amt => (
                            <Button
                                key={amt}
                                variant={quantity === amt ? 'default' : 'outline'}
                                size="sm"
                                onClick={() => setQuantity(amt)}
                                className="flex-1"
                            >
                                {amt}M
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="text-sm text-gray-400">
            Standard options applied.
        </div>
    )
}
