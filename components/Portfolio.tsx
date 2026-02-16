'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Activity, Server, BookOpen, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 'cl-ml-system',
    name: 'Crude Oil Forward Curve ML Trading System',
    type: 'Production Trading System',
    description: 'Production ML system for crude calendar spread trading using PCA of forward curve (level/slope/curvature), VAR for lead-lag relationships, and Kalman filtering for regime detection. Integrated EIA, FRED, Cushing inventory, and refinery data across 3 live strategies with FastAPI execution and PostgreSQL.',
    tags: ['PCA', 'VAR', 'Kalman Filter', 'FastAPI', 'PostgreSQL', 'EIA/FRED'],
    metrics: { sharpe: '3.4', strategies: '3 Live', assets: 'Energy Futures' },
    icon: TrendingUp,
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accentColor: 'text-cyan-400',
    featured: true,
  },
  {
    id: 'quant-engine',
    name: 'Quantitative Trading Analysis Engine',
    type: 'Research Platform',
    description: 'Python platform for high-frequency CL futures analysis (1.44M rows, 842 patterns) with Shannon/Renyi/Tsallis entropy, chaos theory (Lyapunov exponents, Grassberger-Procaccia), Markov chain models, and network topology analysis. Risk frameworks: Kelly Criterion, VaR/CVaR, Sharpe optimization.',
    tags: ['Entropy', 'Chaos Theory', 'Markov Chains', 'Network Topology', 'VaR/CVaR'],
    metrics: { rows: '1.44M', patterns: '842', methods: '10+', assets: 'CL Futures' },
    icon: Activity,
    gradient: 'from-purple-500/20 to-pink-600/20',
    accentColor: 'text-purple-400',
    featured: false,
  },
  {
    id: 'trading-infra',
    name: 'Energy Trading Infrastructure & Dashboard',
    type: 'Full-Stack Platform',
    description: 'Full-stack trading infrastructure with Python strategy engine (mean-reversion, momentum, volume breakout), FastAPI + WebSocket backend, and React dashboard with live P&L, order blotter, TT API integration, strategy metrics, and system monitoring.',
    tags: ['FastAPI', 'WebSocket', 'React', 'TT API', 'Real-time P&L'],
    metrics: { strategies: '3 Types', latency: 'Sub-sec', monitoring: 'Live', api: 'TT API' },
    icon: Server,
    gradient: 'from-emerald-500/20 to-teal-600/20',
    accentColor: 'text-emerald-400',
    featured: false,
  },
  {
    id: 'cl-intraday-research',
    name: 'CL Intraday Spread Research',
    type: 'Quantitative Research',
    description: '18.3M minute-level bars across WTI crude oil forward curve. 37 hypotheses tested with institutional-grade methodology. Discovered bifurcated market structure and butterfly reversion strategy with abundant signal capacity.',
    tags: ['18.3M Bars', 'HMM', 'Hurst R/S', 'Wavelet MRA', '37 Hypotheses'],
    metrics: { bars: '18.3M', hypotheses: '37', signals: '7.4K/yr', methods: '12+' },
    icon: BookOpen,
    gradient: 'from-amber-500/20 to-orange-600/20',
    accentColor: 'text-amber-400',
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const Icon = project.icon

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`)
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      className={`spotlight-card p-6 ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
              <Icon className={`w-5 h-5 ${project.accentColor}`} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{project.name}</h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{project.type}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(project.metrics).map(([key, value]) => (
            <div key={key} className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-3">
              <p className="text-[10px] text-gray-600 uppercase tracking-wider">{key}</p>
              <p className={`text-base font-semibold ${project.accentColor}`}>{value}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs text-cyan-400 uppercase tracking-[0.3em] mb-3">Projects</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I&apos;ve Built
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Production trading systems, research platforms, and quantitative infrastructure
            for energy futures markets
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
