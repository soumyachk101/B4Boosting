import React from "react"
import { Button, ButtonProps } from "./button"
import { cn } from "@/lib/utils"

interface GlowButtonProps extends ButtonProps {
    glowColor?: string
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
    ({ className, children, glowColor = "#00FF66", ...props }, ref) => {
        return (
            <Button
                ref={ref}
                className={cn("btn-glow font-bold tracking-wide group", className)}
                {...props}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:animate-[sweep_1s_ease-in-out_infinite]" />
                <span className="relative z-10">{children}</span>
            </Button>
        )
    }
)
GlowButton.displayName = "GlowButton"

export { GlowButton }
