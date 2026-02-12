'use client'

import { motion } from 'framer-motion'
import { Building2, GraduationCap, Award } from 'lucide-react'

const experience = [
  {
    company: 'Blueberry Capital',
    location: 'Hyderabad, India',
    role: 'Quantitative Researcher / Trader',
    period: 'Aug 2025 - Present',
    highlights: [
      'Developed ML models for trading crude oil forward curve, achieving portfolio Sharpe ratio of 3.4 through systematic signal generation across multiple contract maturities and term structure regimes',
      'Built and deployed 3 live strategies integrating alternative data: EIA weekly petroleum reports, FRED macroeconomic indicators (GDP, industrial production, rates), and proprietary market microstructure features',
      'Architected end-to-end execution infrastructure in Python (FastAPI, WebSocket) for automated order generation, risk checks, position management, and real-time P&L monitoring',
      'Engineered feature pipelines processing energy fundamentals, forward curve dynamics, inventory surprise signals, and macro regime indicators with ensemble ML (XGBoost, neural networks)',
    ],
    icon: Building2,
  },
  {
    company: 'Futures First',
    location: 'Hyderabad, India',
    role: 'Quantitative Trader',
    period: 'May 2023 - May 2025',
    highlights: [
      'Developed statistical models for energy futures (crude oil, natural gas, heating oil, RBOB, gasoil) generating alpha; delivered $200K+ annual trading profits (50% ROI)',
      'Executed algorithmic strategies: event-driven, trend-following on S&P 500, and mid-frequency arbitrage boxes for consistent daily profits',
      'Applied regression analysis for hedge ratios across Abu Dhabi crude, Brent, WTI; Monte Carlo stress testing; seasonal analysis for strategy optimization',
      'Managed multi-commodity portfolio (intraday to seasonal): mean-reverting, trend-following, arbitrage, inter-product and calendar spread strategies',
    ],
    icon: Building2,
  },
]

const education = [
  {
    institution: 'Nagpur University',
    location: 'Nagpur, India',
    degree: 'B.E. in Computer Science',
    period: '2018 - 2022',
    detail: 'CGPA: 9.2 | Coursework: Machine Learning, Deep Neural Networks, Data Mining, AI',
    icon: GraduationCap,
  },
  {
    institution: 'QuantInsti Quantitative Learning',
    location: 'Mumbai, India',
    degree: 'Executive Program in Algorithmic Trading',
    period: 'Jan - Jun 2022',
    detail: 'Quantitative Trading, ML in Finance, HFT, Risk Management, Derivatives',
    icon: GraduationCap,
  },
]

const certifications = [
  'IBM Data Scientist',
  'NISM Series 8 & 10',
  'FRM Level 1 Candidate',
]

export default function Experience() {
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
          <p className="text-xs text-emerald-400 uppercase tracking-[0.3em] mb-3">Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
        </motion.div>

        {/* Work Experience */}
        <div className="space-y-4 mb-16">
          {experience.map((exp, index) => {
            const Icon = exp.icon
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bento-card"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 shrink-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                        <p className="text-sm text-cyan-400">{exp.company} <span className="text-gray-600">| {exp.location}</span></p>
                      </div>
                      <span className="text-xs text-gray-500 font-mono">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 ml-14">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-gray-400 leading-relaxed flex gap-2">
                      <span className="text-cyan-500/50 mt-1.5 shrink-0">&#8226;</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {education.map((edu, index) => {
            const Icon = edu.icon
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bento-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 shrink-0">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{edu.degree}</h4>
                    <p className="text-xs text-purple-400 mt-0.5">{edu.institution}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{edu.location} | {edu.period}</p>
                    <p className="text-xs text-gray-500 mt-2">{edu.detail}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card"
        >
          <div className="flex items-center gap-3 mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <h4 className="text-sm font-semibold text-white">Certifications</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span key={cert} className="tag">{cert}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
