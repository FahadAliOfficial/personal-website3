import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Fahad Ali - Full Stack Developer Journey',
  description: 'Learn about Fahad Ali\'s journey as a full-stack developer, including skills in React, Next.js, Python, AI/ML, and passion for creating innovative digital solutions.',
  keywords: [
    'About Fahad Ali',
    'Full Stack Developer',
    'React Developer', 
    'Python Developer',
    'AI ML Engineer',
    'Web Developer Journey',
    'Software Engineer',
    'Developer Story'
  ],
  openGraph: {
    title: 'About Fahad Ali - Full Stack Developer Journey',
    description: 'Learn about Fahad Ali\'s journey as a full-stack developer, including skills in React, Next.js, Python, AI/ML, and passion for creating innovative digital solutions.',
    url: '/about',
    type: 'profile',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
