# Technical Architecture
## Wixgo Agency

**Version:** 1.0  
**Stack:** Next.js 14 + Tailwind CSS + Framer Motion + GSAP

---

## 1. Overview

Wixgo Agency is a **static-first, client-side-animated** website built with Next.js App Router. There is no backend, no database, and no API — all content is hardcoded or sourced from local data files.

```
┌─────────────────────────────────────────────────┐
│                   Browser / Client               │
│                                                  │
│  Next.js (App Router)                            │
│  ├── Static HTML (SSG / Pre-rendered)            │
│  ├── Tailwind CSS (utility-first styles)         │
│  ├── Framer Motion (React animations)            │
│  └── GSAP + ScrollTrigger (timeline animations) │
│                                                  │
│  Deployed on: Vercel (Edge CDN)                  │
└─────────────────────────────────────────────────┘
```

---

## 2. Tech Stack Decision Matrix

| Technology | Choice | Reason |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | SSG support, SEO, image optimization, fast routing |
| **Styling** | Tailwind CSS v3 | Utility-first, small bundle, rapid development |
| **React Animations** | Framer Motion | Declarative, powerful, excellent ecosystem |
| **Timeline Animations** | GSAP + ScrollTrigger | Industry-standard scroll animations, unmatched perf |
| **Icons** | Lucide React | Consistent, tree-shakable |
| **Font** | `next/font` (Inter + Clash Display) | Zero layout shift, optimal loading |
| **Images** | `next/image` | Automatic WebP, lazy loading, responsive |
| **Deployment** | Vercel | Zero-config Next.js, global CDN |

---

## 3. Project Directory Structure

```
agency/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, metadata, providers)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles + Tailwind directives
│   ├── services/
│   │   └── page.tsx              # Services overview page
│   ├── portfolio/
│   │   ├── page.tsx              # Portfolio grid
│   │   └── [slug]/
│   │       └── page.tsx          # Case study detail page
│   ├── about/
│   │   └── page.tsx              # About / Team page
│   └── contact/
│       └── page.tsx              # Contact page
│
├── components/
│   ├── ui/                       # Base primitives
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   └── AnimatedText.tsx
│   ├── sections/                 # Full-width page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── StatsSection.tsx
│   │   └── ContactSection.tsx
│   └── shared/                   # Layout components
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── MobileMenu.tsx
│       └── PageTransition.tsx
│
├── data/                         # Static content data files
│   ├── services.ts
│   ├── projects.ts
│   ├── testimonials.ts
│   └── team.ts
│
├── lib/                          # Utility functions
│   ├── animations.ts             # Shared Framer Motion variants
│   ├── gsap.ts                   # GSAP initialization + plugins
│   └── utils.ts                  # General utilities
│
├── public/
│   ├── images/
│   ├── icons/
│   └── videos/
│
├── styles/
│   └── globals.css
│
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 4. Rendering Strategy

| Page | Strategy | Reason |
|---|---|---|
| `/` (Home) | **SSG** (Static) | Max performance, SEO |
| `/services` | **SSG** | Content rarely changes |
| `/portfolio` | **SSG** | Pre-rendered at build time |
| `/portfolio/[slug]` | **SSG** | Static case studies |
| `/about` | **SSG** | Team data is static |
| `/contact` | **SSG** | Form is client-side only |

> All pages use `generateStaticParams()` and `generateMetadata()` for optimal SEO.

---

## 5. Animation Architecture

### Two-Layer Animation System

```
Layer 1: Framer Motion (React-managed)
  ├── Page transitions (AnimatePresence)
  ├── Component entrance animations
  ├── Hover / tap micro-interactions
  └── Staggered list animations

Layer 2: GSAP (Imperative, DOM-managed)
  ├── ScrollTrigger for scroll-based reveals
  ├── SplitText for character/word animations
  ├── Complex timeline sequences (Hero)
  └── Parallax effects
```

### Animation File Structure

```ts
// lib/animations.ts - Shared Framer Motion variants
export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
```

---

## 6. Performance Strategy

| Optimization | Implementation |
|---|---|
| **Images** | `next/image` with WebP format |
| **Fonts** | `next/font` with `display: swap` |
| **Code Splitting** | Automatic via Next.js App Router |
| **GSAP Bundle** | Dynamic import — loaded only client-side |
| **Animation Performance** | `will-change: transform` + `transform3d` GPU acceleration |
| **Lazy Sections** | `next/dynamic` for below-the-fold sections |

---

## 7. SEO Architecture

```tsx
// app/layout.tsx — Base metadata
export const metadata: Metadata = {
  title: { template: '%s | Wixgo Agency', default: 'Wixgo Agency' },
  description: 'Premium web development, app development, SEO, UI/UX & branding agency',
  openGraph: { ... },
  twitter: { card: 'summary_large_image' },
};

// Each page exports its own generateMetadata()
```

### Structured Data (JSON-LD)
- `Organization` schema on homepage
- `Service` schema on services page
- `BreadcrumbList` on all inner pages

---

## 8. Deployment Pipeline

```
Developer → Push to GitHub
  → Vercel detects push
  → Runs: npm run build
  → Generates: Static HTML + JS bundles
  → Deploys to: Vercel Edge Network (CDN)
  → Live at: wixgo.in (custom domain)
```

---

## 9. Environment Configuration

```bash
# .env.local (if needed for contact form)
NEXT_PUBLIC_SITE_URL=https://www.wixgo.in
NEXT_PUBLIC_CONTACT_EMAIL=hello@wixgo.in
# (No database or backend credentials needed)
```
