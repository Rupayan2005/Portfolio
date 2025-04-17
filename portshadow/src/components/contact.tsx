"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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
    <section id="contact" className="py-20 relative">
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
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto"></div>
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out to me. I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div variants={fadeIn} className="lg:col-span-2 space-y-8">
            <div className="glass rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-white/5 mr-4">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a
                      href="mailto:shadowdragon0004@gmail.com"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      shadowdragon0004@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-white/5 mr-4">
                    <Phone className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <a className="text-white/70 transition-colors">
                      +91 123-456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 rounded-lg bg-white/5 mr-4">
                    <MapPin className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-white/70">
                      Baranagar, Kolkata (West Bengal)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-2 mr-70 pr-20">
                  <FloatingDock
                    items={links}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeIn} className="lg:col-span-3">
            <form
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
              className="glass rounded-xl p-6"
            >
              <input type="hidden" name="access_key" value="5bcf33b6-9f15-4a1f-a1a6-26cf7fd824d6" />
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
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
                    className="bg-white/5 border-white/10 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
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
                    className="bg-white/5 border-white/10 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
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
                  className="bg-white/5 border-white/10 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
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
                  className="bg-white/5 border-white/10 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full my-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform transition duration-300 hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-2xl"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
