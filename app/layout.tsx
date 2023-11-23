import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import './globals.css'
import { Nav } from './nav'

const lato = Lato({
  weight: '400',
  subsets: ['latin'],
})

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
      <body className={lato.className}>
      <Nav />
        <div>
        {children}
        </div>
        
      </body>
    </html>
  )
}
