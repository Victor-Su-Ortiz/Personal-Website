'use client'

import { motion } from 'framer-motion'

// Soot Sprite Component
export function SootSprite({ size = 40, delay = 0 }: { size?: number; delay?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        x: [0, Math.random() * 200 - 100],
        y: [0, Math.random() * -200 - 100]
      }}
      transition={{
        duration: 8,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 5
      }}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
        {/* Body */}
        <circle cx="20" cy="20" r="15" fill="#1a1a1a" />
        {/* Fuzzy edges */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="20"
            y1="20"
            x2={20 + 18 * Math.cos((i * 30 * Math.PI) / 180)}
            y2={20 + 18 * Math.sin((i * 30 * Math.PI) / 180)}
            stroke="#1a1a1a"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
        {/* Eyes */}
        <circle cx="15" cy="18" r="4" fill="white" />
        <circle cx="25" cy="18" r="4" fill="white" />
        <circle cx="15" cy="18" r="2" fill="black" />
        <circle cx="25" cy="18" r="2" fill="black" />
      </svg>
    </motion.div>
  )
}

// No-Face (Kaonashi) Component
export function NoFace({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`${className} pointer-events-none`}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 0.3, y: 0 }}
      transition={{ duration: 2 }}
    >
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
        {/* Body */}
        <ellipse cx="40" cy="60" rx="35" ry="55" fill="#2a2a2a" opacity="0.9" />
        {/* Mask */}
        <ellipse cx="40" cy="40" rx="25" ry="30" fill="#f5f5f5" />
        {/* Eyes */}
        <circle cx="30" cy="35" r="3" fill="#000" />
        <circle cx="50" cy="35" r="3" fill="#000" />
        {/* Mouth */}
        <path d="M 30 50 Q 40 55 50 50" stroke="#000" strokeWidth="2" fill="none" />
      </svg>
    </motion.div>
  )
}

// Kodama (Tree Spirit) Component
export function Kodama({ size = 30 }: { size?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      animate={{ 
        rotate: [-10, 10, -10],
        y: [0, -5, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width={size} height={size} viewBox="0 0 30 40" fill="none">
        {/* Head */}
        <ellipse cx="15" cy="15" rx="12" ry="15" fill="#e8f5e8" />
        {/* Eyes */}
        <circle cx="10" cy="15" r="2" fill="#000" />
        <circle cx="20" cy="15" r="2" fill="#000" />
        {/* Body */}
        <ellipse cx="15" cy="30" rx="8" ry="10" fill="#e8f5e8" />
      </svg>
    </motion.div>
  )
}

// Paper Airplane from Spirited Away
export function PaperPlane() {
  return (
    <motion.div
      className="absolute pointer-events-none"
      initial={{ x: -100, y: 0 }}
      animate={{ 
        x: window.innerWidth + 100,
        y: [0, -50, 0, 50, 0]
      }}
      transition={{
        x: { duration: 15, repeat: Infinity, ease: "linear" },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
        <path 
          d="M 0 15 L 40 15 L 35 5 L 25 15 L 35 25 Z" 
          fill="white" 
          stroke="#e0e0e0" 
          strokeWidth="1"
        />
      </svg>
    </motion.div>
  )
}

// Star fragments from Howl's Moving Castle / Spirited Away
export function StarFragment() {
  return (
    <motion.div
      className="absolute pointer-events-none"
      animate={{
        y: [0, window.innerHeight + 100],
        x: [0, Math.random() * 100 - 50],
        rotate: [0, 360]
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"
          fill="#ffd700"
          opacity="0.6"
        />
      </svg>
    </motion.div>
  )
}