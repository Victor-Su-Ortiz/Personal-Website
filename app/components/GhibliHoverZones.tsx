// ===== FILE: app/components/GhibliHoverZones.tsx =====
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HoverZone {
  id: string
  x: number
  y: number
  width: number
  height: number
  character: 'noface' | 'totoro' | 'calcifer' | 'jiji' | 'turniphead' | 'soot'
}

export function GhibliHoverZones() {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)
  const [zones] = useState<HoverZone[]>([
    // Zones distributed across the viewport
    { id: 'zone1', x: 10, y: 20, width: 15, height: 20, character: 'noface' },
    { id: 'zone2', x: 80, y: 15, width: 15, height: 20, character: 'totoro' },
    { id: 'zone3', x: 45, y: 10, width: 10, height: 15, character: 'calcifer' },
    { id: 'zone4', x: 25, y: 70, width: 20, height: 20, character: 'jiji' },
    { id: 'zone5', x: 70, y: 60, width: 15, height: 25, character: 'turniphead' },
    { id: 'zone6', x: 5, y: 50, width: 10, height: 15, character: 'soot' },
    { id: 'zone7', x: 90, y: 40, width: 8, height: 20, character: 'noface' },
    { id: 'zone8', x: 50, y: 80, width: 15, height: 15, character: 'totoro' },
  ])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100

      const hoveredZone = zones.find(zone => 
        x >= zone.x && x <= zone.x + zone.width &&
        y >= zone.y && y <= zone.y + zone.height
      )

      setHoveredZone(hoveredZone?.id || null)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [zones])

  return (
    <>
      {/* Debug mode - uncomment to see hover zones */}
      {/* {zones.map(zone => (
        <div
          key={zone.id}
          className="fixed border border-red-500 opacity-20 pointer-events-none"
          style={{
            left: `${zone.x}%`,
            top: `${zone.y}%`,
            width: `${zone.width}%`,
            height: `${zone.height}%`
          }}
        />
      ))} */}

      {/* Character popups */}
      <AnimatePresence>
        {zones.map(zone => (
          hoveredZone === zone.id && (
            <motion.div
              key={zone.id}
              className="fixed pointer-events-none z-30"
              style={{
                left: `${zone.x + zone.width / 2}%`,
                top: `${zone.y + zone.height / 2}%`
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <CharacterPopup character={zone.character} />
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </>
  )
}

function CharacterPopup({ character }: { character: string }) {
  switch (character) {
    case 'noface':
      return <NoFacePopup />
    case 'totoro':
      return <TotoroPopup />
    case 'calcifer':
      return <CalciferPopup />
    case 'jiji':
      return <JijiPopup />
    case 'turniphead':
      return <TurnipHeadPopup />
    case 'soot':
      return <SootSpritePopup />
    default:
      return null
  }
}

function NoFacePopup() {
  return (
    <motion.div
      animate={{ 
        y: [0, -10, 0],
        rotate: [-5, 5, -5]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
        {/* Body */}
        <ellipse cx="40" cy="50" rx="35" ry="45" fill="#2a2a2a" opacity="0.9" />
        {/* Mask */}
        <ellipse cx="40" cy="35" rx="25" ry="30" fill="#f5f5f5" />
        {/* Purple markings */}
        <path d="M20 25 L20 15" stroke="#9B59B6" strokeWidth="3" strokeLinecap="round" />
        <path d="M60 25 L60 15" stroke="#9B59B6" strokeWidth="3" strokeLinecap="round" />
        {/* Eyes */}
        <circle cx="30" cy="30" r="3" fill="#000" />
        <circle cx="50" cy="30" r="3" fill="#000" />
        {/* Mouth */}
        <path d="M30 45 Q40 50 50 45" stroke="#000" strokeWidth="2" fill="none" />
        {/* Gold offerings */}
        <circle cx="25" cy="70" r="4" fill="#FFD700" opacity="0.8" />
        <circle cx="40" cy="75" r="4" fill="#FFD700" opacity="0.8" />
        <circle cx="55" cy="70" r="4" fill="#FFD700" opacity="0.8" />
      </svg>
    </motion.div>
  )
}

function TotoroPopup() {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.1, 1],
        rotate: [0, -5, 5, 0]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        {/* Body */}
        <ellipse cx="50" cy="55" rx="40" ry="45" fill="#6B7280" />
        <ellipse cx="50" cy="58" rx="32" ry="36" fill="#9CA3AF" />
        {/* Belly patterns */}
        <path d="M30 50 L50 40 L70 50" stroke="#6B7280" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M30 58 L50 48 L70 58" stroke="#6B7280" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M30 66 L50 56 L70 66" stroke="#6B7280" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Ears */}
        <path d="M20 20 L20 5 L28 15 Z" fill="#6B7280" />
        <path d="M80 20 L80 5 L72 15 Z" fill="#6B7280" />
        {/* Eyes */}
        <circle cx="35" cy="40" r="8" fill="white" />
        <circle cx="65" cy="40" r="8" fill="white" />
        <circle cx="35" cy="40" r="4" fill="black" />
        <circle cx="65" cy="40" r="4" fill="black" />
        {/* Nose */}
        <ellipse cx="50" cy="48" rx="6" ry="4" fill="#4B5563" />
        {/* Smile */}
        <path d="M35 55 Q50 65 65 55" stroke="#4B5563" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  )
}

function CalciferPopup() {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        y: [0, -5, 0]
      }}
      transition={{ 
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
        {/* Outer flame */}
        <path d="M35 60 C20 60 10 50 10 35 C10 20 20 5 35 0 C50 5 60 20 60 35 C60 50 50 60 35 60 Z" 
              fill="#FF4444" opacity="0.8" />
        {/* Middle flame */}
        <path d="M35 55 C22 55 12 45 12 35 C12 25 22 10 35 5 C48 10 58 25 58 35 C58 45 48 55 35 55 Z" 
              fill="#FF6B6B" />
        {/* Inner flame */}
        <path d="M35 50 C25 50 15 42 15 32 C15 22 25 12 35 8 C45 12 55 22 55 32 C55 42 45 50 35 50 Z" 
              fill="#FFA502" />
        {/* Core */}
        <path d="M35 45 C27 45 20 38 20 30 C20 22 27 15 35 12 C43 15 50 22 50 30 C50 38 43 45 35 45 Z" 
              fill="#FFD93D" />
        {/* Eyes */}
        <circle cx="27" cy="30" r="5" fill="#000" />
        <circle cx="43" cy="30" r="5" fill="#000" />
        <circle cx="28" cy="29" r="2" fill="#FFF" />
        <circle cx="44" cy="29" r="2" fill="#FFF" />
        {/* Mouth */}
        <path d="M25 38 Q35 44 45 38" stroke="#000" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  )
}

function JijiPopup() {
  return (
    <motion.div
      animate={{ 
        x: [-5, 5, -5],
        y: [0, -3, 0]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
        {/* Body */}
        <ellipse cx="30" cy="45" rx="20" ry="25" fill="#1F2937" />
        {/* Head */}
        <circle cx="30" cy="25" r="18" fill="#1F2937" />
        {/* Ears */}
        <path d="M12 15 L8 5 L16 10 Z" fill="#1F2937" />
        <path d="M48 15 L52 5 L44 10 Z" fill="#1F2937" />
        {/* Inner ears */}
        <path d="M13 12 L11 8 L15 10 Z" fill="#FFB6C1" opacity="0.5" />
        <path d="M47 12 L49 8 L45 10 Z" fill="#FFB6C1" opacity="0.5" />
        {/* Eyes */}
        <ellipse cx="22" cy="25" rx="4" ry="6" fill="#F59E0B" />
        <ellipse cx="38" cy="25" rx="4" ry="6" fill="#F59E0B" />
        <ellipse cx="22" cy="26" rx="2" ry="4" fill="#000" />
        <ellipse cx="38" cy="26" rx="2" ry="4" fill="#000" />
        {/* Nose */}
        <path d="M30 30 L28 32 L32 32 Z" fill="#FFB6C1" />
        {/* Whiskers */}
        <path d="M5 25 L18 25 M5 30 L18 28" stroke="#FFF" strokeWidth="1" opacity="0.6" />
        <path d="M42 25 L55 25 M42 28 L55 30" stroke="#FFF" strokeWidth="1" opacity="0.6" />
        {/* Red bow */}
        <ellipse cx="30" cy="50" rx="8" ry="5" fill="#DC143C" />
        <circle cx="30" cy="50" r="3" fill="#8B0000" />
      </svg>
    </motion.div>
  )
}

function TurnipHeadPopup() {
  return (
    <motion.div
      animate={{ 
        rotate: [0, 360],
        y: [0, -10, 0]
      }}
      transition={{ 
        rotate: { duration: 4, repeat: Infinity, ease: "linear" },
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <svg width="70" height="90" viewBox="0 0 70 90" fill="none">
        {/* Turnip head */}
        <ellipse cx="35" cy="30" rx="30" ry="25" fill="#E6E6FA" />
        <ellipse cx="35" cy="30" rx="26" ry="22" fill="#FFF" />
        {/* Face */}
        <circle cx="25" cy="28" r="2" fill="#000" />
        <circle cx="45" cy="28" r="2" fill="#000" />
        <path d="M25 35 Q35 40 45 35" stroke="#000" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Leaves on top */}
        <path d="M35 10 L30 0 L35 5 L40 0 Z" fill="#90EE90" />
        {/* Body stick */}
        <rect x="33" y="50" width="4" height="30" fill="#8B4513" />
        {/* Arms */}
        <rect x="15" y="60" width="40" height="3" fill="#8B4513" />
        {/* Suit */}
        <path d="M25 55 L25 75 L45 75 L45 55" stroke="#000" strokeWidth="2" fill="#4B5563" />
        {/* Bow tie */}
        <path d="M30 55 L35 58 L40 55 L35 60 Z" fill="#DC143C" />
      </svg>
    </motion.div>
  )
}

function SootSpritePopup() {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0]
      }}
      transition={{ 
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
        {/* Main body */}
        <circle cx="25" cy="25" r="18" fill="#1a1a1a" />
        {/* Fuzzy spikes */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="25"
            y1="25"
            x2={25 + 22 * Math.cos((i * 30 * Math.PI) / 180)}
            y2={25 + 22 * Math.sin((i * 30 * Math.PI) / 180)}
            stroke="#1a1a1a"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}
        {/* Eyes */}
        <circle cx="18" cy="22" r="5" fill="white" />
        <circle cx="32" cy="22" r="5" fill="white" />
        <circle cx="18" cy="22" r="2.5" fill="black" />
        <circle cx="32" cy="22" r="2.5" fill="black" />
        {/* Tiny stars around it */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <circle
            key={i}
            cx={25 + 30 * Math.cos((angle * Math.PI) / 180)}
            cy={25 + 30 * Math.sin((angle * Math.PI) / 180)}
            r="1"
            fill="#FFD700"
            opacity="0.6"
          />
        ))}
      </svg>
    </motion.div>
  )
}