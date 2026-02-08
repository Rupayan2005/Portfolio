"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  GraduationCap,
  Calendar,
  Percent,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";

const educationData = [
  {
    id: 1,
    level: "Bachelor's in Technology",
    school: "Heritage Institute of Technology",
    board: "Computer Science & Engineering(AI/ML)",
    year: "2023 - Present",
    percentage: "Current CGPA: 9.2",
    location: "Kolkata, India",
    color: "from-cyan-500 to-purple-500",
    icon: <GraduationCap className="h-6 w-6" />,
    current: true,
  },
  {
    id: 2,
    level: "Class 12",
    school: "Baranagar Ramkrishna Mission Ashrama High School(H.S)",
    board: "WBCHSE Board",
    year: "2023",
    percentage: "Percentage: 87.4%",
    location: "Baranagar, Kolkata",
    color: "from-blue-500 to-cyan-500",
    icon: <Award className="h-6 w-6" />,
  },
  {
    id: 3,
    level: "Class 10",
    school: "Baranagar Ramkrishna Mission Ashrama High School(H.S)",
    board: "WBBSE Board",
    year: "2021",
    percentage: "Percentage: 86%",
    location: "Baranagar, Kolkata",
    color: "from-purple-500 to-blue-500",
    icon: <BookOpen className="h-6 w-6" />,
  },
];

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const fadeIn = {
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
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Clean modern background */}
      <div className="absolute inset-0"></div>

      {/* Ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Ultra-modern section header */}
          <motion.div variants={fadeIn} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              Academic <span className="bg-clip-text text-white">Journey</span>
            </h2>

            {/* Enhanced decorative line */}
            <div className="relative w-32 h-1 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-600 rounded-full"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-full blur-sm"></div>
            </div>

            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Exploring the path of knowledge and growth through formal
              education and continuous learning in technology and innovation
            </p>
          </motion.div>

          {/* Modern timeline container */}
          <div className="relative">
            {/* Enhanced timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 shadow-lg shadow-blue-500/20"></div>

            <div className="space-y-16">
              {educationData.map((education, index) => (
                <EducationCard
                  key={education.id}
                  education={education}
                  index={index}
                  isInView={inView}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface Education {
  id: number;
  level: string;
  school: string;
  board: string;
  year: string;
  percentage: string;
  location: string;
  color: string;
  icon: JSX.Element;
  current?: boolean;
}

function EducationCard({
  education,
  index,
  isInView,
}: {
  education: Education;
  index: number;
  isInView: boolean;
}) {
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -60 : 60,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  return (
    <div className="relative flex items-center">
      {/* Mobile/tablet layout helper */}
      <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-8">
        {/* Left spacer for even cards on desktop */}
        {isEven && <div className="hidden md:block md:w-5/12"></div>}

        {/* Timeline node - enhanced */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
          }
          transition={{
            delay: 0.3 + index * 0.2,
            duration: 0.6,
            type: "spring",
            bounce: 0.3,
          }}
          className="relative z-20 flex-shrink-0 -ml-5 md:ml-0"
        >
          <div className="relative">
            {/* Main node */}
            <div
              className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${education.color} flex items-center justify-center shadow-lg`}
            >
              <div className="text-white">{education.icon}</div>
            </div>

            {/* Pulse effect for current education */}
            {education.current && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse opacity-30"></div>
            )}

            {/* Glow effect */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${education.color} blur-lg opacity-20`}
            ></div>
          </div>
        </motion.div>

        {/* Education card - ultra-modern design */}
        <motion.div
          variants={cardVariants}
          className={`relative w-full md:w-5/12 group ${
            education.current ? "ring-2 ring-cyan-400/30" : ""
          }`}
        >
          {/* Connecting line to timeline */}
          <div
            className={`absolute top-6 w-8 h-1 rounded-full bg-gradient-to-r ${
              education.color
            } hidden md:block ${isEven ? "right-full mr-2" : "left-full ml-2"}`}
          ></div>

          {/* Main card with glassmorphism */}
          <div
            className="relative rounded-3xl p-8 border transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
              backdropFilter: "blur(24px) saturate(150%)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Current badge */}
            {education.current && (
              <div className="absolute -top-3 -right-3">
                <Badge
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-none shadow-lg"
                  style={{
                    boxShadow: "0 4px 12px rgba(34, 211, 238, 0.3)",
                  }}
                >
                  <Sparkles className="h-3 w-3 mr-1" /> Current
                </Badge>
              </div>
            )}

            {/* Header section */}
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`p-4 rounded-2xl bg-gradient-to-r ${education.color} text-white shadow-lg`}
              >
                {education.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {education.level}
                </h3>
                <p className="text-white/70 text-lg font-medium">
                  {education.school}
                </p>
              </div>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div
                className="flex items-center gap-3 p-3 rounded-xl border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <BookOpen className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-white/80 text-sm font-medium">
                  {education.board}
                </span>
              </div>

              <div
                className="flex items-center gap-3 p-3 rounded-xl border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Calendar className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-white/80 text-sm font-medium">
                  {education.year}
                </span>
              </div>

              <div
                className="flex items-center gap-3 p-3 rounded-xl border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <Percent className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white/80 text-sm font-medium">
                  {education.percentage}
                </span>
              </div>

              <div
                className="flex items-center gap-3 p-3 rounded-xl border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <MapPin className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-white/80 text-sm font-medium">
                  {education.location}
                </span>
              </div>
            </div>

            {/* Current focus section */}
            {education.current && (
              <motion.div
                className="p-4 rounded-2xl border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-bold mb-2 text-white">
                  Current Focus
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Specializing in AI and Machine Learning with a focus on neural
                  networks and deep learning applications.
                </p>
              </motion.div>
            )}

            {/* Hover glow effect */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${education.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
            ></div>
          </div>
        </motion.div>

        {/* Right spacer for odd cards on desktop */}
        {!isEven && <div className="hidden md:block md:w-5/12"></div>}
      </div>
    </div>
  );
}
