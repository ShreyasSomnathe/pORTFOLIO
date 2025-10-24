import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shreyas Somnathe — Quant Systems Architect',
  description: 'Elite quantitative trader and systems architect. Precision. Strategy. Performance.',
  keywords: ['quantitative trading', 'algorithmic trading', 'systematic trading', 'financial engineering'],
  authors: [{ name: 'Shreyas Somnathe' }],
  openGraph: {
    title: 'Shreyas Somnathe — Quant Systems Architect',
    description: 'Elite quantitative trader and systems architect',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shreyas Somnathe — Quant Systems Architect',
    description: 'Elite quantitative trader and systems architect',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  )
}
