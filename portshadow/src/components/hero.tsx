"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Eye,
  Sparkles,
  Zap,
  ChevronRight,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { ColourfulText } from "@/components/ui/colourful-text";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      setMousePosition({ x: x * 20, y: y * 20 });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-8 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      {/* Main Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
      >
        {/* Main Heading - Ultra Modern */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              className="block text-white/95 mb-5 font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hi, I'm
            </motion.span>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                type: "spring",
                bounce: 0.2,
              }}
              className="relative inline-block"
            >
              <ColourfulText text="Rupayan Auddya" />
            </motion.div>
          </motion.h1>
        </motion.div>

        {/* Animated Subtitle - Enhanced */}
        <motion.div
          variants={itemVariants}
          className="text-2xl md:text-3xl lg:text-3xl mb-8 h-20 flex items-center justify-center"
        >
          <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-10 h-10 text-blue-400" />
            </motion.div>
            <div className="w-px h-8 bg-white/20" />
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "ML Engineer",
                2000,
                "Creative Technologist",
                2000,
                "Digital Innovator",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-bold tracking-wide"
            />
          </div>
        </motion.div>

        {/* Description - Enhanced Typography */}
        <motion.p
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Blending{" "}
          <span className="text-blue-400 font-bold bg-blue-400/10 px-2 py-1 rounded-lg">
            Art
          </span>
          ,{" "}
          <span className="text-purple-400 font-bold bg-purple-400/10 px-2 py-1 rounded-lg">
            Code
          </span>
          , and{" "}
          <span className="text-cyan-400 font-bold bg-cyan-400/10 px-2 py-1 rounded-lg">
            AI
          </span>{" "}
          to shape tomorrow's digital world.
          <br className="hidden md:block" />
          <span className="text-white/60 text-lg block mt-2">
            Pushing the boundaries of creativity with cutting-edge technology.
          </span>
        </motion.p>

        {/* Ultra-Modern Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Primary CTA Button */}
          <motion.a
            href="#projects"
            className="group relative overflow-hidden rounded-2xl px-8 py-4 text-lg font-semibold text-white transition-all duration-300"
            style={{
              background:
                "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #06b6d4 100%)",
              boxShadow:
                "0 8px 32px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative z-10 flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>View My Work</span>
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>

            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
          </motion.a>

          {/* Secondary CTA Button */}
          <motion.a
            href="/resume/Resume_2.pdf"
            download="My_Resume.pdf"
            className="group relative overflow-hidden rounded-2xl px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
              backdropFilter: "blur(20px) saturate(150%)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow:
                "0 4px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative z-10 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
        }}
        className="mt-auto pt-8 md:hidden flex justify-center"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-white/50 hover:text-white transition-colors group"
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-sm mb-4 group-hover:text-blue-400 transition-colors duration-300 font-medium tracking-wider">
            Discover More
          </span>
          <div className="relative">
            <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center group-hover:border-blue-400/50 transition-colors duration-300">
              <motion.div
                className="w-1 h-3 bg-white/50 rounded-full mt-2 group-hover:bg-blue-400 transition-colors duration-300"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.a>
      </motion.div>
    </section>
  );
}
