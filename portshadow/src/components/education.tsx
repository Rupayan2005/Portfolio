"use client"

import { JSX } from "react"
import { motion } from "framer-motion"
import { Award, BookOpen, GraduationCap, Calendar, Percent, MapPin, Sparkles } from "lucide-react"
import RotatingCube from "@/components/rotating-cube"
import { useInView } from "react-intersection-observer"
import ParticleWave from "@/components/particle-wave"
import { Badge } from "@/components/ui/badge"

const educationData = [
  {
    id: 1,
    level: "Class 10",
    school: "Baranagar Ramkrishna Mission Ashrama High School(H.S)",
    board: "WBBSE Board",
    year: "2021",
    percentage: "86%",
    location: "Baranagar, Kolkata",
    color: "from-purple-500 to-blue-500",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    id: 2,
    level: "Class 12",
    school: "Baranagar Ramkrishna Mission Ashrama High School(H.S)",
    board: "WBCHSE Board",
    year: "2023",
    percentage: "87.4%",
    location: "Baranagar, Kolkata",
    color: "from-blue-500 to-cyan-500",
    icon: <Award className="h-6 w-6" />,
  },
  {
    id: 3,
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
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-30"></div>
      <RotatingCube position="top-right" size={80} color="rgba(168, 85, 247, 0.15)" glowColor="rgba(168, 85, 247, 0.3)" />
      <RotatingCube position="bottom-left" size={100} color="rgba(59, 130, 246, 0.15)" glowColor="rgba(59, 130, 246, 0.3)" rotationSpeed={25} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Academic Journey</h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Exploring the path of knowledge and growth through formal education and continuous learning
            </p>
          </motion.div>

          <div className="mb-16">
            <ParticleWave height={80} color="rgba(168, 85, 247, 0.4)" />
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>

            <div className="flex flex-col gap-24">
              {educationData.map((education, index) => (
                <EducationCard key={education.id} education={education} index={index} isInView={inView} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <ParticleWave height={80} color="rgba(34, 211, 238, 0.4)" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface Education {
  id: number
  level: string
  school: string
  board: string
  year: string
  percentage: string
  location: string
  color: string
  icon: JSX.Element
  current?: boolean
}

function EducationCard({ education, index, isInView }: { education: Education; index: number; isInView: boolean }) {
  const isEven = index % 2 === 0

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -50 : 50,
      y: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      {isEven && <div className="hidden md:block md:w-5/12"></div>}

      {/* Timeline node */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ delay: 0.2 * index, duration: 0.5 }}
        className="relative z-10"
      >
        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${education.color} flex items-center justify-center`}>
          <div className="w-3 h-3 rounded-full bg-white"></div>
        </div>
      </motion.div>

      <motion.div
        variants={cardVariants}
        className={`relative w-full md:w-5/12 glass-effect rounded-2xl overflow-hidden ${education.current ? "pulse-glow" : ""}`}
      >
        <div className={`absolute top-1/2 hidden md:block h-1 w-8 bg-gradient-to-r ${isEven ? "from-purple-500 to-transparent left-0 -translate-x-full" : "from-transparent to-purple-500 right-0 translate-x-full"} transform -translate-y-1/2`}></div>

        <div className="p-6 relative overflow-hidden">
          <div className={`absolute -inset-1 bg-gradient-to-r ${education.color} opacity-20 blur-xl rounded-full`}></div>

          <div className="flex items-center gap-4 mb-4 relative">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${education.color} text-white`}>{education.icon}</div>
            <div>
              <h3 className="text-2xl font-bold">{education.level}</h3>
              <p className="text-gray-400">{education.school}</p>
            </div>
            {education.current && (
              <Badge className="absolute -right-1 -top-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white border-none">
                <Sparkles className="h-3 w-3 mr-1" /> Current
              </Badge>
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-300">
                <BookOpen className="h-4 w-4 text-purple-400" />
                <span>{education.board}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>{education.year}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Percent className="h-4 w-4 text-cyan-400" />
                <span>{education.percentage}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>{education.location}</span>
              </div>
            </div>
            {education.current && (
              <motion.div
                className="mt-4 p-3 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-white/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="text-sm font-semibold mb-1">Current Focus</h4>
                <p className="text-xs text-gray-400">
                  Specializing in AI and Machine Learning with a focus on neural networks and deep learning applications.
                </p>
              </motion.div>
            )}
          </div>

          <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"></div>
          <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-lg"></div>
        </div>
      </motion.div>

      {!isEven && <div className="hidden md:block md:w-5/12"></div>}
    </div>
  )
}
