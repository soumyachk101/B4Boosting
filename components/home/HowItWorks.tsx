"use client"

import { HOW_IT_WORKS_STEPS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function HowItWorks() {
    return (
        <section className="bg-bg-secondary py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                        ORDER EASILY IN 4 STEPS
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our streamlined process ensures you get your services fast and securely.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[45px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-gray-700 z-0" />

                    {HOW_IT_WORKS_STEPS.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div key={step.step} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="h-24 w-24 rounded-full bg-bg-elevated border-2 border-border flex items-center justify-center mb-6 group-hover:border-accent-green group-hover:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all duration-300 relative bg-bg-primary">
                                    <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-accent-green text-black font-bold flex items-center justify-center text-sm shadow-lg">
                                        {step.step}
                                    </div>
                                    <Icon className="h-10 w-10 text-gray-400 group-hover:text-accent-green transition-colors duration-300" />
                                </div>

                                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent-green transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
