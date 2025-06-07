"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const roles = [
    "Python Developer",
    "Web Full Stack",
    "Web Scraping Expert", 
    "Automation Expert",
    "AI/ML App Developer"
  ]

  // Mouse follower effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < roles.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setTimeout(() => {
            setIsComplete(true)
            setTimeout(onComplete, 800)
          }, 2000)
          return prev
        }
      })
    }, 1200)

    return () => clearInterval(interval)
  }, [onComplete, roles.length])

  if (isComplete) {
    return (      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center z-50 overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}      >        {/* Mouse Follower */}
        <motion.div
          className="absolute w-32 h-32 sm:w-64 sm:h-64 pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 40%, transparent 70%)',
          }}
          animate={{
            x: mousePosition.x - (typeof window !== 'undefined' && window.innerWidth < 640 ? 64 : 128),
            y: mousePosition.y - (typeof window !== 'undefined' && window.innerWidth < 640 ? 64 : 128),
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 15,
            mass: 0.1,
          }}
        />{/* Animated Background Elements for completion state */}
        <div className="absolute inset-0">          {/* Optimized animated dots for completion - reduced from 50 to 25 */}
          {Array.from({ length: 25 }, (_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 3;
            const duration = 2 + Math.random() * 1.5; // Reduced duration
            
            return (
              <motion.div
                key={`completion-dot-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2], // Reduced max opacity
                  scale: [1, 1.5, 1], // Reduced scale
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
            <motion.div
            className="absolute top-1/3 left-1/3 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-white/3 to-gray-400/3 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <motion.div
          className="text-center relative z-10"
          exit={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >          <motion.div
            className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 via-gray-300/10 to-gray-400/10 rounded-2xl sm:rounded-3xl blur-xl"></div>
            
            {/* Main container */}
            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl sm:rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-2xl">
              {/* Inner white square */}
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl shadow-lg"></div>
            </div>
          </motion.div></motion.div>
      </motion.div>
    )
  }

  return (    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}    >      {/* Mouse Follower */}
      <motion.div
        className="absolute w-64 h-64 sm:w-96 sm:h-96 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 30%, rgba(255,255,255,0.005) 50%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - (typeof window !== 'undefined' && window.innerWidth < 640 ? 128 : 192),
          y: mousePosition.y - (typeof window !== 'undefined' && window.innerWidth < 640 ? 128 : 192),
        }}
        transition={{
          type: "spring",
          stiffness: 30,
          damping: 20,
          mass: 0.2,
        }}
      />

      {/* Secondary smaller follower for layered effect */}
      <motion.div
        className="absolute w-20 h-20 sm:w-32 sm:h-32 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)',
        }}
        animate={{
          x: mousePosition.x - (typeof window !== 'undefined' && window.innerWidth < 640 ? 40 : 64),
          y: mousePosition.y - (typeof window !== 'undefined' && window.innerWidth < 640 ? 40 : 64),
        }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 25,
          mass: 0.1,
        }}
      />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">        {/* Simplified floating particles - reduced from 15 to 8 */}
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
          {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-white/5 to-gray-400/5 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-300/5 to-white/5 rounded-full blur-xl"
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-400/3 to-gray-200/3 rounded-full blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
          {/* Animated Grid Dots */}
        <div className="absolute inset-0">          {/* Optimized grid dots - reduced from 200 to 60 */}
          {Array.from({ length: 60 }, (_, i) => {
            const x = (i % 12) * 8; // 12 dots per row, 8% spacing
            const y = Math.floor(i / 12) * 10; // 5 rows, 10% spacing
            const delay = Math.random() * 8; // Random delay between 0-8 seconds
            const duration = 3 + Math.random() * 2; // Random duration between 3-5 seconds
            const isBright = Math.random() > 0.85; // 15% chance for bright dots
            
            return (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y + 10}%`,
                }}
                animate={{
                  opacity: isBright ? [0.1, 0.9, 0.1] : [0.1, 0.4, 0.1],
                  scale: isBright ? [1, 1.8, 1] : [1, 1.2, 1],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>
        
        {/* Moving Grid pattern overlay */}
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="text-center max-w-4xl px-4 relative z-10">        {/* Logo */}
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 via-gray-300/10 to-gray-400/10 rounded-2xl sm:rounded-3xl blur-xl animate-pulse"></div>
          
          {/* Main container */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl sm:rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-2xl">
            {/* Inner white square */}
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl shadow-lg"></div>
          </div>
        </motion.div>{/* Main Text */}
        <motion.div
          className="text-white font-serif text-lg sm:text-2xl md:text-4xl lg:text-5xl font-light leading-tight px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span>I'm a </span>
          <div className="inline-block min-w-[200px] sm:min-w-[300px] md:min-w-[400px] lg:min-w-[500px] text-left">
            <AnimatePresence mode="wait">              <motion.span
                key={currentIndex}
                className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent font-medium"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
              >
                {roles[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>        {/* Progress Dots */}
        <motion.div
          className="flex justify-center space-x-1 sm:space-x-2 mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {roles.map((_, index) => (
            <motion.div
              key={index}              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                index <= currentIndex 
                  ? "bg-gradient-to-r from-gray-400 to-gray-200" 
                  : "bg-white/20"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            />
          ))}
        </motion.div>        {/* Subtitle */}
        <motion.p
          className="text-white/60 text-xs sm:text-sm md:text-base font-light mt-6 sm:mt-8 max-w-xs sm:max-w-md mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Building digital solutions with passion and precision
        </motion.p>
      </div>
    </motion.div>
  )
}
