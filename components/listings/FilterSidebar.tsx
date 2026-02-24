"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider" // Missing Slider component! I need to create it.
import { Checkbox } from "@/components/ui/checkbox" // Missing Checkbox component!
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Filter } from "lucide-react"

// I need to implement Slider and Checkbox first. I'll include basic HTML versions or mock them if necessary, but better to implement Shadcn versions.
// I'll create components/ui/slider.tsx and components/ui/checkbox.tsx after this file.

export function FilterSidebar() {
    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-accent-green" />
                <h3 className="font-display font-bold text-lg text-white">Filters</h3>
            </div>

            <Accordion type="multiple" defaultValue={['category', 'price']} className="w-full">
                <AccordionItem value="category" className="border-border">
                    <AccordionTrigger className="text-sm font-medium hover:text-accent-green">Category</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-2">
                            {['Boosting', 'Accounts', 'Currency', 'Items', 'Coaching'].map((cat) => (
                                <div key={cat} className="flex items-center space-x-2">
                                    <div className="h-4 w-4 rounded border border-input bg-transparent" />
                                    {/* Placeholder for Checkbox */}
                                    <Label htmlFor={cat} className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">
                                        {cat}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price" className="border-border">
                    <AccordionTrigger className="text-sm font-medium hover:text-accent-green">Price Range</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-4 pt-4 px-1">
                            {/* Placeholder for Slider */}
                            <div className="h-1.5 w-full bg-border rounded-full relative">
                                <div className="absolute left-0 w-1/2 h-full bg-accent-green rounded-full" />
                                <div className="absolute left-1/2 -ml-1.5 top-1/2 -mt-1.5 h-3 w-3 bg-white rounded-full border border-gray-400" />
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-400">
                                <span>$0</span>
                                <span>$500+</span>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="delivery" className="border-border">
                    <AccordionTrigger className="text-sm font-medium hover:text-accent-green">Delivery Speed</AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-3 pt-2">
                            {['Instant', '< 1 Hour', '< 24 Hours'].map((opt) => (
                                <div key={opt} className="flex items-center space-x-2">
                                    <div className="h-4 w-4 rounded-full border border-input bg-transparent" />
                                    {/* Placeholder for Radio */}
                                    <Label htmlFor={opt} className="text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">
                                        {opt}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Button variant="outline" className="w-full border-border bg-transparent hover:bg-white/5 text-gray-400 hover:text-white">
                Reset Filters
            </Button>
        </div>
    )
}
