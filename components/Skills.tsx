'use client'

import { motion } from 'framer-motion'
import { Code2, BarChart2, Cpu, Database } from 'lucide-react'

const skillGroups = [
  {
    category: 'Programming',
    icon: Code2,
    color: 'text-cyan-400',
    bg: 'from-cyan-500/10 to-blue-500/10',
    items: ['Python', 'NumPy', 'Pandas', 'SciPy', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'PyTorch', 'R', 'C++', 'SQL'],
  },
  {
    category: 'Quantitative',
    icon: BarChart2,
    color: 'text-purple-400',
    bg: 'from-purple-500/10 to-pink-500/10',
    items: ['Statistical Modeling', 'Time Series', 'PCA', 'Kalman Filtering', 'Monte Carlo', 'Stochastic Calculus', 'Options Pricing', 'Factor Models'],
  },
  {
    category: 'ML & Methods',
    icon: Cpu,
    color: 'text-amber-400',
    bg: 'from-amber-500/10 to-orange-500/10',
    items: ['Gradient Boosting', 'Random Forest', 'Neural Networks', 'NLP', 'Ensemble Methods', 'HMM', 'Wavelet Analysis'],
  },
  {
    category: 'Infrastructure',
    icon: Database,
    color: 'text-emerald-400',
    bg: 'from-emerald-500/10 to-teal-500/10',
    items: ['FastAPI', 'WebSocket', 'PostgreSQL', 'Docker', 'Git', 'TT API', 'React'],
  },
]

export default function Skills() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="text-xs text-amber-400 uppercase tracking-[0.3em] mb-3">Technical</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Tools</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bento-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${group.bg}`}>
                    <Icon className={`w-4 h-4 ${group.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -1 }}
                      className="tag cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
