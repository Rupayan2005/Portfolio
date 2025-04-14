"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface Skill {
  name: string
  category: "frontend" | "other"
  logoPath: string
}

const skills: Skill[] = [
  { name: "HTML/CSS", logoPath: "/images/html-logo.png", category: "frontend" },
  { name: "JavaScript", logoPath: "/images/JavaScript-logo.png", category: "frontend" },
  { name: "TypeScript", logoPath: "/images/Typescript-logo.png", category: "frontend" },
  { name: "React", logoPath: "/images/React-logo.svg", category: "frontend" },
  { name: "Next.js", logoPath: "/images/Next-logo.png", category: "frontend" },
  { name: "Tailwind CSS", logoPath: "/images/Tailwind-logo.png", category: "frontend" },
  { name: "Node.js", logoPath: "/images/NodeJs-logo.png", category: "other" },
  { name: "Scikit-Learn", logoPath: "/images/Scikit_learn_logo.svg", category: "other" },
  { name: "Tensorflow", logoPath: "/images/Tensorflow_logo.png", category: "other" },
  { name: "Mongodb", logoPath: "/images/mongodb-logo.svg", category: "other" },
  { name: "C++", logoPath: "/images/C++logo.png", category: "other" },
  { name: "Python", logoPath: "/images/Python-logo.png", category: "other" },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  }

  const frontendSkills = skills.filter((skill) => skill.category === "frontend")
  const otherSkills = skills.filter((skill) => skill.category === "other")

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-950/5 to-black/0"></div>
      <div className="absolute inset-0 grid-background opacity-20"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4 z-10 relative"
      >
        <motion.div variants={headerVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            I continuously expand my skillset to stay at the forefront of web development and design technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <motion.h3 variants={headerVariants} className="text-2xl font-bold mb-8 relative inline-block">
              Frontend Development
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </motion.h3>

            <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {frontendSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                  }}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center aspect-square transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-3 overflow-hidden">
                    {skill.logoPath ? (
                      <Image
                        src={skill.logoPath || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-xs text-blue-400">Logo</span>
                      </div>
                    )}
                  </div>
                  <span className="font-medium text-center group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <motion.h3 variants={headerVariants} className="text-2xl font-bold mb-8 relative inline-block">
              Other Skills
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></span>
            </motion.h3>

            <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {otherSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                    borderColor: "rgba(168, 85, 247, 0.5)",
                  }}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center aspect-square transition-all duration-300 group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-3 overflow-hidden">
                    {skill.logoPath ? (
                      <Image
                        src={skill.logoPath || "/placeholder.svg"}
                        alt={`${skill.name} logo`}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                        <span className="text-xs text-purple-400">Logo</span>
                      </div>
                    )}
                  </div>
                  <span className="font-medium text-center group-hover:text-purple-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div variants={containerVariants} className="mt-20">
          <motion.div variants={headerVariants} className="text-center mb-10">
            <h3 className="text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                Technologies I Work With
              </span>
            </h3>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Scikit-Learn", "C++"].map((tech, index) => (
              <motion.div
              key={tech}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl blur-xl transform group-hover:scale-110 transition-transform duration-300" />
              
              <div className="relative bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-6 h-full flex items-center justify-center overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    background: [
                      "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
                      "radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
    
                <motion.span 
                  className="font-medium text-white/90 text-center z-10"
                  whileHover={{
                    textShadow: "0 0 8px rgba(255,255,255,0.5)",
                  }}
                >
                  {tech}
                </motion.span>
              </div>
            </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}