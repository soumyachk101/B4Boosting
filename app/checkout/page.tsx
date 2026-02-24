"use client"

import { useCartStore } from "@/stores/cartStore"
import { CartItem } from "@/components/cart/CartItem"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GlowButton } from "@/components/ui/GlowButton"
import { formatCurrency } from "@/lib/utils"
import Link from "next/link"
import { Lock, Smartphone, CreditCard } from "lucide-react"

export default function CheckoutPage() {
    const { items, getSubtotal, getPlatformFee, getCartTotal } = useCartStore()

    if (items.length === 0) {
        return (
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="text-3xl font-display font-bold text-white mb-4">Your cart is empty</h1>
                <Link href="/">
                    <GlowButton>Browse Services</GlowButton>
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-display font-bold text-white mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    {/* Step 1: Contact Info */}
                    <div className="bg-bg-secondary p-6 rounded-xl border border-border">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="h-8 w-8 rounded-full bg-accent-green text-black flex items-center justify-center text-sm font-bold">1</span>
                            Contact Information
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Email Address</Label>
                                <Input placeholder="you@example.com" className="bg-bg-primary" />
                            </div>
                            <div className="space-y-2">
                                <Label>Phone Number (Optional)</Label>
                                <Input placeholder="+1 (555) 000-0000" className="bg-bg-primary" />
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Payment Method */}
                    <div className="bg-bg-secondary p-6 rounded-xl border border-border">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <span className="h-8 w-8 rounded-full bg-accent-green text-black flex items-center justify-center text-sm font-bold">2</span>
                            Payment Method
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-accent-green bg-bg-elevated text-white">
                                <CreditCard className="h-6 w-6 mb-2 text-accent-green" />
                                <span className="font-bold">Card</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-bg-primary text-gray-400 hover:border-gray-500 hover:text-white transition-all">
                                <Smartphone className="h-6 w-6 mb-2" />
                                <span className="font-bold">Crypto</span>
                            </button>
                            <button className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-bg-primary text-gray-400 hover:border-gray-500 hover:text-white transition-all">
                                <span className="font-bold">Paypal</span>
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Card Number</Label>
                                <Input placeholder="0000 0000 0000 0000" className="bg-bg-primary" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Expiry Date</Label>
                                    <Input placeholder="MM/YY" className="bg-bg-primary" />
                                </div>
                                <div className="space-y-2">
                                    <Label>CVC</Label>
                                    <Input placeholder="123" className="bg-bg-primary" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label>Cardholder Name</Label>
                                <Input placeholder="John Doe" className="bg-bg-primary" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                    <div className="bg-bg-secondary p-6 rounded-xl border border-border sticky top-24">
                        <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                            {items.map(item => (
                                <div key={item.id} className="flex justify-between items-start text-sm">
                                    <div className="max-w-[70%]">
                                        <div className="font-medium text-white">{item.title}</div>
                                        <div className="text-gray-500 text-xs">Qty: {item.quantity}</div>
                                    </div>
                                    <div className="font-mono text-gray-300">{formatCurrency(item.price * item.quantity)}</div>
                                </div>
                            ))}
                        </div>

                        <Separator className="bg-border mb-4" />

                        <div className="space-y-2 text-sm mb-6">
                            <div className="flex justify-between text-gray-400">
                                <span>Subtotal</span>
                                <span>{formatCurrency(getSubtotal())}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span>Platform Fee</span>
                                <span>{formatCurrency(getPlatformFee())}</span>
                            </div>
                            <Separator className="bg-border my-2" />
                            <div className="flex justify-between text-lg font-bold text-white">
                                <span>Total</span>
                                <span className="text-accent-green">{formatCurrency(getCartTotal())}</span>
                            </div>
                        </div>

                        <GlowButton className="w-full h-12 text-base">
                            Pay {formatCurrency(getCartTotal())}
                        </GlowButton>

                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
                            <Lock className="h-3 w-3" />
                            <span>Payments are secure and encrypted</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
