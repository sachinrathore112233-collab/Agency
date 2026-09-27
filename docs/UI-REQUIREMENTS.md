# UI Requirements
## Wixgo Agency

**Version:** 1.0

---

## 1. Global UI Requirements

### 1.1 Theme
- **Mode:** Dark only (no light mode in Phase 1)
- **Background:** `#0A0A0F` base with `#111118` for elevated surfaces
- **Text:** `#F8F8FF` primary, `#9CA3AF` secondary

### 1.2 Cursor
- Custom cursor (large ring + small dot) on desktop
- Cursor morphs on hover over links/buttons (scales up + changes color)

### 1.3 Scroll Behavior
- Smooth scrolling: `scroll-behavior: smooth`
- GSAP ScrollTrigger controls section reveal animations
- Scroll progress bar at top of page (optional)

### 1.4 Loading State
- Full-screen loader on first page visit
- Logo animation + counter (0 → 100%)
- Exits with curtain wipe transition

---

## 2. Navigation (Navbar)

### Desktop
```
[Logo]  [Services] [Portfolio] [About] [Contact]  [Get Started →]
```

| Property | Value |
|---|---|
| Position | Fixed top, full-width |
| Height | 72px |
| Background | Transparent → frosted glass on scroll (`backdrop-blur`) |
| Border | 1px solid rgba(255,255,255,0.08) on scroll |
| Logo | SVG, 140px wide |
| Links | `text-sm font-medium text-gray-300 hover:text-white` |
| CTA Button | Purple gradient, rounded-full, `px-5 py-2` |

### Mobile
- Hamburger icon (3 lines → X animation)
- Full-screen overlay menu
- Links with staggered entrance animation
- Social links at bottom

---

## 3. Hero Section

### Layout
```
[  Navbar  ]
┌───────────────────────────────────────────┐
│                                           │
│   [Tag: We Build Digital Experiences]     │
│                                           │
│   We Craft                                │
│   Digital Experiences                     │
│   That Convert                            │
│                                           │
│   [Subtext: 1-2 lines]                    │
│                                           │
│   [Start a Project →]  [View Work]        │
│                                           │
│   ── 200+ Projects  ──  50+ Clients ──   │
│                                           │
│   [Scroll Indicator ↓]                    │
└───────────────────────────────────────────┘
```

### Animations
| Element | Animation | Library |
|---|---|---|
| Tag badge | Fade in + slide up, delay 0.2s | Framer Motion |
| Headline | SplitText word reveal (stagger 0.05s per word) | GSAP |
| Subtext | Fade in up, delay 0.8s | Framer Motion |
| CTA Buttons | Fade in up, delay 1.0s | Framer Motion |
| Stats | Count-up animation | GSAP |
| Background | Animated gradient orbs (slow drift) | CSS + JS |
| Scroll indicator | Bouncing arrow | Framer Motion |

---

## 4. Services Section

### Layout
```
[Section Tag]
[Headline: Our Services]
[Subtext]

┌──────┐ ┌──────┐ ┌──────┐
│ Card │ │ Card │ │ Card │   Row 1
└──────┘ └──────┘ └──────┘
┌──────┐ ┌──────┐
│ Card │ │ Card │            Row 2
└──────┘ └──────┘
```

### Service Card Spec
```
┌─────────────────────────────┐
│ [Icon — 48px]               │
│                             │
│ Service Name                │
│ Description text (3 lines)  │
│                             │
│ Learn More →                │
└─────────────────────────────┘
```

| Property | Value |
|---|---|
| Card size | Min 280px wide |
| Background | `#111118` with 1px border |
| Border hover | `border-purple-500/50` |
| Hover effect | `translateY(-8px)` + purple glow shadow |
| Icon | 48px, purple gradient background |
| Animation | Scroll-triggered stagger (0.1s delay each) |

---

## 5. Portfolio Section

### Layout
- Filter tabs: All | Web | App | Branding | SEO
- Masonry or uniform grid: 3 columns desktop, 2 tablet, 1 mobile
- "Load More" button (or all visible)

### Project Card Spec
```
┌──────────────────────────┐
│                          │
│     [Project Image]      │
│                          │
├──────────────────────────┤
│ Project Title            │
│ [Tag] [Tag]              │
│ View Case Study →        │
└──────────────────────────┘
```

| Property | Value |
|---|---|
| Image aspect | 16:9 |
| Hover | Image zoom (scale 1.05) + overlay with CTA |
| Tags | `rounded-full px-3 py-1 text-xs bg-purple-500/20 text-purple-300` |

---

## 6. Testimonials Section

### Layout
- Horizontal scrolling carousel (auto-play, pause on hover)
- 3 cards visible on desktop, 1 on mobile

### Testimonial Card Spec
```
┌─────────────────────────────────┐
│  ★ ★ ★ ★ ★                     │
│                                 │
│  "Quote text here..."           │
│                                 │
│  [Avatar] Name                  │
│           Role, Company         │
└─────────────────────────────────┘
```

---

## 7. Process Section

### Layout
- Horizontal numbered stepper (desktop)
- Vertical timeline (mobile)

### Steps
1. **Discovery** — Understanding your goals and requirements
2. **Strategy** — Planning the roadmap and architecture
3. **Design** — Crafting the visual experience
4. **Development** — Building with precision and quality
5. **Launch** — Deploying and going live
6. **Support** — Ongoing maintenance and growth

---

## 8. Contact Section

### Form Fields
| Field | Type | Validation |
|---|---|---|
| Name | Text input | Required, min 2 chars |
| Email | Email input | Required, valid email |
| Service | Select dropdown | Required |
| Budget | Select dropdown | Optional |
| Message | Textarea | Required, min 20 chars |
| Submit | Button | Shows loading state |

### Layout (Desktop)
```
Left Column (50%):    Right Column (50%):
  Headline              Contact Form
  Subtext
  Email link
  Social links
```

---

## 9. Footer

```
┌──────────────────────────────────────────────────────┐
│  [Logo]    Services    Portfolio    Company    Legal  │
│  Tagline   Service 1   Work 1       About      Privacy│
│            Service 2   Work 2       Contact    Terms  │
│                                                       │
│  ─────────────────────────────────────────────────   │
│  © 2025 Wixgo Agency    [LinkedIn][Twitter][IG]    │
└──────────────────────────────────────────────────────┘
```

---

## 10. Interaction States

| State | Behavior |
|---|---|
| **Default** | Normal styling |
| **Hover** | Color shift + subtle scale/lift |
| **Focus** | Purple outline ring (`ring-2 ring-purple-500`) |
| **Active** | Slight scale down (0.97) |
| **Disabled** | 50% opacity, cursor-not-allowed |
| **Loading** | Spinner or skeleton |
