import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          graphite: '#050505',
          midnight: '#0a0f14',
          emerald: '#0a2e1f',
          gold: '#d4af37',
          silver: '#c0c0c0',
          plasma: '#00ffff',
        },
        accent: {
          cyan: '#00e5ff',
          blue: '#3366ff',
          purple: '#8b5cf6',
          amber: '#f59e0b',
          emerald: '#10b981',
          rose: '#f43f5e',
        },
        glass: {
          white: 'rgba(255, 255, 255, 0.03)',
          light: 'rgba(255, 255, 255, 0.06)',
          medium: 'rgba(255, 255, 255, 0.1)',
          strong: 'rgba(255, 255, 255, 0.15)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-luxury': 'linear-gradient(135deg, #050505 0%, #0a0f14 40%, #080d12 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(0, 229, 255, 0.04) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.04) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(16, 185, 129, 0.03) 0px, transparent 50%)',
        'glass-shine': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)',
      },
      backdropBlur: {
        xs: '2px',
        glass: '16px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 229, 255, 0.06)',
        'glass-hover': '0 8px 48px 0 rgba(0, 229, 255, 0.12)',
        'luxury': '0 25px 80px -15px rgba(0, 0, 0, 0.9)',
        'glow': '0 0 20px rgba(0, 229, 255, 0.2)',
        'glow-strong': '0 0 60px rgba(0, 229, 255, 0.3)',
        'glow-purple': '0 0 40px rgba(139, 92, 246, 0.2)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'bento': '0 1px 2px rgba(0, 0, 0, 0.3), 0 4px 12px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'breathe': 'breathe 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'aurora': 'aurora 8s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '1' },
        },
        aurora: {
          '0%, 100%': { transform: 'translateX(0) translateY(0) rotate(0deg)', opacity: '0.3' },
          '33%': { transform: 'translateX(30px) translateY(-20px) rotate(1deg)', opacity: '0.5' },
          '66%': { transform: 'translateX(-20px) translateY(10px) rotate(-1deg)', opacity: '0.3' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(0, 229, 255, 0.1)' },
          '50%': { borderColor: 'rgba(0, 229, 255, 0.3)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      }
    },
  },
  plugins: [],
}
export default config
