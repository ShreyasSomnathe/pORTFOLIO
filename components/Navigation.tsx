'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sections = ['home', 'projects', 'research', 'experience', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '')
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-luxury-graphite/80 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={() => scrollToSection('#home')}
              className="text-xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-gradient-cyan">SS</span>
            </motion.button>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'
                    }`}
                    whileHover={{ y: -1 }}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-lg bg-cyan-500/[0.06] border border-cyan-500/10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                )
              })}

              <motion.a
                href="mailto:shreyassomnathe@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4 px-5 py-2 text-sm font-medium rounded-lg border border-white/[0.06] bg-white/[0.02] text-white hover:border-cyan-500/20 hover:bg-cyan-500/[0.04] transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-white/[0.06]"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-400" />
              ) : (
                <Menu className="w-5 h-5 text-gray-400" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[64px] left-0 right-0 z-40 md:hidden bg-luxury-graphite/95 backdrop-blur-xl border-b border-white/[0.04]"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace('#', '')
                return (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'bg-cyan-500/[0.06] text-cyan-400 border border-cyan-500/10'
                        : 'text-gray-400 hover:bg-white/[0.02] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
