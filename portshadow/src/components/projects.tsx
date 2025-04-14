"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  longDescription: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "CarbonTrack - AI Carbon Footprint Dashboard",
    description:
      "An AI-powered dashboard for tracking and reducing carbon emissions and personal carbon footprint.",
    image: "/images/CarbonTrack Pic.avif?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    demoUrl: "#",
    githubUrl: "https://github.com/geothermal-1408/co2",
    longDescription:
      "CarbonTrack is an AI-powered web application designed to help individuals and organizations monitor their carbon emissions and overall carbon footprint. The dashboard provides real-time insights, personalized recommendations, and actionable strategies to reduce and neutralize emissions using AI-driven suggestions.",
    features: [
      "Real-time carbon footprint tracking",
      "Visual dashboards with interactive graphs and charts",
      "AI-powered emission neutralization suggestions",
      "Personalized insights and tips for carbon reduction",
      "Fully responsive design with dark mode support",
    ],
  },
  {
    id: 2,
    title: "VerifyIQ - Academic Credential Verification",
    description:
      "A decentralized platform for verifying academic credentials and predicting skills using AI.",
    image: "/images/VerifyIQ-pic.webp?height=600&width=800",
    tags: [
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Blockchain",
      "Prisma",
      "PostgreSQL",
      "AI",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Rupayan2005/VerifyIQ",
    longDescription:
      "VerifyIQ is a blockchain-based platform for secure and tamper-proof academic credential verification. It combines decentralized technology with AI-powered skill prediction to help institutions, students, and employers validate educational records. The platform includes credential storage on blockchain, intelligent skill inference, role-based dashboards, and real-time verification access.",
    features: [
      "Secure credential storage on blockchain",
      "AI-powered skill prediction from academic data",
      "Student, institution, and employer dashboards",
      "Real-time verification system for credentials",
      "Responsive design with intuitive UI/UX",
    ],
  },
  {
    id: 3,
    title: "Neurex - AI Mental Health Predictor",
    description:
      "A privacy-focused AI system for predicting mental health conditions using encrypted data.",
    image: "/images/Neurex-pic.png?height=600&width=800",
    tags: ["Next.js", "TypeScript", "Privacy", "Encryption", "Mental Health", "AI ChatBot"],
    demoUrl: "#",
    githubUrl: "https://github.com/Davygupta47/Neurex",
    longDescription:
      "Neurex is an AI-powered mental health prediction platform that prioritizes user privacy by training models on encrypted datasets. The system analyzes behavioral and emotional patterns to provide early insights into potential mental health conditions. Designed for both individuals and healthcare professionals, Neurex blends ethical AI with real-world mental health support.",
    features: [
      "Encrypted training data for full privacy",
      "AI-based prediction of mental health conditions",
      "Personalized insights and risk indicators",
      "Secure and ethical data handling",
      "Responsive design for accessibility on all devices",
    ],
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 relative">
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
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills and expertise in web
            development, Machine Learning, and interactive experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeIn} className="group">
              <div className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <div className="flex gap-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="justify-start p-0 hover:bg-transparent hover:text-blue-400 group/btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] bg-black/90 backdrop-blur-md border border-white/20">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-gradient text-white">
                          {selectedProject?.title}
                        </DialogTitle>
                        <DialogDescription className="text-white/70">
                          {selectedProject?.longDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4">
                        <h4 className="font-semibold mb-2 text-white">
                          Key Features:
                        </h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {selectedProject?.features.map((feature, index) => (
                            <li key={index} className="text-white/80">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-end gap-4 mt-6">
                        <a
                          href={selectedProject?.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors text-white"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                        <a
                          href={selectedProject?.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
