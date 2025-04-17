"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer";
import { Code, Layout, Server, Cloud, Database, BarChart3, Brain, Wrench } from "lucide-react"

// Define the Skill type
type Skill = {
  name: string;
  logoPath: string;
};

// Define skill categories and their respective skills
const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    icon: <Code className="h-6 w-6" />,
    color: "from-purple-500 to-blue-500",
    skills: [
      { name: "C", logoPath: "/images/clogo.png" },
      { name: "C++", logoPath: "/images/C++logo.png" },
      { name: "JavaScript", logoPath: "/images/javascript.svg" },
      { name: "TypeScript", logoPath: "/images/typescript.svg" },
      { name: "Python", logoPath: "/images/python.svg" },
      { name: "R", logoPath: "/images/r.png" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", logoPath: "/images/React-logo.svg" },
      { name: "Next.js", logoPath: "/images/next1.png" },
      { name: "HTML", logoPath: "/images/html.svg" },
      { name: "Tailwind CSS", logoPath: "/images/Tailwind-logo.png" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    color: "from-cyan-500 to-emerald-500",
    skills: [
      { name: "Node.js", logoPath: "/images/nodejs.svg" },
      { name: "Express", logoPath: "/images/express.webp" },
      { name: "Firebase", logoPath: "/images/firebase.png" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    color: "from-emerald-500 to-yellow-500",
    skills: [
      { name: "Github", logoPath: "/images/github.png" },
      { name: "Docker", logoPath: "/images/docker.svg" },
      { name: "Vercel", logoPath: "/images/vercel1.png" },
      { name: "Nginx", logoPath: "/images/nginx.png" },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: <Database className="h-6 w-6" />,
    color: "from-yellow-500 to-orange-500",
    skills: [
      { name: "MongoDB", logoPath: "/images/mongodb-logo.svg" },
      { name: "PostgreSQL", logoPath: "/images/postgresql.svg" },
      { name: "MySQL", logoPath: "/images/mysql.svg" },
      { name: "Firebase", logoPath: "/images/firebase.png" },
    ],
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    icon: <BarChart3 className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Pandas", logoPath: "/images/pandas.png" },
      { name: "NumPy", logoPath: "/images/numpy.png" },
      { name: "Matplotlib", logoPath: "/images/matplotlib.png" },
      { name: "Jupyter Notebook", logoPath: "/images/jupyter.png" },
      { name: "Google Colab", logoPath: "/images/colab.png" },
    ],
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    color: "from-red-500 to-pink-500",
    skills: [
      { name: "Scikit-Learn", logoPath: "/images/Scikit_learn_logo.svg" },
      { name: "TensorFlow", logoPath: "/images/Tensorflow_logo.png" },
      { name: "Spacy", logoPath: "/images/spacy.jpg" },
      { name: "NLTK", logoPath: "/images/nltk.png" },
    ],
  },
  {
    id: "tools",
    name: "IDEs & Tools",
    icon: <Wrench className="h-6 w-6" />,
    color: "from-pink-500 to-purple-500",
    skills: [
      { name: "VS Code", logoPath: "/images/vscode.svg" },
      { name: "Git", logoPath: "/images/git.svg" },
      { name: "Npm", logoPath: "/images/npm.png" },
      { name: "Figma", logoPath: "/images/figma.png" },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });


  const skillGradient = "from-blue-600 to-red-600"

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-red-600/10 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Technical Expertise</h2>
            <div className={`w-20 h-1 bg-gradient-to-r ${skillGradient} mx-auto`}></div>
            <p className="text-white/70 mt-6 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills across various domains of software development
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={fadeInVariants}
                className="glass-effect rounded-2xl overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)", // blue glow
                }}
              >
                <div className="p-6 relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r from-blue-600 to-black text-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>

                  {/* Glow background */}
                  <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r ${skillGradient} opacity-10 blur-2xl`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={fadeInVariants}
      className="relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />

      <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center aspect-square relative overflow-hidden">
        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 overflow-hidden group-hover:ring-2 group-hover:ring-blue-500/50 transition-all duration-300">
          <Image
            src={skill.logoPath || "/placeholder.svg"}
            alt={`${skill.name} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Skill name */}
        <span className="text-sm font-medium text-center text-gray-300 group-hover:text-white transition-colors duration-300">
          {skill.name}
        </span>
      </div>
    </motion.div>
  );
}
