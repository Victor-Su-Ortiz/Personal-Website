// ===== FILE: app/components/GhibliBackground.tsx =====
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function GhibliBackground() {
  const [clicks, setClicks] = useState<{x: number, y: number, id: number}[]>([])
  
  const handleClick = (e: MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    
    setClicks(prev => [...prev, { x, y, id }])
    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== id))
    }, 3000)
  }

  useEffect(() => {
    const element = document.getElementById('ghibli-background')
    element?.addEventListener('click', handleClick)
    return () => element?.removeEventListener('click', handleClick)
  }, [])

  return (
    <div id="ghibli-background" className="fixed inset-0 -z-10 overflow-hidden">
      {/* Sky gradient with more depth */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-50/20 to-pink-50/30" />
      </div>

      {/* Animated clouds */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ x: -200 }}
            animate={{ x: '110vw' }}
            transition={{
              duration: 60 + i * 10,
              repeat: Infinity,
              delay: i * 12,
              ease: "linear"
            }}
            style={{ top: `${10 + i * 15}%` }}
          >
            <Cloud />
          </motion.div>
        ))}
      </div>



      {/* Click popups */}
      {clicks.map(click => (
        <ClickPopup key={click.id} x={click.x} y={click.y} />
      ))}

      {/* Floating islands */}
      <motion.div
        className="absolute top-20 right-1/4 opacity-30"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FloatingIsland />
      </motion.div>
    </div>
  )
}

function Cloud() {
  return (
    <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
      <ellipse cx="50" cy="50" rx="40" ry="30" fill="white" opacity="0.6" />
      <ellipse cx="80" cy="40" rx="50" ry="35" fill="white" opacity="0.6" />
      <ellipse cx="120" cy="45" rx="45" ry="32" fill="white" opacity="0.6" />
      <ellipse cx="150" cy="55" rx="35" ry="25" fill="white" opacity="0.6" />
    </svg>
  )
}



function FloatingIsland() {
  return (
    <svg width="150" height="100" viewBox="0 0 150 100" fill="none">
      {/* Island base - rocky/stone appearance */}
      <ellipse cx="75" cy="50" rx="60" ry="30" fill="#8B7355" opacity="0.8" />
      <ellipse cx="75" cy="45" rx="55" ry="25" fill="#9B8B7A" />
      
      {/* Castle silhouette */}
      <rect x="60" y="25" width="10" height="20" fill="#8B7D82" opacity="0.6" />
      <rect x="70" y="20" width="10" height="25" fill="#8B7D82" opacity="0.6" />
      <rect x="80" y="22" width="10" height="23" fill="#8B7D82" opacity="0.6" />
      
      {/* Floating roots/crystals */}
      <path d="M45 50 Q50 60 55 70" stroke="#8B7355" strokeWidth="2" opacity="0.5" />
      <path d="M75 50 Q75 65 75 75" stroke="#8B7355" strokeWidth="2" opacity="0.5" />
      <path d="M105 50 Q100 60 95 70" stroke="#8B7355" strokeWidth="2" opacity="0.5" />
      
      {/* Glowing crystals instead of trees */}
      <polygon points="50,40 48,35 52,35" fill="#87CEEB" opacity="0.8" />
      <polygon points="100,38 98,33 102,33" fill="#B0E0E6" opacity="0.8" />
    </svg>
  )
}

function ClickPopup({ x, y }: { x: number; y: number }) {
  const sprites = ['totoro', 'soot', 'kodama', 'noface', 'calcifer']
  const sprite = sprites[Math.floor(Math.random() * sprites.length)]
  
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: x - 30, top: y - 30 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ 
          y: -50,
          opacity: [1, 1, 0]
        }}
        transition={{ duration: 2 }}
      >
        {sprite === 'totoro' && <MiniTotoro />}
        {sprite === 'soot' && <MiniSoot />}
        {sprite === 'kodama' && <MiniKodama />}
        {sprite === 'noface' && <MiniNoFace />}
        {sprite === 'calcifer' && <MiniCalcifer />}
      </motion.div>
    </motion.div>
  )
}

// Mini sprite components for popups
function MiniTotoro() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <ellipse cx="30" cy="35" rx="20" ry="22" fill="#6B7280" />
      <ellipse cx="30" cy="37" rx="16" ry="18" fill="#9CA3AF" />
      <path d="M8 15 L8 5 L12 10 Z" fill="#6B7280" />
      <path d="M52 15 L52 5 L48 10 Z" fill="#6B7280" />
      <circle cx="20" cy="30" r="4" fill="white" />
      <circle cx="40" cy="30" r="4" fill="white" />
      <circle cx="20" cy="30" r="2" fill="black" />
      <circle cx="40" cy="30" r="2" fill="black" />
      <path d="M20 40 Q30 45 40 40" stroke="#6B7280" strokeWidth="2" fill="none" />
    </svg>
  )
}

function MiniSoot() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="15" fill="#1a1a1a" />
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="20"
          y1="20"
          x2={20 + 18 * Math.cos((i * 45 * Math.PI) / 180)}
          y2={20 + 18 * Math.sin((i * 45 * Math.PI) / 180)}
          stroke="#1a1a1a"
          strokeWidth="3"
          strokeLinecap="round"
        />
      ))}
      <circle cx="15" cy="18" r="3" fill="white" />
      <circle cx="25" cy="18" r="3" fill="white" />
      <circle cx="15" cy="18" r="1.5" fill="black" />
      <circle cx="25" cy="18" r="1.5" fill="black" />
    </svg>
  )
}

function MiniKodama() {
  return (
    <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
      <ellipse cx="20" cy="20" rx="15" ry="18" fill="#e8f5e8" />
      <circle cx="14" cy="20" r="2" fill="black" />
      <circle cx="26" cy="20" r="2" fill="black" />
      <ellipse cx="20" cy="35" rx="10" ry="12" fill="#e8f5e8" />
      <circle cx="20" cy="5" r="3" fill="#C8E6C9" />
    </svg>
  )
}

function MiniNoFace() {
  return (
    <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
      <ellipse cx="25" cy="30" rx="20" ry="28" fill="#2a2a2a" opacity="0.9" />
      <ellipse cx="25" cy="25" rx="15" ry="18" fill="#f5f5f5" />
      <circle cx="18" cy="22" r="2" fill="black" />
      <circle cx="32" cy="22" r="2" fill="black" />
      <path d="M18 30 Q25 33 32 30" stroke="black" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

function MiniCalcifer() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
      <path d="M25 45 C15 45 8 38 8 28 C8 18 15 5 25 2 C35 5 42 18 42 28 C42 38 35 45 25 45 Z" 
            fill="#FF6B6B" />
      <path d="M25 42 C17 42 12 36 12 28 C12 20 17 10 25 6 C33 10 38 20 38 28 C38 36 33 42 25 42 Z" 
            fill="#FFA502" />
      <circle cx="18" cy="26" r="3" fill="black" />
      <circle cx="32" cy="26" r="3" fill="black" />
      <path d="M18 32 Q25 36 32 32" stroke="black" strokeWidth="2" fill="none" />
    </svg>
  )
}