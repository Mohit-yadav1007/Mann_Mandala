import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import NavMenu from '@/components/nav-menu'
import Footer from '@/components/footer'

// Root layout for the app:
// - Loads global styles and fonts
// - Renders persistent NavMenu and analytics
// - Uses suppressHydrationWarning to avoid extension-injected attribute mismatches

export const metadata: Metadata = {
  title: 'Mann_mandala',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <NavMenu />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
