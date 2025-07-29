
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon, BrainCircuit } from 'lucide-react';
import Chatbot from '@/components/ai/Chatbot';

export const metadata: Metadata = {
  title: 'A.I. Playground by Bernard Fiagbenu',
  description: 'A collection of A.I. projects by Bernard Fiagbenu, showcasing experiments with large language models, computer vision, and other AI technologies.',
};

const aiProjects = [
  {
    title: 'AI Image Caption Generator',
    description: 'Upload an image and have an AI model generate a descriptive caption. A fun way to explore computer vision.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Genkit', 'Next.js', 'Computer Vision', 'Image Generation'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'image analysis tool'
  },
  {
    title: 'Text-to-Speech Article Reader',
    description: 'Converts my research articles into natural-sounding audio. An experiment in accessibility and AI voice generation.',
    imageUrl: 'https://placehold.co/600x400.png',
    tags: ['Genkit', 'Next.js', 'Text-to-Speech', 'TTS', 'AI Voice'],
    githubUrl: '#',
    liveUrl: '#',
    aiHint: 'audio waveform player'
  }
];

export default function AiPage() {
  return (
    <SectionContainer title="A.I. Playground" subtitle="Experiments with Generative AI">
      {/* Chatbot takes the full width on top */}
      <div className="mb-12">
        <Chatbot />
      </div>

      {/* Other AI projects below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {aiProjects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
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
              <CardTitle className="font-headline text-2xl text-primary mb-2 flex items-center"><BrainCircuit className="mr-2 h-6 w-6"/>{project.title}</CardTitle>
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
        ))}
      </div>
    </SectionContainer>
  );
}
