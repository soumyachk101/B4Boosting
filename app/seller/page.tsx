
import Image from "next/image"
import Link from "next/link"
import { GlowButton } from "@/components/ui/GlowButton"
import { CheckCircle2, TrendingUp, ShieldCheck, DollarSign } from "lucide-react"

export default function SellerLandingPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-[#0D1F3C] to-bg-primary" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white mb-6">
                        Turn Your Skill <br /> Into <span className="text-accent-green">Income</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Join the fastest growing gaming marketplace. Low fees, instant payouts, and thousands of eager customers waiting for your services.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/register?role=seller">
                            <GlowButton size="lg" className="h-14 px-8 text-lg">
                                Become a Seller
                            </GlowButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: TrendingUp, title: "High Traffic", desc: "Access thousands of daily active users looking for your services." },
                            { icon: DollarSign, title: "Low Fees", desc: "Keep more of what you earn with our competitive 5% platform fee." },
                            { icon: ShieldCheck, title: "Seller Protection", desc: "Guaranteed payments and dispute resolution support 24/7." },
                        ].map((feature, i) => (
                            <div key={i} className="bg-bg-primary p-8 rounded-xl border border-border text-center">
                                <div className="h-14 w-14 bg-accent-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent-green">
                                    <feature.icon className="h-7 w-7" />
                                </div>
                                <h3 className="font-display font-bold text-xl text-white mb-3">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
