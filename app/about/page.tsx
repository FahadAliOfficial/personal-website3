"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  MapPin,
  Calendar,
  Coffee,
  Code,
  Heart,
  Award,
  ExternalLink,
} from "lucide-react";
import MouseFollower from "@/components/mouse-follower";
import { useIsMobile } from "@/components/ui/use-mobile";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = useState("story");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  // Fix hydration by ensuring component only renders after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    {
      category: "Core Languages",
      items: ["Python", "JavaScript", "TypeScript", "C++"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      category: "Automation & Web",
      items: ["Selenium", "BeautifulSoup", "Playwright", "Requests"],
      color: "from-emerald-500 to-green-500",
    },
    {
      category: "Machine Learning",
      items: ["scikit-learn", "TensorFlow", "Keras", "Stable-Baselines3"],
      color: "from-yellow-500 to-amber-500",
    },
    {
      category: "Mobile & UI",
      items: ["Flutter", "Android (Java)", "React Native", "Figma"],
      color: "from-orange-500 to-pink-500",
    },
    {
      category: "Dev Tools & Cloud",
      items: ["Git", "VSCode", "Colab", "Ubuntu", "Docker (basic)"],
      color: "from-purple-500 to-fuchsia-500",
    },
  ];
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford University & DeepLearning.AI (Coursera)",
      date: "July 27, 2024",
      description:
        "Comprehensive 3-course specialization taught by Andrew Ng covering supervised learning (linear/logistic regression, neural networks, decision trees), unsupervised learning (clustering, anomaly detection), recommender systems, and reinforcement learning. Built ML models with NumPy, scikit-learn, and TensorFlow. Achieved 100% grade in first two courses and 98.80% in the final course.",
      status: "completed",
      credentialId: "1EE75FLL5DOJ",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/1EE75FLL5DOJ",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI (Coursera)",
      date: "In Progress",
      description:
        "5-course specialization covering neural networks, deep learning optimization, CNN, and sequence models. Currently completed 2/5 courses.",
      status: "in-progress",
      credentialId: "DL_SPEC_PROG",
      certificateUrl: "",
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google (Coursera)",
      date: "June 2025",
      description:
        "Comprehensive 8-course professional certificate program covering data foundations, preparation, processing, analysis, visualization, and advanced R programming. Mastered spreadsheets, SQL databases, Tableau dashboards, R programming with tidyverse, and statistical analysis. Completed hands-on projects including bike-share case study with complete data lifecycle from collection to actionable insights.",
      status: "completed",
      credentialId: "TV861YGE7PRV",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/TV861YGE7PRV",
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM (Coursera)",
      date: "May 31, 2025",
      description:
        "Comprehensive 25-hour Python programming course covering variables, data structures, branching, loops, functions, and object-oriented programming. Mastered Python libraries including Pandas, NumPy, and Beautiful Soup for data analysis, manipulation, and web scraping. Developed proficiency in Jupyter Notebooks, APIs, data collection/import/export, and automation scripting. Achieved 94% grade with hands-on projects in data science applications.",
      status: "completed",
      credentialId: "LWFA2RSZGE6H",
      certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/LWFA2RSZGE6H",
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan (Coursera)",
      date: "May 15, 2025",
      description:
        "Comprehensive 18-hour course covering principles of data structures and their practical applications. Mastered file I/O operations for reading and writing data, Python dictionaries for key/value pair storage, and tuples for multi-step tasks including sorting and looping. Developed proficiency in data manipulation, import/export, programming principles, and development environments. Achieved 96.71% grade with hands-on projects in data structure implementation.",
      status: "completed",
      credentialId: "56PPJ8PPB6ZQ",
      certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/56PPJ8PPB6ZQ",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      issuer: "University of Michigan (Coursera)",
      date: "September 7, 2023",
      description:
        "Comprehensive 18-hour foundational Python programming course covering Python installation, basic syntax, variables for storing and calculating information, and core programming tools including functions and loops. Developed skills in development environments, computational thinking, scripting, and programming principles. Achieved 95.77% grade in this highly-rated course with 3.3M+ students enrolled.",
      status: "completed",
      credentialId: "NKP4SE52GWDT",
      certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/NKP4SE52GWDT",
    },
    {
      title: "Microsoft AI & ML Engineering Professional Certificate",
      issuer: "Microsoft (Coursera)",
      date: "In Progress",
      description:
        "Comprehensive 5-course professional certificate program (178 total hours) focusing on AI & ML infrastructure design, algorithms and techniques, intelligent troubleshooting agents, and Microsoft Azure workflows. Covering data processing, MLOps, reinforcement learning, prompt engineering, and advanced AI deployment. Includes hands-on capstone project developing real-world AI solutions. Prepares for Microsoft Azure AI Engineer Associate AI-102 certification.",
      status: "in-progress",
      credentialId: "",
      certificateUrl: "",
    },
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI (Coursera)",
      date: "June 29, 2024",
      description:
        "Comprehensive 6-hour non-technical course covering artificial intelligence, machine learning, deep learning, and artificial neural networks. Developed strategic thinking for AI implementation, data ethics understanding, and market opportunity assessment. Gained skills in needs assessment, engineering management, business ethics, and team building for AI projects. Achieved 98.12% grade in this highly-rated course with 1.9M+ students enrolled.",
      status: "completed",
      credentialId: "VMPAHLAJUR8P",
      certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/VMPAHLAJUR8P",
    },
    // {
    //   title: "Design & Content Creation Courses",
    //   issuer: "Coursera Project Network",
    //   date: "2024",
    //   description:
    //     "Completed multiple design projects including Canva for digital course collateral and professional resume building.",
    //   status: "completed",
    //   credentialId: "DESIGN_2024",
    //   certificateUrl: "https://coursera.org/verify/DESIGN_2024",
    // },
  ];

  // const experience = [
  //   {
  //     role: "Senior Full Stack Developer",
  //     company: "TechCorp Solutions",
  //     period: "2022 - Present",
  //     description: "Leading development of enterprise web applications with React and Node.js",
  //     achievements: ["Led team of 5 developers", "Increased performance by 40%", "Launched 3 major products"],
  //   },
  //   {
  //     role: "Frontend Developer",
  //     company: "StartupXYZ",
  //     period: "2020 - 2022",
  //     description: "Built responsive React applications for fintech startup",
  //     achievements: ["Developed mobile-first design system", "Reduced load time by 60%", "Implemented A/B testing"],
  //   },
  //   {
  //     role: "Junior Developer",
  //     company: "WebStudio",
  //     period: "2019 - 2020",
  //     description: "Developed custom websites and e-commerce platforms",
  //     achievements: ["Built 20+ client websites", "Learned modern web technologies", "Mentored 2 interns"],
  //   },
  // ]

  const experience = [
    {
      role: "Freelance Python Developer",
      company: "Self-Employed | Fiverr & Upwork",
      period: "2023 - Present",
      description:
        "Delivered end-to-end data scraping, automation, and web bot solutions for global clients.",
      achievements: [
        "Completed 15+ projects.",
        "Developed scalable scrapers for e-commerce and real estate sites.",
        "Automated complex workflows using Selenium and Python scripts.",
      ],
    },
    {
      role: "Machine Learning Intern",
      company: "Prodigy InfoTech",
      period: "2024 (Remote)",
      description:
        "Worked on ML models including regression, clustering, classification, and computer vision tasks.",
      achievements: [
        "Built a house price prediction model using linear regression.",
        "Developed a hand gesture recognition model using CNN.",
        "Completed 5 core projects and maintained a public GitHub repo.",
      ],
    },
    {
      role: "Python Intern",
      company: "OctaNet Services Pvt Ltd",
      period: "2024 (Remote)",
      description:
        "Worked on Python-based automation and scripting tasks during internship.",
      achievements: [
        "Built automated scripts for data processing tasks.",
        "Improved task runtime by optimizing Python logic.",
        "Collaborated in a remote dev environment using Git.",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  };
  const navigationSections = [
    { id: "story", label: "My Story" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "values", label: "Values" },
  ];

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Only show MouseFollower on desktop devices */}
      {!isMobile && <MouseFollower />}
      {/* Navigation */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-white/60 transition-colors"
            >
              <ArrowLeft className="mr-3 h-5 w-5" />
              <span className="font-light">Back to Home</span>
            </Link>
            <div className="font-serif text-xl font-light">About</div>
          </div>
        </div>
      </motion.div>{" "}
      <div className="pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
          >
            {/* Left Column - Profile & Stats */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 space-y-4 sm:space-y-6 lg:space-y-8"
            >
              {/* Profile Card */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <div className="text-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6">
                    <Image
                      // src="/placeholder.svg?height=128&width=128"
                      src="profile1.png"
                      alt="Fahad Ali"
                      fill
                      className="rounded-full object-cover border-2 sm:border-4 border-white/10"
                    />
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-[#1A1A1A] flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <h1 className="font-serif text-xl sm:text-2xl md:text-3xl font-light mb-2">
                    Fahad Ali
                  </h1>
                  <p className="text-white/60 mb-3 sm:mb-4 font-light text-sm sm:text-base">
                    Software Developer
                  </p>
                  <div className="flex items-center justify-center text-xs sm:text-sm text-white/50 mb-4 sm:mb-6">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Faisalabad, Pakistan
                  </div>
                  <motion.a
                    href="/Fahad_Ali_Resume.pdf"
                    download="Fahad_Ali_Resume.pdf"
                    className="inline-flex items-center bg-white text-gray-900 px-4 py-2 sm:px-6 sm:py-3 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Download Resume
                  </motion.a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/10">
                <h3 className="font-serif text-base sm:text-lg mb-3 sm:mb-4 font-light">
                  Quick Stats
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {" "}
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-blue-400" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium">
                        5+ Years
                      </div>
                      <div className="text-xs text-white/60">Experience</div>
                    </div>
                  </div>{" "}
                  <div className="flex items-center">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-green-400" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium">
                        20+ Projects
                      </div>
                      <div className="text-xs text-white/60">Completed</div>
                    </div>
                  </div>{" "}
                  <div className="flex items-center">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-yellow-400" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium">
                        17+ Certifications
                      </div>
                      <div className="text-xs text-white/60">Earned</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Coffee className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-orange-400" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium">
                        1000+ Cups
                      </div>
                      <div className="text-xs text-white/60">
                        Coffee Consumed
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-red-400" />
                    <div>
                      <div className="text-xs sm:text-sm font-medium">
                        ∞ Passion
                      </div>
                      <div className="text-xs text-white/60">For Coding</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>{" "}
            {/* Right Column - Content */}
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] border border-gray-100 shadow-2xl text-gray-900">
                {/* Top Section Navigation */}{" "}
                <motion.div
                  className="mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {" "}
                  <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-2 sm:p-3 border border-white/10">
                    <div className="flex justify-center gap-1 sm:gap-2 md:gap-3 flex-wrap sm:flex-nowrap">
                      {navigationSections.map((section) => (
                        <motion.button
                          key={section.id}
                          className={`px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 rounded-lg sm:rounded-xl transition-all font-light text-xs sm:text-sm md:text-base whitespace-nowrap flex-shrink-0 ${
                            activeSection === section.id
                              ? "bg-white text-gray-900 font-medium shadow-lg"
                              : "hover:bg-white/10 text-white/80 hover:text-white"
                          }`}
                          onClick={() => setActiveSection(section.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {section.label}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>{" "}
                {activeSection === "story" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 lg:mb-8">
                      My Story
                    </h2>
                    <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed font-light">
                      <p>
                        My journey into tech started with raw curiosity—breaking
                        things, fixing them, and wondering how the logic behind
                        screens actually worked. I didn't follow a straight
                        path; I just kept building. From basic scripts and bots
                        to scraping data, automating workflows, and training
                        machine learning models, each project shaped my mindset.
                      </p>
                      <p>
                        I've dived deep into Python, web automation, machine
                        learning, and even Android development—often learning by
                        doing, failing, and iterating fast. I'm not chasing
                        trends; I'm solving problems, experimenting with ideas,
                        and trying to push myself into unfamiliar territory
                        every chance I get.
                      </p>
                      <p>
                        Outside of writing code, I love exploring new tools,
                        optimizing my development environments, and sharing
                        insights from my journey with others. Whether it's a
                        script that saves hours or a model that learns patterns,
                        I treat every challenge like a puzzle waiting to be
                        cracked.
                      </p>
                      <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-6 mt-8 border-l-4 border-gray-800">
                        <p className="italic text-gray-700">
                          "Code isn't just syntax—it's a mindset. A reflection
                          of how you think, adapt, and evolve."
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                {activeSection === "skills" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 lg:mb-8">
                      Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                      {(showAllSkills ? skills : skills.slice(0, 3)).map(
                        (skillGroup, index) => (
                          <motion.div
                            key={skillGroup.category}
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-100"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div
                              className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${skillGroup.color} mb-3 sm:mb-4 flex items-center justify-center`}
                            >
                              <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-white rounded-md sm:rounded-lg"></div>
                            </div>
                            <h3 className="font-serif text-base sm:text-lg lg:text-xl font-medium mb-3 sm:mb-4">
                              {skillGroup.category}
                            </h3>
                            <div className="space-y-2 sm:space-y-3">
                              {" "}
                              {skillGroup.items.map((skill, skillIndex) => (
                                <motion.div
                                  key={skill}
                                  className="flex items-center"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.3 + skillIndex * 0.1 }}
                                >
                                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-400 rounded-full mr-2 sm:mr-3"></div>
                                  <span className="text-gray-700 font-light text-sm sm:text-base">
                                    {skill}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>{" "}
                    {/* Toggle Button */}
                    {skills.length > 3 && (
                      <div className="mt-4 sm:mt-6 text-center">
                        <button
                          onClick={() => setShowAllSkills(!showAllSkills)}
                          className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
                        >
                          {showAllSkills ? "Show Less" : "Show More"}
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}{" "}
                {activeSection === "experience" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 lg:mb-8">
                      Experience
                    </h2>
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                      {experience.map((job, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-100"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
                            <div>
                              <h3 className="font-serif text-lg sm:text-xl font-medium text-gray-900">
                                {job.role}
                              </h3>
                              <p className="text-gray-600 font-medium text-sm sm:text-base">
                                {job.company}
                              </p>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 bg-gray-100 px-2 py-1 sm:px-3 sm:py-1 rounded-full mt-2 sm:mt-0 w-fit">
                              {job.period}
                            </div>
                          </div>
                          <p className="text-gray-700 mb-3 sm:mb-4 font-light text-sm sm:text-base">
                            {job.description}
                          </p>
                          <div className="space-y-1.5 sm:space-y-2">
                            {job.achievements.map(
                              (achievement, achievementIndex) => (
                                <motion.div
                                  key={achievementIndex}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.5 + achievementIndex * 0.1,
                                  }}
                                >
                                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gray-400 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                                  <span className="text-xs sm:text-sm text-gray-600 font-light">
                                    {achievement}
                                  </span>
                                </motion.div>
                              )
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                {activeSection === "certifications" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 lg:mb-8">
                      Certifications & Learning
                    </h2>
                    <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:gap-6">
                      {(showAllCertifications
                        ? certifications
                        : certifications.slice(0, 3)
                      ).map((cert, index) => (
                        <motion.div
                          key={cert.title}
                          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-100"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <Award className="w-5 h-5 mr-2 text-yellow-500" />
                                <h3 className="font-serif text-lg sm:text-xl font-medium text-gray-900">
                                  {cert.title}
                                </h3>
                              </div>
                              <p className="text-gray-600 font-medium text-sm sm:text-base mb-1">
                                {cert.issuer}
                              </p>
                              <p className="text-gray-700 text-xs sm:text-sm font-light mb-3">
                                {cert.description}
                              </p>

                              {/* View Certificate Button - Only show for completed certs with URL */}
                              {cert.status === "completed" && cert.certificateUrl && (
                                <motion.a
                                  href={cert.certificateUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium transition-colors"
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                  View Certificate
                                </motion.a>
                              )}
                            </div>
                            <div className="flex flex-col items-start sm:items-end mt-2 sm:mt-0 sm:ml-4">
                              <div
                                className={`text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1 rounded-full w-fit mb-1 ${
                                  cert.status === "completed"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-blue-100 text-blue-700"
                                }`}
                              >
                                {cert.status === "completed"
                                  ? "Completed"
                                  : "In Progress"}
                              </div>
                              <div className="text-xs sm:text-sm text-gray-500">
                                {cert.date}
                              </div>
                              {cert.credentialId && (
                                <div className="text-xs text-gray-400 mt-1">
                                  ID: {cert.credentialId}
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Toggle Button */}
                    {certifications.length > 3 && (
                      <div className="mt-4 sm:mt-6 text-center">
                        <button
                          onClick={() =>
                            setShowAllCertifications(!showAllCertifications)
                          }
                          className="text-blue-600 hover:underline font-medium text-sm sm:text-base"
                        >
                          {showAllCertifications ? "Show Less" : "Show More"}
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
                {activeSection === "values" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {" "}
                    <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-4 sm:mb-6 lg:mb-8">
                      My Values & Approach
                    </h2>
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                      {" "}
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
                        <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-medium mb-3 sm:mb-4">
                          Code with Purpose
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-light text-gray-700">
                          For me, coding is more than just syntax — it’s about
                          solving real problems and building practical tools.
                          Every script, bot, or app I create aims to bring
                          clarity, efficiency, and value to users.
                        </p>
                      </div>{" "}
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
                        <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-medium mb-3 sm:mb-4">
                          Learning by Doing
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-light text-gray-700">
                          My growth as a developer comes from hands-on projects,
                          freelancing challenges, and internships. I believe
                          deep learning happens through building, experimenting,
                          and embracing every opportunity to improve.
                        </p>
                      </div>{" "}
                      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
                        <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-medium mb-3 sm:mb-4">
                          Community and Collaboration
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-light text-gray-700">
                          Sharing knowledge and contributing to open source
                          drives me forward. Technology advances faster when
                          developers support each other, and I’m committed to
                          being part of that collaborative spirit.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
