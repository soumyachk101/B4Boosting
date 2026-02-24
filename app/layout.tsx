
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Toaster } from '@/components/ui/toaster'
import { FloatingDock } from '@/components/layout/FloatingDock'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'B4Boosting | Premier Gaming Services Marketplace',
  description: 'Buy boosting, currency, accounts & items instantly & securely.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700;900&family=Syne:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground relative overflow-x-hidden min-h-screen selection:bg-accent-violet selection:text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Providers>
          {/* Grid structural background overlay for Monolithic Aesthetic */}
          <div className="fixed inset-0 z-[-1] pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '4rem 4rem' }}>
          </div>

          <main className="flex-1 min-h-screen relative z-0 pb-32">
            {children}
          </main>
          <FloatingDock />
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
