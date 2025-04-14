"use client";
import React from "react";
import { motion } from "framer-motion";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "rgb(24, 30, 66)",     
    "rgb(52, 70, 139)",    
    "rgb(78, 85, 210)",    
    "rgb(118, 73, 225)",   
    "rgb(58, 52, 191)",    
    "rgb(89, 30, 197)",    
    "rgb(45, 38, 140)",    
    "rgb(60, 20, 130)",    
    "rgb(183, 195, 215)",  
    "rgb(20, 30, 50)",
  ];

  return text.split("").map((char, index) => {
    const shadowColor = colors[index % colors.length];

    return (
      <motion.span
        key={`${char}-${index}`}
        initial={{ opacity: 0, y: 5 }}
        animate={{
          color: "#ffffff", // Main text remains white
          opacity: 1,
          y: [0, -2, 0],
          filter: [
            `drop-shadow(0 0 0px ${shadowColor})`,
            `drop-shadow(0 0 6px ${shadowColor})`,
            `drop-shadow(0 0 0px ${shadowColor})`
          ]
        }}
        transition={{
          duration: 1,
          delay: index * 0.04,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="inline-block whitespace-pre font-sans tracking-tight"
      >
        {char}
      </motion.span>
    );
  });
}