"use client"

import { ReactNode } from 'react'

interface PageBackgroundProps {
  children: ReactNode
  className?: string
}

export function PageBackground({ children, className = "" }: PageBackgroundProps) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* 简洁的背景 - 只保留基本的背景色 */}
      <div className="absolute inset-0 bg-background" />
      
      {/* 内容区域 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
