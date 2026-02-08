"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Code, BrainCircuit, Binary } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const services = [
    {
      icon: <Code className="w-10 h-10 text-blue-500" />,
      title: "Web Development",
      description:
        "Building responsive and performant web applications with modern frameworks and technologies.",
      color: "blue",
      gradient: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/20",
    },
    {
      icon: <BrainCircuit className="w-10 h-10 text-yellow-400" />,
      title: "ML Models",
      description:
        "Designing efficient and interpretable machine learning models with a focus on performance, scalability, and real-world usability.",
      color: "yellow",
      gradient: "from-yellow-400/20 to-yellow-500/20",
      border: "border-yellow-400/30",
      glow: "shadow-yellow-400/20",
    },
    {
      icon: <Binary className="w-10 h-10 text-red-500" />,
      title: "Algorithmic Solutions",
      description:
        "Delivering end-to-end algorithmic solutions from problem analysis to optimized implementation and continuous refinement.",
      color: "red",
      gradient: "from-red-500/20 to-red-600/20",
      border: "border-red-500/30",
      glow: "shadow-red-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0"></div>

      {/* Ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

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
        className="container mx-auto px-6 z-10 relative max-w-7xl"
      >
        {/* Ultra-modern section header */}
        <motion.div variants={fadeIn} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            About <span className="text-white bg-clip-text">Me</span>
          </h2>

          {/* Enhanced decorative line */}
          <div className="relative w-32 h-1 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-red-600 rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 rounded-full blur-sm"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Enhanced Profile Image Section */}
          <motion.div variants={scaleIn} className="relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image container with glassmorphism */}
              <div
                className="relative rounded-3xl overflow-hidden border h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                <Image
                  src="/images/profilePhoto.jpg?height=600&width=500"
                  alt="Profile"
                  width={500}
                  height={600}
                  className="object-cover object-top w-full h-full"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-blue-500/10" />
              </div>

              {/* Modern decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl border-2 border-blue-500/30 bg-blue-500/5 backdrop-blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl border-2 border-red-500/30 bg-red-500/5 backdrop-blur-xl"></div>

              {/* Floating accent dots */}
              <div className="absolute top-8 right-8 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
              <div className="absolute bottom-8 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            </div>
          </motion.div>

          {/* Enhanced Content Section */}
          <motion.div variants={fadeIn} className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                AI/ML Engineer & Frontend Developer
              </h3>

              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-white/80">
                  I'm a passionate{" "}
                  <span className="text-blue-400 font-semibold">
                    AI/ML engineer
                  </span>{" "}
                  with over 2 years of experience developing intelligent
                  solutions and data-driven applications. I specialize in
                  designing and deploying machine learning models that solve
                  real-world problems, while also having a solid foundation in
                  <span className="text-green-400 font-semibold">
                    {" "}
                    frontend development
                  </span>{" "}
                  to create intuitive and responsive user interfaces.
                </p>

                <p className="text-white/75">
                  My approach blends deep technical knowledge with creative
                  problem-solving to build{" "}
                  <span className="text-yellow-400 font-semibold">
                    scalable and impactful AI systems
                  </span>
                  . I'm continuously exploring advancements in artificial
                  intelligence, machine learning frameworks, and modern web
                  technologies to stay ahead in this{" "}
                  <span className="text-red-400 font-semibold">
                    fast-evolving field
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Enhanced Tech Stack with modern design */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  name: "React & Next.js",
                  color: "red",
                  bgColor: "bg-red-500/10",
                  textColor: "text-red-400",
                },
                {
                  name: "C++ & DSA",
                  color: "blue",
                  bgColor: "bg-blue-500/10",
                  textColor: "text-blue-400",
                },
                {
                  name: "Scikit-learn & Tensorflow",
                  color: "yellow",
                  bgColor: "bg-yellow-500/10",
                  textColor: "text-yellow-400",
                },
                {
                  name: "Node JS",
                  color: "green",
                  bgColor: "bg-green-500/10",
                  textColor: "text-green-400",
                },
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center space-x-3 p-4 rounded-2xl border transition-all duration-300 hover:scale-105 ${tech.bgColor}`}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${
                      tech.color === "red"
                        ? "rgba(239, 68, 68, 0.2)"
                        : tech.color === "blue"
                          ? "rgba(59, 130, 246, 0.2)"
                          : tech.color === "yellow"
                            ? "rgba(245, 158, 11, 0.2)"
                            : "rgba(34, 197, 94, 0.2)"
                    }`,
                  }}
                  whileHover={{ y: -2 }}
                >
                  <div
                    className={`w-3 h-3 rounded-full ${
                      tech.color === "red"
                        ? "bg-red-500"
                        : tech.color === "blue"
                          ? "bg-blue-500"
                          : tech.color === "yellow"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                    } shadow-lg`}
                  />
                  <span className={`font-medium ${tech.textColor}`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ultra-modern Services Section */}
        <motion.div variants={fadeIn} className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              What I Do
            </h3>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Transforming ideas into reality through cutting-edge technology
              and innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className={`group relative rounded-3xl p-8 transition-all duration-500 hover:scale-105 border ${service.border}`}
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  boxShadow:
                    "0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
                }}
                whileHover={{ y: -8 }}
              >
                {/* Icon container with enhanced styling */}
                <div
                  className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.gradient} border ${service.border} inline-block group-hover:scale-110 transition-all duration-300`}
                >
                  {service.icon}
                </div>

                <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h4>

                <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover glow effect */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.glow} blur-xl -z-10`}
                />

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
