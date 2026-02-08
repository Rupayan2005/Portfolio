import type React from "react";
import "./globals.css";
import { Inter, Orbitron } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-black text-white overflow-x-hidden`}
      >
        <div className="relative min-h-screen">
          {/* Futuristic Background Elements */}
          <div className="fixed inset-0 pointer-events-none z-[1]">
            {/* Animated Grid */}
            <div className="absolute inset-0 grid-background opacity-30"></div>

            {/* Floating Orbs */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-floating"></div>
            <div
              className="absolute top-40 right-20 w-48 h-48 bg-blue-600/3 rounded-full blur-2xl animate-floating"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-32 left-1/4 w-24 h-24 bg-blue-400/7 rounded-full blur-lg animate-floating"
              style={{ animationDelay: "4s" }}
            ></div>

            {/* Circuit Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-circuit-flow"></div>
            <div
              className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-blue-400/20 to-transparent animate-circuit-flow"
              style={{ animationDelay: "3s" }}
            ></div>

            {/* Data Streams */}
            <div className="absolute top-1/4 left-0 w-1 h-32 bg-gradient-to-b from-blue-500/30 to-transparent animate-data-stream"></div>
            <div
              className="absolute top-3/4 right-0 w-1 h-24 bg-gradient-to-t from-blue-400/30 to-transparent animate-data-stream"
              style={{ animationDelay: "5s" }}
            ></div>

            {/* Holographic Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-blue-600/[0.02] animate-hologram"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-[5]">{children}</div>

          {/* Futuristic Corner Decorations */}
          <div className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-[2]">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
          </div>
          <div className="fixed top-0 right-0 w-20 h-20 pointer-events-none z-[2]">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent"></div>
          </div>
          <div className="fixed bottom-0 left-0 w-20 h-20 pointer-events-none z-[2]">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1 h-full bg-gradient-to-t from-blue-500 to-transparent"></div>
          </div>
          <div className="fixed bottom-0 right-0 w-20 h-20 pointer-events-none z-[2]">
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-blue-500 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-blue-500 to-transparent"></div>
          </div>
        </div>

        {/* Scroll Animation Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Scroll Animation Observer - One-directional (stays visible once shown)
              function initScrollAnimations() {
                const observer = new IntersectionObserver((entries) => {
                  entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                    }
                  });
                }, {
                  threshold: 0.05,
                  rootMargin: '0px 0px -5% 0px'
                });
                
                // Observe all elements with animation classes
                document.querySelectorAll('.animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-up').forEach((el) => {
                  observer.observe(el);
                });
              }
              
              // Initialize when DOM is loaded
              document.addEventListener('DOMContentLoaded', () => {
                initScrollAnimations();
                
                // Smooth scroll for anchor links with passive listener
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                  anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                      target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  }, { passive: false });
                });
              });
              
              // Re-initialize animations on navigation
              window.addEventListener('load', () => {
                setTimeout(initScrollAnimations, 100);
              }, { passive: true });
            `,
          }}
        />
      </body>
    </html>
  );
}
