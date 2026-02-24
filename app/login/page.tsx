
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { GlowButton } from "@/components/ui/GlowButton"
import { Github, Mail } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black/40">
            <div className="max-w-md w-full space-y-8 bg-bg-secondary p-8 rounded-2xl border border-border shadow-2xl">
                <div className="text-center">
                    <Link href="/" className="inline-block mb-6">
                        <div className="h-10 w-10 bg-accent-green rotate-45 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,255,136,0.3)]">
                            <div className="h-5 w-5 bg-black -rotate-45" />
                        </div>
                    </Link>
                    <h2 className="font-display font-bold text-3xl text-white">Welcome back</h2>
                    <p className="mt-2 text-sm text-gray-400">Sign in to your account to continue</p>
                </div>

                <div className="space-y-4">
                    <Button variant="outline" className="w-full h-11 border-border bg-transparent hover:bg-white/5 text-white">
                        <Github className="mr-2 h-4 w-4" /> Continue with Discord
                    </Button>
                    <Button variant="outline" className="w-full h-11 border-border bg-transparent hover:bg-white/5 text-white">
                        <Mail className="mr-2 h-4 w-4" /> Continue with Google
                    </Button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-bg-secondary px-2 text-gray-500">Or continue with email</span>
                    </div>
                </div>

                <form className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email address</label>
                            <Input id="email" name="email" type="email" autoComplete="email" required className="mt-1 h-11 bg-bg-primary border-border focus:border-accent-green" placeholder="you@example.com" />
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-accent-green hover:text-accent-green/80">Forgot your password?</a>
                                </div>
                            </div>
                            <Input id="password" name="password" type="password" autoComplete="current-password" required className="mt-1 h-11 bg-bg-primary border-border focus:border-accent-green" placeholder="••••••••" />
                        </div>
                    </div>

                    <GlowButton className="w-full h-11 text-base">
                        Sign in
                    </GlowButton>
                </form>

                <p className="mt-2 text-center text-sm text-gray-400">
                    Don&apos;t have an account?{' '}
                    <Link href="/register" className="font-medium text-accent-green hover:text-accent-green/80">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}
