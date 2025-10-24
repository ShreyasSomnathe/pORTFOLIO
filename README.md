# Elite Quant Portfolio - Shreyas Somnathe

A next-generation personal website for an elite quantitative trader — combining Wall Street precision with futuristic luxury tech aesthetics.

## 🎨 Visual Features

- **3D Particle System**: Volumetric lighting and interactive particle field using Three.js
- **Glass Morphism**: Ultra-smooth glass panels with depth and layering
- **Cinematic Animations**: Framer Motion physics-based interactions
- **Real-time Metrics**: Live-updating trading performance indicators
- **Command Palette**: Keyboard-driven navigation (⌘K)
- **Scroll Animations**: GSAP-powered scroll-triggered reveals
- **Responsive Design**: Optimized for all devices, targeting 120 FPS

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **3D Graphics**: Three.js + React Three Fiber
- **Animation**: Framer Motion + GSAP
- **Charts**: Recharts + Chart.js
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pORTFOLIO
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

### Deploy to Vercel:

The project is optimized for Vercel deployment. Simply connect your repository to Vercel for automatic deployments.

```bash
vercel
```

## 🎯 Key Sections

1. **Hero**: Animated introduction with real-time metrics
2. **Portfolio**: Interactive strategy cards with expandable dashboards
3. **Research**: Scroll-triggered code animations and performance charts
4. **About/Contact**: Professional bio with skills and experience timeline
5. **Command Palette**: Quick navigation (press ⌘K or Ctrl+K)

## 🎨 Customization

### Color Scheme

Edit `tailwind.config.ts` to customize the luxury color palette:

```typescript
colors: {
  luxury: {
    graphite: '#0a0a0a',
    midnight: '#0f1419',
    emerald: '#0a2e1f',
    gold: '#d4af37',
    plasma: '#00ffff',
  }
}
```

### Content

- Update personal information in `/components/About.tsx`
- Modify strategies in `/components/Portfolio.tsx`
- Adjust metrics in `/components/Hero.tsx`
- Edit research topics in `/components/Research.tsx`

## 🔧 Performance Optimization

- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image component
- **3D Rendering**: Optimized particle count and render loop
- **Lazy Loading**: Components load on scroll
- **CSS Minification**: Production builds are fully optimized

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎭 Design Philosophy

> "Every movement has intent — precision of a scalpel, calm of a professional killer."

This portfolio embodies:
- Mathematical elegance
- Cinematic confidence
- Zero clutter
- Pure mastery

## 📄 License

Private portfolio project. All rights reserved.

## 🤝 Contact

Shreyas Somnathe
Email: shreyas@example.com
LinkedIn: [linkedin.com/in/shreyassomnathe](#)
GitHub: [github.com/shreyassomnathe](#)

---

Built with precision. Powered by passion.