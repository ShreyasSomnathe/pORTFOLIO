'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Activity, Shield, Zap } from 'lucide-react'

interface Strategy {
  id: string
  name: string
  type: string
  description: string
  metrics: {
    return: number
    sharpe: number
    winRate: number
    trades: number
  }
  icon: any
  color: string
}

const strategies: Strategy[] = [
  {
    id: '1',
    name: 'Momentum Alpha',
    type: 'Trend Following',
    description: 'Multi-timeframe momentum system leveraging regime detection and dynamic position sizing',
    metrics: {
      return: 124.5,
      sharpe: 2.8,
      winRate: 67.3,
      trades: 1247,
    },
    icon: TrendingUp,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: '2',
    name: 'Mean Reversion Core',
    type: 'Statistical Arbitrage',
    description: 'Pairs trading with cointegration analysis and adaptive threshold optimization',
    metrics: {
      return: 92.1,
      sharpe: 3.2,
      winRate: 71.8,
      trades: 2891,
    },
    icon: Activity,
    color: 'from-purple-500 to-pink-600',
  },
  {
    id: '3',
    name: 'Volatility Harvester',
    type: 'Options Strategy',
    description: 'Systematic delta-neutral options strategies with gamma scalping',
    metrics: {
      return: 78.4,
      sharpe: 2.4,
      winRate: 64.2,
      trades: 543,
    },
    icon: Shield,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: '4',
    name: 'HFT Microstructure',
    type: 'Market Making',
    description: 'Order book dynamics and latency arbitrage in highly liquid markets',
    metrics: {
      return: 156.7,
      sharpe: 4.1,
      winRate: 58.9,
      trades: 47283,
    },
    icon: Zap,
    color: 'from-orange-500 to-red-600',
  },
]

function StrategyCard({ strategy }: { strategy: Strategy }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = strategy.icon

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="glass-hover rounded-2xl cursor-pointer relative overflow-hidden"
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${strategy.color} opacity-5`} />

      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${strategy.color} bg-opacity-20`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{strategy.name}</h3>
              <p className="text-sm text-gray-400">{strategy.type}</p>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </motion.div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="glass rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Return</p>
            <p className="text-2xl font-bold text-green-400">+{strategy.metrics.return}%</p>
          </div>
          <div className="glass rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Sharpe</p>
            <p className="text-2xl font-bold text-cyan-400">{strategy.metrics.sharpe}</p>
          </div>
          <div className="glass rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Win Rate</p>
            <p className="text-2xl font-bold text-purple-400">{strategy.metrics.winRate}%</p>
          </div>
          <div className="glass rounded-lg p-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Trades</p>
            <p className="text-2xl font-bold text-gray-300">{strategy.metrics.trades.toLocaleString()}</p>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {strategy.description}
                </p>
              </div>

              {/* Mini chart placeholder */}
              <div className="glass rounded-lg p-4 h-32 flex items-end justify-between gap-1">
                {Array.from({ length: 24 }).map((_, i) => {
                  const height = 20 + Math.random() * 80
                  const isPositive = Math.random() > 0.3
                  return (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: i * 0.02, duration: 0.3 }}
                      className={`flex-1 rounded-sm ${
                        isPositive ? 'bg-green-500' : 'bg-red-500'
                      } opacity-70`}
                    />
                  )
                })}
              </div>

              <button className="btn-luxury w-full relative z-10">
                <span className="relative z-10">View Full Analysis</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Strategy Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Diversified suite of systematic strategies across multiple asset classes and timeframes
          </p>
        </motion.div>

        {/* Strategies grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <StrategyCard strategy={strategy} />
            </motion.div>
          ))}
        </div>

        {/* Performance summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 luxury-card"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Portfolio Performance</h3>
              <p className="text-gray-400">Combined strategies, optimized allocation</p>
            </div>

            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Total AUM</p>
                <p className="text-3xl font-bold text-white">$47.2M</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">YTD Return</p>
                <p className="text-3xl font-bold text-green-400">+112.7%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">Correlation</p>
                <p className="text-3xl font-bold text-cyan-400">0.23</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
