import type { ReactNode } from 'react'
import styles from './AnimatedBackground.module.css'

interface AnimatedBackgroundProps {
  children: ReactNode
  className?: string
}

export function AnimatedBackground({ children, className = '' }: AnimatedBackgroundProps) {
  return (
    <div className={`${styles.root} ${className}`}>
      {children}
    </div>
  )
}
