import './globals.css'
import type { Metadata } from 'next'
import { Space_Mono } from 'next/font/google'

const inter = Space_Mono({ subsets: ['latin'], weight: '400' })

const baseUrl = process.env.NODE_ENV === 'development'
  ? `http://localhost:${process.env.PORT || 3000}` :
  'https://' + process.env.VERCEL_URL as string;

export const metadata: Metadata = {
  title: 'Wallet Checker',
  description: 'Apemillio Wallet Checker',
  viewport: { width: "device-width", initialScale: 1 },
  metadataBase: new URL(baseUrl),
  keywords: "NFT, Apechain, Apemillio, art, mint, free ",
  creator: 'ape',
  publisher: 'ape',
  generator: 'Next.js',
  applicationName: 'Apemillio',
  authors: [
    {
      name: 'ape',
      url: 'https://linktr.ee/'
    },
    {
      name: 'ape',
      url: 'https://twitter.com/apemillio'
    }
  ],
  openGraph: {
    title: 'Wallet Checker',
    description: 'apemillio Wallet Checker.',
    siteName: 'apemillio',
  },
  twitter: {
    title: 'Wallet Checker',
    description: 'apemillio Wallet Checker.',
    card: 'summary',
    creator: '@iSyqozz512',
  },

}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + ' [background:_#d9e9f3]'}>{children}</body>
    </html>
  )
}
