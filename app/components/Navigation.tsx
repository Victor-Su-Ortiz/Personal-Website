'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import GhibliIcon from './GhibliIcons'

const navItems = [
  { name: 'Home', href: '#home', iconType: 'star' as const },
  { name: 'Experience', href: '#experience', iconType: 'experience' as const },
  { name: 'Projects', href: '#projects', iconType: 'project' as const },
  { name: 'Education', href: '#education', iconType: 'education' as const },
  { name: 'Skills', href: '#skills', iconType: 'skill' as const },
  { name: 'Contact', href: '#contact', iconType: 'contact' as const },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex justify-center gap-6">
          {navItems.map((item) => (
            <motion.li 
              key={item.name}
              onHoverStart={() => setHoveredItem(item.name)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-emerald-100 transition-colors relative"
              >
                <motion.div
                  animate={{ 
                    rotate: hoveredItem === item.name ? [0, -10, 10, -10, 0] : 0,
                    scale: hoveredItem === item.name ? 1.2 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <GhibliIcon type={item.iconType} size="sm" />
                </motion.div>
                <span className="hidden md:inline">{item.name}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}