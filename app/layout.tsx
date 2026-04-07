import { Geist_Mono, Roboto } from "next/font/google"
import { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ModeToggle } from "@/components/mode-toggle";
import { CustomCursor } from "@/components/custom-cursor";
import { Preloader } from "@/components/preloader";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";

const roboto = Roboto({subsets:['latin'], weight: ['400', '700'], variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Sondip Kumar | Full-Stack Developer",
  description: "Professional Portfolio of Sondip Kumar - Specialized in building high-performance Next.js applications and scalable web solutions.",
  keywords: ["Sondip Kumar", "Full-Stack Developer", "Next.js Portfolio", "React Developer", "Software Engineer"],
  authors: [{ name: "Sondip Kumar" }],
  openGraph: {
    title: "Sondip Kumar | Full-Stack Developer",
    description: "Building state-of-the-art digital experiences with modern web technologies.",
    url: "https://sondip-kumar.vercel.app",
    siteName: "Sondip Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sondip Kumar | Full-Stack Developer",
    description: "Building state-of-the-art digital experiences with modern web technologies.",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", roboto.variable)}
    >
      <body>
        <ThemeProvider>
          <Preloader />
          <ScrollProgress />
          <SmoothScroll>
            <CustomCursor />
            <Navbar themeToggle={<ModeToggle />} />
            {children}
          </SmoothScroll>
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
