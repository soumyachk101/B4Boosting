"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, ChevronDown, Gamepad2, Coins, User, Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { NAV_ITEMS } from "@/lib/constants"
import { useUIStore } from "@/stores/uiStore"

export function MobileNav() {
    const { isMobileNavOpen, setMobileNavOpen } = useUIStore()
    const pathname = usePathname()

    return (
        <Sheet open={isMobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
                >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pl-1 pr-0 bg-bg-primary border-r border-border w-[300px]">
                <div className="px-7">
                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setMobileNavOpen(false)}
                    >
                        <div className="h-8 w-8 bg-accent-green rotate-45 flex items-center justify-center mr-3 shadow-[0_0_10px_rgba(0,255,136,0.5)]">
                            <div className="h-4 w-4 bg-black -rotate-45" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-wide">B4Boosting</span>
                    </Link>
                </div>

                <div className="my-6 px-7">
                    <Accordion type="single" collapsible className="w-full">
                        {NAV_ITEMS.map((item, index) => (
                            <AccordionItem value={item.label} key={index} className="border-border/50">
                                <AccordionTrigger className="text-sm font-medium hover:text-accent-green hover:no-underline py-4">
                                    {item.label}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex flex-col space-y-2 pb-2 pl-4">
                                        {item.subItems?.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={subItem.href}
                                                onClick={() => setMobileNavOpen(false)}
                                                className="text-sm text-placeholder hover:text-white py-1 block"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <div className="mt-8 space-y-4">
                        <Link href="/login" onClick={() => setMobileNavOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start pl-0 hover:bg-transparent hover:text-accent-green">
                                Sign In
                            </Button>
                        </Link>
                        <Link href="/register" onClick={() => setMobileNavOpen(false)}>
                            <Button className="w-full bg-accent-green text-black hover:bg-accent-green/90">
                                Get Started
                            </Button>
                        </Link>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
