"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Loader from "@/components/loader"
import MouseFollower from "@/components/mouse-follower"
import { useIsMobile } from "@/components/ui/use-mobile"
import { useLoader } from "@/contexts/loader-context"

// Project type definition
interface Project {
  name: string;
  tech: string;
  description: string;
  image: string;
}

// Popup Component - Mobile Optimized
function ProjectPopup({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.4 }}
        className="bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-2xl w-full mx-2 sm:mx-0 relative shadow-2xl border border-white/10 max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors z-10 p-1.5 sm:p-2 rounded-full hover:bg-white/10 touch-manipulation"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative w-full h-48 sm:h-56 md:h-72 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden">
          <Image src={project.image} alt={project.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-medium mb-2 text-white">
          {project.name}
        </h3>
        <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-gray-300 font-medium">{project.tech}</p>
        <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-6 sm:mb-8 font-light max-h-32 sm:max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
          {project.description}
        </p>

        <div className="flex flex-col gap-3">
          <motion.a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 px-6 py-3 sm:py-3 rounded-xl sm:rounded-2xl text-sm hover:from-gray-200 hover:to-gray-400 transition-all duration-300 font-medium shadow-lg text-center touch-manipulation"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            Get this project
          </motion.a>
          {/* <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 text-gray-300 px-6 py-3 rounded-2xl text-sm hover:bg-white/5 hover:border-gray-400 transition-all duration-300 font-medium flex-1 text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Code
          </motion.a> */}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupProject, setPopupProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { shouldShowLoader, setHasSeenLoader } = useLoader();

  // Fix hydration by ensuring component only renders after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const allProjects = [
  {
    name: "Academia.ai",
    tech: "Next.js 15, Node.js, Python, Flask, Gemini API, WebRTC, Socket.io, Supabase, TailwindCSS",
    description:
      "AI-powered education platform with live classes, chatbot, automated exams, and advanced course management.",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Indeed Easy Apply Bot",
    tech: "Python, Selenium, Web Automation",
    description:
      "Automated bot that applies to jobs on Indeed using Easy Apply. Filters jobs, fills forms, and mimics human behavior.",
    image:
      "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "RAG-Based Chatbot",
    tech: "Python, LangChain, OpenAI API, Vector DB, FastAPI",
    description:
      "Contextual chatbot using Retrieval-Augmented Generation. Supports semantic search and dynamic document ingestion.",
    image:
      "/projects/RAG.png",
  },
  {
    name: "Rii – AI Desktop Buddy",
    tech: "Python, Tkinter, SpeechRecognition, OpenAI API",
    description:
      "Interactive desktop assistant with voice and text commands, powered by OpenAI. Executes AI-generated scripts.",
    image:
      "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

  // const displayProjects = allProjects.filter(project => project.name !== "Portfolio Website");
  const displayProjects = allProjects

  useEffect(() => {
    if (displayProjects.length === 0) return;

    const interval = setInterval(() => {
      if (!isPopupOpen) {
         setSelectedProject((prev) => (prev + 1) % displayProjects.length)
      }
    }, 4000)

    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => {
      clearInterval(interval)
      clearTimeout(timer)
    }
  }, [displayProjects.length, isPopupOpen])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }
  
  const currentProject = displayProjects.length > 0 ? displayProjects[selectedProject] : null;

  const openPopup = (project: Project) => {
    setPopupProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => {
      setPopupProject(null);
    }, 300);
  };
  const handleLoaderComplete = () => {
    setHasSeenLoader(true);
  };
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isPopupOpen]);
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }
  return (
    <>
      <AnimatePresence>
        {shouldShowLoader && (
          <Loader onComplete={handleLoaderComplete} />        )}
      </AnimatePresence>
        {!shouldShowLoader && (
        <div className="min-h-screen bg-[#0A0A0A] text-[#2C2C2C] p-3 sm:p-4 md:p-6 lg:p-8 flex justify-center items-start sm:items-center relative overflow-hidden">
          {/* Only show MouseFollower on desktop devices */}
          {!isMobile && <MouseFollower />}
          
          <motion.div
            className="max-w-7xl w-full"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >        {/* Header */}
        <motion.header
          className="relative bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-sm mb-4 sm:mb-6 md:mb-8"
          variants={itemVariants}
        >
          {/* Desktop and larger mobile layout */}
          <div className="flex justify-between items-center p-3 sm:p-4 md:p-6 lg:p-8 text-white">
            <motion.div
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide font-serif z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Fahad Ali
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden sm:flex gap-4 md:gap-6 lg:gap-8 xl:gap-12">
              {[
                { name: "ABOUT", href: "/about" },
                { name: "PROJECTS", href: "/projects" },
                { name: "CONTACT", href: "/contact" },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm md:text-base font-light tracking-[1px] md:tracking-[2px] hover:text-white/60 transition-all duration-300 relative px-2 md:px-3 lg:px-4 py-2 group uppercase cursor-pointer"
                  >
                    {item.name}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="sm:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              aria-label="Toggle mobile menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {!isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.nav
                className="sm:hidden absolute top-full left-0 right-0 mt-2 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl border border-white/10 backdrop-blur-sm z-50"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="p-4 space-y-2">
                  {[
                    { name: "ABOUT", href: "/about" },
                    { name: "PROJECTS", href: "/projects" },
                    { name: "CONTACT", href: "/contact" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="block w-full text-left px-4 py-3 text-white text-sm font-light tracking-[1px] uppercase hover:bg-white/10 rounded-lg transition-all duration-200 touch-manipulation"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>{/* Main Grid Layout */}
        <main className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {/* --- LEFT COLUMN (HERO, INTRO, CONTACT) --- */}
          <div className="xl:col-span-8 flex flex-col gap-4 sm:gap-6 md:gap-8">
            {/* First Row: Hero Text + Portrait */}
            <div className="flex flex-col lg:grid lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8">
              {/* Hero Text Panel */}
              <motion.div
                className="lg:col-span-5 bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 min-h-[18rem] sm:min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] border border-gray-100 shadow-2xl"
                variants={itemVariants}
              >
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-6 sm:mb-8 md:mb-12 opacity-60"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 0.6 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white rounded-md sm:rounded-lg"></div>
                  </div>
                </motion.div>
                <motion.h1
                  className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-light text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Crafting digital experiences through{" "}
                  <span className="italic font-normal bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    elegant code
                  </span>
                </motion.h1>
              </motion.div>

              {/* Portrait Photo Panel */}
              <motion.div
                className="lg:col-span-3 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl sm:rounded-3xl overflow-hidden p-0 min-h-[18rem] sm:min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] order-first lg:order-last border border-white/10"
                variants={itemVariants}
              >
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="w-full h-full relative"
                >
                  <Image
                    // src="/placeholder.svg?height=600&width=400" 
                    src="profile1.png"
                    alt="Developer Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </motion.div>
              </motion.div>
            </div>            {/* Second Row: Intro + Contact */}
            <div className="flex flex-col lg:grid lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8">
              {/* Intro Panel */}
              <motion.div
                className="lg:col-span-4 bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-xl"
                variants={itemVariants}
              >
                <motion.div
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-4 sm:mb-6 md:mb-8 opacity-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-500 rounded-lg sm:rounded-xl"></div>
                </motion.div>
                <motion.p
                  className="text-sm sm:text-base md:text-lg leading-relaxed font-light text-gray-700 max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  I'm a passionate full-stack developer who specializes in creating modern web applications. With
                  expertise in React, Node.js, and cloud technologies, I turn ideas into scalable digital solutions.
                </motion.p>
              </motion.div>

              {/* Contact Panel */}
              <motion.div
                className="lg:col-span-3 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between border border-white/10 cursor-pointer relative overflow-hidden group touch-manipulation"
                variants={itemVariants}
                onClick={() => window.location.href = '/contact'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Top section with tagline and arrow */}
                <div className="flex justify-between items-start">
                  <motion.p
                    className="text-xs sm:text-sm md:text-base opacity-70 font-light py-2 px-3 sm:px-4 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 0.7, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Let's build something amazing
                  </motion.p>
                  
                  {/* Arrow in top right */}
                  <motion.div
                    className="ml-6 sm:ml-10 p-3 sm:p-5 bg-white/10 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 0.7, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </motion.div>
                </div>

                {/* Bottom section with Get in touch */}
                <div className="flex-1 flex items-end">
                  <motion.div
                    className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight font-light"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    Get in
                    <br />
                    <em className="font-normal">touch</em>
                  </motion.div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>

            </div>
          </div>          {/* --- RIGHT COLUMN (PROJECTS + SOCIALS) --- MOBILE OPTIMIZED --- */}
          <div className="xl:col-span-4 flex flex-col gap-4 sm:gap-6 md:gap-8">            <motion.div
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col flex-grow border border-gray-100 shadow-xl"
              variants={itemVariants}
            >
              {/* Dynamic Navigation with Image Positioning */}
              <div className="flex flex-col gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {displayProjects.map((project, index) => (
                  <div key={project.name} className="w-full">
                    {/* Project Navigation Item */}                    <motion.div
                      className={`w-full px-2.5 sm:px-3 py-2 sm:py-2.5 cursor-pointer transition-all duration-300 relative rounded-lg sm:rounded-xl touch-manipulation ${
                        selectedProject === index
                          ? "bg-gradient-to-r from-gray-900 to-gray-700 text-white shadow-lg"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                      onClick={() => setSelectedProject(index)}
                      initial={{ opacity: 0, x: -20 }} 
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }} 
                      whileHover={{ scale: selectedProject === index ? 1 : 1.01 }}
                    >
                      <div className="text-left"> 
                        <div className="font-serif text-sm sm:text-sm md:text-base font-medium">{project.name.split(" ")[0]}</div>
                        <div className="text-xs opacity-70 mt-0.5">{project.tech.split(",")[0]}</div>
                      </div>
                    </motion.div>

                    {/* Dynamic Image Positioning - Show image after selected project */}
                    {selectedProject === index && currentProject && (                      <motion.div
                        key={`image-${selectedProject}`} // Key for AnimatePresence
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-2 sm:mt-3 mb-1 sm:mb-2 relative rounded-lg sm:rounded-xl overflow-hidden h-32 sm:h-36 md:h-40 lg:h-44"
                      >
                        <Image
                          src={currentProject.image || "/placeholder.svg"}
                          alt={currentProject.name}
                          fill
                          className="object-cover"
                        />                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                          <div className="self-end p-1.5 sm:p-2">
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation(); 
                                openPopup(currentProject);
                              }}
                              className="p-1 sm:p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors duration-300 pointer-events-auto touch-manipulation"
                              aria-label="Open project details"
                              whileHover={{ scale: 1.1, rotate: 3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                              </svg>
                            </motion.button>
                          </div>
                          
                          <div className="p-2 sm:p-3 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                            <h4 className="font-serif text-xs sm:text-sm md:text-base font-medium text-white">
                              {currentProject.name} 
                            </h4>
                            <p className="text-xs text-gray-200 opacity-90 line-clamp-2">
                              {currentProject.tech} 
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Separator Line - only show if not the last item */}                    {index < displayProjects.length - 1 && (
                      <motion.div
                        className={`mt-1.5 sm:mt-2 h-px transition-all duration-300 ${
                          selectedProject === index || selectedProject === index + 1
                            ? "bg-transparent"
                            : "bg-gray-200"
                        }`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>            <motion.div
              className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 flex-shrink-0 border border-white/10"
              variants={itemVariants}
            >
              <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center">
                {[
                  { name: "GITHUB", href: "https://github.com/FahadAliOfficial" },
                  { name: "LINKEDIN", href: "https://linkedin.com/in/fahaddali" },
                  { name: "TWITTER", href: "https://twitter.com/_fahaddali" },
                  { name: "DEV.TO", href: "https://dev.to/fahadaliofficial" },
                ].map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                  >
                    <motion.a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-xs tracking-[1px] sm:tracking-[2px] font-medium hover:text-white/60 transition-all duration-300 relative py-2 group cursor-pointer touch-manipulation"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      {social.name}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </motion.a>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>
        </main>
      </motion.div>

      {/* Popup Rendering */}
      <AnimatePresence>
        {isPopupOpen && popupProject && (
          <ProjectPopup project={popupProject} onClose={closePopup} />
        )}
      </AnimatePresence>
        </div>
      )}
    </>
  )
}