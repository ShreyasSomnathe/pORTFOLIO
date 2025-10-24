'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from 'recharts'

const codeSnippet = `def optimize_portfolio(returns, constraints):
    """
    Optimize portfolio allocation using modern portfolio theory
    with custom risk constraints and regime detection.
    """
    n_assets = returns.shape[1]

    # Calculate covariance matrix with exponential weighting
    cov_matrix = returns.ewm(span=60).cov()

    # Define objective: maximize Sharpe ratio
    def objective(weights):
        portfolio_return = np.sum(returns.mean() * weights) * 252
        portfolio_std = np.sqrt(
            np.dot(weights.T, np.dot(cov_matrix, weights))
        ) * np.sqrt(252)
        return -portfolio_return / portfolio_std

    # Constraints: weights sum to 1, long-only
    constraints = (
        {'type': 'eq', 'fun': lambda x: np.sum(x) - 1},
    )
    bounds = tuple((0, 0.25) for _ in range(n_assets))

    # Run optimization
    result = scipy.optimize.minimize(
        objective,
        x0=np.array([1/n_assets] * n_assets),
        method='SLSQP',
        bounds=bounds,
        constraints=constraints
    )

    return result.x`

function TypingCode() {
  const [displayedCode, setDisplayedCode] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!isInView) return

    if (currentIndex < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(codeSnippet.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 10)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, isInView])

  return (
    <div ref={ref} className="glass rounded-xl p-6 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-auto text-xs text-gray-500">portfolio_optimizer.py</span>
      </div>

      <pre className="font-mono text-sm text-gray-300 overflow-x-auto">
        <code>{displayedCode}</code>
        {currentIndex < codeSnippet.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-2 h-5 bg-cyan-400 ml-1"
          />
        )}
      </pre>
    </div>
  )
}

function PerformanceChart() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Generate sample data
  const data = Array.from({ length: 30 }, (_, i) => ({
    day: i,
    strategy: 100 + Math.random() * 80 + i * 3,
    benchmark: 100 + Math.random() * 30 + i * 1.2,
  }))

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="glass rounded-xl p-6"
    >
      <div className="mb-4">
        <h3 className="text-lg font-bold text-white mb-1">Backtest Performance</h3>
        <p className="text-sm text-gray-400">Strategy vs Benchmark (30-day rolling)</p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorStrategy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ffff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00ffff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorBenchmark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#888888" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#888888" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" stroke="#444" hide />
            <YAxis stroke="#444" hide />
            <Area
              type="monotone"
              dataKey="strategy"
              stroke="#00ffff"
              strokeWidth={2}
              fill="url(#colorStrategy)"
              animationDuration={2000}
            />
            <Area
              type="monotone"
              dataKey="benchmark"
              stroke="#888888"
              strokeWidth={2}
              fill="url(#colorBenchmark)"
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-cyan-400" />
          <span className="text-sm text-gray-400">Strategy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-500" />
          <span className="text-sm text-gray-400">Benchmark</span>
        </div>
      </div>
    </motion.div>
  )
}

const researchTopics = [
  {
    title: 'Machine Learning for Alpha Generation',
    description: 'Deep learning models for pattern recognition in high-frequency market microstructure',
    tags: ['Neural Networks', 'Feature Engineering', 'Ensemble Methods'],
  },
  {
    title: 'Regime Detection & Switching',
    description: 'Hidden Markov models and state-space approaches for market regime identification',
    tags: ['HMM', 'Kalman Filters', 'Dynamic Systems'],
  },
  {
    title: 'Portfolio Optimization',
    description: 'Multi-objective optimization with risk parity and factor-based constraints',
    tags: ['Convex Optimization', 'Risk Management', 'Factor Models'],
  },
]

export default function Research() {
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Research & Development
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge quantitative research in systematic trading and portfolio optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Code snippet */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TypingCode />
          </motion.div>

          {/* Performance chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PerformanceChart />
          </motion.div>
        </div>

        {/* Research topics */}
        <div className="space-y-6">
          {researchTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="luxury-card"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                  <p className="text-gray-400 mb-3">{topic.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {topic.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full glass border border-cyan-500/30 text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-luxury whitespace-nowrap"
                >
                  <span className="relative z-10">Read Paper</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
