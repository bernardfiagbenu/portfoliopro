import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Bernard Fiagbenu',
  description: 'Learn about Bernard Fiagbenu, a Computer Scientist with a passion for technology, software development, and his academic journey at the University of the People.',
  openGraph: {
    title: 'About Bernard Fiagbenu',
    description: 'Discover Bernard Fiagbenu\'s background, skills, and aspirations as a Computer Scientist.',
    images: [{ url: 'https://media.licdn.com/dms/image/v2/D4E03AQFIeecyanK_JA/profile-displayphoto-shrink_800_800/B4EZd4ueUsHgAc-/0/1750077138969?e=1755734400&v=beta&t=Gaq9QOcbZAmRIU_NjU4SNzO4cpUofhwG0J1pP-GLskU', alt: 'Bernard Fiagbenu' }],
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studio--portfolio-pro-39cd8.us-central1.hosted.app';

export default function AboutPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bernard Fiagbenu",
    "url": `${siteUrl}/about`,
    "image": "https://media.licdn.com/dms/image/v2/D4E03AQFIeecyanK_JA/profile-displayphoto-shrink_800_800/B4EZd4ueUsHgAc-/0/1750077138969?e=1755734400&v=beta&t=Gaq9QOcbZAmRIU_NjU4SNzO4cpUofhwG0J1pP-GLskU",
    "jobTitle": "Computer Scientist",
    "description": "Passionate Computer Scientist with a deep interest in theoretical computing and future technology. Focuses on creating robust and efficient systems.",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        key="person-schema"
      />
      <SectionContainer title="About Me" subtitle="My Journey in Tech">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <Avatar className="w-40 h-40 border-4 border-primary shadow-lg">
              <AvatarImage 
                src="https://media.licdn.com/dms/image/v2/D4E03AQFIeecyanK_JA/profile-displayphoto-shrink_800_800/B4EZd4ueUsHgAc-/0/1750077138969?e=1755734400&v=beta&t=Gaq9QOcbZAmRIU_NjU4SNzO4cpUofhwG0J1pP-GLskU" 
                alt="Bernard Fiagbenu - Profile Photo" 
                data-ai-hint="professional portrait" 
              />
              <AvatarFallback>BF</AvatarFallback>
            </Avatar>
          </div>
          <article className="text-left md:text-left">
            <h2 className="text-2xl font-headline font-semibold text-primary mb-4">Bernard Fiagbenu</h2>
            <p className="font-body text-lg mb-4">
              Hello! I'm a passionate Computer Scientist with a deep interest in the theoretical underpinnings of computing and future technology. My journey into the world of technology began with a profound curiosity for how complex systems operate, which quickly evolved into a passion for building innovative software solutions.
            </p>
            <p className="font-body text-lg mb-4">
              I thrive in collaborative environments, leveraging my understanding of core computer science concepts and my software development skills to bring ideas to life. My focus is on creating robust and efficient systems built on a solid foundation of computer science principles. I am particularly fascinated by the intersection of theoretical computer science and practical application in shaping the future of technology.
            </p>
            <p className="font-body text-lg mb-6">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously learning to stay at the forefront of this ever-evolving field.
            </p>
          </article>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md">
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
          <section className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md">
            <Briefcase className="w-12 h-12 text-accent mb-3" aria-hidden="true" />
            <h3 className="text-xl font-headline font-semibold text-primary mb-2">Experience</h3>
            <p className="font-body text-center text-muted-foreground">5+ years in Software Development<br/>Experienced in various computer science and software engineering roles.</p>
          </section>
          <section className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md">
            <Lightbulb className="w-12 h-12 text-accent mb-3" aria-hidden="true" />
            <h3 className="text-xl font-headline font-semibold text-primary mb-2">Philosophy</h3>
            <p className="font-body text-center text-muted-foreground">"Simplicity is the ultimate sophistication." - Leonardo da Vinci. I strive for clarity and impact in design and code.</p>
          </section>
        </div>
      </SectionContainer>
    </>
  );
}
