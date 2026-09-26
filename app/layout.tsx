import type { Metadata } from "next";
import { Inter, Caveat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | CodeYug Agency",
    default: "CodeYug Agency — Creative Digital & SaaS Product Studio",
  },
  description:
    "Founded by Sachin Rathore & Atharv Vyas. CodeYug Agency delivers cutting-edge Website Development, SaaS Products, App Development, SEO, UI/UX Design, and Brand Identity.",
  keywords: [
    "web development",
    "SaaS product development",
    "app development",
    "SEO",
    "UI/UX design",
    "branding",
    "digital agency",
    "Sachin Rathore",
    "Atharv Vyas",
    "CodeYug",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://codeyug.agency",
    siteName: "CodeYug Agency",
    title: "CodeYug Agency — Creative Digital & SaaS Product Studio",
    description:
      "Crafted by Sachin Rathore & Atharv Vyas. High-impact websites, apps, SaaS products, SEO & branding.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeYug Agency — Creative Digital & SaaS Studio",
    description:
      "Transform your digital presence with world-class web development, apps, SaaS products, SEO, UI/UX & branding.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${spaceGrotesk.variable} dark`}
      suppressHydrationWarning
    >
      <body className="bg-brand-light text-artsy-ink dark:bg-brand-black dark:text-brand-white font-sans antialiased overflow-x-hidden selection:bg-artsy-yellow selection:text-artsy-ink transition-colors duration-200">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
