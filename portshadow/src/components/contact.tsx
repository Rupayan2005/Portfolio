"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send, Sparkles, Zap, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
//import { useToast } from "@/components/ui/use-toast"
export default function Contact() {
  //const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const links = [
    {
      title: "Github",
      icon: <IconBrandGithub className="h-full w-full text-white" />,
      href: "https://github.com/Rupayan2005",
    },

    {
      title: "X",
      icon: <IconBrandX className="h-full w-full text-white" />,
      href: "https://x.com/RupayanAuddya",
    },
    {
      title: "Linkedin",
      icon: <IconBrandLinkedin className="h-full w-full text-white" />,
      href: "https://www.linkedin.com/in/rupayan-auddya-373998323/",
    },
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-white" />,
      href: "https://www.instagram.com/rupayanauddya12?igsh=MWMydGd6d3Y1NGNkbg==",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // toast({
    //   title: "Message sent!",
    //   description: "Thank you for your message. I'll get back to you soon.",
    // })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 grid-background"></div>

      {/* Ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
        {/* Ultra-modern section header */}
        <motion.div variants={fadeIn} className="text-center mb-20">

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 mx-auto rounded-full"></div>
          <p className="text-white/60 mt-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind or want to collaborate? Let's create
            something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Information Card - Enhanced */}
          <motion.div variants={fadeIn} className="lg:col-span-2 space-y-8">
            <motion.div
              className="relative glass rounded-2xl p-8 border border-blue-500/20 overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <motion.div
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 mr-4 group-hover/item:shadow-lg group-hover/item:shadow-blue-500/20 transition-all">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white/90">
                        Email
                      </h4>
                      <a
                        href="mailto:shadowdragon0004@gmail.com"
                        className="text-white/60 hover:text-blue-400 transition-colors text-sm"
                      >
                        shadowdragon0004@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 mr-4 group-hover/item:shadow-lg group-hover/item:shadow-purple-500/20 transition-all">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white/90">
                        Phone
                      </h4>
                      <a className="text-white/60 transition-colors text-sm">
                        +91 6289773419
                      </a>
                    </div>
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    className="flex items-start group/item"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 mr-4 group-hover/item:shadow-lg group-hover/item:shadow-red-500/20 transition-all">
                      <MapPin className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-white/90">
                        Location
                      </h4>
                      <p className="text-white/60 text-sm">
                        Baranagar, Kolkata (West Bengal)
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <h4 className="font-semibold text-white/90">
                      Connect with me
                    </h4>
                  </div>
                  <div className="flex space-x-2">
                    <FloatingDock items={links} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Ultra Modern */}
          <motion.div variants={fadeIn} className="lg:col-span-3">
            <motion.form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);

                const response = await fetch(
                  "https://api.web3forms.com/submit",
                  {
                    method: "POST",
                    body: data,
                  }
                );

                if (response.ok) {
                  alert("Message sent successfully!");
                  setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  });
                } else {
                  alert("Something went wrong.");
                }
                setIsSubmitting(false);
              }}
              className="relative glass rounded-2xl p-8 border border-blue-500/20 overflow-hidden group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-red-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <input
                  type="hidden"
                  name="access_key"
                  value="5bcf33b6-9f15-4a1f-a1a6-26cf7fd824d6"
                />

                <div className="flex items-center gap-3 mb-8">
                  <Send className="w-6 h-6 text-blue-400" />
                  <h3 className="text-2xl font-bold">Send a Message</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2 text-white/80"
                    >
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="bg-white/5 border-blue-500/20 focus:border-blue-500 focus:ring-blue-500/50 rounded-xl transition-all hover:bg-white/10"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2 text-white/80"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-white/5 border-blue-500/20 focus:border-blue-500 focus:ring-blue-500/50 rounded-xl transition-all hover:bg-white/10"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2 text-white/80"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-white/5 border-blue-500/20 focus:border-blue-500 focus:ring-blue-500/50 rounded-xl transition-all hover:bg-white/10"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-white/80"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="bg-white/5 border-blue-500/20 focus:border-blue-500 focus:ring-blue-500/50 rounded-xl transition-all hover:bg-white/10 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full my-2 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 hover:from-blue-700 hover:via-purple-700 hover:to-red-700 text-white font-semibold rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden group/btn"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-purple-400 to-red-400 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                  {isSubmitting ? (
                    <span className="flex items-center justify-center relative z-10">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center relative z-10">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
