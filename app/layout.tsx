import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from './nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Thato's portfolio",
  description: "Thato's portfolio that shows her skills and projects",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        
      </body>
    </html>
  )
}
