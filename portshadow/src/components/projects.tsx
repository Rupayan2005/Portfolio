"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  ChevronRight,
  ChevronDown,
  Filter,
  Star,
  Code,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  specifications: string[];
  demoUrl?: string;
  githubUrl: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  year: string;
  status: "completed" | "In-progress" | "planning";
}

const projects: Project[] = [
  {
    id: 1,
    title: "CarbonTrack - AI Carbon Footprint Dashboard",
    description:
      "An AI-powered dashboard for tracking and reducing carbon emissions and personal carbon footprint.",
    image: "/images/CarbonTrack Pic.avif?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    specifications: ["Full Stack", "AI/ML"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI API",
      "Chart.js",
    ],
    demoUrl: "https://carbontrack-demo.vercel.app",
    githubUrl: "https://github.com/geothermal-1408/co2",
    year: "2024",
    status: "completed",
    longDescription:
      "CarbonTrack is an AI-powered web application designed to help individuals and organizations monitor their carbon emissions and overall carbon footprint. The dashboard provides real-time insights, personalized recommendations, and actionable strategies to reduce and neutralize emissions using AI-driven suggestions.",
    features: [
      "Real-time carbon footprint tracking",
      "Visual dashboards with interactive graphs and charts",
      "AI-powered emission neutralization suggestions",
      "Personalized insights and tips for carbon reduction",
      "Fully responsive design with dark mode support",
    ],
  },
  {
    id: 2,
    title: "AURORA - Modern Video Upload Platform",
    description:
      "A modern video upload platform built with Next.js where users can upload, manage, and organize their videos seamlessly.",
    image: "/images/Aurora-project-image.jpeg?height=600&width=800",
    tags: ["Next.js", "Video Upload", "ImageKit", "MongoDB", "NextAuth"],
    specifications: ["Full Stack", "Video Platform"],
    technologies: [
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js API Routes",
      "MongoDB",
      "NextAuth.js",
      "ImageKit",
    ],
    githubUrl: "https://github.com/Rupayan2005/Aurora",
    year: "2025",
    status: "completed",
    longDescription:
      "AURORA is a modern video upload and management platform built using Next.js. It allows users to securely authenticate, upload videos with real-time processing, and manage their uploaded content through a personal dashboard with full profile and video management features.",
    features: [
      "Secure authentication with email/password and Google OAuth",
      "Video upload with real-time processing",
      "Personal dashboard for managing uploaded videos",
      "Delete functionality for uploaded videos",
      "Responsive mobile-first UI with Tailwind CSS",
      "Immediate upload to ImageKit on video selection",
      "User profile and video management system",
    ],
  },
  {
    id: 3,
    title: "NeuroChat - Modern Real-Time Chat Application",
    description:
      "A modern real-time chat app with Socket.io messaging, 35+ themes, image sharing, and secure JWT authentication.",
    image: "/images/NeuroChat-project-image.png?height=600&width=800",
    tags: ["Next.js", "Socket.io", "MongoDB", "JWT", "Real-Time Chat"],
    specifications: ["Full Stack", "Chat Platform"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "MongoDB",
      "JWT Authentication",
      "ImageKit",
    ],
    demoUrl: "https://neuro-chat-sooty.vercel.app",
    githubUrl: "https://github.com/Rupayan2005/NeuroChat",
    year: "2025",
    status: "completed",
    longDescription:
      "NeuroChat is a modern real-time chat application designed with a premium UI/UX experience. It supports instant messaging with Socket.io, live online presence, persistent chat history stored in MongoDB, rich media sharing with ImageKit optimization, and strong JWT-based authentication. The app also includes 35+ themes, profile management, and real-time settings that apply instantly without refreshing.",
    features: [
      "Real-time messaging with Socket.io",
      "35+ beautiful themes with live preview switching",
      "Responsive UI for desktop, tablet, and mobile",
      "Smooth animations and micro-interactions",
      "Professional welcome page with interactive previews",
      "Online status and live presence indicators",
      "Persistent message history stored in MongoDB",
      "Auto-scroll with smooth message transitions",
      "Image sharing with preview support",
      "Drag-and-drop image uploads",
      "Image optimization using ImageKit",
      "Secure JWT authentication with HTTP-only cookies",
      "Password strength validation with real-time feedback",
      "Profile management (picture + personal info)",
      "Real-time settings updates without page refresh",
    ],
  },
  {
    id: 4,
    title: "Personal AI Assistant (Mood-Based Recommender + Routine Generator)",
    description:
      "A smart personal AI built in Next.js that chats with users, detects mood, recommends books/movies/music, and generates personalized daily routines.",
    image: "/images/personal-assistant-project-image.webp?height=600&width=800",
    tags: [
      "Next.js",
      "AI",
      "Mood Detection",
      "Recommendations",
      "Routine Generator",
    ],
    specifications: ["AI Assistant", "Personalization"],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Groq API",
    ],
    demoUrl: "https://personal-ai-six.vercel.app",
    githubUrl: "https://github.com/Rupayan2005/PersonalAI",
    year: "2025",
    status: "completed",
    longDescription:
      "A personal AI assistant built using Next.js that acts like a friendly companion. It can chat naturally, understand the user's mood, recommend books, movies, and music accordingly, and generate a customized daily routine to improve productivity and wellbeing.",
    features: [
      "AI chat with memory-based personalization",
      "Mood detection from user messages",
      "Book, movie, and music recommendations based on mood",
      "Daily routine generator with flexible time blocks",
    ],
  },
  {
    id: 5,
    title: "VerifyIQ - Academic Credential Verification",
    description:
      "A decentralized platform for verifying academic credentials and predicting skills using AI.",
    image: "/images/VerifyIQ-pic.webp?height=600&width=800",
    tags: [
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Blockchain",
      "Prisma",
      "PostgreSQL",
      "AI",
    ],
    specifications: ["Full Stack", "Blockchain", "AI/ML"],
    technologies: [
      "React",
      "TypeScript",
      "Solidity",
      "Prisma",
      "PostgreSQL",
      "Web3.js",
    ],
    githubUrl: "https://github.com/Rupayan2005/VerifyIQ",
    year: "2024",
    status: "In-progress",
    longDescription:
      "VerifyIQ is a blockchain-based platform for secure and tamper-proof academic credential verification. It combines decentralized technology with AI-powered skill prediction to help institutions, students, and employers validate educational records. The platform includes credential storage on blockchain, intelligent skill inference, role-based dashboards, and real-time verification access.",
    features: [
      "Secure credential storage on blockchain",
      "AI-powered skill prediction from academic data",
      "Student, institution, and employer dashboards",
      "Real-time verification system for credentials",
      "Responsive design with intuitive UI/UX",
    ],
  },
  {
    id: 6,
    title: "SignSpeak - Sign Language Detection System",
    description:
      "A machine learning system that detects and classifies sign language gestures (A, B, L) using real-time hand tracking.",
    image: "/images/sign-lang-project-image.jpeg?height=600&width=800",
    tags: [
      "Machine Learning",
      "Computer Vision",
      "MediaPipe",
      "OpenCV",
      "Python",
    ],
    specifications: ["AI/ML", "Gesture Recognition"],
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Scikit-learn",
      "NumPy",
      "Random Forest",
    ],
    githubUrl: "https://github.com/Rupayan2005/Sign-Language-Detection",
    year: "2025",
    status: "completed",
    longDescription:
      "SignSpeak is a machine learning-based sign language detection system that uses MediaPipe for hand landmark extraction and a Random Forest classifier for gesture recognition. It performs real-time hand tracking, feature extraction, and classification to detect 3 sign language gestures (A, B, L) with high accuracy.",
    features: [
      "Real-time hand landmark detection using MediaPipe",
      "Classification of 3 sign language gestures (A, B, L)",
      "Random Forest model for accurate predictions",
      "Dataset creation and preprocessing pipeline",
      "Model evaluation and testing framework",
    ],
  },
  {
    id: 7,
    title: "SoulSync - AI Girlfriend Chat App (ARIA)",
    description:
      "A WhatsApp-style AI girlfriend chat app where ARIA responds using Gemini, voice input, and text-to-speech.",
    image: "/images/ai-girlfriend-project-image.webp?height=600&width=800",
    tags: ["JavaScript", "Gemini API", "Web Speech API", "Chat App", "TTS"],
    specifications: ["AI Chatbot", "Voice Assistant"],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Gemini API",
      "Web Speech API",
      "localStorage",
    ],
    demoUrl: "https://rupayan2005.github.io/Cool-Projects/AI%20Girlfriend/",
    githubUrl: "https://github.com/Rupayan2005/Cool-Projects",
    year: "2025",
    status: "completed",
    longDescription:
      "SoulSync is a fun and interactive AI girlfriend chat application built using HTML, CSS, and JavaScript. The virtual companion ARIA chats in a modern WhatsApp-style interface, supports speech-to-text input, generates replies using Google Gemini (gemini-2.0-flash), and speaks back using browser-based text-to-speech. The app includes a settings panel for voice controls, model selection, and allows saving/exporting/importing chat history and settings using localStorage.",
    features: [
      "WhatsApp-style chat interface",
      "ARIA as the virtual AI girlfriend companion",
      "Voice input using Web Speech API (Speech-to-Text)",
      "Gemini-powered AI responses (gemini-2.0-flash)",
      "Text-to-speech replies using speechSynthesis",
      "Custom settings panel (pitch, speed, voice toggle, model selection)",
      "Save/export/import settings and chat history using JSON",
      "Persistent storage using localStorage",
    ],
  },
  {
    id: 8,
    title: "FlapRush - Flappy Bird Game",
    description:
      "A smooth Flappy Bird clone built with HTML, CSS, and JavaScript featuring animations and sound effects.",
    image: "/images/flappy-bird-project-image.webp?height=600&width=800",
    tags: ["JavaScript", "Game", "Flappy Bird", "Animations", "Sound Effects"],
    specifications: ["Game", "Interactive Project"],
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://rupayan2005.github.io/Cool-Projects/Flappy%20Bird/",
    githubUrl: "https://github.com/Rupayan2005/Cool-Projects",
    year: "2025",
    status: "completed",
    longDescription:
      "FlapRush is a Flappy Bird-inspired browser game built using HTML, CSS, and JavaScript. It includes smooth animations, responsive gameplay controls, and sound effects for jumping, scoring, and collisions. The game delivers a fun arcade-style experience with clean UI and engaging visual feedback.",
    features: [
      "Flappy Bird-style gameplay with smooth controls",
      "Animated bird and obstacle movement",
      "Sound effects for jump, score, and game over",
      "Score counter with real-time updates",
      "Restart functionality with instant replay",
      "Responsive browser-based design",
    ],
  },
  {
    id: 9,
    title: "Boishaak - Bengali Theme Based Programming Language",
    description:
      "A Bengali-inspired programming language that makes coding easier for Bengali speakers with simple syntax and a web-based IDE.",
    image: "/images/boishaak-project-image.webp?height=600&width=800",
    tags: ["Programming Language", "Compiler", "Web IDE", "Beginner Friendly"],
    specifications: ["Language Design", "Web-Based IDE"],
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Parser / Lexer",
      "Interpreter",
      "Web IDE",
    ],
    demoUrl: "https://rupayan2005.github.io/Cool-Projects/My%20Language/",
    githubUrl: "https://github.com/Rupayan2005/Cool-Projects",
    year: "2025",
    status: "completed",
    longDescription:
      "Boishaak is a Bengali-themed programming language created to make coding more accessible and intuitive for Bengali speakers. It uses familiar Bengali keywords like 'eta' for variable declaration and 'lekh' for output, while supporting modern concepts such as type inference. The project also includes a web-based IDE that allows users to write and run Boishaak code directly in the browser with real-time execution and instant feedback.",
    features: [
      "Bengali-inspired syntax using familiar keywords",
      "Simple variable declaration using 'eta'",
      "Output statements using 'lekh'",
      "Automatic type inference for variables",
      "Web-based IDE to run code in the browser",
      "Real-time execution with instant output",
      "Beginner-friendly language design",
    ],
  },
  {
    id: 10,
    title: "SnakeVision - Touchless Snake Game (Gesture Control)",
    description:
      "A modern Snake game controlled using hand gestures via MediaPipe and OpenCV, with smooth animations and particle effects.",
    image: "/images/snake-game-image.jpg?height=600&width=800",
    tags: ["Computer Vision", "MediaPipe", "OpenCV", "Game", "Gesture Control"],
    specifications: ["CV Project", "Touchless Gaming"],
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "NumPy",
      "Game Loop Rendering",
    ],
    githubUrl: "https://github.com/Rupayan2005/touchess-game",
    year: "2025",
    status: "completed",
    longDescription:
      "SnakeVision is a modern remake of the classic Snake game with touchless gesture-based controls using real-time hand tracking. Built with MediaPipe and OpenCV, the game supports both keyboard and gesture input modes, runs smoothly at 60 FPS, and includes particle effects, a clean UI, persistent high-score storage, and advanced gesture smoothing for accurate and responsive gameplay.",
    features: [
      "Touchless snake control using webcam-based hand gestures",
      "Dual input modes (keyboard + gesture control)",
      "Smooth 60 FPS gameplay with optimized rendering",
      "Persistent high-score storage with session management",
      "Modern minimalist UI with smooth animations",
      "Dynamic particle effects for enhanced visuals",
      "Responsive design for multiple screen resolutions",
      "Performance toggles to adjust visual effects",
      "Gesture smoothing + input buffering for low-latency controls",
    ],
  },
  {
    id: 11,
    title: "ShadowBot - PDF Chatbot",
    description:
      "A Next.js PDF chatbot that lets users upload documents and ask intelligent questions with contextual Gemini AI answers.",
    image: "/images/pdf-chatbot-image.jpeg?height=600&width=800",
    tags: ["Next.js", "Gemini API", "PDF Chatbot", "Tailwind", "TypeScript"],
    specifications: ["AI Chatbot"],
    technologies: [
      "Next.js 14+ (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Google Gemini API",
      "pdf-parse",
      "Vercel",
    ],
    githubUrl: "https://github.com/Rupayan2005/Diving-into-the-Next",
    year: "2025",
    status: "completed",
    longDescription:
      "ShadowBot is a powerful PDF chatbot built with Next.js that allows users to upload PDF documents, automatically extract text, and ask intelligent questions about the content. It uses Google's Gemini API to generate accurate contextual answers through a modern real-time chat interface with a clean responsive UI.",
    features: [
      "PDF upload and automatic text extraction",
      "Context-aware Q&A based on uploaded documents",
      "Gemini AI integration for intelligent responses",
      "Modern responsive UI built with Tailwind CSS",
      "Real-time chat interface for smooth conversations",
      "Built with Next.js App Router + TypeScript",
      "Deployed on Vercel",
    ],
  },
  {
    id: 12,
    title: "Neurex - AI Mental Health Predictor",
    description:
      "A privacy-focused AI system for predicting mental health conditions using encrypted data.",
    image: "/images/Neurex-pic.png?height=600&width=800",
    tags: [
      "Next.js",
      "TypeScript",
      "Privacy",
      "Encryption",
      "Mental Health",
      "AI ChatBot",
    ],
    specifications: ["AI/ML", "Healthcare Tech"],
    technologies: [
      "Next.js",
      "Python",
      "TensorFlow",
      "Encryption APIs",
      "OpenAI",
    ],
    githubUrl: "https://github.com/Davygupta47/Neurex",
    year: "2024",
    status: "completed",
    longDescription:
      "Neurex is an AI-powered mental health prediction platform that prioritizes user privacy by training models on encrypted datasets. The system analyzes behavioral and emotional patterns to provide early insights into potential mental health conditions. Designed for both individuals and healthcare professionals, Neurex blends ethical AI with real-world mental health support.",
    features: [
      "Encrypted training data for full privacy",
      "AI-based prediction of mental health conditions",
      "Personalized insights and risk indicators",
      "Secure and ethical data handling",
      "Responsive design for accessibility on all devices",
    ],
  },
];

