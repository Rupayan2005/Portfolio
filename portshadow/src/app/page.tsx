import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import ParticlesBackground from "@/components/particle-background"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Your Name",
  description: "A futuristic portfolio showcasing my work and skills",
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticlesBackground />
      <Navbar />
      <div className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
