import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge mobile application built with Flutter, focusing on intuitive user interactions and real-time data synchronization. Features a dynamic UI and robust backend integration.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Flutter', 'Firebase', 'UI/UX'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'mobile app'
  },
  {
    title: 'EcoDash Dashboard',
    description: 'A web-based analytics dashboard for environmental data monitoring. Built with React and Chart.js, providing insightful visualizations and reporting tools.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['React', 'Node.js', 'Data Visualization'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'dashboard interface'
  },
  {
    title: 'Portfolio Pro (This Site)',
    description: 'My personal portfolio website, showcasing my skills and projects. Built with Next.js, Tailwind CSS, and TypeScript for a modern, responsive, and animated experience.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'website design'
  },
   {
    title: 'ConnectSphere Social App',
    description: 'A social networking platform concept focusing on privacy and meaningful connections. Designed with a user-centric approach and interactive UI elements.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['UI Design', 'Flutter', 'Concept'],
    githubUrl: '#',
    liveUrl: null,
    aiHint: 'social media'
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
