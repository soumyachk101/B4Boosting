"use client"

import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import { CartItem as CartItemType } from "@/types"
import { useCartStore } from "@/stores/cartStore"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"

interface CartItemProps {
    item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
    const { updateQuantity, removeItem } = useCartStore()

    return (
        <div className="flex gap-4 p-4 rounded-xl border border-white/5 bg-bg-elevated shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_20px_rgba(0,0,0,0.4)] mb-3 last:mb-0 transition-all hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_8px_30px_rgba(0,0,0,0.6)]">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-border bg-black/40 shadow-inner">
                <Image
                    src={item.gameImage}
                    alt={item.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="grid gap-1">
                    <h3 className="line-clamp-1 font-medium text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.sellerName}</p>

                    {/* Options display */}
                    {Object.entries(item.options).length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                            {Object.entries(item.options).map(([key, value]) => (
                                <span key={key} className="text-[10px] bg-secondary px-1.5 py-0.5 rounded text-muted-foreground">
                                    {value}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1 bg-black/40 rounded-full p-1 border border-white/5 shadow-inner">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-bg-secondary hover:bg-bg-elevated text-white border border-white/5 shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(255,255,255,0.1)_0px_-3px_0px_inset] active:shadow-inner active:scale-95 transition-all"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                        >
                            <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-bold font-mono w-6 text-center text-white text-shadow-sm">{item.quantity}</span>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 rounded-full bg-bg-secondary hover:bg-bg-elevated text-white border border-white/5 shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(255,255,255,0.1)_0px_-3px_0px_inset] active:shadow-inner active:scale-95 transition-all"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                            <Plus className="h-3 w-3" />
                        </Button>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-accent-green font-mono">
                            {formatCurrency(item.price * item.quantity)}
                        </span>
                        <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-red-400 transition-colors"
                        >
                            <Trash2 className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
