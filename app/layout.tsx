import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './globals.css'

const redhat = Red_Hat_Display({ 
  weight: ['300','400','500','600','700','800','900'],
  style: 'normal',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Game Store',
  description: 'The All-In-One Store for Gamers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={redhat.className}>   
        {children}
      </body>
    </html>
  )
}
