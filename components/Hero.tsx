'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { formatNumber, formatPercent } from '@/lib/utils'

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
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      className="luxury-card group cursor-pointer"
    >
      <div className="space-y-2">
        <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">
          {label}
        </p>
        <div className="metric flex items-baseline gap-1">
          {prefix && <span className="text-2xl">{prefix}</span>}
          <span className="text-5xl font-bold tabular-nums">
            {formattedValue}
          </span>
          {suffix && <span className="text-2xl text-gray-300">{suffix}</span>}
        </div>
      </div>

      {/* Breathing pulse effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
    </motion.div>
  )
}

function MarketDataStream() {
  const [ticks, setTicks] = useState<Array<{ id: number; value: number; time: string }>>([])
  const tickIdRef = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const newTick = {
        id: tickIdRef.current++,
        value: Math.random() * 200 - 100,
        time: new Date().toLocaleTimeString(),
      }

      setTicks((prev) => {
        const updated = [newTick, ...prev].slice(0, 5)
        return updated
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass rounded-xl p-4 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-xs text-gray-400 uppercase tracking-wider">Live Market Signal</span>
      </div>

      <div className="space-y-2 font-mono text-xs">
        {ticks.map((tick, index) => (
          <motion.div
            key={tick.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1 - index * 0.2, x: 0 }}
            className="flex justify-between items-center"
          >
            <span className="text-gray-500">{tick.time}</span>
            <span className={tick.value > 0 ? 'text-green-400' : 'text-red-400'}>
              {tick.value > 0 ? '+' : ''}{tick.value.toFixed(2)}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 20,
      y: (e.clientY - rect.top - rect.height / 2) / 20,
    })
  }

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative perspective-1000"
      onMouseMove={handleMouseMove}
    >
      {/* Main content with parallax */}
      <motion.div
        className="text-center space-y-8 max-w-5xl preserve-3d"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0px)`,
        }}
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight">
            <span className="block text-white">Shreyas Somnathe</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 glow-text mt-2">
              Quant Systems Architect
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
            Precision trading systems engineered for consistent alpha generation
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
        >
          <AnimatedMetric
            label="Sharpe Ratio"
            value={3.42}
            decimals={2}
            delay={800}
          />
          <AnimatedMetric
            label="Annual Return"
            value={87.6}
            suffix="%"
            decimals={1}
            delay={1000}
          />
          <AnimatedMetric
            label="Max Drawdown"
            value={12.3}
            suffix="%"
            decimals={1}
            delay={1200}
          />
        </motion.div>

        {/* Market data stream */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="pt-8"
        >
          <MarketDataStream />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">Explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-cyan-400 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
