import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Fahad Ali - Full Stack Developer Portfolio',
  description: 'Explore Fahad Ali\'s portfolio of full-stack development projects including AI/ML applications, web apps, automation scripts, and desktop applications built with React, Next.js, Python, and more.',
  keywords: [
    'Fahad Ali Projects',
    'Full Stack Projects',
    'React Projects',
    'Next.js Projects', 
    'Python Projects',
    'AI ML Projects',
    'Web Development Portfolio',
    'Software Projects',
    'Developer Portfolio',
    'Academia.ai',
    'Web Scraping',
    'Automation'
  ],
  openGraph: {
    title: 'Projects | Fahad Ali - Full Stack Developer Portfolio',
    description: 'Explore Fahad Ali\'s portfolio of full-stack development projects including AI/ML applications, web apps, automation scripts, and desktop applications.',
    url: '/projects',
    type: 'website',
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
