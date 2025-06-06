"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Loader from "@/components/loader"
import MouseFollower from "@/components/mouse-follower"

// Project type definition
interface Project {
  name: string;
  tech: string;
  description: string;
  image: string;
}

// Popup Component (unchanged)
function ProjectPopup({ project, onClose }: { project: Project | null; onClose: () => void }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25, duration: 0.4 }}
        className="bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C] text-white rounded-3xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 p-2 rounded-full hover:bg-white/10"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative w-full h-56 md:h-72 mb-6 rounded-2xl overflow-hidden">
          <Image src={project.image} alt={project.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <h3 className="font-serif text-2xl md:text-3xl font-medium mb-2 text-white">
          {project.name}
        </h3>
        <p className="text-sm mb-4 text-gray-300 font-medium">{project.tech}</p>
        <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-8 font-light max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
          {project.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-100 to-gray-300 text-gray-900 px-6 py-3 rounded-2xl text-sm hover:from-gray-200 hover:to-gray-400 transition-all duration-300 font-medium shadow-lg flex-1 text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Project
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-500 text-gray-300 px-6 py-3 rounded-2xl text-sm hover:bg-white/5 hover:border-gray-400 transition-all duration-300 font-medium flex-1 text-center"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Code
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupProject, setPopupProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  // Fix hydration by ensuring component only renders after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const allProjects = [
    {
      name: "E-Commerce Platform",
      tech: "React, Node.js, MongoDB",
      description: "Full-stack e-commerce solution with payment integration, advanced product filtering, user authentication, and an admin dashboard for managing products, orders, and users. Features a responsive design ensuring a seamless experience across all devices.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Task Management App",
      tech: "Next.js, TypeScript, Prisma, Tailwind CSS",
      description: "A collaborative project management tool allowing users to create, assign, and track tasks in real-time. Includes features like drag-and-drop boards, deadline reminders, and team collaboration spaces. Built with a type-safe backend and a modern UI.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "AI Chat Interface",
      tech: "React, Python, OpenAI API, Flask",
      description: "An intelligent chatbot application leveraging OpenAI's API for natural language processing and generation. Provides a conversational interface for users to interact with an AI, capable of answering questions, generating text, and more. Includes a clean, user-friendly UI.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Portfolio Website",
      tech: "Next.js, Tailwind CSS, Framer Motion",
      description: "A responsive personal portfolio website designed to showcase development projects, skills, and experience. Features smooth animations and a clean, modern aesthetic. (This is the site you are currently viewing).",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]

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
    setShowLoader(false);
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

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        {showLoader && (
          <Loader onComplete={handleLoaderComplete} />
        )}
      </AnimatePresence>
      
      {!showLoader && (
        <div className="min-h-screen bg-[#0A0A0A] text-[#2C2C2C] p-4 md:p-6 lg:p-8 flex justify-center items-center relative overflow-hidden">
          <MouseFollower />
          
          <motion.div
            className="max-w-6xl w-full"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
        {/* Header */}
        <motion.header
          className="flex flex-col sm:flex-row justify-between items-center p-6 md:p-8 mb-8 text-white gap-4 bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-3xl border border-white/10 backdrop-blur-sm"
          variants={itemVariants}
        >
          <motion.div
            className="text-xl md:text-2xl font-light tracking-wide font-serif"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Fahad Ali
          </motion.div>
          <nav className="flex gap-8 md:gap-12">
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
                  className="text-sm md:text-base font-light tracking-[2px] hover:text-white/60 transition-all duration-300 relative px-4 py-2 group uppercase cursor-pointer"
                >
                  {item.name}
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.header>

        {/* Main Grid Layout */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* --- LEFT COLUMN (HERO, INTRO, CONTACT) --- */}
          <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
            {/* First Row: Hero Text + Portrait */}
            <div className="flex flex-col md:grid md:grid-cols-8 gap-6 md:gap-8">
              {/* Hero Text Panel */}
              <motion.div
                className="md:col-span-5 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] border border-gray-100 shadow-2xl"
                variants={itemVariants}
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 mb-8 md:mb-12 opacity-60"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 0.6 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-600 rounded-2xl flex items-center justify-center">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-lg"></div>
                  </div>
                </motion.div>
                <motion.h1
                  className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-light text-gray-900"
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
                className="md:col-span-3 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl overflow-hidden p-0 min-h-[20rem] md:min-h-[24rem] lg:min-h-[28rem] order-first md:order-last border border-white/10"
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
            </div>

            {/* Second Row: Intro + Contact */}
            <div className="flex flex-col md:grid md:grid-cols-7 gap-6 md:gap-8">
              {/* Intro Panel */}
              <motion.div
                className="md:col-span-4 bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-xl"
                variants={itemVariants}
              >
                <motion.div
                  className="w-8 h-8 md:w-10 md:h-10 mb-6 md:mb-8 opacity-50"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-500 rounded-xl"></div>
                </motion.div>
                <motion.p
                  className="text-base md:text-lg leading-relaxed font-light text-gray-700 max-w-md"
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
                className="md:col-span-3 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between border border-white/10 cursor-pointer relative overflow-hidden group"
                variants={itemVariants}
                onClick={() => window.location.href = '/contact'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Top section with tagline and arrow */}
                <div className="flex justify-between items-start">
                  <motion.p
                    className="text-sm md:text-base opacity-70 font-light py-2 px-4 bg-white/5 rounded-lg"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 0.7, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Let's build something amazing
                  </motion.p>
                  
                  {/* Arrow in top right */}
                  <motion.div
                    className="ml-10 p-5 bg-white/10 rounded-full opacity-70 group-hover:opacity-100 transition-all duration-300"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 0.7, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </motion.div>
                </div>

                {/* Bottom section with Get in touch */}
                <div className="flex-1 flex items-end">
                  <motion.div
                    className="font-serif text-3xl md:text-4xl leading-tight font-light"
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
          </div>

          {/* --- RIGHT COLUMN (PROJECTS + SOCIALS) --- MODIFIED SECTION --- */}
          <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
            <motion.div
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 md:p-8 flex flex-col flex-grow border border-gray-100 shadow-xl"
              variants={itemVariants}
            >
              {/* Dynamic Navigation with Image Positioning */}
              <div className="flex flex-col gap-3 mb-6">
                {displayProjects.map((project, index) => (
                  <div key={project.name} className="w-full">
                    {/* Project Navigation Item */}
                    <motion.div
                      className={`w-full px-4 py-3 cursor-pointer transition-all duration-300 relative rounded-xl ${
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
                        <div className="font-serif text-sm md:text-base font-medium">{project.name.split(" ")[0]}</div>
                        <div className="text-xs opacity-70 mt-0.5">{project.tech.split(",")[0]}</div>
                      </div>
                    </motion.div>

                    {/* Dynamic Image Positioning - Show image after selected project */}
                    {selectedProject === index && currentProject && (
                      <motion.div
                        key={`image-${selectedProject}`} // Key for AnimatePresence
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="mt-4 mb-2 relative rounded-2xl overflow-hidden h-48 md:h-56 lg:h-64"
                      >
                        <Image
                          src={currentProject.image || "/placeholder.svg"}
                          alt={currentProject.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                          <div className="self-end p-3">
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation(); 
                                openPopup(currentProject);
                              }}
                              className="p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors duration-300 pointer-events-auto"
                              aria-label="Open project details"
                              whileHover={{ scale: 1.1, rotate: 3 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                              </svg>
                            </motion.button>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                            <h4 className="font-serif text-base md:text-lg font-medium text-white">
                              {currentProject.name} 
                            </h4>
                            <p className="text-xs md:text-sm text-gray-200 opacity-90 line-clamp-2">
                              {currentProject.tech} 
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Separator Line - only show if not the last item */}
                    {index < displayProjects.length - 1 && (
                      <motion.div
                        className={`mt-3 h-px transition-all duration-300 ${
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
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-6 md:p-8 flex-shrink-0 border border-white/10"
              variants={itemVariants}
            >
              <nav className="flex gap-4 md:gap-6 justify-center">
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
                      className="text-white text-xs tracking-[2px] font-medium hover:text-white/60 transition-all duration-300 relative py-2 group cursor-pointer"
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