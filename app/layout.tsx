import type { Metadata } from "next";
import Script from "next/script";
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
    template: "%s | Wixgo Agency",
    default: "Wixgo Agency — Creative Digital & SaaS Product Studio",
  },
  description:
    "Founded by Sachin Rathore & Atharv Vyas. Wixgo Agency delivers cutting-edge Website Development, SaaS Products, App Development, SEO, UI/UX Design, and Brand Identity.",
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
    "Wixgo",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://wixgo.agency",
    siteName: "Wixgo Agency",
    title: "Wixgo Agency — Creative Digital & SaaS Product Studio",
    description:
      "Crafted by Sachin Rathore & Atharv Vyas. High-impact websites, apps, SaaS products, SEO & branding.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wixgo Agency — Creative Digital & SaaS Studio",
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
      <head>
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WPL95D7N');`}
        </Script>
      </head>
      <body className="bg-brand-light text-artsy-ink dark:bg-brand-black dark:text-brand-white font-sans antialiased overflow-x-hidden selection:bg-artsy-yellow selection:text-artsy-ink transition-colors duration-200">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPL95D7N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
