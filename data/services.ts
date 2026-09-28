export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSection {
  heading: string;
  body: string;
  points: string[];
}

export interface ServicePage {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
  href: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  related: string[];
}

export const services: ServicePage[] = [
  {
    id: "web-development",
    icon: "Monitor",
    title: "Website Development",
    description:
      "Custom, responsive websites and web applications built with modern frameworks and performance in mind.",
    features: [
      "Next.js and React development",
      "Responsive, mobile-first layouts",
      "CMS integration",
      "SEO-aware technical foundations",
    ],
    color: "purple",
    href: "/services/web-development",
    metaTitle: "Website Development Services",
    metaDescription:
      "Plan and build responsive business websites, SaaS sites, landing pages, and web apps with Wixgo's Next.js and React development team.",
    h1: "Website Development Built Around Your Business",
    intro:
      "Wixgo plans and builds custom websites and web applications around your audience, content, and business goals. We use Next.js and React to create responsive experiences with a considered technical foundation.",
    sections: [
      {
        heading: "What we build",
        body:
          "The right website depends on what people need to do there. We scope the structure and functionality to the project instead of starting from a one-size-fits-all template.",
        points: [
          "Business websites and campaign landing pages",
          "SaaS marketing sites and web application interfaces",
          "Responsive layouts for mobile, tablet, and desktop",
          "CMS-connected experiences when the project needs editable content",
        ],
      },
      {
        heading: "A clear path from brief to launch",
        body:
          "Work begins with discovery and a practical roadmap. Design, development, and quality checks follow, with the scope and technology choices agreed for each project.",
        points: [
          "Define users, goals, content, and project scope",
          "Design the information structure and interface",
          "Develop, test across screen sizes, and prepare for launch",
          "Discuss ongoing support and future improvements",
        ],
      },
    ],
    faqs: [
      {
        question: "What kinds of websites does Wixgo develop?",
        answer:
          "The site describes business websites, landing pages, SaaS websites, and web applications built with Next.js and React.",
      },
      {
        question: "Can a website include a CMS?",
        answer:
          "Yes. CMS integration is part of Wixgo's listed website development capabilities; the platform is selected to fit the project's content needs.",
      },
      {
        question: "Are Wixgo websites designed for mobile?",
        answer:
          "Responsive, mobile-first design is included in the website development approach.",
      },
    ],
    related: ["saas-product-engineering", "ui-ux", "seo"],
  },
  {
    id: "saas-product-engineering",
    icon: "Rocket",
    title: "SaaS Product Engineering",
    description:
      "Full-stack product engineering for SaaS interfaces, dashboards, authentication, billing, and APIs.",
    features: [
      "Full-stack application architecture",
      "Authentication and account flows",
      "Stripe and Razorpay billing integrations",
      "Dashboard and API development",
    ],
    color: "cyan",
    href: "/services/saas-product-engineering",
    metaTitle: "SaaS Product Engineering",
    metaDescription:
      "Plan and build SaaS products with Wixgo, including web interfaces, dashboards, authentication, billing integrations, and application architecture.",
    h1: "SaaS Product Engineering From Idea to Release",
    intro:
      "Wixgo works across the product interface and application foundations for SaaS projects. The scope can include dashboards, account flows, billing integrations, and APIs, shaped around the product brief.",
    sections: [
      {
        heading: "Build the product users need",
        body:
          "A SaaS project brings product decisions and engineering together. Start with the user workflows and core release requirements, then choose an architecture that fits the product rather than overbuilding for hypothetical scale.",
        points: [
          "Product discovery, feature scope, and release planning",
          "Web interfaces and account dashboards",
          "Authentication, APIs, and data-model planning",
          "Subscription billing integrations with Stripe or Razorpay when needed",
        ],
      },
      {
        heading: "An iterative engineering process",
        body:
          "Wixgo's documented process moves through discovery, strategy, design, development, launch, and support. Checkpoints help keep product decisions aligned with implementation.",
        points: [
          "Agree on requirements and technical direction",
          "Design the key product journeys",
          "Develop and quality-check the agreed scope",
          "Plan release and post-launch support",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Wixgo build a SaaS dashboard?",
        answer:
          "Yes. SaaS dashboards and full-stack web applications are included in the services described on the Wixgo site.",
      },
      {
        question: "Can a product include subscription billing?",
        answer:
          "Wixgo lists Stripe and Razorpay billing integrations as part of its SaaS product engineering capabilities.",
      },
      {
        question: "Does every SaaS project use the same technology?",
        answer:
          "No. The project roadmap and technical choices are tailored to the product requirements and agreed scope.",
      },
    ],
    related: ["web-development", "app-development", "ui-ux"],
  },
  {
    id: "app-development",
    icon: "Smartphone",
    title: "App Development",
    description:
      "Cross-platform mobile app development with React Native, interface design, and release support.",
    features: [
      "React Native and Expo development",
      "iOS and Android support",
      "Mobile interface and interaction design",
      "App Store release support",
    ],
    color: "green",
    href: "/services/app-development",
    metaTitle: "App Development Services",
    metaDescription:
      "Develop cross-platform mobile apps with Wixgo using React Native, with iOS and Android support, product-focused UI/UX, and release planning.",
    h1: "Cross-Platform App Development for iOS and Android",
    intro:
      "Wixgo builds mobile applications with React Native and Expo, with a shared cross-platform approach for iOS and Android. Product flows, interface design, and release needs are considered together.",
    sections: [
      {
        heading: "From product flows to mobile builds",
        body:
          "App projects start by clarifying who the app serves and which workflows matter most. That gives design and engineering a shared direction before implementation begins.",
        points: [
          "Cross-platform React Native app development",
          "Interface and interaction design for mobile use",
          "API and backend integration scoped to the product",
          "Release preparation for iOS and Android stores",
        ],
      },
      {
        heading: "Designed for the full release cycle",
        body:
          "The work spans discovery, planning, design, development, and quality checks. Release and update requirements are considered as part of the delivery plan.",
        points: [
          "Define target users, essential features, and platform needs",
          "Map core journeys and design app screens",
          "Build and test the agreed cross-platform scope",
          "Prepare store submissions and discuss ongoing updates",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Wixgo build apps for both iOS and Android?",
        answer:
          "Wixgo lists cross-platform React Native development with iOS and Android support.",
      },
      {
        question: "Can an app connect to an existing backend?",
        answer:
          "Backend and API integration can be scoped to the app's requirements during discovery.",
      },
      {
        question: "Does app development include release support?",
        answer:
          "App Store deployment and release preparation are listed among Wixgo's app development capabilities.",
      },
    ],
    related: ["saas-product-engineering", "ui-ux", "web-development"],
  },
  {
    id: "seo",
    icon: "TrendingUp",
    title: "SEO Services",
    description:
      "Technical and on-page SEO work that helps search engines understand a site and people find useful content.",
    features: [
      "Technical SEO review",
      "Core Web Vitals audit",
      "On-page and content recommendations",
      "Search performance reporting",
    ],
    color: "green",
    href: "/services/seo",
    metaTitle: "SEO Services",
    metaDescription:
      "Improve your website's search foundations with Wixgo's technical SEO reviews, Core Web Vitals audits, on-page recommendations, and reporting.",
    h1: "SEO Services Built on Useful, Search-Ready Websites",
    intro:
      "Wixgo's SEO work focuses on the technical foundations and on-page content of a website. The goal is to make useful pages easier to crawl, understand, and navigate, without promising specific rankings.",
    sections: [
      {
        heading: "Find and prioritize search issues",
        body:
          "An SEO review looks at how a site is structured, how pages perform, and whether important content is clear to users and search engines. Recommendations should map to real fixes and useful content.",
        points: [
          "Technical checks for crawlability and page structure",
          "Core Web Vitals and performance review",
          "On-page content and internal-link recommendations",
          "Structured data where it accurately describes visible content",
        ],
      },
      {
        heading: "Measure progress without ranking guarantees",
        body:
          "Search performance depends on many factors outside any agency's control. Reporting can help teams monitor technical work and organic search trends over time, but no ranking position can be guaranteed.",
        points: [
          "Prioritized recommendations tied to site issues",
          "Content and keyword research scoped to business goals",
          "Search performance monitoring and reporting",
          "Ongoing improvements based on observed results",
        ],
      },
    ],
    faqs: [
      {
        question: "What does Wixgo include in SEO work?",
        answer:
          "The site lists technical SEO, Core Web Vitals reviews, content strategy, and reporting among its SEO capabilities.",
      },
      {
        question: "Can SEO guarantee a first-page ranking?",
        answer:
          "No. Search rankings are determined by search engines and cannot be guaranteed. SEO work focuses on improving a site's technical quality, content, and discoverability.",
      },
      {
        question: "Does SEO include website changes?",
        answer:
          "Technical recommendations can be planned alongside website development; the exact implementation scope should be agreed for each project.",
      },
    ],
    related: ["web-development", "ui-ux", "branding"],
  },
  {
    id: "ui-ux",
    icon: "Palette",
    title: "UI/UX Design",
    description:
      "User-centered interface design, research, wireframes, design systems, and interactive prototypes.",
    features: [
      "User research and journey mapping",
      "Wireframes and interface design",
      "Figma design systems",
      "Interactive prototypes and usability checks",
    ],
    color: "pink",
    href: "/services/ui-ux",
    metaTitle: "UI/UX Design Services",
    metaDescription:
      "Plan clearer digital products with Wixgo's UI/UX design: user research, information architecture, wireframes, Figma systems, and prototypes.",
    h1: "UI/UX Design for Clearer Digital Experiences",
    intro:
      "Wixgo's UI/UX work connects user needs to practical interface decisions. Research, journey mapping, wireframes, and prototypes help teams test a product direction before development.",
    sections: [
      {
        heading: "Make complex journeys easier to use",
        body:
          "Good interface design starts with understanding the user and the task. The design process makes important flows visible, then develops a coherent visual system around them.",
        points: [
          "User research and journey mapping",
          "Information architecture and wireframes",
          "Responsive interface and interaction design",
          "Figma design systems and reusable components",
        ],
      },
      {
        heading: "Prototype, review, and refine",
        body:
          "Interactive prototypes give stakeholders a concrete way to review navigation and screen behavior before implementation. Usability checks can identify friction to address in the next design pass.",
        points: [
          "Prototype core product journeys",
          "Review flows with stakeholders and users where available",
          "Refine components and interaction states",
          "Prepare design handoff for development",
        ],
      },
    ],
    faqs: [
      {
        question: "What is included in Wixgo's UI/UX design service?",
        answer:
          "The service includes user research, wireframes, Figma design systems, journey mapping, and interactive prototypes, scoped to the project.",
      },
      {
        question: "Can Wixgo design for mobile and desktop?",
        answer:
          "Responsive design is part of the site's stated design and development approach; layouts are planned for the relevant screen sizes.",
      },
      {
        question: "Can design work be handed off to a separate development team?",
        answer:
          "Yes. Figma systems and prototypes can provide a design handoff; the deliverables are agreed during project planning.",
      },
    ],
    related: ["web-development", "app-development", "branding"],
  },
  {
    id: "branding",
    icon: "Zap",
    title: "Branding",
    description:
      "Visual identity systems covering logo design, colors, typography, and practical brand guidelines.",
    features: [
      "Logo and brand mark design",
      "Color and typography systems",
      "Digital brand guidelines",
      "Marketing collateral",
    ],
    color: "orange",
    href: "/services/branding",
    metaTitle: "Branding Services",
    metaDescription:
      "Create a consistent visual identity with Wixgo's branding services, including logo design, color and typography systems, and brand guidelines.",
    h1: "Brand Identity Designed to Work Across Digital Touchpoints",
    intro:
      "Wixgo develops visual identity systems that help a business present itself consistently. The work can include a logo, color and typography choices, and guidelines for applying the identity across digital touchpoints.",
    sections: [
      {
        heading: "Build a usable visual identity",
        body:
          "A brand identity is more than a logo. A considered set of visual elements gives teams a shared reference for presenting the business across its website and marketing materials.",
        points: [
          "Logo and brand mark development",
          "Color palette and typography direction",
          "Digital identity systems and usage guidelines",
          "Marketing collateral aligned to the identity",
        ],
      },
      {
        heading: "From direction to guidelines",
        body:
          "The engagement starts by understanding the business and the audiences it needs to reach. Concepts are refined into practical assets and documented rules for consistent use.",
        points: [
          "Discuss brand goals, audience, and existing materials",
          "Explore and review visual directions",
          "Refine selected identity elements",
          "Document the system for future use",
        ],
      },
    ],
    faqs: [
      {
        question: "What can Wixgo include in a branding project?",
        answer:
          "Wixgo lists logo design, brand identity systems, colors, typography, digital guidelines, and marketing collateral among its branding services.",
      },
      {
        question: "Can branding include more than a logo?",
        answer:
          "Yes. The service is described as a broader visual identity system, with elements such as color, typography, and usage guidelines.",
      },
      {
        question: "Can a new identity be applied to a website?",
        answer:
          "Branding and website development are both Wixgo services and can be scoped together when that fits the project.",
      },
    ],
    related: ["ui-ux", "web-development", "seo"],
  },
];