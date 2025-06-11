import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Fahad Ali - Full Stack Developer',
  description: 'Get in touch with Fahad Ali for full-stack development projects, AI/ML solutions, web automation, and consulting. Available for freelance work and collaboration.',
  keywords: [
    'Contact Fahad Ali',
    'Hire Full Stack Developer',
    'React Developer Contact',
    'Python Developer Hire',
    'Freelance Developer',
    'Web Development Services',
    'AI ML Consulting',
    'Software Development Contact',
    'Project Collaboration'
  ],
  openGraph: {
    title: 'Contact Fahad Ali - Full Stack Developer',
    description: 'Get in touch with Fahad Ali for full-stack development projects, AI/ML solutions, web automation, and consulting.',
    url: '/contact',
    type: 'website',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
