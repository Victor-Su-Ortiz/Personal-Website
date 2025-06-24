'use client'

interface PixelIconProps {
  type: 'experience' | 'project' | 'education' | 'skill' | 'award' | 'plant' | 'star' | 'contact'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function PixelIcon({ type, size = 'md', className = '' }: PixelIconProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const pixelArt = {
    experience: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <rect x="4" y="8" width="16" height="12" fill="#3B82F6" />
        <rect x="8" y="4" width="8" height="8" fill="#60A5FA" />
        <rect x="6" y="10" width="4" height="2" fill="#1E293B" />
        <rect x="14" y="10" width="4" height="2" fill="#1E293B" />
        <rect x="10" y="14" width="4" height="4" fill="#F59E0B" />
      </svg>
    ),
    project: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <rect x="2" y="6" width="20" height="14" fill="#8B5CF6" />
        <rect x="4" y="8" width="6" height="4" fill="#C4B5FD" />
        <rect x="12" y="8" width="8" height="2" fill="#C4B5FD" />
        <rect x="12" y="12" width="8" height="2" fill="#C4B5FD" />
        <rect x="12" y="16" width="6" height="2" fill="#C4B5FD" />
      </svg>
    ),
    education: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <rect x="3" y="10" width="18" height="10" fill="#F59E0B" />
        <rect x="8" y="4" width="8" height="8" fill="#FCD34D" />
        <rect x="10" y="6" width="4" height="4" fill="#92400E" />
        <rect x="11" y="14" width="2" height="4" fill="#92400E" />
      </svg>
    ),
    skill: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <rect x="6" y="2" width="12" height="4" fill="#10B981" />
        <rect x="4" y="6" width="16" height="4" fill="#10B981" />
        <rect x="2" y="10" width="20" height="4" fill="#10B981" />
        <rect x="4" y="14" width="16" height="4" fill="#10B981" />
        <rect x="6" y="18" width="12" height="4" fill="#10B981" />
      </svg>
    ),
    award: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <rect x="6" y="2" width="12" height="12" fill="#F59E0B" />
        <rect x="8" y="4" width="8" height="8" fill="#FCD34D" />
        <rect x="10" y="6" width="4" height="4" fill="#FBBF24" />
        <rect x="4" y="14" width="4" height="8" fill="#DC2626" />
        <rect x="16" y="14" width="4" height="8" fill="#DC2626" />
        <rect x="8" y="14" width="8" height="4" fill="#7C2D12" />
      </svg>
    ),
    plant: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <rect x="11" y="12" width="2" height="8" fill="#92400E" />
        <rect x="8" y="4" width="8" height="8" fill="#10B981" />
        <rect x="6" y="6" width="4" height="4" fill="#34D399" />
        <rect x="14" y="6" width="4" height="4" fill="#34D399" />
        <rect x="10" y="18" width="4" height="2" fill="#10B981" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <rect x="11" y="2" width="2" height="6" fill="#F59E0B" />
        <rect x="11" y="16" width="2" height="6" fill="#F59E0B" />
        <rect x="2" y="11" width="6" height="2" fill="#F59E0B" />
        <rect x="16" y="11" width="6" height="2" fill="#F59E0B" />
        <rect x="8" y="8" width="8" height="8" fill="#FCD34D" />
        <rect x="10" y="10" width="4" height="4" fill="#FBBF24" />
      </svg>
    ),
    contact: (
      <svg viewBox="0 0 24 24" fill="none" className={`${sizeClasses[size]} ${className}`}>
        <rect x="2" y="4" width="20" height="16" fill="#3B82F6" />
        <rect x="4" y="6" width="16" height="12" fill="#60A5FA" />
        <rect x="6" y="8" width="12" height="2" fill="#E0E7FF" />
        <rect x="6" y="11" width="8" height="2" fill="#E0E7FF" />
        <rect x="6" y="14" width="10" height="2" fill="#E0E7FF" />
      </svg>
    )
  }

  return pixelArt[type] || pixelArt.star
}