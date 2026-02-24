import type { Config } from "tailwindcss"

const config = {
    darkMode: "class",
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                display: ['var(--font-syne)', 'sans-serif'],
                space: ['var(--font-space)', 'sans-serif'],
                inter: ['var(--font-inter)', 'sans-serif'],
                mono: ['var(--font-dm-mono)', 'monospace'],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "var(--bg-primary)",
                foreground: "var(--text-primary)",
                primary: {
                    DEFAULT: "var(--accent-green)",
                    foreground: "#000000",
                },
                secondary: {
                    DEFAULT: "var(--bg-secondary)",
                    foreground: "var(--text-primary)",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "var(--bg-elevated)",
                    foreground: "var(--text-muted)",
                },
                accent: {
                    DEFAULT: "var(--accent-violet)",
                    foreground: "#FFFFFF",
                    violet: "var(--accent-violet)",
                    pink: "var(--accent-pink)",
                    cyan: "var(--accent-cyan)",
                    green: "var(--accent-green)",
                    amber: "var(--accent-amber)"
                },
                popover: {
                    DEFAULT: "var(--bg-elevated)",
                    foreground: "var(--text-primary)",
                },
                card: {
                    DEFAULT: "var(--bg-secondary)",
                    foreground: "var(--text-primary)",
                },
                // Custom B4Boosting colors
                bg: {
                    primary: "var(--bg-primary)",
                    secondary: "var(--bg-secondary)",
                    elevated: "var(--bg-elevated)",
                },
                game: {
                    border: {
                        DEFAULT: "var(--border)",
                        bright: "var(--border-bright)",
                    },
                    text: {
                        primary: "var(--text-primary)",
                        secondary: "var(--text-secondary)",
                        muted: "var(--text-muted)",
                    }
                }
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                shimmer: {
                    from: { backgroundPosition: "-200% 0" },
                    to: { backgroundPosition: "200% 0" },
                },
                marquee: {
                    from: { transform: "translateX(0%)" },
                    to: { transform: "translateX(-50%)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                sweep: {
                    "0%": { transform: "translateX(-150%) skewX(-20deg)" },
                    "100%": { transform: "translateX(250%) skewX(-20deg)" },
                }
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                shimmer: "shimmer 1.5s infinite",
                marquee: "marquee 20s linear infinite",
                float: "float 6s ease-in-out infinite",
                sweep: "sweep 1.5s ease-in-out infinite",
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

