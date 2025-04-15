"use client"
import { motion } from "framer-motion"

interface RotatingCubeProps {
  size?: number
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  color?: string
  rotationSpeed?: number
  glowColor?: string
}

export default function RotatingCube({
  size = 80,
  position = "top-right",
  color = "rgba(168, 85, 247, 0.2)",
  rotationSpeed = 20,
  glowColor = "rgba(168, 85, 247, 0.5)",
}: RotatingCubeProps) {
  const positionClasses = {
    "top-left": "top-10 left-10",
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
    "bottom-right": "bottom-10 right-10",
  }

  return (
    <div className={`absolute ${positionClasses[position]} perspective-500 pointer-events-none`}>
      <motion.div
        className="relative preserve-3d"
        style={{
          width: size,
          height: size,
          filter: `drop-shadow(0 0 10px ${glowColor})`,
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 180, 0],
        }}
        transition={{
          duration: rotationSpeed,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
          times: [0, 1],
        }}
      >
        {/* Grid lines on each face */}
        <div
          className="absolute inset-0 border border-white/20"
          style={{
            transform: `translateZ(${size / 2}px)`,
            backgroundColor: color,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${size / 8}px ${size / 8}px`,
          }}
        ></div>
        <div
          className="absolute inset-0 border border-white/20"
          style={{
            transform: `translateZ(-${size / 2}px) rotateY(180deg)`,
            backgroundColor: color,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${size / 8}px ${size / 8}px`,
          }}
        ></div>
        <div
          className="absolute inset-0 border border-white/20"
          style={{
            width: size,
            height: size,
            transform: `rotateY(90deg) translateZ(${size / 2}px)`,
            backgroundColor: color,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${size / 8}px ${size / 8}px`,
          }}
        ></div>
        <div
          className="absolute inset-0 border border-white/20"
          style={{
            width: size,
            height: size,
            transform: `rotateY(-90deg) translateZ(${size / 2}px)`,
            backgroundColor: color,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${size / 8}px ${size / 8}px`,
          }}
        ></div>
        <div
          className="absolute inset-0 border border-white/20"
          style={{
            width: size,
            height: size,
            transform: `rotateX(90deg) translateZ(${size / 2}px)`,
            backgroundColor: color,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${size / 8}px ${size / 8}px`,
          }}
        ></div>
        <div
          className="absolute inset-0 border border-white/20"
          style={{
            width: size,
            height: size,
            transform: `rotateX(-90deg) translateZ(${size / 2}px)`,
            backgroundColor: color,
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: `${size / 8}px ${size / 8}px`,
          }}
        ></div>
      </motion.div>
    </div>
  )
}
