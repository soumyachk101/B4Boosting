"use client"

import { PAYMENT_METHODS } from "@/lib/constants"
import { SectionHeader } from "@/components/ui/SectionHeader"
import { CreditCard } from "lucide-react"
// Using Lucide icons as placeholders since we don't have SVG assets for specific payment methods easily available without external links.
// I'll create a text fallback or generic card icons.

export function PaymentMethods() {
    return (
        <section>
            <div className="text-center mb-8">
                <h2 className="font-display font-bold text-2xl text-white uppercase tracking-wider">Secure Payment Methods</h2>
                <div className="h-1 w-20 bg-accent-green mx-auto mt-4 rounded-full" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {PAYMENT_METHODS.map((method, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 group">
                        <div className="h-12 px-6 rounded bg-white flex items-center justify-center shadow-lg">
                            {/* Placeholder for payment logos */}
                            <span className="text-black font-bold font-display">{method.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
