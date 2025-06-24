// ===== FILE: app/components/GhibliIcons.tsx =====
'use client'

interface GhibliIconProps {
  type: 'experience' | 'project' | 'education' | 'skill' | 'award' | 'plant' | 'star' | 'contact'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function GhibliIcon({ type, size = 'md', className = '' }: GhibliIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const icons = {
    // Calcifer-inspired flame for experience
    experience: (
      <svg viewBox="0 0 48 48" fill="none" className={`${sizeClasses[size]} ${className}`}>
        {/* Flame body */}
        <path d="M24 40 C16 40 10 34 10 26 C10 18 16 8 24 4 C32 8 38 18 38 26 C38 34 32 40 24 40 Z" 
              fill="#FF6B6B" />
        <path d="M24 38 C18 38 12 32 12 26 C12 20 18 12 24 8 C30 12 36 20 36 26 C36 32 30 38 24 38 Z" 
              fill="#FFA502" />
        <path d="M24 35 C19 35 15 31 15 26 C15 21 19 15 24 12 C29 15 33 21 33 26 C33 31 29 35 24 35 Z" 
              fill="#FFD93D" />
        {/* Eyes */}
        <circle cx="18" cy="24" r="3" fill="#000" />
        <circle cx="30" cy="24" r="3" fill="#000" />
        <circle cx="19" cy="23" r="1" fill="#FFF" />
        <circle cx="31" cy="23" r="1" fill="#FFF" />
        {/* Smile */}
        <path d="M18 28 Q24 32 30 28" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),

    // Totoro-inspired for projects
    project: (
      <svg viewBox="0 0 48 48" fill="none" className={`${sizeClasses[size]} ${className}`}>
        {/* Body */}
        <ellipse cx="24" cy="28" rx="18" ry="20" fill="#6B7280" />
        {/* Belly */}
        <ellipse cx="24" cy="30" rx="14" ry="16" fill="#9CA3AF" />
        {/* Chevrons on belly */}
        <path d="M18 26 L24 22 L30 26" stroke="#6B7280" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M18 30 L24 26 L30 30" stroke="#6B7280" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M18 34 L24 30 L30 34" stroke="#6B7280" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Ears */}
        <path d="M10 12 L10 4 L14 8 Z" fill="#6B7280" />
        <path d="M38 12 L38 4 L34 8 Z" fill="#6B7280" />
        {/* Eyes */}
        <circle cx="16" cy="20" r="4" fill="#FFF" />
        <circle cx="32" cy="20" r="4" fill="#FFF" />
        <circle cx="16" cy="20" r="2" fill="#000" />
        <circle cx="32" cy="20" r="2" fill="#000" />
        {/* Nose */}
        <ellipse cx="24" cy="24" rx="3" ry="2" fill="#4B5563" />
      </svg>
    ),

    // Radish spirit for education (from Spirited Away bathhouse)
    education: (
      <svg viewBox="0 0 48 48" fill="none" className={`${sizeClasses[size]} ${className}`}>
        {/* Hat/Leaves */}
        <ellipse cx="24" cy="8" rx="12" ry="6" fill="#10B981" />
        <path d="M20 8 L16 2 M24 8 L24 2 M28 8 L32 2" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
        {/* Body */}
        <ellipse cx="24" cy="28" rx="16" ry="20" fill="#F3F4F6" />
        <ellipse cx="24" cy="28" rx="14" ry="18" fill="#FFF" />
        {/* Cheeks */}
        <circle cx="12" cy="26" r="4" fill="#FFB6C1" opacity="0.5" />
        <circle cx="36" cy="26" r="4" fill="#FFB6C1" opacity="0.5" />
        {/* Eyes */}
        <path d="M16 22 Q18 20 20 22" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M28 22 Q30 20 32 22" stroke="#000" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Mustache */}
        <path d="M18 30 Q24 32 30 30" stroke="#D1D5DB" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),

    // Jiji (Kiki's cat) for skills
    skill: (
      <svg viewBox="0 0 48 48" fill="none" className={`${sizeClasses[size]} ${className}`}>
        {/* Body */}
        <ellipse cx="24" cy="32" rx="12" ry="14" fill="#1F2937" />
        {/* Head */}
        <circle cx="24" cy="18" r="12" fill="#1F2937" />
        {/* Ears */}
        <path d="M12 12 L8 4 L16 8 Z" fill="#1F2937" />
        <path d="M36 12 L40 4 L32 8 Z" fill="#1F2937" />
        {/* Eyes */}
        <ellipse cx="18" cy="18" rx="3" ry="4" fill="#F59E0B" />
        <ellipse cx="30" cy="18" rx="3" ry="4" fill="#F59E0B" />
        <ellipse cx="18" cy="19" rx="1" ry="3" fill="#000" />
        <ellipse cx="30" cy="19" rx="1" ry="3" fill="#000" />
        {/* Nose */}
        <path d="M24 22 L22 24 L26 24 Z" fill="#FFB6C1" />
        {/* Whiskers */}
        <path d="M8 18 L16 18 M8 22 L16 20" stroke="#FFF" strokeWidth="1" opacity="0.6" />
        <path d="M32 18 L40 18 M32 20 L40 22" stroke="#FFF" strokeWidth="1" opacity="0.6" />
      </svg>
    ),

    // Golden seal from Spirited Away for awards
    award: (
      <svg viewBox="0 0 48 48" fill="none" className={`${sizeClasses[size]} ${className}`}>
        {/* Outer circle */}
        <circle cx="24" cy="24" r="20" fill="#F59E0B" />
        <circle cx="24" cy="24" r="18" fill="#FCD34D" />
        {/* Inner design */}
        <circle cx="24" cy="24" r="14" fill="none" stroke="#F59E0B" strokeWidth="2" />
        {/* Center character (simplified) */}
        <rect x="20" y="14" width="8" height="2" fill="#F59E0B" />
        <rect x="22" y="16" width="4" height="8" fill="#F59E0B" />
        <rect x="18" y="20" width="12" height="2" fill="#F59E0B" />
        <rect x="20" y="24" width="8" height="2" fill="#F59E0B" />
        <rect x="22" y="26" width="4" height="6" fill="#F59E0B" />
        {/* Decorative dots */}
        <circle cx="12" cy="12" r="2" fill="#F59E0B" />
        <circle cx="36" cy="12" r="2" fill="#F59E0B" />
        <circle cx="12" cy="36" r="2" fill="#F59E0B" />
        <circle cx="36" cy="36" r="2" fill="#F59E0B" />
      </svg>
    ),

    // Little Totoro leaf for plant/bullet points
    plant: (
      <svg viewBox="0 0 48 48" fill="none" className={`${sizeClasses[size]} ${className}`}>
        {/* Leaf */}
        <path d="M24 8 C16 8 8 16 8 24 C8 32 16 40 24 40 C32 40 40 32 40 24 C40 16 32 8 24 8 Z" 
              fill="#10B981" />
        <path d="M24 12 C18 12 12 18 12 24 C12 30 18 36 24 36 C30 36 36 30 36 24 C36 18 30 12 24 12 Z" 
              fill="#34D399" />
        {/* Vein */}
        <path d="M24 16 L24 32 M18 20 L24 24 L30 20 M18 28 L24 24 L30 28" 
              stroke="#10B981" strokeWidth="1" strokeLinecap="round" />
        {/* Tiny Totoro on leaf */}
        <circle cx="24" cy="24" r="4" fill="#6B7280" />
        <circle cx="22" cy="23" r="1" fill="#FFF" />
        <circle cx="26" cy="23" r="1" fill="#FFF" />
      </svg>
    ),

    // Star from Howl's castle
    star: (
      <svg viewBox="0 0 48 48" fill="none" className={`${sizeClasses[size]} ${className}`}>
        {/* Outer glow */}
        <circle cx="24" cy="24" r="20" fill="#FEF3C7" opacity="0.4" />
        <circle cx="24" cy="24" r="16" fill="#FDE68A" opacity="0.6" />
        {/* Star shape */}
        <path d="M24 8 L28 20 L40 20 L30 28 L34 40 L24 32 L14 40 L18 28 L8 20 L20 20 Z" 
              fill="#F59E0B" />
        <path d="M24 12 L27 19 L34 19 L28 24 L31 31 L24 26 L17 31 L20 24 L14 19 L21 19 Z" 
              fill="#FCD34D" />
        {/* Center sparkle */}
        <circle cx="24" cy="24" r="3" fill="#FFF" opacity="0.8" />
      </svg>
    ),

    // Paper bird from Spirited Away for contact
    contact: (
      <svg viewBox="0 0 48 48" fill="none" className={`${sizeClasses[size]} ${className}`}>
        {/* Paper fold effect */}
        <path d="M8 24 L24 8 L40 24 L24 40 Z" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />
        <path d="M8 24 L24 8 L40 24" fill="#FFF" />
        {/* Bird shape */}
        <path d="M24 8 L16 24 L24 20 L32 24 Z" fill="#E0E7FF" />
        <path d="M24 20 L16 36 L24 28 L32 36 Z" fill="#C7D2FE" />
        {/* Eye */}
        <circle cx="20" cy="16" r="1.5" fill="#1F2937" />
        <circle cx="28" cy="16" r="1.5" fill="#1F2937" />
        {/* Fold lines */}
        <path d="M24 8 L24 40" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    )
  }

  return icons[type] || icons.star
}