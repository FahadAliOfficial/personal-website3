import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { LoaderProvider } from "@/contexts/loader-context"
import StructuredData from "@/components/structured-data"

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
  metadataBase: new URL('https://fahadali.dev'),
  title: {
    default: "Fahad Ali - Full Stack Developer",
    template: "%s | Fahad Ali"
  },
  description:
    "Passionate full-stack developer specializing in modern web applications, AI integration, and scalable digital solutions.",
  keywords: [
    "Full Stack Developer", 
    "React", 
    "Next.js", 
    "Node.js", 
    "Web Development", 
    "AI Integration",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Python",
    "Portfolio",
    "Fahad Ali"
  ],
  authors: [{ name: "Fahad Ali", url: "https://fahadali.dev" }],
  creator: "Fahad Ali",
  publisher: "Fahad Ali",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your actual verification code
    yandex: 'your-yandex-verification-code', // Replace with your actual verification code
    yahoo: 'your-yahoo-verification-code', // Replace with your actual verification code
  },
  category: 'technology',
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahadali.dev",
    title: "Fahad Ali - Full Stack Developer",
    description:
      "Passionate full-stack developer specializing in modern web applications, AI integration, and scalable digital solutions.",    siteName: "Fahad Ali Portfolio",
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Fahad Ali Logo',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Ali - Full Stack Developer",
    description:
      "Passionate full-stack developer specializing in modern web applications, AI integration, and scalable digital solutions.",    creator: "@fahadali",    images: ['/android-chrome-512x512.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <LoaderProvider>
          {children}
        </LoaderProvider>
      </body>
    </html>
  )
}
