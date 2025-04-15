"use client"

import { useEffect, useRef } from "react"

interface ParticleWaveProps {
  className?: string
  color?: string
  particleCount?: number
  height?: number
}

export default function ParticleWave({
  className = "",
  color = "rgba(168, 85, 247, 0.5)",
  particleCount = 50,
  height = 100,
}: ParticleWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = height
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create particles
    const particles: {
      x: number
      y: number
      radius: number
      baseY: number
      speed: number
      amplitude: number
    }[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        baseY: Math.random() * canvas.height,
        speed: 0.1 + Math.random() * 0.2,
        amplitude: 5 + Math.random() * 15,
      })
    }

    // Animation
    let animationFrameId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.05

      // Draw particles
      particles.forEach((particle) => {
        // Wave motion
        particle.y = particle.baseY + Math.sin(time + particle.x * 0.01) * particle.amplitude

        // Move particles horizontally
        particle.x += particle.speed
        if (particle.x > canvas.width) {
          particle.x = 0
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
      })

      // Connect nearby particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 50) {
            ctx.beginPath()
            ctx.strokeStyle = color
            ctx.globalAlpha = 1 - distance / 50
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, height, particleCount])

  return <canvas ref={canvasRef} className={`w-full ${className}`} style={{ height }} />
}
