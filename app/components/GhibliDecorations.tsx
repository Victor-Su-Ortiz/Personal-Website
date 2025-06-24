// ===== FILE: app/components/GhibliDecorations.tsx =====
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function GhibliDecorations() {
  const [mouseTrail, setMouseTrail] = useState<{x: number, y: number, id: number}[]>([])
  
  useEffect(() => {
    let lastTime = 0
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now()
      if (currentTime - lastTime > 500) { // Create sprite every 500ms
        lastTime = currentTime
        const id = currentTime
        setMouseTrail(prev => [...prev.slice(-5), { x: e.clientX, y: e.clientY, id }])
        
        setTimeout(() => {
          setMouseTrail(prev => prev.filter(trail => trail.id !== id))
        }, 3000)
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Floating Catbus */}
      <motion.div
        className="fixed bottom-20 right-0 opacity-30 pointer-events-none z-10"
        initial={{ x: 200 }}
        animate={{ x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 1200] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <CatbusSprite />
      </motion.div>

      {/* Totoro on umbrella floating by */}
      <motion.div
        className="fixed top-1/2 left-0 opacity-20 pointer-events-none z-10"
        initial={{ x: -150, y: 0 }}
        animate={{ 
          x: typeof window !== 'undefined' ? window.innerWidth + 150 : 1350,
          y: [0, -50, 0, 50, 0]
        }}
        transition={{ 
          x: { duration: 45, repeat: Infinity, repeatDelay: 20, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <TotoroUmbrella />
      </motion.div>

      {/* Bath tokens floating up */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed bottom-0 opacity-30 pointer-events-none"
          style={{ left: `${20 + i * 30}%` }}
          initial={{ y: 100 }}
          animate={{ y: typeof window !== 'undefined' ? -window.innerHeight - 100 : -1000 }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            delay: i * 7,
            ease: "linear"
          }}
        >
          <BathToken />
        </motion.div>
      ))}

      {/* Haku dragon */}
      <motion.div
        className="fixed top-1/4 left-0 opacity-10 pointer-events-none"
        initial={{ x: -400 }}
        animate={{ x: typeof window !== 'undefined' ? window.innerWidth + 400 : 1600 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear", repeatDelay: 30 }}
      >
        <HakuDragon />
      </motion.div>

      {/* Forest spirits corner decoration */}
      <div className="fixed bottom-10 left-10 opacity-40 pointer-events-none">
        <motion.div
          animate={{ 
            rotate: [-5, 5, -5],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <ForestSpirit />
        </motion.div>
      </div>

      {/* Calcifer in corner */}
      <div className="fixed top-20 left-20 opacity-30 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Calcifer />
        </motion.div>
      </div>

      {/* Mouse trail sprites */}
      {mouseTrail.map(trail => (
        <motion.div
          key={trail.id}
          className="fixed pointer-events-none z-20"
          style={{ left: trail.x - 20, top: trail.y - 20 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ 
              y: -30,
              rotate: 360,
              opacity: [0.5, 0]
            }}
            transition={{ duration: 2 }}
          >
            <TinySootSprite />
          </motion.div>
        </motion.div>
      ))}

      {/* Floating paper airplanes */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`plane-${i}`}
          className="fixed pointer-events-none opacity-40"
          initial={{ x: -50, y: 100 + i * 200 }}
          animate={{ 
            x: typeof window !== 'undefined' ? window.innerWidth + 50 : 1250,
            y: [100 + i * 200, 50 + i * 200, 100 + i * 200, 150 + i * 200, 100 + i * 200]
          }}
          transition={{
            x: { duration: 25 + i * 5, repeat: Infinity, ease: "linear", delay: i * 10 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <PaperPlane />
        </motion.div>
      ))}
    </>
  )
}

// Enhanced sprite components
function CatbusSprite() {
  return (
    <motion.div
      animate={{ 
        y: [0, -10, 0]
      }}
      transition={{ 
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="150" height="80" viewBox="0 0 150 80" fill="none">
        {/* Body */}
        <ellipse cx="75" cy="40" rx="60" ry="30" fill="#8B7355" />
        {/* Stripes */}
        <rect x="15" y="25" width="120" height="4" fill="#654321" opacity="0.5" />
        <rect x="15" y="35" width="120" height="4" fill="#654321" opacity="0.5" />
        <rect x="15" y="45" width="120" height="4" fill="#654321" opacity="0.5" />
        {/* Windows with glow */}
        {[25, 50, 75, 100].map((x, i) => (
          <g key={i}>
            <rect x={x} y="20" width="18" height="15" fill="#87CEEB" rx="2" />
            <rect x={x} y="20" width="18" height="15" fill="#FFE4B5" opacity="0.3" rx="2" />
          </g>
        ))}
        {/* Ears */}
        <path d="M30 15 L25 0 L35 8 Z" fill="#8B7355" />
        <path d="M120 15 L125 0 L115 8 Z" fill="#8B7355" />
        {/* Glowing eyes */}
        <circle cx="20" cy="40" r="10" fill="#FFE4B5" opacity="0.8" />
        <circle cx="130" cy="40" r="10" fill="#FFE4B5" opacity="0.8" />
        <circle cx="20" cy="40" r="6" fill="#FFA500" />
        <circle cx="130" cy="40" r="6" fill="#FFA500" />
        {/* Happy face */}
        <path d="M50 50 Q75 58 100 50" stroke="#654321" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Running legs */}
        <motion.g
          animate={{ 
            rotate: [-20, 20, -20]
          }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <ellipse cx="40" cy="65" rx="6" ry="10" fill="#8B7355" />
          <ellipse cx="110" cy="65" rx="6" ry="10" fill="#8B7355" />
        </motion.g>
        <motion.g
          animate={{ 
            rotate: [20, -20, 20]
          }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <ellipse cx="60" cy="65" rx="6" ry="10" fill="#8B7355" />
          <ellipse cx="90" cy="65" rx="6" ry="10" fill="#8B7355" />
        </motion.g>
      </svg>
    </motion.div>
  )
}

function TotoroUmbrella() {
  return (
    <svg width="120" height="150" viewBox="0 0 120 150" fill="none">
      {/* Umbrella */}
      <path d="M60 20 Q20 30 10 60 Q30 50 60 50 Q90 50 110 60 Q100 30 60 20 Z" 
            fill="#FF6B6B" opacity="0.8" />
      <rect x="58" y="50" width="4" height="60" fill="#8B4513" />
      
      {/* Totoro */}
      <ellipse cx="60" cy="90" rx="35" ry="40" fill="#6B7280" />
      <ellipse cx="60" cy="95" rx="28" ry="32" fill="#9CA3AF" />
      {/* Ears */}
      <path d="M25 50 L25 35 L32 45 Z" fill="#6B7280" />
      <path d="M95 50 L95 35 L88 45 Z" fill="#6B7280" />
      {/* Eyes */}
      <circle cx="45" cy="80" r="6" fill="white" />
      <circle cx="75" cy="80" r="6" fill="white" />
      <circle cx="45" cy="80" r="3" fill="black" />
      <circle cx="75" cy="80" r="3" fill="black" />
      {/* Belly pattern */}
      <path d="M45 95 L60 88 L75 95" stroke="#6B7280" strokeWidth="2" fill="none" />
      <path d="M45 102 L60 95 L75 102" stroke="#6B7280" strokeWidth="2" fill="none" />
    </svg>
  )
}

function BathToken() {
  return (
    <motion.div
      animate={{ 
        rotate: [0, 360]
      }}
      transition={{ 
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
        <rect x="5" y="5" width="40" height="50" fill="#8B4513" rx="5" />
        <rect x="8" y="8" width="34" height="44" fill="#D2691E" rx="3" />
        {/* Glowing effect */}
        <rect x="8" y="8" width="34" height="44" fill="#FFE4B5" opacity="0.2" rx="3" />
        {/* Japanese character */}
        <rect x="15" y="18" width="20" height="3" fill="#8B4513" />
        <rect x="23" y="15" width="4" height="10" fill="#8B4513" />
        <rect x="15" y="28" width="20" height="3" fill="#8B4513" />
        <circle cx="25" cy="40" r="6" fill="none" stroke="#8B4513" strokeWidth="2" />
      </svg>
    </motion.div>
  )
}

function HakuDragon() {
  return (
    <svg width="500" height="120" viewBox="0 0 500 120" fill="none">
      {/* Flowing body */}
      <motion.path 
        d="M0 60 Q100 30 200 60 T400 60 T500 60" 
        stroke="#4A90E2" 
        strokeWidth="25" 
        fill="none" 
        opacity="0.3"
        animate={{ 
          d: [
            "M0 60 Q100 30 200 60 T400 60 T500 60",
            "M0 60 Q100 90 200 60 T400 60 T500 60",
            "M0 60 Q100 30 200 60 T400 60 T500 60"
          ]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.path 
        d="M0 60 Q100 90 200 60 T400 60 T500 60" 
        stroke="#6BB6FF" 
        strokeWidth="18" 
        fill="none" 
        opacity="0.5"
        animate={{ 
          d: [
            "M0 60 Q100 90 200 60 T400 60 T500 60",
            "M0 60 Q100 30 200 60 T400 60 T500 60",
            "M0 60 Q100 90 200 60 T400 60 T500 60"
          ]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {/* Head */}
      <ellipse cx="480" cy="60" rx="30" ry="18" fill="#4A90E2" opacity="0.6" />
      {/* Whiskers */}
      <path d="M470 54 Q455 48 440 54" stroke="#6BB6FF" strokeWidth="2" />
      <path d="M470 66 Q455 72 440 66" stroke="#6BB6FF" strokeWidth="2" />
      {/* Flowing mane */}
      <ellipse cx="450" cy="48" rx="20" ry="10" fill="#87CEEB" opacity="0.4" />
      <ellipse cx="420" cy="55" rx="20" ry="10" fill="#87CEEB" opacity="0.4" />
      <ellipse cx="390" cy="48" rx="20" ry="10" fill="#87CEEB" opacity="0.4" />
    </svg>
  )
}

function ForestSpirit() {
  return (
    <svg width="50" height="60" viewBox="0 0 50 60" fill="none">
      {/* Head */}
      <ellipse cx="25" cy="25" rx="18" ry="22" fill="#E8F5E8" />
      {/* Body */}
      <ellipse cx="25" cy="45" rx="12" ry="15" fill="#E8F5E8" />
      {/* Eyes */}
      <circle cx="16" cy="23" r="2" fill="#000" />
      <circle cx="34" cy="23" r="2" fill="#000" />
      {/* Head decoration */}
      <circle cx="25" cy="5" r="4" fill="#C8E6C9" />
      <rect x="24" y="5" width="2" height="10" fill="#C8E6C9" />
      {/* Arms */}
      <ellipse cx="10" cy="40" rx="5" ry="10" fill="#E8F5E8" transform="rotate(-30 10 40)" />
      <ellipse cx="40" cy="40" rx="5" ry="10" fill="#E8F5E8" transform="rotate(30 40 40)" />
    </svg>
  )
}

function Calcifer() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      {/* Flame layers */}
      <path d="M30 50 C20 50 12 42 12 32 C12 22 20 10 30 5 C40 10 48 22 48 32 C48 42 40 50 30 50 Z" 
            fill="#FF6B6B" />
      <path d="M30 47 C22 47 15 40 15 32 C15 24 22 14 30 10 C38 14 45 24 45 32 C45 40 38 47 30 47 Z" 
            fill="#FFA502" />
      <path d="M30 44 C24 44 18 38 18 32 C18 26 24 18 30 15 C36 18 42 26 42 32 C42 38 36 44 30 44 Z" 
            fill="#FFD93D" />
      {/* Face */}
      <circle cx="22" cy="30" r="4" fill="#000" />
      <circle cx="38" cy="30" r="4" fill="#000" />
      <circle cx="23" cy="29" r="1.5" fill="#FFF" />
      <circle cx="39" cy="29" r="1.5" fill="#FFF" />
      <path d="M22 36 Q30 40 38 36" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function TinySootSprite() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="10" fill="#1a1a1a" />
      {[...Array(6)].map((_, i) => (
        <line
          key={i}
          x1="15"
          y1="15"
          x2={15 + 13 * Math.cos((i * 60 * Math.PI) / 180)}
          y2={15 + 13 * Math.sin((i * 60 * Math.PI) / 180)}
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      <circle cx="11" cy="13" r="2" fill="white" />
      <circle cx="19" cy="13" r="2" fill="white" />
    </svg>
  )
}

function PaperPlane() {
  return (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
      <path 
        d="M0 15 L40 15 L35 5 L25 15 L35 25 Z" 
        fill="white" 
        stroke="#e0e0e0" 
        strokeWidth="1"
      />
      <path 
        d="M0 15 L25 15" 
        stroke="#e0e0e0" 
        strokeWidth="0.5"
      />
    </svg>
  )
}