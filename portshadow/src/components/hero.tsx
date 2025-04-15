"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { ColourfulText } from "@/components/ui/colourful-text";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      heroRef.current.style.setProperty("--mouse-x", `${x * 20}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y * 20}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-8 overflow-hidden"
      style={{
        backgroundPosition:
          "calc(50% + var(--mouse-x, 0)) calc(50% + var(--mouse-y, 0))",
      }}
    >
      <div className="absolute inset-0 grid-background"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block">Hi, I'm</span>
          <span className="text-gradient glow">
            <ColourfulText text="Rupayan Auddya" />
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl lg:text-3xl mb-8 text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "ML Engineer",
              1000,
              "Creative Technologist",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Blending Art, Code, and AI to shape tomorrow’s digital world. Pushing
          the boundaries of creativity with code and cognition.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-black hover:to-blue-600 text-white border-none px-6 py-3 rounded-lg text-md text-center"
          >
            View My Work
          </a>
          <a
            href="#projects"
            className="bg-gradient-to-r from-black to-blue-600 hover:from-blue-600 hover:to-purple-600 text-white border-none px-6 py-3 rounded-lg text-md text-center"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
      >
        <a
          href="/#about"
          className="flex flex-col items-center text-white/50 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl animate-pulse-slow"></div>
    </section>
  );
}
