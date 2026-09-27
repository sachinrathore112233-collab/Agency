# Component Library Reference
## Wixgo Agency

**Version:** 1.0

---

## Component Organization

```
components/
├── ui/           # Primitive, reusable atoms
├── sections/     # Full-width page sections (organisms)
└── shared/       # Layout-level components (header, footer)
```

---

## 1. UI Primitives (`/components/ui/`)

---

### `Button`

**File:** `components/ui/Button.tsx`

**Props:**
```ts
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;          // If provided, renders as <Link>
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}
```

**Variants:**
| Variant | Style |
|---|---|
| `primary` | Purple gradient background, white text |
| `secondary` | Dark background, purple border |
| `ghost` | Transparent, white text on hover |
| `outline` | Transparent with white border |

**Animation:** Framer Motion `whileHover={{ scale: 1.03 }}` + `whileTap={{ scale: 0.97 }}`

---

### `Badge`

**File:** `components/ui/Badge.tsx`

**Props:**
```ts
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'green' | 'yellow' | 'gray';
  size?: 'sm' | 'md';
}
```

**Usage:** Service tags, project categories, status indicators.

---

### `AnimatedText`

**File:** `components/ui/AnimatedText.tsx`

**Props:**
```ts
interface AnimatedTextProps {
  text: string;
  className?: string;
  animationType?: 'words' | 'chars' | 'lines';
  delay?: number;
  stagger?: number;
}
```

**Behavior:** Uses GSAP SplitText to split text and animate each word/char on scroll entry.

---

### `GradientText`

**File:** `components/ui/GradientText.tsx`

**Props:**
```ts
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;   // default: '#A855F7'
  to?: string;     // default: '#EC4899'
}
```

---

### `SectionTag`

**File:** `components/ui/SectionTag.tsx`

Small pill label above section headlines (e.g., "Our Services", "Why Us").

**Props:**
```ts
interface SectionTagProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}
```

---

### `Card`

**File:** `components/ui/Card.tsx`

**Props:**
```ts
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;    // Enables hover lift + glow
  glass?: boolean;    // Frosted glass style
}
```

---

## 2. Sections (`/components/sections/`)

---

### `HeroSection`

**File:** `components/sections/HeroSection.tsx`

Full-screen opening section.

**Contains:**
- `SectionTag` — "We Build Digital Experiences"
- Animated headline (GSAP SplitText, word-by-word)
- Subheadline
- Two `Button` CTAs
- Stats row (animated count-up)
- Animated gradient orb background

**Animation sequence:**
```
0.0s → Tag badge slides in
0.3s → Headline words reveal (stagger 0.05s/word)
0.8s → Subtext fades in
1.0s → Buttons fade in up
1.2s → Stats count up
```

---

### `ServicesSection`

**File:** `components/sections/ServicesSection.tsx`

**Contains:**
- Section header (`SectionTag` + headline + subtext)
- Grid of `ServiceCard` (5 cards: Web, App, SEO, UI/UX, Branding)
- Scroll-triggered stagger entrance

**Data source:** `data/services.ts`

#### `ServiceCard` (sub-component)

```ts
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  features?: string[];
}
```

---

### `PortfolioSection`

**File:** `components/sections/PortfolioSection.tsx`

**Contains:**
- Section header
- Filter tab bar (`FilterTabs` sub-component)
- Grid of `ProjectCard`
- "View All Work" CTA

**Data source:** `data/projects.ts`

#### `ProjectCard` (sub-component)
```ts
interface ProjectCardProps {
  image: string;
  title: string;
  category: 'web' | 'app' | 'branding' | 'seo';
  tags: string[];
  slug: string;
}
```

---

### `StatsSection`

**File:** `components/sections/StatsSection.tsx`

Horizontal row of animated statistics.

**Data:** 
```ts
const stats = [
  { value: 200, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Team Members' },
]
```

**Animation:** GSAP count-up when section enters viewport.

---

### `TestimonialsSection`

**File:** `components/sections/TestimonialsSection.tsx`

**Contains:**
- Auto-scrolling testimonial carousel
- `TestimonialCard` sub-component
- Navigation dots + prev/next buttons

#### `TestimonialCard`
```ts
interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}
```

---

### `ProcessSection`

**File:** `components/sections/ProcessSection.tsx`

Animated process timeline.

**Contains:**
- Numbered steps with icons
- Connecting line animation (GSAP DrawSVG or CSS)
- Desktop: horizontal, Mobile: vertical

---

### `AboutSection`

**File:** `components/sections/AboutSection.tsx`

**Contains:**
- Agency story text
- Team member grid (`TeamMemberCard`)
- "Why Wixgo" feature highlights

#### `TeamMemberCard`
```ts
interface TeamMemberCardProps {
  photo: string;
  name: string;
  role: string;
  linkedin?: string;
  twitter?: string;
}
```

---

### `ContactSection`

**File:** `components/sections/ContactSection.tsx`

**Contains:**
- Headline + subtext (left column)
- Contact form (right column)
- Form state management (idle → loading → success/error)

---

## 3. Shared Layout (`/components/shared/`)

---

### `Navbar`

**File:** `components/shared/Navbar.tsx`

**Behavior:**
- Transparent at top
- Becomes frosted glass on scroll (`useScroll` + `useMotionValue`)
- Active link detection via `usePathname()`

---

### `Footer`

**File:** `components/shared/Footer.tsx`

Multi-column footer with links, logo, social icons, copyright.

---

### `MobileMenu`

**File:** `components/shared/MobileMenu.tsx`

Full-screen mobile navigation overlay.

**Animation:** Framer Motion `AnimatePresence` with clip-path or slide animation.

---

### `PageTransition`

**File:** `components/shared/PageTransition.tsx`

Wraps page content with Framer Motion for enter/exit transitions.

```tsx
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

---

### `CustomCursor`

**File:** `components/shared/CustomCursor.tsx`

Desktop-only custom cursor.

**Behavior:**
- Ring cursor follows mouse with `lerp` smoothing
- Scales up on hover over interactive elements
- Changes color on hover over links
- Hidden on mobile (`md:block hidden`)
