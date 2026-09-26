export interface Founder {
  name: string;
  role: string;
  subRole: string;
  tagline: string;
  avatar: string;
  bio: string;
  skills: string[];
  linkedin: string;
}

export const founders: Founder[] = [
  {
    name: "Sachin Rathore",
    role: "Co-Founder & Creative Idea Developer",
    subRole: "Product Visionary & Entrepreneur",
    tagline: "the idea architect 💡",
    avatar: "/images/founders/sachin-rathore.png",
    bio: "Obsessed with transforming raw business ideas into high-converting digital products, iconic brand identities, and memorable user experiences.",
    skills: ["Creative Direction", "UI/UX Strategy", "Brand Architecture", "Product Concept", "SaaS Strategy"],
    linkedin: "https://www.linkedin.com/in/sachinrathore123/",
  },
  {
    name: "Atharv Vyas",
    role: "Co-Founder & Full-Stack Developer",
    subRole: "Frontend & Backend Engineer, Entrepreneur",
    tagline: "the code wizard ⚡",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&q=80",
    bio: "Master of modern web & mobile engineering. Builds blazing-fast Next.js architectures, bulletproof backend APIs, and buttery-smooth GSAP animations.",
    skills: ["Next.js & React", "Node.js & Backend", "Cross-Platform Apps", "GSAP & Motion", "Cloud Scale"],
    linkedin: "https://www.linkedin.com/in/atharv-vyas-a95347231/",
  },
];
