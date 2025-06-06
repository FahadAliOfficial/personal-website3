"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Users } from "lucide-react"
import MouseFollower from "@/components/mouse-follower"

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState(0)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "AI/ML" },
  ]

  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      category: "web",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      description:
        "A full-stack e-commerce solution with payment integration, product management, and user authentication.",
      longDescription:
        "Built a comprehensive e-commerce platform from scratch, featuring a modern React frontend with server-side rendering, robust Node.js backend, and secure payment processing. The platform handles thousands of transactions daily and includes advanced features like inventory management, analytics dashboard, and multi-vendor support.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      status: "Live",
      year: "2023",
      team: "4 developers",
      features: [
        "Secure payment processing with Stripe integration",
        "Real-time inventory management system",
        "Advanced search and filtering capabilities",
        "Mobile-responsive design with PWA features",
        "Admin dashboard with analytics and reporting",
        "Multi-vendor marketplace functionality",
      ],
      metrics: {
        users: "10K+",
        transactions: "$500K+",
        uptime: "99.9%",
      },
    },
    {
      id: 2,
      name: "Task Management App",
      category: "web",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      description: "Collaborative project management with real-time updates, task assignment, and progress tracking.",
      longDescription:
        "Developed a sophisticated project management tool that enables teams to collaborate effectively. Features include real-time updates, drag-and-drop task management, time tracking, and comprehensive reporting. Built with modern technologies for optimal performance and scalability.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      status: "Live",
      year: "2023",
      team: "3 developers",
      features: [
        "Real-time collaboration with WebSocket integration",
        "Drag-and-drop task management interface",
        "Time tracking and productivity analytics",
        "Team communication and file sharing",
        "Custom workflow automation",
        "Integration with popular tools (Slack, GitHub)",
      ],
      metrics: {
        users: "5K+",
        tasks: "100K+",
        teams: "500+",
      },
    },
    {
      id: 3,
      name: "AI Chat Interface",
      category: "ai",
      tech: ["React", "Python", "OpenAI API", "FastAPI"],
      description: "Intelligent chatbot with natural language processing capabilities and context awareness.",
      longDescription:
        "Created an advanced AI-powered chat interface that leverages OpenAI's GPT models for natural language understanding. The system includes context management, conversation history, and custom training capabilities for domain-specific knowledge.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      status: "Beta",
      year: "2024",
      team: "2 developers",
      features: [
        "Natural language processing with GPT-4 integration",
        "Context-aware conversation management",
        "Custom knowledge base training",
        "Multi-language support",
        "Voice input and output capabilities",
        "Analytics and conversation insights",
      ],
      metrics: {
        conversations: "50K+",
        accuracy: "95%",
        languages: "12",
      },
    },
    {
      id: 4,
      name: "Mobile Fitness App",
      category: "mobile",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      description: "Cross-platform fitness tracking app with workout plans, progress monitoring, and social features.",
      longDescription:
        "Developed a comprehensive fitness application that helps users track workouts, monitor progress, and stay motivated. Features include custom workout plans, social challenges, nutrition tracking, and integration with wearable devices.",
      image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      status: "Live",
      year: "2023",
      team: "5 developers",
      features: [
        "Custom workout plan generation",
        "Progress tracking with detailed analytics",
        "Social challenges and leaderboards",
        "Nutrition tracking and meal planning",
        "Wearable device integration",
        "Offline mode for workouts",
      ],
      metrics: {
        downloads: "25K+",
        workouts: "200K+",
        retention: "78%",
      },
    },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

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

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <MouseFollower />
      
      {/* Navigation */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="inline-flex items-center text-white hover:text-white/60 transition-colors">
              <ArrowLeft className="mr-3 h-5 w-5" />
              <span className="font-light">Back to Home</span>
            </Link>
            <div className="font-serif text-xl font-light">Projects</div>
          </div>
        </div>
      </motion.div>

      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                Featured <span className="italic">Projects</span>
              </h1>
              <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                A collection of projects that showcase my skills in full-stack development, AI integration, and modern
                web technologies.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div variants={itemVariants} className="flex justify-center mb-12">
              <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-2 border border-white/10">
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? "bg-white text-gray-900"
                          : "text-white/60 hover:text-white hover:bg-white/10"
                      }`}
                      onClick={() => setSelectedCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {category.label}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Project List */}
              <motion.div variants={itemVariants} className="lg:col-span-4">
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-6 border border-white/10 sticky top-24">
                  <h2 className="font-serif text-xl mb-6 font-light">All Projects</h2>
                  <div className="space-y-3">
                    <AnimatePresence>
                      {filteredProjects.map((project, index) => (
                        <motion.button
                          key={project.id}
                          className={`w-full text-left p-4 rounded-2xl transition-all ${
                            selectedProject === index ? "bg-white text-gray-900" : "hover:bg-white/10 text-white/80"
                          }`}
                          onClick={() => setSelectedProject(index)}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-serif font-medium">{project.name}</h3>
                            <div
                              className={`w-2 h-2 rounded-full ${
                                project.status === "Live" ? "bg-green-400" : "bg-yellow-400"
                              }`}
                            ></div>
                          </div>
                          <p className="text-xs opacity-60">{project.tech.slice(0, 2).join(", ")}</p>
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div variants={itemVariants} className="lg:col-span-8">
                <AnimatePresence mode="wait">
                  {filteredProjects[selectedProject] && (
                    <motion.div
                      key={filteredProjects[selectedProject].id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-2xl"
                    >
                      {/* Project Image */}
                      <div className="relative h-64 md:h-80">
                        <Image
                          src={filteredProjects[selectedProject].image || "/placeholder.svg"}
                          alt={filteredProjects[selectedProject].name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8">
                          <div className="flex items-center space-x-4 mb-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                filteredProjects[selectedProject].status === "Live"
                                  ? "bg-green-500 text-white"
                                  : "bg-yellow-500 text-black"
                              }`}
                            >
                              {filteredProjects[selectedProject].status}
                            </span>
                            <span className="text-white/80 text-sm">{filteredProjects[selectedProject].year}</span>
                          </div>
                          <h1 className="font-serif text-3xl md:text-4xl text-white mb-2 font-light">
                            {filteredProjects[selectedProject].name}
                          </h1>
                          <div className="flex flex-wrap gap-2">
                            {filteredProjects[selectedProject].tech.map((tech) => (
                              <span
                                key={tech}
                                className="text-white/80 text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-8 md:p-12 text-gray-900">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                          <div className="md:col-span-2">
                            <h2 className="font-serif text-2xl font-medium mb-4">About This Project</h2>
                            <p className="text-lg leading-relaxed font-light mb-6">
                              {filteredProjects[selectedProject].longDescription}
                            </p>

                            <h3 className="font-serif text-xl font-medium mb-4">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {filteredProjects[selectedProject].features.map((feature, index) => (
                                <motion.div
                                  key={index}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + index * 0.1 }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-sm font-light">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-6">
                            {/* Project Stats */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                              <h3 className="font-serif text-lg font-medium mb-4">Project Stats</h3>
                              <div className="space-y-4">
                                {Object.entries(filteredProjects[selectedProject].metrics).map(([key, value]) => (
                                  <div key={key} className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600 capitalize">{key}</span>
                                    <span className="font-medium">{value}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Project Info */}
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                              <h3 className="font-serif text-lg font-medium mb-4">Project Info</h3>
                              <div className="space-y-3">
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-3 text-gray-500" />
                                  <span className="text-sm">{filteredProjects[selectedProject].year}</span>
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-3 text-gray-500" />
                                  <span className="text-sm">{filteredProjects[selectedProject].team}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                          <motion.a
                            href={filteredProjects[selectedProject].link}
                            className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl text-sm hover:from-gray-800 hover:to-gray-600 transition-all font-medium shadow-lg"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Project
                          </motion.a>
                          <motion.a
                            href={filteredProjects[selectedProject].github}
                            className="inline-flex items-center border border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-sm hover:bg-gray-50 transition-all font-medium"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
