"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Layout,
  Server,
  Cloud,
  Database,
  BarChart3,
  Brain,
  Wrench,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const skillGradient = "from-blue-600 via-purple-600 to-red-600";

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      {/* Ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="max-w-7xl mx-auto"
        >
          {/* Ultra-modern Header */}
          <motion.div variants={fadeInVariants} className="text-center mb-20">

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
              My{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div
              className={`w-24 h-1 bg-gradient-to-r ${skillGradient} mx-auto rounded-full`}
            ></div>
            <p className="text-white/60 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
              A comprehensive overview of my technical expertise across various
              domains of software development
            </p>
          </motion.div>

          {/* Skills Grid - Mobile Friendly */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const isExpanded = expandedCategories[category.id];
              const visibleSkills = isExpanded
                ? category.skills
                : category.skills.slice(0, 3);
              const hasMore = category.skills.length > 3;

              return (
                <motion.div
                  key={category.id}
                  variants={fadeInVariants}
                  className="relative glass rounded-2xl border border-blue-500/20 overflow-hidden group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glow effect */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  <div className="p-6 md:p-8 relative z-10">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {category.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white/90">
                          {category.name}
                        </h3>
                        <p className="text-sm text-white/50">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-4">
                      <AnimatePresence mode="popLayout">
                        {visibleSkills.map((skill, skillIndex) => (
                          <SkillCard
                            key={skill.name}
                            skill={skill}
                            index={skillIndex}
                            categoryColor={category.color}
                          />
                        ))}
                      </AnimatePresence>
                    </div>

                    {/* Show More/Less Button */}
                    {hasMore && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Button
                          onClick={() => toggleCategory(category.id)}
                          variant="outline"
                          className="w-full mt-2 bg-white/5 border-blue-500/20 hover:bg-white/10 hover:border-blue-500/40 text-white/80 hover:text-white transition-all duration-300 rounded-xl group/btn"
                        >
                          <span className="flex items-center justify-center gap-2">
                            {isExpanded ? (
                              <>
                                Show Less
                                <ChevronUp className="w-4 h-4 group-hover/btn:animate-bounce" />
                              </>
                            ) : (
                              <>
                                Show {category.skills.length - 3} More
                                <ChevronDown className="w-4 h-4 group-hover/btn:animate-bounce" />
                              </>
                            )}
                          </span>
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  index,
  categoryColor,
}: {
  skill: Skill;
  index: number;
  categoryColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
      className="relative group/card"
      whileHover={{ scale: 1.05, y: -5 }}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${categoryColor} rounded-xl opacity-0 group-hover/card:opacity-30 blur-md transition-opacity duration-300`}
      />

      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 md:p-4 flex flex-col items-center justify-center aspect-square overflow-hidden group-hover/card:bg-white/10 group-hover/card:border-blue-500/30 transition-all duration-300">
        {/* Logo container */}
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center mb-2 md:mb-3 overflow-hidden group-hover/card:ring-2 group-hover/card:ring-blue-400/50 group-hover/card:shadow-lg group-hover/card:shadow-blue-500/20 transition-all duration-300">
          <Image
            src={skill.logoPath || "/placeholder.svg"}
            alt={`${skill.name} logo`}
            width={40}
            height={40}
            className="object-contain transition-transform duration-300 group-hover/card:scale-110"
          />
        </div>

        {/* Skill name */}
        <span className="text-xs md:text-sm font-medium text-center text-white/70 group-hover/card:text-white transition-colors duration-300 line-clamp-2">
          {skill.name}
        </span>

        {/* Animated corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-lg opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
}
