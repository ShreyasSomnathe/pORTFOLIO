import Background3D from '@/components/Background3D'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Research from '@/components/Research'
import About from '@/components/About'
import CommandPalette from '@/components/CommandPalette'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 3D Background */}
      <Background3D />

      {/* Navigation */}
      <Navigation />

      {/* Command Palette */}
      <CommandPalette />

      {/* Main sections */}
      <div id="home">
        <Hero />
      </div>

      <div id="portfolio">
        <Portfolio />
      </div>

      <div id="research">
        <Research />
      </div>

      <About />

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Shreyas Somnathe
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Quant Systems Architect
              </p>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-500">
              <a
                href="mailto:shreyas@example.com"
                className="hover:text-cyan-400 transition-colors"
              >
                Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-sm text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} Shreyas Somnathe. Built with precision.
            </p>
            <p className="mt-2 text-xs">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Powered by Next.js, Three.js, and Framer Motion
              </span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
