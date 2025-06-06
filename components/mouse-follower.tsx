"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Primary circle - most responsive */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-white/60 rounded-full pointer-events-none z-50 mix-blend-difference shadow-lg"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          boxShadow: '0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1)',
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      
      {/* Secondary circle with glow */}
      <motion.div
        className="fixed w-16 h-16 border border-white/25 rounded-full pointer-events-none z-40"
        style={{
          left: mousePosition.x - 32,
          top: mousePosition.y - 32,
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)',
          boxShadow: '0 0 30px rgba(255, 255, 255, 0.15)',
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
          mass: 0.8,
        }}
      />

      {/* Outer glow circle */}
      <motion.div
        className="fixed w-24 h-24 rounded-full pointer-events-none z-30 opacity-40"
        style={{
          left: mousePosition.x - 48,
          top: mousePosition.y - 48,
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 40%, transparent 70%)',
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 25,
          mass: 1.2,
        }}
      />
    </>
  )
}
