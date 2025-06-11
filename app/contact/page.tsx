"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import emailjs from "@emailjs/browser";
import MouseFollower from "@/components/mouse-follower";
import { useIsMobile } from "@/components/ui/use-mobile";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Project Inquiry",
    budget: "",
    timeline: "",
  });  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  // Fix hydration by ensuring component only renders after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Validation functions
  const validateName = (name: string) => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name)) {
      return "Name can only contain letters, spaces, hyphens, and apostrophes";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateMessage = (message: string) => {
    if (!message.trim()) {
      return "Message is required";
    }
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters long";
    }
    if (message.trim().length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return "";
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return validateName(value);
      case "email":
        return validateEmail(value);
      case "message":
        return validateMessage(value);
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });

    // Real-time validation for required fields
    if (name === "name" || name === "email" || name === "message") {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    if (name === "name" || name === "email" || name === "message") {
      setTouched({
        ...touched,
        [name]: true,
      });
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all required fields
    const nameError = validateName(formState.name);
    const emailError = validateEmail(formState.email);
    const messageError = validateMessage(formState.message);

    const newErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };

    const newTouched = {
      name: true,
      email: true,
      message: true,
    };

    setErrors(newErrors);
    setTouched(newTouched);    // Check if there are any validation errors
    if (nameError || emailError || messageError) {
      setErrorMessage("Please fix the errors above before submitting.");
      setShowErrorModal(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Initialize EmailJS (you'll need to sign up at https://www.emailjs.com/)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      // Send email using EmailJS
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        subject: formState.subject,
        message: formState.message,
        budget: formState.budget,
        timeline: formState.timeline,
        to_email:
          process.env.NEXT_PUBLIC_CONTACT_EMAIL || "your-email@example.com",
      };      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setShowSuccessModal(true);
      setFormState({
        name: "",
        email: "",
        message: "",
        subject: "Project Inquiry",
        budget: "",
        timeline: "",
      });

      // Reset validation states
      setErrors({
        name: "",
        email: "",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        message: false,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setErrorMessage(
        "Failed to send message. Please try again or contact me directly."
      );
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="font-serif text-xl font-light">Contact</div>
          </div>
        </div>
      </motion.div>

      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                Let's <span className="italic">Connect</span>
              </h1>
              <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Let's discuss
                how we can bring your ideas to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch h-full min-h-[700px]">
              {/* Contact Info */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-5 flex flex-col h-full space-y-8"
              >
                {/* Contact Methods */}
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-white/10">
                  <h2 className="font-serif text-2xl font-light mb-8">
                    Get in Touch
                  </h2>
                  <div className="space-y-6">
                    <motion.div
                      className="flex items-start group cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl mr-6">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Email Me</h3>
                        <a
                          href="mailto:fahadaliajizansar@gmail.com"
                          className="text-white/60 hover:text-white transition-colors font-light"
                        >
                          fahadaliajizansar@gmail.com
                        </a>
                        <p className="text-sm text-white/40 mt-1">
                          I'll respond within 24 hours
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start group cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl mr-6">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Call Me</h3>
                        <a
                          href="tel:+923261310007"
                          className="text-white/60 hover:text-white transition-colors font-light"
                        >
                          +92 (326) 1310007
                        </a>
                        <p className="text-sm text-white/40 mt-1">
                          Available Mon-Fri, 9AM-6PM PST
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start group cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl mr-6">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2">Location</h3>
                        <p className="text-white/60 font-light">
                          Faisalabad, Pk
                        </p>
                        <p className="text-sm text-white/40 mt-1">
                          Open to remote collaboration
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-white/10">
                  <h3 className="font-serif text-xl font-light mb-6">
                    Current Availability
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full mr-4"></div>
                      <span className="text-white/80 font-light">
                        Available for new projects
                      </span>
                    </div>
                    {/* <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-4 text-white/40" />
                      <span className="text-white/60 text-sm font-light">Next available: January 2024</span>
                    </div> */}
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-4 text-white/40" />
                      <span className="text-white/60 text-sm font-light">
                        Typical response time: 2-4 hours
                      </span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-white/10 flex-1 flex flex-col justify-end min-h-0">
                  <h3 className="font-serif text-xl font-light mb-6">
                    Connect with me
                  </h3>
                  <div className="grid grid-cols-2 gap-4 flex-1 content-end">
                    {[
                      {
                        name: "GITHUB",
                        href: "https://github.com/FahadAliOfficial",
                        color: "from-gray-600 to-gray-800",
                      },
                      {
                        name: "LINKEDIN",
                        href: "https://www.linkedin.com/in/fahaddali/",
                        color: "from-blue-600 to-blue-800",
                      },
                      {
                        name: "TWITTER",
                        href: "https://twitter.com/_fahaddali",
                        color: "from-sky-500 to-blue-600",
                      },
                      {
                        name: "DEV.TO",
                        href: "https://dev.to/fahadaliofficial",
                        color: "from-green-600 to-emerald-700",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        className={`bg-gradient-to-r ${social.color} text-white text-center py-3 px-4 rounded-xl text-sm font-medium hover:scale-105 transition-transform`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                variants={itemVariants}
                className="lg:col-span-7 flex h-full"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl text-gray-900 w-full flex flex-col h-full min-h-0">                  <h2 className="font-serif text-3xl font-light mb-8">
                    Send a Message
                  </h2>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 flex-1 flex flex-col justify-between min-h-0"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                      <motion.div variants={itemVariants} className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-4 rounded-2xl border transition-all bg-white/50 backdrop-blur-sm ${
                            touched.name && errors.name
                              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                          }`}
                          placeholder="John Doe"
                        />
                        {touched.name && errors.name && (
                          <motion.p
                            className="text-red-600 text-sm mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </motion.div>                      <motion.div variants={itemVariants} className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Your Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-4 rounded-2xl border transition-all bg-white/50 backdrop-blur-sm ${
                            touched.email && errors.email
                              ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                              : "border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                          }`}
                          placeholder="john@example.com"
                        />
                        {touched.email && errors.email && (
                          <motion.p
                            className="text-red-600 text-sm mt-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div variants={itemVariants} className="space-y-2">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                        >
                          <option value="Project Inquiry">
                            Project Inquiry
                          </option>
                          <option value="Job Opportunity">
                            Job Opportunity
                          </option>
                          <option value="Collaboration">Collaboration</option>
                          <option value="Consultation">Consultation</option>
                          <option value="Other">Other</option>
                        </select>
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-2">
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Project Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formState.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                        >
                          <option value="">Select budget range</option>
                          <option value="Under $5K">Under $5K</option>
                          <option value="$5K - $15K">$5K - $15K</option>
                          <option value="$15K - $30K">$15K - $30K</option>
                          <option value="$30K+">$30K+</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="space-y-2">
                      <label
                        htmlFor="timeline"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formState.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent transition-all bg-white/50 backdrop-blur-sm"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6+ months">6+ months</option>
                        <option value="Just exploring">Just exploring</option>
                      </select>
                    </motion.div>                    <motion.div variants={itemVariants} className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Your Message * ({formState.message.length}/1000)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={6}
                        className={`w-full px-4 py-4 rounded-2xl border transition-all bg-white/50 backdrop-blur-sm resize-none ${
                          touched.message && errors.message
                            ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                            : "border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                        }`}
                        placeholder="Tell me about your project, goals, and how I can help..."
                        maxLength={1000}
                      ></textarea>
                      {touched.message && errors.message && (
                        <motion.p
                          className="text-red-600 text-sm mt-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {errors.message}
                        </motion.p>
                      )}
                    </motion.div>                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-2xl text-base hover:from-gray-800 hover:to-gray-600 transition-all font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}                      disabled={
                        isSubmitting ||
                        !formState.name ||
                        !formState.email ||
                        !formState.message ||
                        !!errors.name ||
                        !!errors.email ||
                        !!errors.message
                      }
                      variants={itemVariants}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </div>
                      )}
                    </motion.button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-500 font-light">
                      Prefer a quick chat? Schedule a{" "}
                      <a
                        href="#"
                        className="text-gray-800 hover:underline font-medium"
                      >
                        15-minute call
                      </a>{" "}
                      to discuss your project.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>          </motion.div>
        </div>
      </div>      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="bg-white text-gray-900 border-0 shadow-2xl max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-auto">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-xl sm:text-2xl font-serif font-light px-2">
              Message Sent Successfully!
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base px-2">
              Thank you for reaching out! I've received your message and will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all font-medium text-sm sm:text-base w-full sm:w-auto"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>      {/* Error Modal */}
      <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
        <DialogContent className="bg-white text-gray-900 border-0 shadow-2xl max-w-sm sm:max-w-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-auto">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <DialogTitle className="text-center text-xl sm:text-2xl font-serif font-light px-2">
              Message Failed to Send
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base px-2">
              {errorMessage}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={() => setShowErrorModal(false)}
              className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl hover:from-gray-800 hover:to-gray-600 transition-all font-medium text-sm sm:text-base w-full sm:w-auto"
            >
              Try Again
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
