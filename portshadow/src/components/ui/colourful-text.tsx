"use client";
import React from "react";
import { motion } from "framer-motion";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "#a0c4ff", // light blue
    "#89b8ff",
    "#72aaff",
    "#5c9dff",
    "#478fff",
    "#2e82ff",
    "#1d6edb",
    "#155ab7",
    "#0e4793",
    "#083370", // deep blue
  ];

  return text.split("").map((char, index) => {
    const colorWave = colors[index % colors.length];

    return (
      <motion.span
        key={`${char}-${index}`}
        initial={{ opacity: 0, y: 5 }}
        animate={{
          color: [colorWave, "#ffffff", colorWave],
          opacity: 1,
          y: [0, -2, 0],
          filter: [
            `drop-shadow(0 0 0px ${colorWave})`,
            `drop-shadow(0 0 6px ${colorWave})`,
            `drop-shadow(0 0 0px ${colorWave})`,
          ],
        }}
        transition={{
          duration: 1,
          delay: index * 0.04,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block whitespace-pre font-sans tracking-tight"
      >
        {char}
      </motion.span>
    );
  });
}
