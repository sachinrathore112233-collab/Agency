# Design System
## CodeYug Agency

**Version:** 1.0  
**Status:** Active

---

## 1. Design Philosophy

CodeYug Agency's visual identity is built on three principles:

| Principle | Description |
|---|---|
| **Bold & Premium** | Dark backgrounds, vibrant accents — confidence in every pixel |
| **Motion-First** | Every interaction is animated; stillness feels wrong |
| **Clarity at Speed** | Information hierarchy is razor-sharp; users never feel lost |

---

## 2. Color Palette

### Primary Colors

| Name | Hex | Usage |
|---|---|---|
| `brand-black` | `#0A0A0F` | Primary background |
| `brand-dark` | `#111118` | Card backgrounds, sections |
| `brand-purple` | `#7C3AED` | Primary accent, CTAs |
| `brand-violet` | `#A855F7` | Hover states, gradients |
| `brand-white` | `#F8F8FF` | Primary text |
| `brand-muted` | `#9CA3AF` | Secondary text, captions |

### Accent / Gradient

```css
/* Hero gradient */
background: linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #EC4899 100%);

/* Glow effect */
box-shadow: 0 0 40px rgba(124, 58, 237, 0.4);

/* Text gradient */
background: linear-gradient(90deg, #A855F7, #EC4899);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### Semantic Colors

| Name | Hex | Usage |
|---|---|---|
| `success` | `#10B981` | Success states |
| `warning` | `#F59E0B` | Warnings |
| `error` | `#EF4444` | Errors |
| `info` | `#3B82F6` | Info badges |

---

## 3. Typography

### Font Families

```css
/* Display / Headlines */
font-family: 'Clash Display', 'Inter', sans-serif;

/* Body / UI */
font-family: 'Inter', system-ui, sans-serif;

/* Code */
font-family: 'JetBrains Mono', monospace;
```

### Type Scale

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `text-display-2xl` | 72px | 1.1 | 700 | Hero headlines |
| `text-display-xl` | 56px | 1.15 | 700 | Section headlines |
| `text-display-lg` | 42px | 1.2 | 600 | Sub-headlines |
| `text-display-md` | 32px | 1.3 | 600 | Card titles |
| `text-xl` | 20px | 1.5 | 500 | Lead text |
| `text-lg` | 18px | 1.6 | 400 | Body large |
| `text-base` | 16px | 1.6 | 400 | Body default |
| `text-sm` | 14px | 1.5 | 400 | Captions, labels |
| `text-xs` | 12px | 1.4 | 400 | Tags, badges |

### Tailwind Config Extensions

```js
// tailwind.config.js
fontFamily: {
  display: ['Clash Display', 'Inter', 'sans-serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
},
fontSize: {
  'display-2xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
  'display-xl':  ['3.5rem', { lineHeight: '1.15', fontWeight: '700' }],
  'display-lg':  ['2.625rem', { lineHeight: '1.2', fontWeight: '600' }],
},
```

---

## 4. Spacing System

Based on Tailwind's default 4px grid.

| Token | Value | Usage |
|---|---|---|
| `space-section` | `120px` (py-30) | Between major sections |
| `space-block` | `64px` (py-16) | Within section blocks |
| `space-component` | `32px` (p-8) | Component internal padding |
| `space-element` | `16px` (p-4) | Element spacing |

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-none` | 0 | Sharp edges (rare) |
| `rounded-lg` | 8px | Cards, inputs |
| `rounded-xl` | 12px | Large cards, modals |
| `rounded-2xl` | 16px | Feature cards |
| `rounded-full` | 9999px | Badges, avatars, pills |

---

## 6. Shadows & Glow Effects

```css
/* Card shadow */
box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);

/* Purple glow (hover state) */
box-shadow: 0 0 40px rgba(124, 58, 237, 0.35);

/* Ambient glow background */
background: radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
```

---

## 7. Animation Tokens

### Duration

| Token | Value | Usage |
|---|---|---|
| `duration-fast` | `150ms` | Micro-interactions |
| `duration-normal` | `300ms` | UI transitions |
| `duration-slow` | `600ms` | Page elements |
| `duration-hero` | `1000ms+` | Hero animations |

### Easing

```js
// Framer Motion easings
const easeOutQuart = [0.25, 1, 0.5, 1];
const easeInOutCubic = [0.65, 0, 0.35, 1];
const spring = { type: "spring", stiffness: 300, damping: 30 };
```

---

## 8. Iconography

- **Library:** Lucide React (primary), Heroicons (secondary)
- **Size:** 20px (inline), 24px (standalone), 48px (feature icons)
- **Color:** Inherit from text color or `brand-purple`

---

## 9. Imagery

- **Style:** Dark, high-contrast, tech-forward
- **Format:** WebP (preferred), PNG fallback
- **Aspect Ratios:** 16:9 (banners), 4:3 (cards), 1:1 (avatars)
- **Treatment:** Subtle purple/violet color overlay on images

---

## 10. Grid System

```
Desktop:  12 columns, 24px gap, max-width 1280px
Tablet:   8 columns,  16px gap
Mobile:   4 columns,  16px gap
```
