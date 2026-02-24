"use client"

import { ShoppingCart } from "lucide-react"
import { useCartStore } from "@/stores/cartStore"
import { useUIStore } from "@/stores/uiStore"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CartItem } from "./CartItem"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"
import { GlowButton } from "../ui/GlowButton"

export function CartSheet() {
    const { items, getSubtotal, getPlatformFee, getCartTotal } = useCartStore()
    const { isCartOpen, setCartOpen } = useUIStore()

    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)

    return (
        <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
            <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0 bg-bg-primary border-l border-border">
                <SheetHeader className="p-6 border-b border-border">
                    <SheetTitle className="flex items-center gap-2 text-xl font-display">
                        Your Cart
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-green text-[10px] font-bold text-black">
                            {itemCount}
                        </span>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-60">
                            <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                            <div className="space-y-1">
                                <p className="text-lg font-medium">Your cart is empty</p>
                                <p className="text-sm text-muted-foreground">Add some items to get started</p>
                            </div>
                            <Button variant="outline" onClick={() => setCartOpen(false)}>
                                Browse Services
                            </Button>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-2">
                            {items.map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="border-t border-border bg-bg-secondary p-6 space-y-4">
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-muted-foreground">
                                <span>Subtotal</span>
                                <span>{formatCurrency(getSubtotal())}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground">
                                <span>Platform Fee (5%)</span>
                                <span>{formatCurrency(getPlatformFee())}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-white pt-2 border-t border-border/50">
                                <span>Total</span>
                                <span className="text-accent-green">{formatCurrency(getCartTotal())}</span>
                            </div>
                        </div>

                        <Link href="/checkout" onClick={() => setCartOpen(false)} className="block w-full">
                            <GlowButton className="w-full h-12 text-base">
                                Proceed to Checkout
                            </GlowButton>
                        </Link>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}
