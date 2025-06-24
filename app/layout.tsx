import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Victor Su-Ortiz | Software Engineer',
  description: 'Graduate student at CMU, AI researcher, and software engineer with a passion for creating magical experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-sky-50 text-slate-800`}>
        <div className="fixed inset-0 -z-10 h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50 opacity-70"></div>
          <div className="clouds"></div>
        </div>
        {children}
      </body>
    </html>
  )
}