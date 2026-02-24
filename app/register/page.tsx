
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GlowButton } from "@/components/ui/GlowButton"
import { Github, Mail } from "lucide-react"

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black/40">
            <div className="max-w-md w-full space-y-8 bg-bg-secondary p-8 rounded-2xl border border-border shadow-2xl">
                <div className="text-center">
                    <Link href="/" className="inline-block mb-6">
                        <div className="h-10 w-10 bg-accent-green rotate-45 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                            <div className="h-5 w-5 bg-black -rotate-45" />
                        </div>
                    </Link>
                    <h2 className="font-display font-bold text-3xl text-white">Create an account</h2>
                    <p className="mt-2 text-sm text-gray-400">Join the best gaming marketplace</p>
                </div>

                <div className="space-y-4">
                    <Button variant="outline" className="w-full h-11 border-border bg-transparent hover:bg-white/5 text-white">
                        <Github className="mr-2 h-4 w-4" /> Sign up with Discord
                    </Button>
                    <Button variant="outline" className="w-full h-11 border-border bg-transparent hover:bg-white/5 text-white">
                        <Mail className="mr-2 h-4 w-4" /> Sign up with Google
                    </Button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-bg-secondary px-2 text-gray-500">Or register with email</span>
                    </div>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">First Name</label>
                                <Input id="firstName" name="firstName" type="text" required className="mt-1 h-11 bg-bg-primary border-border focus:border-accent-green" placeholder="John" />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">Last Name</label>
                                <Input id="lastName" name="lastName" type="text" required className="mt-1 h-11 bg-bg-primary border-border focus:border-accent-green" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email address</label>
                            <Input id="email" name="email" type="email" autoComplete="email" required className="mt-1 h-11 bg-bg-primary border-border focus:border-accent-green" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                            <Input id="password" name="password" type="password" autoComplete="new-password" required className="mt-1 h-11 bg-bg-primary border-border focus:border-accent-green" placeholder="••••••••" />
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300 text-accent-green focus:ring-accent-green bg-bg-primary" required />
                            <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                                I agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>
                            </label>
                        </div>
                    </div>

                    <GlowButton className="w-full h-11 text-base">
                        Create Account
                    </GlowButton>
                </form>

                <p className="mt-2 text-center text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link href="/login" className="font-medium text-accent-green hover:text-accent-green/80">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
}
