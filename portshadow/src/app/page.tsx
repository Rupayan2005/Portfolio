import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ParticlesBackground from "@/components/particle-background";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Shadow - Futuristic Developer Experience",
  description:
    "Experience cutting-edge web development through an immersive, futuristic portfolio showcasing innovative projects and professional expertise.",
  keywords: [
    "portfolio",
    "web development",
    "full stack",
    "AI",
    "blockchain",
    "modern design",
  ],
  openGraph: {
    title: "Portfolio | Shadow",
    description:
      "Futuristic portfolio showcasing cutting-edge development projects",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* Fixed Navigation - Outside main to avoid stacking context issues */}
      <Navbar />

      <main className="relative min-h-screen overflow-hidden">
        {/* Enhanced Particle Background */}
        <ParticlesBackground />

        {/* Main Content Sections */}
        <div className="relative z-[3]">
          {/* Hero Section */}
          <section id="home" className="animate-scale-up">
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="animate-on-scroll">
            <About />
          </section>

          {/* Projects Section */}
          <section id="projects" className="animate-slide-right">
            <Projects />
          </section>

          {/* Skills Section */}
          <section id="skills" className="animate-on-scroll">
            <Skills />
          </section>

          {/* Education Section */}
          <section id="education" className="animate-slide-left">
            <Education />
          </section>

          {/* Contact Section */}
          <section id="contact" className="animate-on-scroll">
            <Contact />
          </section>

          {/* Footer */}
          <section className="animate-scale-up">
            <Footer />
          </section>
        </div>

        {/* Futuristic Loading Indicator */}
        <div
          id="loading-indicator"
          className="fixed bottom-8 right-8 z-50 opacity-0 transition-opacity duration-300"
        >
          <div className="w-12 h-12 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
        </div>

        {/* Enhanced Visual Effects */}
        <div className="fixed inset-0 pointer-events-none z-5">
          {/* Dynamic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-blue-800/5 animate-pulse-glow"></div>

          {/* Scanning Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-data-stream"></div>
          <div
            className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-blue-500/50 to-transparent animate-data-stream"
            style={{ animationDelay: "5s" }}
          ></div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-floating opacity-30"></div>
          <div
            className="absolute top-2/3 right-8 w-1 h-1 bg-blue-300 rounded-full animate-floating opacity-40"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-500 rounded-full animate-floating opacity-25"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
      </main>
    </>
  );
}
