'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'

export default function About() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-xs text-rose-400 uppercase tracking-[0.3em] mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            Open to quantitative research roles, trading opportunities, and collaboration in systematic strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email */}
          <motion.a
            href="mailto:shreyassomnathe@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bento-card group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-cyan-400 transition-colors">Email</span>
            </div>
            <p className="text-sm text-white font-mono">shreyassomnathe@gmail.com</p>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+917798440795"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bento-card group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10">
                <Phone className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-emerald-400 transition-colors">Phone</span>
            </div>
            <p className="text-sm text-white font-mono">+91 7798440795</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/shreyassomnathe"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bento-card group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                <Linkedin className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-blue-400 transition-colors">LinkedIn</span>
            </div>
            <p className="text-sm text-white">Connect on LinkedIn</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/shreyassomnathe"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="bento-card group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                <Github className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-purple-400 transition-colors">GitHub</span>
            </div>
            <p className="text-sm text-white">@shreyassomnathe</p>
          </motion.a>
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 bento-card"
        >
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-400">Based in Hyderabad, India</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
