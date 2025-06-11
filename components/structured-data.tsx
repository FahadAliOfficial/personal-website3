export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fahad Ali",
    "jobTitle": "Full Stack Developer",
    "description": "Passionate full-stack developer specializing in modern web applications, AI integration, and scalable digital solutions.",
    "url": "https://fahadali.dev",
    "image": "https://fahadali.dev/android-chrome-512x512.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Faisalabad",
      "addressCountry": "Pakistan"
    },
    "email": "fahadaliajizansar@gmail.com",
    "telephone": "+923261310007",
    "sameAs": [
      "https://github.com/FahadAliOfficial",
      "https://www.linkedin.com/in/fahaddali/",
      "https://twitter.com/_fahaddali",
      "https://dev.to/fahadaliofficial"
    ],
    "knowsAbout": [
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "JavaScript",
      "TypeScript",
      "AI/ML",
      "Web Automation",
      "Data Science"
    ],
    "alumniOf": {
      "@type": "Organization",
      "name": "Various Online Platforms",
      "description": "Self-taught developer with certifications from Stanford, Google, IBM, and Microsoft"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fahad Ali Portfolio",
    "description": "Full Stack Developer Portfolio - Fahad Ali",
    "url": "https://fahadali.dev",
    "author": {
      "@type": "Person",
      "name": "Fahad Ali"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://fahadali.dev/projects?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  )
}
