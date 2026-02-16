'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { MapPin, ArrowDown } from 'lucide-react'

interface MetricCardProps {
  label: string
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  delay?: number
}

function AnimatedMetric({ label, value, suffix = '', prefix = '', decimals = 2, delay = 0 }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 })

  useEffect(() => {
    const timer = setTimeout(() => {
      motionValue.set(value)
    }, delay)
    return () => clearTimeout(timer)
  }, [value, delay, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest)
    })
    return () => unsubscribe()
  }, [springValue])

  const formattedValue = decimals === 0
    ? Math.round(displayValue).toString()
    : displayValue.toFixed(decimals)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay / 1000, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bento-card group cursor-default"
    >
      <div className="relative z-10 space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">
          {label}
        </p>
        <div className="metric flex items-baseline gap-1">
          {prefix && <span className="text-xl">{prefix}</span>}
          <span className="text-4xl md:text-5xl font-bold tabular-nums">
            {formattedValue}
          </span>
          {suffix && <span className="text-xl text-gray-400">{suffix}</span>}
        </div>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  )
}

function StatusBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] text-sm"
    >
      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
      <span className="text-gray-400">Available for opportunities</span>
      <span className="text-white/20">|</span>
      <MapPin className="w-3 h-3 text-gray-500" />
      <span className="text-gray-400">Gurgaon, India</span>
    </motion.div>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 30,
      y: (e.clientY - rect.top - rect.height / 2) / 30,
    })
  }

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative perspective-1000"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="text-center space-y-8 max-w-5xl preserve-3d"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0px)`,
        }}
      >
        {/* Status badge */}
        <StatusBadge />

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
            <span className="block text-white">Shreyas</span>
            <span className="block text-gradient-cyan glow-text mt-1">
              Somnathe
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Quantitative Researcher & Trader building ML-driven systematic strategies
            for global energy and index futures
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12"
        >
          <AnimatedMetric
            label="Sharpe Ratio"
            value={3.4}
            decimals={1}
            delay={800}
          />
          <AnimatedMetric
            label="Live Strategies"
            value={3}
            suffix="+"
            decimals={0}
            delay={1000}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-[10px] text-gray-600 uppercase tracking-[0.3em]">Scroll</span>
            <ArrowDown className="w-4 h-4 text-gray-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
