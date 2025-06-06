"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseMoving, setIsMouseMoving] = useState(false)

  const roles = [
    "Python Developer",
    "Web Full Stack",
    "Web Scraping Expert", 
    "Automation Expert",
    "AI/ML App Developer"
  ]

  // Enhanced mouse follower effect
  useEffect(() => {
    let moveTimeout: NodeJS.Timeout

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseMoving(true)
      
      clearTimeout(moveTimeout)
      moveTimeout = setTimeout(() => {
        setIsMouseMoving(false)
      }, 150)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(moveTimeout)
    }
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
        transition={{ duration: 0.8 }}      >
        {/* Enhanced Mouse Follower System */}
        {/* Main large follower */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.02) 40%, rgba(255,255,255,0.01) 60%, transparent 80%)',
            filter: 'blur(2px)',
          }}
          animate={{
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
            scale: isMouseMoving ? 1.2 : 1,
            opacity: isMouseMoving ? 0.8 : 0.4,
          }}
          transition={{
            type: "spring",
            stiffness: 20,
            damping: 30,
            mass: 0.5,
          }}
        />
        
        {/* Medium follower */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            width: 150,
            height: 150,
            background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.02) 60%, transparent 80%)',
            filter: 'blur(1px)',
          }}
          animate={{
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            scale: isMouseMoving ? 1.1 : 0.9,
          }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            mass: 0.3,
          }}
        />
        
        {/* Small precise follower */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            width: 60,
            height: 60,
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)',
          }}
          animate={{
            x: mousePosition.x - 30,
            y: mousePosition.y - 30,
            scale: isMouseMoving ? 1.3 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.1,
          }}
        />
        
        {/* Trailing particles */}
        <motion.div
          className="absolute pointer-events-none z-0"
          style={{
            width: 20,
            height: 20,
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%)',
            borderRadius: '50%',
          }}
          animate={{
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            scale: isMouseMoving ? [1, 1.5, 1] : 1,
            opacity: isMouseMoving ? [0.8, 1, 0.8] : 0.6,
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.05,
            scale: { duration: 0.3, repeat: isMouseMoving ? Infinity : 0 },
            opacity: { duration: 0.3, repeat: isMouseMoving ? Infinity : 0 },
          }}
        />

        {/* Animated Background Elements for completion state */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/3 w-40 h-40 bg-gradient-to-br from-white/3 to-gray-400/3 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
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
        ><motion.div
            className="w-20 h-20 mx-auto mb-4 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 via-gray-300/10 to-gray-400/10 rounded-3xl blur-xl"></div>
            
            {/* Main container */}
            <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-2xl">
              {/* Inner white square */}
              <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg"></div>
            </div>
          </motion.div>        </motion.div>
      </motion.div>
    )
  }
  return (    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] flex items-center justify-center z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}    >
      {/* Enhanced Mouse Follower System */}
      {/* Main large atmospheric follower */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 15%, rgba(255,255,255,0.02) 30%, rgba(255,255,255,0.01) 50%, transparent 70%)',
          filter: 'blur(3px)',
        }}
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
          scale: isMouseMoving ? 1.3 : 1,
          opacity: isMouseMoving ? 0.9 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 15,
          damping: 40,
          mass: 0.8,
        }}
      />

      {/* Secondary large follower */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          width: 250,
          height: 250,
          background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.02) 50%, transparent 75%)',
          filter: 'blur(2px)',
        }}
        animate={{
          x: mousePosition.x - 125,
          y: mousePosition.y - 125,
          scale: isMouseMoving ? 1.2 : 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 25,
          damping: 30,
          mass: 0.5,
        }}
      />

      {/* Medium follower */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          width: 120,
          height: 120,
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.03) 60%, transparent 80%)',
          filter: 'blur(1px)',
        }}
        animate={{
          x: mousePosition.x - 60,
          y: mousePosition.y - 60,
          scale: isMouseMoving ? 1.4 : 1,
          rotate: isMouseMoving ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
          mass: 0.2,
          rotate: { duration: 0.8 }
        }}
      />

      {/* Core follower */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          width: 50,
          height: 50,
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.05) 70%, transparent 90%)',
        }}
        animate={{
          x: mousePosition.x - 25,
          y: mousePosition.y - 25,
          scale: isMouseMoving ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* Precise center dot */}
      <motion.div
        className="absolute pointer-events-none z-0"
        style={{
          width: 16,
          height: 16,
          background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.2) 50%, transparent 80%)',
          borderRadius: '50%',
          boxShadow: '0 0 20px rgba(255,255,255,0.3)',
        }}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isMouseMoving ? [1, 1.8, 1] : 1,
          opacity: isMouseMoving ? [0.8, 1, 0.8] : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
          mass: 0.05,
          scale: { 
            duration: 0.4, 
            repeat: isMouseMoving ? Infinity : 0,
            ease: "easeInOut"
          },
          opacity: { 
            duration: 0.4, 
            repeat: isMouseMoving ? Infinity : 0,
            ease: "easeInOut"
          },
        }}
      />

      {/* Trailing particles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-0"
          style={{
            width: 8 - i * 2,
            height: 8 - i * 2,
            background: `rgba(255,255,255,${0.3 - i * 0.1})`,
            borderRadius: '50%',
          }}
          animate={{
            x: mousePosition.x - (4 - i),
            y: mousePosition.y - (4 - i),
            scale: isMouseMoving ? 1.5 : 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 80 - i * 20,
            damping: 25 + i * 5,
            mass: 0.1 + i * 0.05,
          }}
        />
      ))}

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-white/5 to-gray-400/5 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-gray-300/5 to-white/5 rounded-full blur-xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
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
          className="absolute bottom-1/4 left-1/2 w-20 h-20 bg-gradient-to-br from-gray-400/3 to-gray-200/3 rounded-full blur-xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
        
        {/* Grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
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

      <div className="text-center max-w-4xl px-4 relative z-10">{/* Logo */}
        <motion.div
          className="w-20 h-20 mx-auto mb-8 relative"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-400/10 via-gray-300/10 to-gray-400/10 rounded-3xl blur-xl animate-pulse"></div>
          
          {/* Main container */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-3xl flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-2xl">
            {/* Inner white square */}
            <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg"></div>
          </div>
        </motion.div>        {/* Main Text */}
        <motion.div
          className="text-white font-serif text-2xl md:text-4xl lg:text-5xl font-light leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span>I'm a </span>
          <div className="inline-block min-w-[300px] md:min-w-[400px] lg:min-w-[500px] text-left">
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
        </motion.div>

        {/* Progress Dots */}
        <motion.div
          className="flex justify-center space-x-2 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {roles.map((_, index) => (
            <motion.div
              key={index}              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= currentIndex 
                  ? "bg-gradient-to-r from-gray-400 to-gray-200" 
                  : "bg-white/20"
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1 }}
            />
          ))}
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-white/60 text-sm md:text-base font-light mt-8 max-w-md mx-auto"
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
