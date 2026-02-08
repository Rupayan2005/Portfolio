"use client";

import { motion } from "framer-motion";
import { Heart, Code, Sparkles, Zap, Terminal, ArrowUp } from "lucide-react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Github",
      icon: <IconBrandGithub className="w-5 h-5" />,
      href: "https://github.com/Rupayan2005",
      color: "hover:text-blue-400",
    },
    {
      name: "X",
      icon: <IconBrandX className="w-5 h-5" />,
      href: "https://x.com/RupayanAuddya",
      color: "hover:text-purple-400",
    },
    {
      name: "LinkedIn",
      icon: <IconBrandLinkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/rupayan-auddya-373998323/",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: <IconBrandInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com/rupayanauddya12?igsh=MWMydGd6d3Y1NGNkbg==",
      color: "hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-12 border-t border-blue-500/20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-purple-500/5" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
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
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <Terminal className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
                Rupayan Auddya
              </h3>
            </div>
            <p className="text-white/60 leading-relaxed">
              Full Stack Developer & ML Enthusiast. Building innovative
              solutions with modern technologies.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <Code className="w-4 h-4 text-blue-400" />
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and passion</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <h4 className="font-semibold text-lg">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-yellow-400" />
              <h4 className="font-semibold text-lg">Connect</h4>
            </div>
            <p className="text-white/60 mb-4 text-sm">
              Follow me on social media for updates and insights.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 ${link.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/20`}
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider with gradient */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/50 text-sm"
          >
            © {currentYear} Rupayan Auddya. All rights reserved.
          </motion.p>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:from-blue-700 hover:via-purple-700 hover:to-red-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
