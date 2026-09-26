# Responsive Design Guidelines
## CodeYug Agency

**Version:** 1.0

---

## 1. Breakpoint System

Using Tailwind CSS default breakpoints:

| Breakpoint | Prefix | Min Width | Target Devices |
|---|---|---|---|
| **Mobile** | (none) | 0px | Phones (portrait) |
| **Small** | `sm:` | 640px | Phones (landscape), small tablets |
| **Medium** | `md:` | 768px | Tablets (portrait) |
| **Large** | `lg:` | 1024px | Tablets (landscape), small laptops |
| **XL** | `xl:` | 1280px | Desktops |
| **2XL** | `2xl:` | 1536px | Large desktops, 4K |

### Custom Breakpoints (tailwind.config.ts)

```ts
screens: {
  'xs': '390px',   // iPhone 14 Pro
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

---

## 2. Mobile-First Approach

All styles are written mobile-first. Desktop styles are added using breakpoint prefixes.

```tsx
// ✅ Correct — mobile-first
<div className="text-3xl md:text-5xl xl:text-7xl">

// ❌ Wrong — desktop-first
<div className="text-7xl xl:text-5xl md:text-3xl">
```

---

## 3. Typography Scaling

| Element | Mobile | Tablet (`md:`) | Desktop (`xl:`) |
|---|---|---|---|
| Hero headline | `text-4xl` (36px) | `text-6xl` (60px) | `text-8xl` (96px) |
| Section headline | `text-3xl` (30px) | `text-4xl` (36px) | `text-5xl` (48px) |
| Card title | `text-xl` (20px) | `text-2xl` (24px) | `text-2xl` (24px) |
| Body text | `text-base` (16px) | `text-lg` (18px) | `text-lg` (18px) |
| Caption | `text-sm` (14px) | `text-sm` (14px) | `text-sm` (14px) |

---

## 4. Layout Grids

### General Page Grid

```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  {/* Page content */}
</div>
```

### Services Grid

```tsx
// Mobile: 1 col → Tablet: 2 cols → Desktop: 3 cols
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
```

### Portfolio Grid

```tsx
// Mobile: 1 col → Tablet: 2 cols → Desktop: 3 cols
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
```

### Team Grid

```tsx
// Mobile: 2 cols → Tablet: 3 cols → Desktop: 4 cols
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
```

---

## 5. Spacing Scale by Screen

| Section | Mobile | Desktop |
|---|---|---|
| Section vertical padding | `py-16` (64px) | `py-28` (112px) |
| Section horizontal padding | `px-4` (16px) | `px-8` (32px) |
| Card padding | `p-5` (20px) | `p-8` (32px) |
| Gap between cards | `gap-4` (16px) | `gap-8` (32px) |

---

## 6. Navigation Responsive Behavior

### Mobile (< `md`)

```tsx
// Show hamburger, hide desktop nav
<nav>
  <Logo />
  <HamburgerButton className="block md:hidden" />
  <DesktopNav className="hidden md:flex" />
</nav>

// Full-screen mobile menu overlay
<MobileMenu />
```

### Desktop (≥ `md`)

- Full horizontal navigation
- CTA button visible
- Mobile menu hidden

---

## 7. Hero Section Responsive

| Property | Mobile | Tablet | Desktop |
|---|---|---|---|
| Min height | `min-h-screen` | `min-h-screen` | `min-h-screen` |
| Text alignment | `text-center` | `text-center` | `text-left` |
| CTA layout | Stacked | Stacked | Inline |
| Stats | 2-col grid | 4-col inline | 4-col inline |
| Background orb size | 200px | 400px | 600px |

---

## 8. Component-Specific Rules

### Cards
```tsx
// Hover effects disabled on touch devices
<motion.div
  whileHover={isMobile ? {} : { y: -8 }}
  className="..."
>
```

### Custom Cursor
```tsx
// Only show on desktop
<CustomCursor className="hidden md:block" />
```

### Animations
- **Mobile:** Simplified animations (no parallax, no complex scroll effects)
- **Tablet+:** Full GSAP ScrollTrigger animations
- **Reduced motion:** Respect `prefers-reduced-motion`

```tsx
// Respect reduced motion preference
const prefersReducedMotion = useReducedMotion();

const variants = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40 },
  visible: { opacity: 1, y: 0 }
};
```

---

## 9. Images Responsive

Always use `next/image` with proper `sizes` attribute:

```tsx
<Image
  src="/images/project.webp"
  alt="Project name"
  fill
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  className="object-cover"
/>
```

---

## 10. Touch Interactions (Mobile)

| Element | Desktop | Mobile |
|---|---|---|
| Hover effects | ✅ Full animations | ❌ Disabled |
| Cursor | Custom ring cursor | Default system cursor |
| Carousel | Click navigation | Swipe gesture |
| Service cards | Hover reveals info | Tap to reveal |

---

## 11. Testing Checklist

### Widths to Test

- [ ] 375px — iPhone SE
- [ ] 390px — iPhone 14 Pro
- [ ] 414px — iPhone Plus
- [ ] 768px — iPad portrait
- [ ] 1024px — iPad landscape / laptop
- [ ] 1280px — Standard desktop
- [ ] 1440px — Wide desktop
- [ ] 1920px — Full HD

### Per-Width Checks

- [ ] No horizontal scroll overflow
- [ ] Text is readable (min 14px)
- [ ] Touch targets ≥ 44×44px
- [ ] Images not distorted
- [ ] Animations play correctly (or simplified)
- [ ] Navigation accessible
- [ ] Footer not clipped

---

## 12. Accessibility on Mobile

- Minimum tap target size: **44×44px** (Apple HIG)
- Sufficient color contrast: **4.5:1** ratio minimum
- Font size never below **14px**
- Focus indicators visible on keyboard/tab navigation
