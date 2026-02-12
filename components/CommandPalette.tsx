'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Home, Briefcase, BookOpen, Mail, ExternalLink, GraduationCap } from 'lucide-react'

interface Command {
  id: string
  label: string
  icon: any
  action: () => void
  keywords: string[]
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')

  const commands: Command[] = [
    {
      id: 'home',
      label: 'Go to Home',
      icon: Home,
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      keywords: ['home', 'top', 'hero'],
    },
    {
      id: 'projects',
      label: 'View Projects',
      icon: Briefcase,
      action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      keywords: ['projects', 'portfolio', 'strategies'],
    },
    {
      id: 'research',
      label: 'View Research',
      icon: BookOpen,
      action: () => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' }),
      keywords: ['research', 'cl', 'intraday'],
    },
    {
      id: 'experience',
      label: 'View Experience',
      icon: GraduationCap,
      action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
      keywords: ['experience', 'work', 'education'],
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Mail,
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      keywords: ['contact', 'email'],
    },
    {
      id: 'github',
      label: 'Open GitHub',
      icon: ExternalLink,
      action: () => window.open('https://github.com/shreyassomnathe', '_blank'),
      keywords: ['github', 'code'],
    },
  ]

  const filteredCommands = commands.filter((command) => {
    const s = search.toLowerCase()
    return command.label.toLowerCase().includes(s) || command.keywords.some((k) => k.includes(s))
  })

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }
    if (e.key === 'Escape') { setIsOpen(false); setSearch('') }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const executeCommand = (command: Command) => {
    command.action()
    setIsOpen(false)
    setSearch('')
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Search className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-xl z-50 px-4"
            >
              <div className="rounded-2xl border border-white/[0.08] bg-luxury-midnight/95 backdrop-blur-xl overflow-hidden shadow-glow">
                <div className="flex items-center gap-3 p-4 border-b border-white/[0.04]">
                  <Search className="w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
                    autoFocus
                  />
                  <kbd className="px-2 py-1 text-[10px] bg-white/[0.03] rounded border border-white/[0.06] text-gray-600">ESC</kbd>
                </div>
                <div className="max-h-72 overflow-y-auto p-2">
                  {filteredCommands.length === 0 ? (
                    <div className="text-center py-8 text-gray-600 text-sm">No results</div>
                  ) : (
                    <div className="space-y-0.5">
                      {filteredCommands.map((command, index) => {
                        const Icon = command.icon
                        return (
                          <motion.button
                            key={command.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.02 }}
                            onClick={() => executeCommand(command)}
                            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-colors group text-left"
                          >
                            <div className="p-2 rounded-lg bg-white/[0.03] group-hover:bg-cyan-500/[0.08] transition-colors">
                              <Icon className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                            </div>
                            <span className="flex-1 text-sm text-gray-300 group-hover:text-white transition-colors">
                              {command.label}
                            </span>
                          </motion.button>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
