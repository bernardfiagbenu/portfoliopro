
'use client';

import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';
import dynamic from 'next/dynamic';
import { homePageSketch } from '@/components/p5/HomePageSketch';

// Dynamically import the P5Sketch component to ensure it's client-side only
const P5Sketch = dynamic(() => import('@/components/ui/P5Sketch'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 w-full h-full bg-background z-0" />,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Bernard Fiagbenu",
  "url": siteUrl ? `${siteUrl}/` : '/',
  "image": "https://media.licdn.com/dms/image/v2/D4E03AQHUX2NRr94X0g/profile-displayphoto-scale_200_200/B4EZhRbogBHIAc-/0/1753712855893?e=1756339200&v=beta&t=ENNu6kVKgGex8c_GZVC_0BtHBKcW6mj4C1CIeB1fVf4",
  "jobTitle": "Computer Science Graduate",
  "description": "Passionate about Computer Science with a deep interest in theoretical computing and future technology. Focuses on creating robust and efficient systems.",
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of the People",
    "location": "Pasadena, California"
  },
  "knowsAbout": ["Software Development", "Computer Science", "Web Technologies", "AI", "Machine Learning"],
  "worksFor": {
    "@type": "Organization",
    "name": "Software Development Industry" 
  },
  "sameAs": [
    "https://github.com/bernardfiagbenu",
    "https://www.linkedin.com/in/bernard-fiagbenu-26b50b19a/",
    "https://x.com/FiagbenuBe14283"
  ]
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <P5Sketch sketch={homePageSketch} className="fixed inset-0 w-full h-full z-0" />
      <div className="fixed inset-0 z-10 bg-background/80 dark:bg-background/90 backdrop-blur-sm"></div>

      <div className="relative z-20 container mx-auto px-4 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          key="person-schema"
        ></script>
        
        <SectionContainer title="About Me" subtitle="My Journey in Tech">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <article className="text-left md:text-left">
              <h2 className="text-2xl font-headline font-semibold text-primary mb-4">Bernard Fiagbenu</h2>
              <p className="font-body text-lg text-foreground mb-4 text-pretty">
                Hello! I'm a passionate Computer Scientist with a deep interest in the theoretical underpinnings of computing and future technology. My journey into the world of technology began with a profound curiosity for how complex systems operate, which quickly evolved into a passion for building innovative software solutions.
              </p>
              <p className="font-body text-lg text-foreground mb-4">
                I thrive in collaborative environments, leveraging my understanding of core computer science concepts and my software development skills to bring ideas to life. My focus is on creating robust and efficient systems built on a solid foundation of computer science principles. I am particularly fascinated by the intersection of theoretical computer science and practical application in shaping the future of technology.
              </p>
              <p className="font-body text-lg text-foreground mb-6">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously learning to stay at the forefront of this ever-evolving field.
              </p>
            </article>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <section className="flex flex-col items-center p-6 bg-background/80 rounded-lg shadow-md">
              <GraduationCap className="w-12 h-12 text-accent mb-3" aria-hidden="true" />
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">Education</h3>
              <p className="font-body text-center text-muted-foreground">
                Bachelor of Science in Computer Science
                <br />
                University of the People (Pasadena, California)
                <br />
                Expected Graduation: 2025 | GPA: 3.06
              </p>
            </section>
            <section className="flex flex-col items-center p-6 bg-background/80 rounded-lg shadow-md">
              <Briefcase className="w-12 h-12 text-accent mb-3" aria-hidden="true" />
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">Experience</h3>
              <p className="font-body text-center text-muted-foreground">5+ years in Software Development<br/>Experienced in various computer science and software engineering roles.</p>
            </section>
            <section className="flex flex-col items-center p-6 bg-background/80 rounded-lg shadow-md">
              <Lightbulb className="w-12 h-12 text-accent mb-3" aria-hidden="true" />
              <h3 className="text-xl font-headline font-semibold text-primary mb-2">Philosophy</h3>
              <p className="font-body text-center text-muted-foreground">"Simplicity is the ultimate sophistication." - Leonardo da Vinci. I strive for clarity and impact in design and code.</p>
            </section>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
}
