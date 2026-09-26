import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#08080C",
          dark: "#111118",
          darker: "#0C0C12",
          light: "#FAF8F5",
          lightCard: "#FFFFFF",
          purple: "#7C3AED",
          violet: "#A855F7",
          pink: "#EC4899",
          white: "#F8F8FF",
          muted: "#9CA3AF",
          darkMuted: "#6B7280",
        },
        artsy: {
          yellow: "#FFE81D",
          "yellow-soft": "#FFF385",
          lime: "#B9F236",
          green: "#22C55E",
          mint: "#6EE7B7",
          cyan: "#38BDF8",
          magenta: "#F43F5E",
          pink: "#FB7185",
          orange: "#FB923C",
          purple: "#A855F7",
          blue: "#3B82F6",
          ink: "#121217",
          cream: "#FAF8F5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive", "sans-serif"],
        space: ["var(--font-space)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #EC4899 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #0A0A0F 0%, #111118 100%)",
        "grid-pattern":
          "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        "notebook-grid":
          "linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
        "marquee": "marquee 22s linear infinite",
        "wiggle": "wiggle 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 45px rgba(124, 58, 237, 0.4)",
        "glow-sm": "0 0 20px rgba(124, 58, 237, 0.25)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
        "brutal": "4px 4px 0px #121217",
        "brutal-sm": "2.5px 2.5px 0px #121217",
        "brutal-lg": "6px 6px 0px #121217",
        "brutal-white": "4px 4px 0px #FFFFFF",
        "brutal-purple": "4px 4px 0px #7C3AED",
        "paper": "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
      },
      screens: {
        xs: "390px",
      },
    },
  },
  plugins: [],
};

export default config;
