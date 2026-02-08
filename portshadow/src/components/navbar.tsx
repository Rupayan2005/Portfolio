"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  Zap,
  Home,
  User,
  Briefcase,
  Code,
  GraduationCap,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const offsetTop = (section as HTMLElement).offsetTop - 80;
          const offsetHeight = section.clientHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.name.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setIsOpen(false);

    setTimeout(
      () => {
        const element = document.querySelector(href);
        if (element) {
          const offsetTop = (element as HTMLElement).offsetTop - 80;
          window.scrollTo({
            top: Math.max(0, offsetTop),
            behavior: "smooth",
          });
        }
      },
      isOpen ? 300 : 0
    );
  };

  return (
    <>
      {/* Glass Morphism Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out will-change-transform",
          "bg-white/5 backdrop-blur-3xl border-b border-white/10",
          scrolled
            ? "shadow-2xl shadow-blue-500/20 bg-white/8 backdrop-blur-3xl"
            : "bg-white/3 backdrop-blur-2xl"
        )}
        style={{
          background: scrolled
            ? "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)"
            : "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
          backdropFilter: "blur(32px) saturate(180%)",
          borderImage:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent) 1",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
            : "0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
        }}
      >
        {/* Enhanced Glowing top edge with glassmorphism */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />

        <div className="relative container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo with enhanced styling */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={(e) => handleNavClick("#home", e)}
                className="flex items-center space-x-2 group"
              >
                <div className="relative">
                  <Zap className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-full group-hover:bg-blue-300/30 transition-all duration-300" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </button>
            </motion.div>

            {/* Desktop Navigation with enhanced glassmorphism */}
            <div className="hidden lg:flex items-center">
              <div
                className="flex items-center space-x-2 rounded-full p-1 border"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  backdropFilter: "blur(20px) saturate(150%)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow:
                    "0 4px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                }}
              >
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.name.toLowerCase();

                  return (
                    <motion.div
                      key={item.name}
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        onClick={(e) => handleNavClick(item.href, e)}
                        className={cn(
                          "relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 group",
                          isActive
                            ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg shadow-blue-500/20"
                            : "text-white/70 hover:text-white hover:bg-white/10"
                        )}
                      >
                        <Icon
                          className={cn(
                            "w-4 h-4 transition-colors duration-300",
                            isActive
                              ? "text-blue-400"
                              : "text-white/60 group-hover:text-white/80"
                          )}
                        />
                        <span className="font-medium">{item.name}</span>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-400/30"
                            initial={false}
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                        )}

                        {/* Hover glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 to-purple-400/0 group-hover:from-blue-400/10 group-hover:to-purple-400/10 transition-all duration-300" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Menu Button with glassmorphism */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden relative p-3 rounded-xl text-white transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                backdropFilter: "blur(16px) saturate(150%)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow:
                  "0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </div>

              {/* Button glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[80px] left-0 right-0 z-[9998] lg:hidden"
          >
            <div
              className="border-y shadow-2xl shadow-blue-500/10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
                backdropFilter: "blur(32px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderLeft: "none",
                borderRight: "none",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              }}
            >
              <div className="relative container mx-auto px-6 py-6">
                <div className="grid grid-cols-2 gap-4">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.name.toLowerCase();

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className={cn(
                            "relative flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-300 group",
                            isActive
                              ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white shadow-lg shadow-blue-500/20"
                              : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20"
                          )}
                        >
                          <Icon
                            className={cn(
                              "w-6 h-6 mb-2 transition-colors duration-300",
                              isActive
                                ? "text-blue-400"
                                : "text-white/60 group-hover:text-white/80"
                            )}
                          />
                          <span className="text-sm font-medium">
                            {item.name}
                          </span>

                          {/* Active glow */}
                          {isActive && (
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-sm" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Navigation Dots with glassmorphism */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-[9997] hidden xl:block"
      >
        <div
          className="flex flex-col space-y-3 rounded-full p-3"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)",
            backdropFilter: "blur(20px) saturate(150%)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 4px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
          }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.name.toLowerCase();
            return (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300 relative group",
                  isActive
                    ? "bg-blue-400 shadow-lg shadow-blue-400/50"
                    : "bg-white/30 hover:bg-white/50"
                )}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Tooltip */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl px-3 py-1 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {item.name}
                </div>
              </motion.button>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
