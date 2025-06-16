
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

const projects = [
  {
    title: 'Stress Manager App',
    description: 'A web application designed to help users manage stress through various techniques and resources. Built with modern web technologies to promote well-being.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Web App', 'Health', 'Wellness'],
    githubUrl: 'https://github.com/bernardfiagbenu/stressmanager',
    liveUrl: 'https://bernardfiagbenu.github.io/stressmanager/',
    aiHint: 'wellness app'
  }
];

export default function ProjectsPage() {
  return (
    <SectionContainer title="My Projects" subtitle="A Glimpse into My Work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <CardHeader>
              <div className="aspect-video relative w-full rounded-t-md overflow-hidden">
                <Image src={project.imageUrl} alt={project.title} layout="fill" objectFit="cover" data-ai-hint={project.aiHint} />
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
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button variant="default" size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
