# User Flow Documentation
## CodeYug Agency

**Version:** 1.0

---

## 1. Overview

This document maps every key user journey through the CodeYug Agency website — from first visit to lead conversion.

---

## 2. Primary User Journey: Visitor → Lead

```
Landing on Homepage
       │
       ▼
   Hero Section
   (First impression)
       │
       ├── Scroll Down
       │       │
       │       ▼
       │   Services Section
       │   (Understand what we offer)
       │       │
       │       ├── Click "Learn More" on a service
       │       │       │
       │       │       ▼
       │       │   Services Detail Page
       │       │   (Deep dive into service)
       │       │       │
       │       │       └── CTA: "Start a Project"
       │       │               │
       │       │               ▼
       │       │           Contact Page ✅
       │       │
       │       └── Continue scrolling
       │               │
       │               ▼
       │           Portfolio Section
       │
       ▼
   Portfolio Section
   (See our work)
       │
       ├── Click a project card
       │       │
       │       ▼
       │   Case Study Page
       │   (In-depth project details)
       │       │
       │       └── CTA: "Start Similar Project"
       │               │
       │               ▼
       │           Contact Page ✅
       │
       └── Continue scrolling
               │
               ▼
         Testimonials + Process
               │
               ▼
           Contact Section ✅
```

---

## 3. Navigation Flows

### 3.1 Desktop Navigation

```
[Navbar]
  ├── Logo → Homepage (/)
  ├── Services → /services
  ├── Portfolio → /portfolio
  ├── About → /about
  ├── Contact → /contact
  └── [Get Started] → /contact (primary CTA)
```

### 3.2 Mobile Navigation

```
[Hamburger Icon] → Overlay Menu Opens
  │
  ├── Full-screen dark overlay
  ├── Staggered link animations
  └── Links:
      Home / Services / Portfolio / About / Contact
  
[X Icon] → Menu Closes (reverse animation)
```

---

## 4. Contact Flow

```
User arrives at Contact Section/Page
        │
        ▼
    Fill Form Fields
    (Name, Email, Service, Budget, Message)
        │
        ▼
    Submit Form
        │
        ├── Validation Error?
        │       │
        │       ▼
        │   Show inline errors
        │   (User corrects + resubmits)
        │
        └── Success
                │
                ▼
            Success State
            "Thanks! We'll be in touch within 24h 🎉"
            [Back to Home]
```

---

## 5. Portfolio Filter Flow

```
/portfolio page loads (shows All projects)
        │
        ▼
User clicks filter tab
[All | Web | App | Branding | SEO]
        │
        ▼
Projects filter with animation
(fade out unmatched, fade in matched)
        │
        ▼
User clicks a project card
        │
        ▼
Navigate to /portfolio/[slug]
        │
        ▼
Case Study Detail Page
├── Project overview
├── Challenge + Solution
├── Tech stack
├── Screenshots/mockups
├── Results / metrics
└── [Start a Similar Project →] → /contact
```

---

## 6. Page Transition Flow

```
User clicks internal link
        │
        ▼
Exit animation plays
(current page fades/slides out)
        │
        ▼
Loading state (optional)
        │
        ▼
New page entrance animation
(content fades/slides in)
```

**Implementation:** Framer Motion `AnimatePresence` wrapping `{children}` in root layout.

---

## 7. Scroll Animation Flow (Per Section)

```
User scrolls toward section
        │
        ▼
ScrollTrigger detects element entering viewport (threshold: 20%)
        │
        ▼
Section plays entrance animation
├── Headline: text reveal
├── Cards: staggered fade-up
└── Images: scale + fade in
        │
        ▼
Animation completes — section is fully visible
(Animation does NOT replay on scroll back up)
```

---

## 8. Mobile User Flow

```
Mobile visitor lands on homepage
        │
        ▼
Hero section (full-screen, portrait)
        │
        ▼
Swipe/scroll gestures navigate sections
        │
        ▼
Services → stacked cards (1 column)
Portfolio → stacked cards (1 column)
        │
        ▼
Contact section → simplified form
        │
        ▼
Footer → compact, stacked layout
```

---

## 9. Error States

| Scenario | User Experience |
|---|---|
| 404 Page Not Found | Custom 404 page with illustration and "Go Home" CTA |
| Form validation error | Inline red error message below field |
| Form submission failure | Error toast + retry button |
| Slow connection | Skeleton loaders for images |

---

## 10. Conversion Touchpoints

Every page and section has a clear CTA that leads toward contact:

| Section | CTA |
|---|---|
| Hero | "Start a Project →", "View Work" |
| Services | "Learn More →" per service |
| Portfolio | "View Case Study →" |
| Case Study | "Start a Similar Project →" |
| Process | "Let's Work Together →" |
| About | "Meet the Team", "Work With Us →" |
| Footer | "Get In Touch" |
