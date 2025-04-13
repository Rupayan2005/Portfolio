"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Skill {
  name: string
  level: number
  color: string
}

const frontendSkills: Skill[] = [
  { name: "HTML/CSS", level: 95, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 90, color: "from-yellow-500 to-amber-500" },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
  { name: "React", level: 92, color: "from-cyan-500 to-blue-500" },
  { name: "Next.js", level: 88, color: "from-gray-800 to-gray-600" },
  { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-blue-500" },
]

const otherSkills: Skill[] = [
  { name: "UI/UX Design", level: 85, color: "from-purple-500 to-pink-500" },
  { name: "Node.js", level: 75, color: "from-green-500 to-emerald-500" },
  { name: "GraphQL", level: 70, color: "from-pink-500 to-purple-500" },
  { name: "Three.js", level: 65, color: "from-blue-500 to-indigo-500" },
  { name: "Docker", level: 60, color: "from-blue-500 to-cyan-500" },
  { name: "AWS", level: 55, color: "from-orange-500 to-amber-500" },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, ease: "easeInOut" },
    }),
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 grid-background"></div>

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
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            I continuously expand my skillset to stay at the forefront of web development and design technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={fadeIn}>
            <h3 className="text-2xl font-bold mb-8">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-white/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      custom={skill.level}
                      variants={skillVariants}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-2xl font-bold mb-8">Other Skills</h3>
            <div className="space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-white/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      custom={skill.level}
                      variants={skillVariants}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn}
          className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"].map((tech) => (
            <div
              key={tech}
              className="glass rounded-xl p-4 flex items-center justify-center aspect-square transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <span className="text-center font-medium group-hover:text-gradient transition-all duration-300">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
