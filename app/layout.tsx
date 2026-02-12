import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shreyas Somnathe — Quantitative Researcher & Trader',
  description: 'Quantitative Researcher and Trader with 3+ years generating systematic alpha in global energy and index futures. ML-driven crude oil forward curve strategies achieving 3.4 Sharpe ratio.',
  keywords: ['quantitative trading', 'algorithmic trading', 'crude oil futures', 'machine learning', 'quantitative research', 'forward curve', 'energy trading'],
  authors: [{ name: 'Shreyas Somnathe' }],
  openGraph: {
    title: 'Shreyas Somnathe — Quantitative Researcher & Trader',
    description: 'ML-driven systematic trading strategies for global energy and index futures',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyas Somnathe — Quantitative Researcher & Trader',
    description: 'ML-driven systematic trading strategies for global energy and index futures',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden font-sans">
        {children}
        <div className="grain-overlay" />
      </body>
    </html>
  )
}
