'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ChevronDown, ChevronUp, Beaker, BarChart3, Waves, Zap, Clock, Brain } from 'lucide-react'
import Image from 'next/image'

const keyFindings = [
  {
    title: 'Bifurcated Information Structure',
    icon: Brain,
    color: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-blue-500/10',
    stat: 'Hurst < 0.5 vs > 0.5',
    description: 'Front-month spreads (1M-6M) are anti-persistent mean-reverting instruments with 2-3 minute half-lives, while 12M behaves like a persistent trending asset with 30-minute half-life — essentially a separate market mechanism.',
  },
  {
    title: 'Beta Magnitude Collapse',
    icon: BarChart3,
    color: 'text-purple-400',
    bg: 'from-purple-500/10 to-pink-500/10',
    stat: 'Daily 2.5 → Intraday 0.02',
    description: '1M beta collapses from ~2.5 at daily frequency to near zero (0.016) at minute-level. The 12M beta remains stable at ~0.19. Ordering 1M < 3M < 6M < 12M preserved across all timescales.',
  },
  {
    title: 'Session Energy Cycles',
    icon: Zap,
    color: 'text-amber-400',
    bg: 'from-amber-500/10 to-orange-500/10',
    stat: '63-90% Compression Rate',
    description: 'US session reaches 99% of its energy budget predictably. The exhaustion window (>80% budget) offers the highest probability reversal opportunity with 63-90% compression rate.',
  },
  {
    title: 'EIA Paradox',
    icon: Waves,
    color: 'text-emerald-400',
    bg: 'from-emerald-500/10 to-teal-500/10',
    stat: 'Amplify OR 1.48x, Suppress 1M 0.74x',
    description: 'EIA inventory announcements amplify outright volatility (1.48x) and 12M (1.28x) while simultaneously suppressing 1M volatility (0.74x). EIA provides clarity to front spreads while creating tail risk at the back.',
  },
  {
    title: 'Butterfly Reversion',
    icon: Clock,
    color: 'text-rose-400',
    bg: 'from-rose-500/10 to-pink-500/10',
    stat: '2.3 min half-life (2,400x faster)',
    description: 'Butterfly spread (2*6M - 3M - 12M) half-life collapses from 3.8 days at daily frequency to just 2.3 minutes — curvature dislocations self-correct almost instantly at minute resolution.',
  },
  {
    title: 'Trade Archetype Winner',
    icon: Beaker,
    color: 'text-blue-400',
    bg: 'from-blue-500/10 to-indigo-500/10',
    stat: 'Sharpe 0.55-0.61 | 7,400 signals/yr',
    description: 'Butterfly reversion is the clear alpha generator among 4 tested archetypes, delivering consistent 0.55-0.61 Sharpe with ~7,400 signals per year — abundant capacity for systematic exploitation.',
  },
]

const researchImages = [
  { file: 'ih1_ih2_beta_convergence.png', title: 'Beta Convergence by Timescale', category: 'Beta Analysis' },
  { file: 'ih3_nonlinear_beta.png', title: 'Nonlinear Beta by Volatility Quintile', category: 'Beta Analysis' },
  { file: 'ih4_failed_propagation.png', title: 'Failed Propagation Hit Rates', category: 'Beta Analysis' },
  { file: 'beta_by_session.png', title: 'Session-Conditional Beta', category: 'Beta Analysis' },
  { file: 'ih5_cross_correlation.png', title: 'Cross-Tenor Correlation at Minute Lags', category: 'Lead-Lag' },
  { file: 'irf_or_to_spreads.png', title: 'VAR Impulse Response Functions', category: 'Lead-Lag' },
  { file: 'rolling_pca_evolution.png', title: 'Rolling PCA Explained Variance', category: 'Regimes' },
  { file: 'regime_timeline.png', title: 'Regime Classification Timeline', category: 'Regimes' },
  { file: 'regime_transition_heatmap.png', title: 'Regime Transition Probabilities', category: 'Regimes' },
  { file: 'ih9_energy_budget.png', title: 'Session Energy Buildup Curves', category: 'Volatility' },
  { file: 'ih11_bar_classification_or.png', title: 'Bar Type Distribution', category: 'Volatility' },
  { file: 'hourly_volume_profile.png', title: 'Hourly Volume Profile', category: 'Volatility' },
  { file: 'ih14_session_volatility.png', title: 'Session Volatility Comparison', category: 'Events' },
  { file: 'ih16_eia_propagation.png', title: 'EIA Volatility Ratio Paradox', category: 'Events' },
  { file: 'ih17_settlement_window.png', title: 'Settlement Window Volatility', category: 'Events' },
  { file: 'ih20_hurst_exponents.png', title: 'Hurst Exponents by Tenor & Timescale', category: 'Fractal' },
  { file: 'ih21_butterfly_halflife.png', title: 'Butterfly AR(1) Decay', category: 'Fractal' },
  { file: 'ih22_wavelet_decomposition.png', title: 'Wavelet Energy Distribution', category: 'Fractal' },
  { file: 'ih23_correlation_breakdown.png', title: 'Correlation Breakdown Forward Returns', category: 'Advanced' },
  { file: 'ih27_entropy.png', title: 'Shannon Entropy Evolution', category: 'Advanced' },
  { file: 'ih29_snapback_elasticity.png', title: 'Snap-Back Reversion Rates', category: 'Advanced' },
  { file: 'trade_archetypes_summary.png', title: 'Trade Archetype Comparison', category: 'Strategies' },
]

