// Static data for portfolio projects
export type ProjectCategory = "web" | "app" | "branding" | "seo" | "all";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  image: string;
  year: string;
  client: string;
  results?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "fintech-dashboard",
    title: "FinPulse Dashboard",
    category: "web",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    description: "A real-time financial analytics dashboard with beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    year: "2025",
    client: "FinPulse Inc.",
    results: "+180% user engagement",
  },
  {
    id: "2",
    slug: "ecommerce-app",
    title: "ShopZen Mobile App",
    category: "app",
    tags: ["React Native", "UI/UX", "iOS"],
    description: "A seamless e-commerce mobile experience with AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop",
    year: "2025",
    client: "ShopZen Ltd.",
    results: "4.8★ App Store rating",
  },
  {
    id: "3",
    slug: "brand-identity-nova",
    title: "Nova Brand Identity",
    category: "branding",
    tags: ["Logo Design", "Brand System", "Guidelines"],
    description: "Complete brand overhaul for a tech startup — logo, colors, typography, and voice.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=450&fit=crop",
    year: "2024",
    client: "Nova Technologies",
    results: "Brand recognition +220%",
  },
  {
    id: "4",
    slug: "saas-landing",
    title: "CloudBase SaaS Website",
    category: "web",
    tags: ["Next.js", "GSAP", "SEO"],
    description: "High-converting SaaS landing page with advanced animations and conversion optimization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    year: "2025",
    client: "CloudBase",
    results: "+65% conversion rate",
  },
  {
    id: "5",
    slug: "seo-growth-local",
    title: "LocalFirst SEO Campaign",
    category: "seo",
    tags: ["Technical SEO", "Content", "Local SEO"],
    description: "Tripled organic traffic for a local business within 6 months using holistic SEO strategy.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=450&fit=crop",
    year: "2024",
    client: "HomeServe Pro",
    results: "+312% organic traffic",
  },
  {
    id: "6",
    slug: "fitness-app",
    title: "FlexTrack Fitness App",
    category: "app",
    tags: ["React Native", "Animations", "Android"],
    description: "AI-powered fitness tracking app with custom workout plans and progress visualization.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=450&fit=crop",
    year: "2025",
    client: "FlexTrack",
    results: "50K+ downloads",
  },
];
