'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Home, Briefcase, BookOpen, Mail, ExternalLink } from 'lucide-react'

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
      id: 'portfolio',
      label: 'View Portfolio',
      icon: Briefcase,
      action: () => {
        const el = document.getElementById('portfolio')
        el?.scrollIntoView({ behavior: 'smooth' })
      },
      keywords: ['portfolio', 'strategies', 'systems'],
    },
    {
      id: 'research',
      label: 'View Research',
      icon: BookOpen,
      action: () => {
        const el = document.getElementById('research')
        el?.scrollIntoView({ behavior: 'smooth' })
      },
      keywords: ['research', 'papers', 'development'],
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Mail,
      action: () => {
        const el = document.getElementById('contact')
        el?.scrollIntoView({ behavior: 'smooth' })
      },
      keywords: ['contact', 'email', 'reach'],
    },
    {
      id: 'linkedin',
      label: 'Open LinkedIn',
      icon: ExternalLink,
      action: () => window.open('https://linkedin.com', '_blank'),
      keywords: ['linkedin', 'profile', 'social'],
    },
    {
      id: 'github',
      label: 'Open GitHub',
      icon: ExternalLink,
      action: () => window.open('https://github.com', '_blank'),
      keywords: ['github', 'code', 'projects'],
    },
  ]

  const filteredCommands = commands.filter((command) => {
    const searchLower = search.toLowerCase()
    return (
      command.label.toLowerCase().includes(searchLower) ||
      command.keywords.some((keyword) => keyword.includes(searchLower))
    )
  })

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    }

    if (e.key === 'Escape') {
      setIsOpen(false)
      setSearch('')
    }
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
      {/* Trigger button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 glass-hover rounded-full p-4 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Search className="w-6 h-6 text-cyan-400" />
        <div className="absolute -top-12 right-0 bg-black/90 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Press <kbd className="px-1.5 py-0.5 bg-gray-700 rounded">⌘K</kbd>
        </div>
      </motion.button>

      {/* Command palette modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50"
            >
              <div className="glass rounded-2xl border border-cyan-500/30 overflow-hidden shadow-glow-strong">
                {/* Search input */}
                <div className="flex items-center gap-3 p-4 border-b border-gray-800">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Type a command or search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-lg"
                    autoFocus
                  />
                  <kbd className="px-2 py-1 text-xs bg-gray-800 rounded border border-gray-700 text-gray-400">
                    ESC
                  </kbd>
                </div>

                {/* Commands list */}
                <div className="max-h-96 overflow-y-auto p-2">
                  {filteredCommands.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                      No commands found
                    </div>
                  ) : (
                    <div className="space-y-1">
                      {filteredCommands.map((command, index) => {
                        const Icon = command.icon
                        return (
                          <motion.button
                            key={command.id}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.03 }}
                            onClick={() => executeCommand(command)}
                            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group text-left"
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-colors">
                              <Icon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <span className="flex-1 text-white group-hover:text-cyan-400 transition-colors">
                              {command.label}
                            </span>
                            <kbd className="px-2 py-1 text-xs bg-gray-800/50 rounded border border-gray-700/50 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                              ↵
                            </kbd>
                          </motion.button>
                        )
                      })}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between p-3 border-t border-gray-800 text-xs text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-gray-800 rounded">↑</kbd>
                      <kbd className="px-1.5 py-0.5 bg-gray-800 rounded">↓</kbd>
                      to navigate
                    </span>
                    <span className="flex items-center gap-1">
                      <kbd className="px-1.5 py-0.5 bg-gray-800 rounded">↵</kbd>
                      to select
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 bg-gray-800 rounded">ESC</kbd>
                    to close
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
