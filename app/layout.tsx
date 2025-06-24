import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GhibliCursor } from './components/GhibliCursor'
import { SootSprite, NoFace, Kodama, PaperPlane, StarFragment } from './components/GhibliSprites'

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
        <div className="fixed inset-0 -z-10 h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-emerald-50 to-amber-50 opacity-70"></div>
          <div className="clouds"></div>
          
          {/* Ghibli Sprites Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Soot Sprites */}
            <div className="absolute top-20 left-10">
              <SootSprite size={30} delay={0} />
            </div>
            <div className="absolute top-40 right-20">
              <SootSprite size={40} delay={2} />
            </div>
            <div className="absolute bottom-40 left-1/3">
              <SootSprite size={35} delay={4} />
            </div>
            
            {/* No-Face in corner */}
            <NoFace className="absolute bottom-0 right-10 opacity-20" />
            
            {/* Kodamas */}
            <div className="absolute top-1/3 right-1/4">
              <Kodama size={25} />
            </div>
            <div className="absolute bottom-1/3 left-1/4">
              <Kodama size={30} />
            </div>
            
            {/* Paper Plane */}
            <div className="absolute top-1/2">
              <PaperPlane />
            </div>
            
            {/* Star Fragments */}
            <div className="absolute top-0 left-1/4">
              <StarFragment />
            </div>
            <div className="absolute top-0 right-1/3">
              <StarFragment />
            </div>
          </div>
        </div>
        
        {/* Custom Cursor */}
        <GhibliCursor />
        
        {children}
      </body>
    </html>
  )
}