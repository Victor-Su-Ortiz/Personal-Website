// ===== FILE: app/layout.tsx =====
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GhibliCursor } from './components/GhibliCursor'
import { GhibliBackground } from './components/GhibliBackground'
import { GhibliDecorations } from './components/GhibliDecorations'

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
      <body className={`${inter.className} bg-sky-50 text-slate-800 custom-cursor-active`}>
        {/* Enhanced Ghibli Background */}
        <GhibliBackground />
        
        {/* Floating Ghibli Decorations */}
        <GhibliDecorations />
        
        {/* Custom Cursor */}
        <GhibliCursor />
        
        {children}
      </body>
    </html>
  )
}