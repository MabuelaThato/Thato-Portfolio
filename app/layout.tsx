import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Nav } from './nav'
import { Toaster } from "@/components/ui/toaster"

const roboto = Roboto({
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
      <body className={roboto.className}>
      <main className='bg-[#E5E5E9] w-full'>
      <Nav />
        {children}
        <Toaster />
        </main>
      </body>
    </html>
  )
}
