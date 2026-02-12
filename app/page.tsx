import Background3D from '@/components/Background3D'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Research from '@/components/Research'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import About from '@/components/About'
import CommandPalette from '@/components/CommandPalette'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background3D />
      <Navigation />
      <CommandPalette />

      <div id="home">
        <Hero />
      </div>

      <div className="section-divider" />

      <div id="projects">
        <Portfolio />
      </div>

      <div className="section-divider" />

      <div id="research">
        <Research />
      </div>

      <div className="section-divider" />

      <div id="experience">
        <Experience />
      </div>

      <div className="section-divider" />

      <Skills />

      <div className="section-divider" />

      <About />

      {/* Footer */}
      <footer className="relative border-t border-white/[0.04] py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold text-gradient-cyan">
                Shreyas Somnathe
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Quantitative Researcher & Trader
              </p>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-600">
              <a href="mailto:shreyassomnathe@gmail.com" className="hover:text-cyan-400 transition-colors">
                Email
              </a>
              <a href="https://linkedin.com/in/shreyassomnathe" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/shreyassomnathe" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.03] text-center">
            <p className="text-xs text-gray-700">
              &copy; {new Date().getFullYear()} Shreyas Somnathe
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
