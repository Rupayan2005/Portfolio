"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Code, BrainCircuit, Binary} from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "Web Development",
      description:
        "Building responsive and performant web applications with modern frameworks and technologies.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-yellow-400" />,
      title: "ML Models",
      description:
        "Designing efficient and interpretable machine learning models with a focus on performance, scalability, and real-world usability.",
    },
    {
      icon: <Binary className="w-8 h-8 text-red-500" />,
      title: "Algorithmic Solutions",
      description:
        "Delivering end-to-end algorithmic solutions from problem analysis to optimized implementation and continuous refinement.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 grid-background"></div>

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
        className="container mx-auto px-4 z-10 relative"
      >
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl neon-border overflow-hidden">
                <Image
                  src="/images/profilePhoto.jpg?height=600&width=500"
                  alt="Profile"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-blue-500 rounded-tl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-purple-500 rounded-br-lg"></div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h3 className="text-2xl font-bold mb-4">
              AI/ML Engineer & Frontend Developer
            </h3>
            <p className="text-white/70 mb-6">
              I'm a passionate AI/ML engineer with over 2 years of experience
              developing intelligent solutions and data-driven applications. I
              specialize in designing and deploying machine learning models that
              solve real-world problems, while also having a solid foundation in
              frontend development to create intuitive and responsive user
              interfaces.
            </p>
            <p className="text-white/70 mb-8">
              My approach blends deep technical knowledge with creative
              problem-solving to build scalable and impactful AI systems. I'm
              continuously exploring advancements in artificial intelligence,
              machine learning frameworks, and modern web technologies to stay
              ahead in this fast-evolving field.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                <span className="text-white/80">React & Next.js</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                <span className="text-white/80">C++ & DSA</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                <span className="text-white/80">Scikit-learn & Tensorflow</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-white/80">Node JS</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeIn} className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                <div className="mb-4 p-3 rounded-lg bg-white/5 inline-block group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
