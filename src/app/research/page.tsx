import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { LightbulbIcon, BookOpenIcon, LinkIcon } from 'lucide-react';
import Image from 'next/image';

const researchItems = [
  {
    title: 'The Impact of Micro-interactions on User Engagement',
    description: 'An exploratory study into how subtle animations and feedback mechanisms in UIs can significantly enhance user satisfaction and task completion rates.',
    date: 'Published: March 2024',
    tags: ['UI/UX', 'User Engagement', 'Interaction Design'],
    imageUrl: 'https://placehold.co/600x300.png?text=Micro-interactions+Study',
    link: '#',
    aiHint: 'research paper'
  },
  {
    title: 'Optimizing Flutter Performance for Complex Applications',
    description: 'A deep dive into advanced techniques for performance tuning in Flutter, covering state management, rendering optimization, and efficient data handling for large-scale mobile apps.',
    date: 'Conference Paper: June 2023',
    tags: ['Flutter', 'Mobile Performance', 'Software Optimization'],
    imageUrl: 'https://placehold.co/600x300.png?text=Flutter+Performance',
    link: '#',
    aiHint: 'code optimization'
  },
  {
    title: 'Ethical Considerations in AI-driven UI Personalization',
    description: 'Examining the ethical dilemmas and best practices associated with using artificial intelligence to personalize user interfaces, focusing on privacy, bias, and transparency.',
    date: 'Working Paper: Ongoing',
    tags: ['AI Ethics', 'UI Personalization', 'Responsible Tech'],
    imageUrl: 'https://placehold.co/600x300.png?text=AI+Ethics+UI',
    link: '#',
    aiHint: 'artificial intelligence'
  },
];

export default function ResearchPage() {
  return (
    <SectionContainer title="Research & Insights" subtitle="Exploring the Frontiers of Technology and Design">
      <div className="space-y-8">
        {researchItems.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={item.aiHint}
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <LightbulbIcon className="w-6 h-6 text-accent mr-3" />
                    <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="font-body text-sm text-muted-foreground">{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-body">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-semibold font-body flex items-center">
                    Read More <LinkIcon className="ml-2 w-4 h-4" />
                  </a>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <div className="flex items-center justify-center text-lg text-muted-foreground">
          <BookOpenIcon className="w-6 h-6 mr-2 text-accent" />
          <p className="font-body">Continuously learning and exploring new ideas. More insights coming soon!</p>
        </div>
      </div>
    </SectionContainer>
  );
}
