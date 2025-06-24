// ===== FILE: app/components/Hero.tsx =====
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { SootSprite } from './GhibliSprites'

export default function Hero() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [avatarSprites, setAvatarSprites] = useState<number[]>([])

  const handleAvatarClick = () => {
    // Create explosion of sprites
    const newSprites = Array.from({ length: 8 }, (_, i) => Date.now() + i)
    setAvatarSprites(prev => [...prev, ...newSprites])
    
    setTimeout(() => {
      setAvatarSprites(prev => prev.filter(id => !newSprites.includes(id)))
    }, 3000)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Floating soot sprites that follow avatar */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="relative w-96 h-96">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                x: 150 * Math.cos((i * 60 + Date.now() / 1000) * Math.PI / 180),
                y: 150 * Math.sin((i * 60 + Date.now() / 1000) * Math.PI / 180),
              }}
              transition={{
                duration: 0,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <SootSprite size={25} delay={i * 0.5} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Interactive Avatar */}
          <div className="flex justify-center mb-8">
            <motion.div 
              className="relative cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAvatarClick}
            >
              {/* Magical aura */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                    '0 0 40px rgba(34, 197, 94, 0.5)',
                    '0 0 20px rgba(34, 197, 94, 0.3)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Rotating glow rings */}
              <motion.div 
                className="absolute -inset-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2 border-emerald-400 opacity-20" />
              </motion.div>
              
              <motion.div 
                className="absolute -inset-8"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border border-sky-400 opacity-20" />
              </motion.div>
              
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-emerald-100 to-sky-100 flex items-center justify-center relative">
                <div className="text-6xl font-bold text-emerald-600 ghibli-float">V</div>
              </div>
              
              {/* Click hint */}
              <motion.div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-emerald-600 opacity-50"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Click me! ✨
              </motion.div>
            </motion.div>
          </div>

          {/* Sprite explosion on avatar click */}
          {avatarSprites.map((id, i) => (
            <motion.div
              key={id}
              className="absolute top-1/2 left-1/2 pointer-events-none"
              initial={{ x: 0, y: 0, scale: 0 }}
              animate={{ 
                x: 200 * Math.cos((i * 45) * Math.PI / 180),
                y: 200 * Math.sin((i * 45) * Math.PI / 180),
                scale: [0, 1, 0],
                rotate: 360
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <SootSprite size={30} delay={0} />
            </motion.div>
          ))}

          <motion.h1 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 200%' }}
          >
            {personalInfo.name}
          </motion.h1>
          
          <p className="text-xl md:text-2xl text-slate-600">
            {personalInfo.title}
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-500">
            <MapPin size={20} className="ghibli-float" />
            <span>{personalInfo.location}</span>
          </div>

          {/* Enhanced social links with character popups */}
          <motion.div 
            className="flex gap-4 justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {[
              { href: `https://${personalInfo.github}`, icon: Github, sprite: 'soot' },
              { href: `https://${personalInfo.linkedin}`, icon: Linkedin, sprite: 'kodama' },
              { href: `mailto:${personalInfo.email}`, icon: Mail, sprite: 'totoro' }
            ].map(({ href, icon: Icon, sprite }, i) => (
              <motion.a
                key={i}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className="p-3 bg-white rounded-full shadow-lg ghibli-hover relative group"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHoveredIcon(sprite)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Icon size={24} />
                
                {/* Character popup on hover */}
                <motion.div
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 pointer-events-none"
                  initial={{ opacity: 0, y: 10, scale: 0 }}
                  animate={{ 
                    opacity: hoveredIcon === sprite ? 1 : 0,
                    y: hoveredIcon === sprite ? 0 : 10,
                    scale: hoveredIcon === sprite ? 1 : 0
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  {sprite === 'soot' && <SootSprite size={30} delay={0} />}
                  {sprite === 'kodama' && <MiniKodama />}
                  {sprite === 'totoro' && <MiniTotoro />}
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
                <motion.div 
                  className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                />
              </div>
              <motion.div
                className="absolute -top-8 left-1/2 transform -translate-x-1/2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <span className="text-xs text-emerald-600">Scroll</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Mini sprite components for hover effects
function MiniTotoro() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="25" rx="15" ry="18" fill="#6B7280" />
      <ellipse cx="20" cy="27" rx="12" ry="14" fill="#9CA3AF" />
      <path d="M5 10 L5 2 L9 6 Z" fill="#6B7280" />
      <path d="M35 10 L35 2 L31 6 Z" fill="#6B7280" />
      <circle cx="13" cy="20" r="3" fill="white" />
      <circle cx="27" cy="20" r="3" fill="white" />
      <circle cx="13" cy="20" r="1.5" fill="black" />
      <circle cx="27" cy="20" r="1.5" fill="black" />
    </svg>
  )
}

function MiniKodama() {
  return (
    <svg width="30" height="40" viewBox="0 0 30 40" fill="none">
      <ellipse cx="15" cy="15" rx="12" ry="15" fill="#e8f5e8" />
      <circle cx="10" cy="15" r="2" fill="black" />
      <circle cx="20" cy="15" r="2" fill="black" />
      <ellipse cx="15" cy="30" rx="8" ry="10" fill="#e8f5e8" />
      <circle cx="15" cy="3" r="2" fill="#C8E6C9" />
    </svg>
  )
}