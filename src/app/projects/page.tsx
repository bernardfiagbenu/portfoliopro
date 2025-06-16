
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects by Bernard Fiagbenu',
  description: 'Explore a collection of software development projects by Bernard Fiagbenu, showcasing skills in web applications, tools, and various technologies.',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studio--portfolio-pro-39cd8.us-central1.hosted.app';

const projects = [
  {
    title: 'Stress Manager App',
    description: 'A web application designed to help users manage stress through various techniques and resources. Built with modern web technologies to promote well-being.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQEiE7nA8hp7mA/feedshare-shrink_800/B4EZd4bzOmHsAo-/0/1750072245167?e=1752710400&v=beta&t=4gZhtXwZOF9GqMJ-LuUAKUo_8Nm6ijn9pcGs7tS7DlU',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Web App', 'Health', 'Wellness'],
    githubUrl: 'https://github.com/bernardfiagbenu/stressmanager',
    liveUrl: 'https://bernardfiagbenu.github.io/stressmanager/',
    aiHint: 'wellness app interface'
  },
  {
    title: 'Fav ico Generator',
    description: 'A user-friendly web application that helps users quickly generate favicon files for their websites. Deployed on Netlify for easy access.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQEwfd6DQ_ORwA/feedshare-shrink_800/B4EZd5vE3BHgAk-/0/1750094074334?e=1752710400&v=beta&t=lUJX6c9UXSeBkX4YNClxV6z-7BXHSko6GZyKxA5SuyI',
    tags: ['Netlify', 'Web App', 'Frontend', 'Favicon', 'Tool', 'JavaScript'],
    githubUrl: null,
    liveUrl: 'https://inspiring-moxie-f3674a.netlify.app/',
    aiHint: 'favicon generator app interface'
  },
  {
    title: 'Google Play Console Image Formatter',
    description: 'A tool to quickly and easily format developer icons and header images to meet Google Play Store requirements.',
    imageUrl: 'https://placehold.co/600x400.png', // Using placeholder as per guidelines
    tags: ['Web App', 'Frontend', 'Image Tool', 'Utility', 'Google Play'],
    githubUrl: null,
    liveUrl: 'https://ubiquitous-speculoos-d2e478.netlify.app/',
    aiHint: 'image formatter tool'
  }
];

export default function ProjectsPage() {
  return (
    <SectionContainer title="My Projects" subtitle="A Glimpse into My Work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => {
          const projectSchema = {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.description,
            "image": project.imageUrl,
            "url": project.liveUrl || project.githubUrl,
            "author": {
              "@type": "Person",
              "name": "Bernard Fiagbenu"
            },
            "keywords": project.tags.join(', ')
          };
          return (
            <Card key={index} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
                key={`project-schema-${index}`}
              />
              <CardHeader>
                <div className="aspect-video relative w-full rounded-t-md overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={`${project.title} - Project Screenshot`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={project.aiHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="font-headline text-2xl text-primary mb-2">{project.title}</CardTitle>
                <CardDescription className="font-body text-muted-foreground mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded-full font-body">{tag}</span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 p-4 bg-muted/30">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                      <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of ${project.title}`}>
                      <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
}
