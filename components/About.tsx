'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, MapPin, Calendar } from 'lucide-react'

const skills = [
  { category: 'Languages', items: ['Python', 'C++', 'R', 'SQL', 'TypeScript'] },
  { category: 'Frameworks', items: ['PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn'] },
  { category: 'Trading Systems', items: ['Backtrader', 'Zipline', 'QuantLib', 'LEAN', 'Custom Infrastructure'] },
  { category: 'Databases', items: ['PostgreSQL', 'TimescaleDB', 'Redis', 'ClickHouse'] },
  { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'] },
]

const experience = [
  {
    company: 'Proprietary Trading',
    role: 'Quantitative Researcher & Developer',
    period: '2021 - Present',
    description: 'Developed and deployed systematic trading strategies across equity, futures, and options markets. Managed $47M in algorithmic strategies.',
  },
  {
    company: 'Hedge Fund Analytics',
    role: 'Quantitative Analyst',
    period: '2019 - 2021',
    description: 'Built ML-based alpha models and portfolio optimization systems. Contributed to $2.3B multi-strategy fund.',
  },
  {
    company: 'Investment Bank',
    role: 'Trading Systems Engineer',
    period: '2017 - 2019',
    description: 'Designed low-latency execution systems and market-making algorithms for institutional clients.',
  },
]

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="contact" className="min-h-screen px-6 py-20">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-600">
              About & Contact
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building the future of systematic trading, one algorithm at a time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="luxury-card group"
          >
            {/* Profile image placeholder with hover effect */}
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white">
                SS
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-2">Shreyas Somnathe</h3>
            <p className="text-cyan-400 text-center mb-6">Quant Systems Architect</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>Available for consultation</span>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Quantitative trader with 7+ years of experience in systematic strategy development,
              portfolio optimization, and high-frequency trading systems. Specialized in machine
              learning applications for alpha generation and risk management.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <motion.a
                href="mailto:shreyas@example.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 glass-hover rounded-lg p-3 flex items-center justify-center gap-2 text-cyan-400"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 glass-hover rounded-lg p-3 flex items-center justify-center gap-2 text-blue-400"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 glass-hover rounded-lg p-3 flex items-center justify-center gap-2 text-purple-400"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="luxury-card"
              >
                <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      onHoverStart={() => setHoveredSkill(skill)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        hoveredSkill === skill
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-glow'
                          : 'glass text-gray-300'
                      }`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Experience
            </span>
          </h3>

          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="luxury-card relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 shadow-glow" />
              {index !== experience.length - 1 && (
                <div className="absolute left-[7px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/50 to-transparent" />
              )}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                <div>
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <p className="text-cyan-400">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="mailto:shreyas@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl text-white font-semibold shadow-glow-strong"
          >
            <Mail className="w-5 h-5" />
            Let's Build Something Exceptional
          </motion.a>
          <p className="mt-4 text-sm text-gray-500">
            Open to consulting, collaboration, and investment opportunities
          </p>
        </motion.div>
      </div>
    </section>
  )
}
