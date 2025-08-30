
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon, BrainCircuit } from 'lucide-react';
import Chatbot from '@/components/ai/Chatbot';
import ImageCaptioner from '@/components/ai/ImageCaptioner';

export const metadata: Metadata = {
  title: 'A.I. Playground by Bernard Fiagbenu',
  description: 'A collection of A.I. projects by Bernard Fiagbenu, showcasing experiments with large language models, computer vision, and other AI technologies.',
};

const aiProjects = [
  {
    title: 'AI-Powered Story Generator',
    description: 'A web application that uses a large language model to generate short stories based on user prompts. Features customizable genres and characters.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Genkit', 'Next.js', 'AI', 'LLM', 'Storytelling'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'ai storytelling interface'
  },
  {
    title: 'Image Recognition API',
    description: 'A backend service that identifies objects in images. Built with a computer vision model and exposed via a REST API for easy integration.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Computer Vision', 'Genkit', 'API', 'Node.js', 'Cloud Run'],
    githubUrl: '#',
    liveUrl: null,
    aiHint: 'image recognition api'
  },
];

export default function AiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="A.I. Playground" subtitle="Experiments with Generative AI">
        <div className="mb-12">
          <Chatbot />
        </div>

        <div className="mb-12">
          <ImageCaptioner />
        </div>
        
        {aiProjects.length > 0 && (
          <>
            <div className="mt-12 text-center">
              <h3 className="text-3xl font-headline font-bold text-primary mb-2">My AI Experiments</h3>
              <p className="text-lg text-muted-foreground">Here are some of the AI projects I've been working on.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiProjects.map((project, index) => (
                <Card key={index} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-muted/20">
                  <CardHeader>
                    <div className="aspect-video relative w-full rounded-t-md overflow-hidden">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} - Project Screenshot`}
                        fill
                        className="object-cover"
                        data-ai-hint={project.aiHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 2}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardTitle className="font-headline text-2xl text-primary mb-2 flex items-center"><BrainCircuit className="mr-2 h-6 w-6"/>{project.title}</CardTitle>
                    <CardDescription className="font-body text-muted-foreground mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-body">{tag}</span>
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
              ))}
            </div>
          </>
        )}
      </SectionContainer>
    </div>
  );
}