const categories = ['All', 'Beta Analysis', 'Lead-Lag', 'Regimes', 'Volatility', 'Events', 'Fractal', 'Advanced', 'Strategies']

const methods = [
  'OLS Regression', 'Vector Autoregression (VAR)', 'Granger Causality', 'Hidden Markov Models',
  'Principal Component Analysis', 'Hurst R/S Analysis', 'Wavelet MRA (Daubechies-4)',
  'AR(1) Half-Life', 'Shannon Entropy', 'Markov Transition Matrices',
  'Kalman Filtering', 'Monte Carlo Simulation'
]

function FindingCard({ finding, index }: { finding: typeof keyFindings[0], index: number }) {
  const [expanded, setExpanded] = useState(false)
  const Icon = finding.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => setExpanded(!expanded)}
      className="bento-card cursor-pointer group"
    >
      <div className="flex items-start gap-4">
        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${finding.bg} shrink-0`}>
          <Icon className={`w-5 h-5 ${finding.color}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-white">{finding.title}</h4>
            <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </motion.div>
          </div>
          <p className={`text-xs font-mono mt-1 ${finding.color}`}>{finding.stat}</p>

          <AnimatePresence>
            {expanded && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-xs text-gray-500 mt-2 leading-relaxed overflow-hidden"
              >
                {finding.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const filtered = selectedCategory === 'All'
    ? researchImages
    : researchImages.filter(img => img.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs rounded-lg transition-all duration-300 ${
              selectedCategory === cat
                ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400'
                : 'border border-white/[0.06] text-gray-500 hover:text-gray-300 hover:border-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, index) => (
            <motion.div
              key={img.file}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              onClick={() => setLightboxImage(img.file)}
              className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] cursor-pointer hover:border-cyan-500/20 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={`/research/${img.file}`}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-xs font-medium text-white">{img.title}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{img.category}</p>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-sm">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-backdrop flex items-center justify-center p-6"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-12 right-0 p-2 rounded-lg glass text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative w-full h-[70vh] rounded-xl overflow-hidden">
                <Image
                  src={`/research/${lightboxImage}`}
                  alt="Research visualization"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Research() {
  const [showGallery, setShowGallery] = useState(false)

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
          <p className="text-xs text-purple-400 uppercase tracking-[0.3em] mb-3">Research</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            CL Intraday Forward Curve Microstructure
          </h2>
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="tag">18.3M Minute Bars</span>
            <span className="tag">37 Hypotheses</span>
            <span className="tag">22 Visualizations</span>
            <span className="tag">2018-2026</span>
          </div>
          <p className="text-lg text-gray-500 max-w-3xl">
            How does information propagate across the crude oil forward curve within a single trading day?
            This framework analyzes minute-level dynamics across WTI outright + calendar spreads, revealing
            a bifurcated information structure with exploitable divergences.
          </p>
        </motion.div>

        {/* Key Findings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {keyFindings.map((finding, index) => (
            <FindingCard key={finding.title} finding={finding} index={index} />
          ))}
        </div>

        {/* Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card mb-8"
        >
          <h3 className="text-sm font-semibold text-white mb-4">Quantitative Methods</h3>
          <div className="flex flex-wrap gap-2">
            {methods.map((method) => (
              <span key={method} className="tag">{method}</span>
            ))}
          </div>
        </motion.div>

        {/* Gallery toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => setShowGallery(!showGallery)}
            className="btn-primary mb-8"
          >
            {showGallery ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            <span>{showGallery ? 'Hide' : 'View'} Research Visualizations ({researchImages.length})</span>
          </button>

          <AnimatePresence>
            {showGallery && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ImageGallery />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
