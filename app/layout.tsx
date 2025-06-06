import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Fahad Ali - Full Stack Developer",
  description:
    "Passionate full-stack developer specializing in modern web applications, AI integration, and scalable digital solutions.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Web Development", "AI Integration"],
  authors: [{ name: "Fahad Ali" }],
  creator: "Fahad Ali",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahadali.dev",
    title: "Fahad Ali - Full Stack Developer",
    description:
      "Passionate full-stack developer specializing in modern web applications, AI integration, and scalable digital solutions.",
    siteName: "Fahad Ali Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Ali - Full Stack Developer",
    description:
      "Passionate full-stack developer specializing in modern web applications, AI integration, and scalable digital solutions.",
    creator: "@fahadali",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
