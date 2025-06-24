// ===== FILE: app/components/GhibliDecorations.tsx =====
'use client'

import { motion } from 'framer-motion'

export function GhibliDecorations() {
  return (
    <>
      {/* Floating Catbus in the distance */}
      <motion.div
        className="fixed bottom-20 right-0 opacity-20 pointer-events-none z-0"
        initial={{ x: 200 }}
        animate={{ x: [-200, typeof window !== 'undefined' ? window.innerWidth + 200 : 1200] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <CatbusSprite />
      </motion.div>

      {/* Bath tokens floating up (from Spirited Away) */}
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

      {/* Haku dragon silhouette */}
      <motion.div
        className="fixed top-1/3 left-0 opacity-10 pointer-events-none"
        initial={{ x: -400 }}
        animate={{ x: typeof window !== 'undefined' ? window.innerWidth + 400 : 1600 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear", repeatDelay: 30 }}
      >
        <HakuDragon />
      </motion.div>

      {/* Forest spirits (Kodama) clicking sounds */}
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
    </>
  )
}

// Individual sprite components
function CatbusSprite() {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      {/* Catbus body */}
      <ellipse cx="60" cy="30" rx="50" ry="25" fill="#8B7355" />
      {/* Stripes */}
      <rect x="10" y="20" width="100" height="3" fill="#654321" opacity="0.5" />
      <rect x="10" y="27" width="100" height="3" fill="#654321" opacity="0.5" />
      <rect x="10" y="34" width="100" height="3" fill="#654321" opacity="0.5" />
      {/* Windows */}
      <rect x="20" y="15" width="15" height="12" fill="#87CEEB" rx="2" />
      <rect x="40" y="15" width="15" height="12" fill="#87CEEB" rx="2" />
      <rect x="60" y="15" width="15" height="12" fill="#87CEEB" rx="2" />
      <rect x="80" y="15" width="15" height="12" fill="#87CEEB" rx="2" />
      {/* Ears */}
      <path d="M25 10 L20 0 L30 5 Z" fill="#8B7355" />
      <path d="M95 10 L100 0 L90 5 Z" fill="#8B7355" />
      {/* Eyes (headlights) */}
      <circle cx="15" cy="30" r="8" fill="#FFE4B5" />
      <circle cx="105" cy="30" r="8" fill="#FFE4B5" />
      <circle cx="15" cy="30" r="5" fill="#FFA500" />
      <circle cx="105" cy="30" r="5" fill="#FFA500" />
      {/* Smile */}
      <path d="M40 40 Q60 45 80 40" stroke="#654321" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Legs running */}
      <ellipse cx="30" cy="50" rx="5" ry="8" fill="#8B7355" transform="rotate(-20 30 50)" />
      <ellipse cx="50" cy="50" rx="5" ry="8" fill="#8B7355" transform="rotate(20 50 50)" />
      <ellipse cx="70" cy="50" rx="5" ry="8" fill="#8B7355" transform="rotate(-20 70 50)" />
      <ellipse cx="90" cy="50" rx="5" ry="8" fill="#8B7355" transform="rotate(20 90 50)" />
    </svg>
  )
}

function BathToken() {
  return (
    <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
      <rect x="5" y="5" width="30" height="40" fill="#8B4513" rx="4" />
      <rect x="8" y="8" width="24" height="34" fill="#D2691E" rx="2" />
      {/* Japanese character (simplified) */}
      <rect x="12" y="15" width="16" height="3" fill="#8B4513" />
      <rect x="18" y="12" width="4" height="10" fill="#8B4513" />
      <rect x="12" y="25" width="16" height="3" fill="#8B4513" />
      <circle cx="20" cy="35" r="5" fill="none" stroke="#8B4513" strokeWidth="2" />
    </svg>
  )
}

function HakuDragon() {
  return (
    <svg width="400" height="100" viewBox="0 0 400 100" fill="none">
      {/* Dragon body segments */}
      <path d="M0 50 Q50 30 100 50 T200 50 T300 50 T400 50" 
            stroke="#4A90E2" strokeWidth="20" fill="none" opacity="0.3" />
      <path d="M0 50 Q50 70 100 50 T200 50 T300 50 T400 50" 
            stroke="#6BB6FF" strokeWidth="15" fill="none" opacity="0.5" />
      {/* Head */}
      <ellipse cx="380" cy="50" rx="25" ry="15" fill="#4A90E2" opacity="0.5" />
      {/* Whiskers */}
      <path d="M370 45 Q360 40 350 45" stroke="#6BB6FF" strokeWidth="2" />
      <path d="M370 55 Q360 60 350 55" stroke="#6BB6FF" strokeWidth="2" />
      {/* Mane flowing */}
      <ellipse cx="360" cy="40" rx="15" ry="8" fill="#87CEEB" opacity="0.3" />
      <ellipse cx="340" cy="45" rx="15" ry="8" fill="#87CEEB" opacity="0.3" />
      <ellipse cx="320" cy="40" rx="15" ry="8" fill="#87CEEB" opacity="0.3" />
    </svg>
  )
}

function ForestSpirit() {
  return (
    <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
      {/* Head */}
      <ellipse cx="20" cy="20" rx="15" ry="18" fill="#E8F5E8" />
      {/* Body */}
      <ellipse cx="20" cy="35" rx="10" ry="12" fill="#E8F5E8" />
      {/* Eyes (black dots) */}
      <circle cx="13" cy="18" r="2" fill="#000" />
      <circle cx="27" cy="18" r="2" fill="#000" />
      {/* Head rattle */}
      <circle cx="20" cy="5" r="3" fill="#C8E6C9" />
      <rect x="19" y="5" width="2" height="8" fill="#C8E6C9" />
      {/* Arms */}
      <ellipse cx="8" cy="30" rx="4" ry="8" fill="#E8F5E8" transform="rotate(-30 8 30)" />
      <ellipse cx="32" cy="30" rx="4" ry="8" fill="#E8F5E8" transform="rotate(30 32 30)" />
    </svg>
  )
}

// Additional decorative elements you can add later
export function SkyElements() {
  return (
    <>
      {/* Castle in the Sky floating */}
      <motion.div
        className="fixed top-10 right-1/4 opacity-10 pointer-events-none"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
          {/* Laputa castle silhouette */}
          <ellipse cx="50" cy="60" rx="40" ry="20" fill="#8B7D82" opacity="0.3" />
          <rect x="30" y="40" width="10" height="20" fill="#8B7D82" opacity="0.4" />
          <rect x="45" y="30" width="10" height="30" fill="#8B7D82" opacity="0.4" />
          <rect x="60" y="35" width="10" height="25" fill="#8B7D82" opacity="0.4" />
          {/* Floating roots */}
          <path d="M30 60 Q35 70 40 75" stroke="#654321" strokeWidth="2" opacity="0.3" />
          <path d="M50 60 Q50 70 50 75" stroke="#654321" strokeWidth="2" opacity="0.3" />
          <path d="M70 60 Q65 70 60 75" stroke="#654321" strokeWidth="2" opacity="0.3" />
        </svg>
      </motion.div>
    </>
  )
}