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
    name: "Academia.ai",
    category: "ai",
    tech: ["Next.js 15", "Node.js", "Python", "Flask", "Gemini API", "WebRTC", "Socket.io", "Supabase", "TailwindCSS"],
    description: "Comprehensive AI-powered education platform with live classes, intelligent chatbot, automated exam system, and advanced course management.",
    longDescription:
      "Built a complete full-stack AI education ecosystem featuring role-based authentication with email verification, real-time video classes via WebRTC, RAG-based intelligent chatbot system, automated exam creation and grading using AI, bulk student enrollment, advanced assignment management, and comprehensive course content delivery. The platform uses vector databases for contextual AI responses and automated document processing for seamless content integration.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2025",
    team: "Solo",
    features: [
      "Complete authentication system with email verification and password reset",
      "Role-based dashboards for Teachers and Students with personalized stats",
      "Course management with draft, published, and archived states",
      "Real-time messaging system between students and teachers",
      "Automated RAG-based content processing with vector database generation",
      "Bulk student enrollment via Excel upload with automatic account creation",
      "AI-powered exam system with automated question parsing from PDF/DOCX",
      "Intelligent grading system using semantic analysis for subjective answers",
      "Live video classes with WebRTC and Socket.io integration",
      "Multi-session chatbot with course-specific AI responses using Gemini API",
      "Advanced assignment submission system with late submission tracking",
      "Real-time grade reporting and feedback system",
      "Personal todo list management for both teachers and students",
      "Support system with direct developer contact functionality"
    ],
    metrics: {
      Users: "1K+",
      Courses: "150+",
      liveClasses: "500+",
      aiInteractions: "25K+",
    },
  },
  {
    id: 2,
    name: "Rii – AI Desktop Buddy",
    category: "desktop",
    tech: ["Python", "Tkinter", "SpeechRecognition", "OpenAI API"],
    description: "Voice/text desktop assistant that performs AI-generated tasks on command.",
    longDescription:
      "Created a floating desktop assistant charactor that responds to 'Hey Rii' with interactive voice replies or opens a chat interface. Executes user commands using OpenAI-generated Python scripts, supports voice input and text recognition.",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2025",
    team: "Solo",
    features: [
      "Voice and text command support",
      "Context-aware task generation with OpenAI",
      "Floating widget on desktop",
      "Interactive voice feedback",
      "Script execution and auto-save",
    ],
    metrics: {
      accuracy: "90%",
      platforms: "Windows/Linux",
    },
  },
  {
    id: 3,
    name: "Universal Shopify Scraper (GUI)",
    category: "desktop",
    tech: ["Python", "Tkinter", "BeautifulSoup", "Selenium"],
    description: "GUI app for extracting products, images, and variants from any Shopify store.",
    longDescription:
      "Designed for dropshippers and researchers, this tool scrapes all products, variants, and images from any public Shopify store with export-ready CSV support. GUI allows non-technical users to run scrapes without code.",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "Supports all Shopify themes",
      "Image and variant scraping",
      "CSV export of product data",
      "User-friendly GUI in Tkinter",
      "Status logs and completion alerts",
    ],
    metrics: {
      storesScraped: "300+",
      SpeedSpeed: "Fast",
      errorRate: "0.2%",
    },
  },
  {
    id: 4,
    name: "Shopify Scraper CLI",
    category: "script",
    tech: ["Python"],
    description: "Fast command-line tool for scraping Shopify store catalogs.",
    longDescription:
      "Optimized Python script that supports scraping from any Shopify store. Built with theme-detection logic to ensure accurate scraping across different layouts. Designed for developers and automation pipelines.",
    image: "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "Command-line interface",
      "Compatible with multiple themes",
      "Outputs structured data",
      "Fast scraping logic",
      "Logs and error handling",
    ],
    metrics: {
      scriptsRun: "500+",
      runtime: "<5s/store",
      compatibility: "95%+ themes",
    },
  },
  {
    id: 5,
    name: "Portfolio Website",
    category: "web",
    tech: ["React", "TailwindCSS", "JavaScript"],
    description: "Animated portfolio showcasing projects, resume, and contact form.",
    longDescription:
      "Developed a personal portfolio website to display projects, certifications, and provide easy contact. Fully responsive and animated for modern UX.",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "Animated project cards",
      "Contact form with email integration",
      "Responsive design for mobile and desktop",
      "Downloadable resume",
      "Tech stack showcase",
    ],
    metrics: {
      visits: "1K+",
      bounceRate: "10%",
      devices: "All",
    },
  },
  {
    id: 6,
    name: "Smart Daily Task Planner",
    category: "mobile",
    tech: ["Flutter", "Dart", "Firebase", "Google Maps API", "AI/ML"],
    description: "AI-powered task planner with location-based notifications and smart scheduling.",
    longDescription:
      "Developed an intelligent task management app that uses AI to optimize daily schedules and provides location-based notifications. Features smart task prioritization, GPS-triggered reminders, and personalized productivity insights.",
    image: "https://images.pexels.com/photos/5717455/pexels-photo-5717455.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "AI-powered task prioritization",
      "Location-based notifications",
      "Smart scheduling algorithms",
      "Voice task input",
      "Productivity analytics dashboard",
      "Cross-platform synchronization",
    ],
    metrics: {
      downloads: "5K+",
      dailyUsers: "1.2K",
    },
  },
  {
    id: 7,
    name: "Focuso - Digital Detox",
    category: "mobile",
    tech: ["Flutter", "Dart", "SQLite", "Background Services"],
    description: "Digital wellness app with phone locking, usage tracking, and goal setting.",
    longDescription:
      "Built a comprehensive digital detox application that helps users minimize phone usage and social media scrolling. Features customizable timers, app blocking, detailed usage statistics, and daily goal tracking with achievement rewards.",
    image: "https://images.pexels.com/photos/6238048/pexels-photo-6238048.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2025",
    team: "Solo",
    features: [
      "App blocking with custom timers",
      "Detailed usage statistics",
      "Daily and weekly goal setting",
      "Focus session tracking",
      "Achievement and reward system",
      "Emergency access controls",
    ],
    metrics: {
      downloads: "8K+",
      userRetention: "78%",
    },
  },
  {
    id: 8,
    name: "Textile Yarn Calculator",
    category: "mobile",
    tech: ["Flutter", "Dart", "SQLite", "Excel Export"],
    description: "Professional yarn count calculator for various fiber categories with history tracking.",
    longDescription:
      "Developed a specialized mobile app for textile professionals to calculate yarn counts across different fiber categories. Includes comprehensive calculation history, Excel export functionality, and support for multiple yarn count systems.",
    image: "https://images.pexels.com/photos/3654772/pexels-photo-3654772.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "Multi-fiber yarn count calculations",
      "Calculation history and bookmarks",
      "Excel format data export",
      "Unit conversion tools",
      "Professional calculation formulas",
      "Offline functionality",
    ],
    metrics: {
      downloads: "3K+",
      FastCalculations: "Yes",
      IndustryAdoption: "Yes",
      fibers: "All Types"
    },
  },
  {
    id: 9,
    name: "RAG-Based Chatbot",
    category: "ai",
    tech: ["Python", "LangChain", "OpenAI API", "Vector Database", "FastAPI"],
    description: "Intelligent chatbot using Retrieval-Augmented Generation for contextual responses.",
    longDescription:
      "Built a sophisticated chatbot system that combines retrieval-augmented generation with vector databases for highly contextual and accurate responses. Supports document ingestion, semantic search, and maintains conversation context.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2025",
    team: "Solo",
    features: [
      "Document ingestion and vectorization",
      "Semantic search with natural language queries",
      "Context-aware, intelligent responses",
      "Multi-format document support (PDF, DOCX, TXT, etc.)",
      "Conversation memory with dynamic context retention",
      "Session-based chat system for multitopic interactions",
      "Ready for API integration and external tool support"
    ],
    metrics: {
      queries: "25K+",
      accuracy: "94%",
      responseTime: "<3s",
    },
  },
  {
    id: 10,
    name: "Rider Helmet & Number Plate Detection",
    category: "ai",
    tech: ["Python", "YOLO", "OpenCV", "TensorFlow", "Computer Vision"],
    description: "AI system for detecting motorcycle riders without helmets and reading number plates.",
    longDescription:
      "Developed a computer vision system for traffic safety enforcement that detects motorcycle riders without helmets and automatically reads vehicle number plates. Uses advanced object detection and OCR technologies.",
    image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2025",
    team: "Solo",
    features: [
      "Real-time helmet detection",
      "Automatic number plate recognition",
      "Multi-vehicle tracking",
      "Alert system integration",
      "Evidence capture and logging",
      "Traffic camera compatibility",
    ],
    metrics: {
      accuracy: "96%",
      deployment: "Yes",
    },
  },
  {
    id: 11,
    name: "Textile Cloth Fault Detector",
    category: "ai",
    tech: ["Python", "CNN", "OpenCV", "TensorFlow", "Image Processing"],
    description: "AI-powered quality control system for detecting defects in textile fabrics.",
    longDescription:
      "Created an automated quality control system using deep learning to identify various types of defects in textile fabrics. Helps manufacturers maintain quality standards and reduce manual inspection time.",
    image: "https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "Multi-defect type detection",
      "Real-time fabric inspection",
      "Quality score calculation",
      "Defect classification and reporting",
      "Integration with production lines",
      "Statistical quality analysis",
    ],
    metrics: {
      accuracy: "98%",
      defectsDetected: "50K+",
      timeReduction: "70%",
    },
  },
  {
    id: 12,
    name: "Object Recognizer",
    category: "ai",
    tech: ["Python", "YOLO", "OpenCV", "PyTorch", "REST API"],
    description: "Multi-purpose object detection and recognition system with API access.",
    longDescription:
      "Built a versatile object recognition system capable of identifying and classifying multiple objects in images and video streams. Features a REST API for easy integration and supports custom model training.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "Multi-object detection",
      "Real-time video processing",
      "Custom model training",
      "REST API endpoints",
      "Batch image processing",
      "Confidence scoring",
    ],
    metrics: {
      objects: "1000+ classes",
      accuracy: "92%",
    },
  },
  {
    id: 13,
    name: "Twitter Trend Predictor",
    category: "ai",
    tech: ["Python", "NLP", "Twitter API", "Machine Learning", "Pandas"],
    description: "AI model predicting tweet virality based on content, timing, user and other metrics.",
    longDescription:
      "Developed a machine learning system that analyzes tweets and predicts their potential for going viral. Considers factors like content sentiment, posting time, user influence, and trending topics to forecast engagement metrics.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Beta",
    year: "2025",
    team: "2 developers",
    features: [
      "Tweet virality prediction",
      "Sentiment analysis integration",
      "Optimal posting time suggestions",
      "Engagement metrics forecasting",
      "Trend topic correlation",
      "User influence scoring",
    ],
    metrics: {
      analyzedTweets: "100K+",
      accuracy: "78%",
    },
  },
  {
    id: 14,
    name: "Web-Based Code Generator",
    category: "ai",
    tech: ["React", "Node.js", "OpenAI API", "Monaco Editor", "WebSocket"],
    description: "AI-powered web application for generating code snippets and full applications.",
    longDescription:
      "Created a comprehensive web-based code generation platform that uses AI to create code snippets, functions, and complete applications based on natural language descriptions. Features syntax highlighting and real-time collaboration.",
    image: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "Natural language to code conversion",
      "Multiple programming language support",
      "Syntax highlighting and validation",
      "Code explanation and documentation",
      "Version control integration",
      "Real-time collaboration",
    ],
    metrics: {
      languages: "10",
    },
  },
  {
    id: 15,
    name: "Skin Cancer Detection",
    category: "ai",
    tech: ["Python", "TensorFlow", "CNN", "Medical Imaging", "Flask"],
    description: "AI-powered diagnostic tool for early detection of skin cancer from images.",
    longDescription:
      "Developed a medical AI system that analyzes skin lesion images to detect potential signs of skin cancer. Uses convolutional neural networks trained on dermatological datasets to provide preliminary diagnostic assistance.",
    image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "Skin lesion analysis",
      "Multi-class cancer detection",
      "Risk assessment scoring",
      "Medical report generation",
      "DICOM image support",
    ],
    metrics: {
      accuracy: "89%",
    },
  },
  {
    id: 16,
    name: "Academia.ai Web Platform",
    category: "web",
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Socket.io"],
    description: "Comprehensive AI-powered online education platform with live classes and management.",
    longDescription:
      "Built a full-featured educational platform that combines AI tutoring, live video classes, student management, and assignment tracking. Features role-based access, real-time collaboration, and intelligent content recommendations.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "4 developers",
    features: [
      "AI-powered tutoring system",
      "Live video class integration",
      "Student progress tracking",
      "Assignment management",
      "Real-time collaboration tools",
      "Automated grading system",
    ],
    metrics: {
      students: "5K+",
      courses: "200+",
      completion: "85%",
    },
  },
  {
    id: 17,
    name: "Minimalist Developer Portfolio",
    category: "web",
    tech: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    description: "Clean, minimalist portfolio focusing on code quality and technical skills.",
    longDescription:
      "Created a developer-focused portfolio with emphasis on clean code, technical documentation, and project demonstrations. Features code syntax highlighting, GitHub integration, and technical blog functionality.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2025",
    team: "Solo",
    features: [
      "GitHub repository integration",
      "Technical blog system",
      "Code snippet showcases",
      "Project documentation",
      "Contact form with validation",
      "Dark/light theme toggle",
    ],
    metrics: {
      visits: "1.8K+",
      pageViews: "8K+",
      conversions: "12%",
    },
  },
  {
    id: 18,
    name: "ShopMax E-commerce Platform",
    category: "web",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    description: "Full-featured e-commerce platform with advanced analytics and inventory management.",
    longDescription:
      "Developed a comprehensive e-commerce solution with product catalog management, order processing, payment integration, inventory tracking, and business analytics. Features admin dashboard and customer management system.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2024",
    team: "Solo",
    features: [
      "Product catalog management",
      "Order and inventory tracking",
      "Multi-payment gateway support",
      "Customer account management",
      "Analytics and reporting dashboard",
      "Mobile-responsive checkout",
    ],
    metrics: {
      products: "10K+",
      orders: "2.5K+",
    },
  },
  {
    id: 19,
    name: "ExamPortal Pro",
    category: "ai",
    tech: ["React", "Node.js", "Express", "MongoDB", "Python", "Flask", "AI/ML", "PDF Parser", "Email Service"],
    description: "Comprehensive web-based exam management system with AI-powered grading and automated question parsing.",
    longDescription:
      "Developed a full-featured online examination platform that allows teachers to create exams through manual question entry or automated document parsing. Features intelligent question extraction from PDF/Word documents, multi-format question support, AI-powered grading system, and comprehensive result analytics. Ensures exam integrity with one-time attempt restrictions and provides detailed performance reports via email.",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2025",
    team: "Solo",
    features: [
      "Dual exam creation modes: manual entry and document parsing",
      "Advanced filtering system by subject, chapter, and difficulty level",
      "Multi-format question support (MCQs, short answers, coding, debugging, fill-in-blanks)",
      "Automated question extraction from PDF and Word documents",
      "AI-powered grading system for subjective and coding questions",
      "One-time exam attempt restriction with integrity preservation",
      "Comprehensive result analytics and student performance tracking",
      "Detailed email reports with complete answer analysis",
      "Real-time exam monitoring and submission tracking",
      "Bulk result export and individual student performance views",
      "Secure exam environment with anti-cheating measures",
      "Customizable exam duration and scheduling"
    ],
    metrics: {
      exams: "500+",
      students: "3K+",
      questions: "15K+",
      emailReports: "8K+",
      grading: "96%",
    },
  },
  {
    id: 20,
    name: "ExamPortal Pro (Web)",
    category: "web",
    tech: ["React", "Node.js", "Express", "MongoDB", "Python", "Flask", "AI/ML", "PDF Parser", "Email Service"],
    description: "Comprehensive web-based exam management system with AI-powered grading and automated question parsing.",
    longDescription:
      "Developed a full-featured online examination platform that allows teachers to create exams through manual question entry or automated document parsing. Features intelligent question extraction from PDF/Word documents, multi-format question support, AI-powered grading system, and comprehensive result analytics. Ensures exam integrity with one-time attempt restrictions and provides detailed performance reports via email.",
    image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
    link: "#",
    github: "#",
    status: "Ready",
    year: "2025",
    team: "Solo",
    features: [
      "Dual exam creation modes: manual entry and document parsing",
      "Advanced filtering system by subject, chapter, and difficulty level",
      "Multi-format question support (MCQs, short answers, coding, debugging, fill-in-blanks)",
      "Automated question extraction from PDF and Word documents",
      "AI-powered grading system for subjective and coding questions",
      "One-time exam attempt restriction with integrity preservation",
      "Comprehensive result analytics and student performance tracking",
      "Detailed email reports with complete answer analysis",
      "Real-time exam monitoring and submission tracking",
      "Bulk result export and individual student performance views",
      "Secure exam environment with anti-cheating measures",
      "Customizable exam duration and scheduling"
    ],
    metrics: {
      exams: "500+",
      students: "3K+",
      questions: "15K+",
      emailReports: "8K+",
      grading: "96%",
    },
  }
];
  // const projects = [
  //   {
  //     id: 1,
  //     name: "E-Commerce Platform",
  //     category: "web",
  //     tech: ["React", "Node.js", "MongoDB", "Stripe"],
  //     description:
  //       "A full-stack e-commerce solution with payment integration, product management, and user authentication.",
  //     longDescription:
  //       "Built a comprehensive e-commerce platform from scratch, featuring a modern React frontend with server-side rendering, robust Node.js backend, and secure payment processing. The platform handles thousands of transactions daily and includes advanced features like inventory management, analytics dashboard, and multi-vendor support.",
  //     image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     link: "#",
  //     github: "#",
  //     status: "Live",
  //     year: "2023",
  //     team: "4 developers",
  //     features: [
  //       "Secure payment processing with Stripe integration",
  //       "Real-time inventory management system",
  //       "Advanced search and filtering capabilities",
  //       "Mobile-responsive design with PWA features",
  //       "Admin dashboard with analytics and reporting",
  //       "Multi-vendor marketplace functionality",
  //     ],
  //     metrics: {
  //       users: "10K+",
  //       transactions: "$500K+",
  //       uptime: "99.9%",
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "Task Management App",
  //     category: "web",
  //     tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
  //     description: "Collaborative project management with real-time updates, task assignment, and progress tracking.",
  //     longDescription:
  //       "Developed a sophisticated project management tool that enables teams to collaborate effectively. Features include real-time updates, drag-and-drop task management, time tracking, and comprehensive reporting. Built with modern technologies for optimal performance and scalability.",
  //     image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     link: "#",
  //     github: "#",
  //     status: "Live",
  //     year: "2023",
  //     team: "3 developers",
  //     features: [
  //       "Real-time collaboration with WebSocket integration",
  //       "Drag-and-drop task management interface",
  //       "Time tracking and productivity analytics",
  //       "Team communication and file sharing",
  //       "Custom workflow automation",
  //       "Integration with popular tools (Slack, GitHub)",
  //     ],
  //     metrics: {
  //       users: "5K+",
  //       tasks: "100K+",
  //       teams: "500+",
  //     },
  //   },
  //   {
  //     id: 3,
  //     name: "AI Chat Interface",
  //     category: "ai",
  //     tech: ["React", "Python", "OpenAI API", "FastAPI"],
  //     description: "Intelligent chatbot with natural language processing capabilities and context awareness.",
  //     longDescription:
  //       "Created an advanced AI-powered chat interface that leverages OpenAI's GPT models for natural language understanding. The system includes context management, conversation history, and custom training capabilities for domain-specific knowledge.",
  //     image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     link: "#",
  //     github: "#",
  //     status: "Beta",
  //     year: "2024",
  //     team: "2 developers",
  //     features: [
  //       "Natural language processing with GPT-4 integration",
  //       "Context-aware conversation management",
  //       "Custom knowledge base training",
  //       "Multi-language support",
  //       "Voice input and output capabilities",
  //       "Analytics and conversation insights",
  //     ],
  //     metrics: {
  //       conversations: "50K+",
  //       accuracy: "95%",
  //       languages: "12",
  //     },
  //   },
  //   {
  //     id: 4,
  //     name: "Mobile Fitness App",
  //     category: "mobile",
  //     tech: ["React Native", "Firebase", "Redux", "Expo"],
  //     description: "Cross-platform fitness tracking app with workout plans, progress monitoring, and social features.",
  //     longDescription:
  //       "Developed a comprehensive fitness application that helps users track workouts, monitor progress, and stay motivated. Features include custom workout plans, social challenges, nutrition tracking, and integration with wearable devices.",
  //     image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
  //     link: "#",
  //     github: "#",
  //     status: "Live",
  //     year: "2023",
  //     team: "5 developers",
  //     features: [
  //       "Custom workout plan generation",
  //       "Progress tracking with detailed analytics",
  //       "Social challenges and leaderboards",
  //       "Nutrition tracking and meal planning",
  //       "Wearable device integration",
  //       "Offline mode for workouts",
  //     ],
  //     metrics: {
  //       downloads: "25K+",
  //       workouts: "200K+",
  //       retention: "78%",
  //     },
  //   },
  // ]

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
                                project.status === "Ready" ? "bg-green-400" : "bg-yellow-400"
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
                                filteredProjects[selectedProject].status === "Ready"
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
                              <h3 className="font-serif text-lg font-medium mb-4">Expectations</h3>
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
                            {/* <ExternalLink className="mr-2 h-4 w-4" /> */}
                            Get this project
                          </motion.a>
                          {/* <motion.a
                            href={filteredProjects[selectedProject].link}
                            className="inline-flex items-center bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl text-sm hover:from-gray-800 hover:to-gray-600 transition-all font-medium shadow-lg"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Live Project
                          </motion.a> */}
                          {/* <motion.a
                            href={filteredProjects[selectedProject].github}
                            className="inline-flex items-center border border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-sm hover:bg-gray-50 transition-all font-medium"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Source Code
                          </motion.a> */}
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