// Custom hook to detect mobile vs desktop
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const isMobile = useIsMobile();

  // Reset visible count when filter changes or on mobile/desktop switch
  useEffect(() => {
    setVisibleCount(isMobile ? 3 : 6);
  }, [activeFilter, isMobile]);

  // Get all unique specifications for filter buttons
  const allSpecifications = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.specifications))),
  ];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.specifications.includes(activeFilter),
        );

  // Get visible projects based on current count
  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;
  const incrementAmount = isMobile ? 3 : 6;

  const handleShowMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + incrementAmount, filteredProjects.length),
    );
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const filterVariants = {
    inactive: {
      scale: 1,
      opacity: 1,
    },
    active: {
      scale: 1.02,
      opacity: 1,
    },
  };

  return (
    <section className="pt-10 pb-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-background"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="container mx-auto px-4 z-10 relative"
      >
        {/* Header */}
        <motion.div variants={fadeIn} className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover my innovative solutions spanning from AI-powered
            applications to blockchain technologies. Each project represents a
            unique challenge solved with cutting-edge technology.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={fadeIn} className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">
              Filter Projects
            </h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {allSpecifications.map((spec, index) => (
                <motion.button
                  key={spec}
                  onClick={() => setActiveFilter(spec)}
                  variants={filterVariants}
                  animate={activeFilter === spec ? "active" : "inactive"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "relative px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 backdrop-blur-md border overflow-hidden group",
                    "min-h-[48px] flex items-center justify-center text-center",
                    activeFilter === spec
                      ? "border-blue-500/50 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 shadow-lg shadow-blue-500/20"
                      : "border-white/10 bg-black/20 text-white/70 hover:border-white/30 hover:bg-white/5 hover:text-white/90",
                  )}
                >
                  {/* Background effect for active state */}
                  {activeFilter === spec && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                  <span className="relative z-10 leading-tight">{spec}</span>

                  {/* Active indicator */}
                  {activeFilter === spec && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Active filter indicator */}
            {activeFilter !== "All" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 mt-10 text-sm text-white/60"
              >
                <span>Showing</span>
                <Badge
                  variant="outline"
                  className="bg-green-500/20 border-green-500/30 text-green-400"
                >
                  {filteredProjects.length} project
                  {filteredProjects.length !== 1 ? "s" : ""}
                </Badge>
                <span>for:</span>
                <Badge
                  variant="outline"
                  className="bg-blue-500/20 border-blue-500/30 text-blue-400"
                >
                  {activeFilter}
                </Badge>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="text-white/40 hover:text-white/70 transition-colors ml-2 px-2 py-1 rounded hover:bg-white/5"
                >
                  ✕ Clear
                </button>
              </motion.div>
            )}

            {activeFilter === "All" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 mt-10 text-sm text-white/50"
              >
                <span>Showing all</span>
                <Badge
                  variant="outline"
                  className="bg-purple-500/20 border-purple-500/30 text-purple-400"
                >
                  {projects.length} project{projects.length !== 1 ? "s" : ""}
                </Badge>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index < (isMobile ? 3 : 6) ? index * 0.1 : 0.1,
              }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 h-full flex flex-col">
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-xs font-medium backdrop-blur-md",
                      project.status === "completed"
                        ? "bg-green-500/20 border-green-500/30 text-green-400"
                        : project.status === "In-progress"
                          ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-400"
                          : "bg-blue-500/20 border-blue-500/30 text-blue-400",
                    )}
                  >
                    {project.status === "completed"
                      ? "✨ Completed"
                      : project.status === "In-progress"
                        ? "🚀 In Progress"
                        : "💡 Planning"}
                  </Badge>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge
                    variant="outline"
                    className="bg-black/40 border-white/20 text-white/80 backdrop-blur-md"
                  >
                    {project.year}
                  </Badge>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  {/* Hover overlay with quick actions */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/20"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors border border-white/20"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Specifications */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.specifications.map((spec, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/30 text-blue-400 hover:border-blue-400/50 transition-colors"
                      >
                        <Star className="w-3 h-3 mr-1" />
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {project.tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 backdrop-blur-md border border-blue-500/30 rounded-xl py-3 px-4 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Code className="w-4 h-4" />
                        View Details
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </motion.button>
                    </DialogTrigger>

                    {/* Enhanced Dialog */}
                    <DialogContent className="w-full max-w-4xl bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-h-[90vh] overflow-y-auto">
                      <DialogHeader className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                              {selectedProject?.title}
                            </DialogTitle>
                            <div className="flex items-center gap-3 mb-4">
                              <Badge
                                variant="outline"
                                className={cn(
                                  "backdrop-blur-md",
                                  selectedProject?.status === "completed"
                                    ? "bg-green-500/20 border-green-500/30 text-green-400"
                                    : selectedProject?.status === "In-progress"
                                      ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-400"
                                      : "bg-blue-500/20 border-blue-500/30 text-blue-400",
                                )}
                              >
                                {selectedProject?.year}
                              </Badge>
                              <Badge
                                variant="outline"
                                className="bg-black/40 border-white/20 text-white/80"
                              >
                                {selectedProject?.status}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <DialogDescription className="text-white/80 text-lg leading-relaxed">
                          {selectedProject?.longDescription}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
                            <Star className="w-5 h-5 text-yellow-400" />
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {selectedProject?.features.map((feature, index) => (
                              <li
                                key={index}
                                className="text-white/80 flex items-start gap-2"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-4 text-white flex items-center gap-2">
                            <Code className="w-5 h-5 text-green-400" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject?.technologies.map(
                              (tech, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/30 text-green-400"
                                >
                                  {tech}
                                </Badge>
                              ),
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8 pt-6 border-t border-white/10">
                        <motion.a
                          href={selectedProject?.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-600/20 to-gray-700/20 hover:from-gray-600/30 hover:to-gray-700/30 backdrop-blur-md border border-gray-500/30 rounded-xl text-white font-medium transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                          View Source Code
                        </motion.a>
                        {selectedProject?.demoUrl && (
                          <motion.a
                            href={selectedProject.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 backdrop-blur-md border border-blue-500/30 rounded-xl text-white font-medium transition-all duration-300"
                          >
                            <Globe className="w-5 h-5" />
                            View Live Demo
                          </motion.a>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {hasMoreProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={handleShowMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 backdrop-blur-md border border-blue-500/30 hover:border-blue-400/50 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <span>Show More Projects</span>
              <span className="text-sm text-white/60">
                ({filteredProjects.length - visibleCount} remaining)
              </span>
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </motion.div>
        )}

        {/* All projects loaded message */}
        {!hasMoreProjects &&
          filteredProjects.length > 0 &&
          visibleCount > (isMobile ? 3 : 6) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-8"
            >
              <span className="text-white/50 text-sm">
                All {filteredProjects.length} projects loaded
              </span>
            </motion.div>
          )}

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No projects found
            </h3>
            <p className="text-white/60">
              Try selecting a different filter to see more projects.
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
