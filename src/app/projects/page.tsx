
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GithubIcon, ExternalLinkIcon, AppWindow } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects by Bernard Fiagbenu',
  description: 'Explore a collection of software development projects by Bernard Fiagbenu, showcasing skills in web applications, tools, and various technologies.',
};

const projects = [
   {
    title: 'Project Demos & Prototypes',
    description: 'A collection of rapid-prototype applications demonstrating various functionalities, from data dashboards to inventory trackers. A showcase of versatile and quick development.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Prototyping', 'Dashboards', 'UI/UX', 'Data Viz', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/demos',
    aiHint: 'app prototypes grid'
  },
  {
    title: 'Interactive Online Safety Scenarios',
    description: 'An AI-powered educational tool that generates realistic online scenarios (like cyberbullying or scams) to help users practice safe and responsible digital citizenship.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['EdTech', 'AI', 'Online Safety', 'Gamification', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/online-safety-scenarios',
    aiHint: 'online safety education'
  },
  {
    title: 'World Population Trends Dashboard',
    description: 'An interactive data dashboard visualizing global population projections, aging trends, and life expectancy based on the latest UN data. Highlights key demographic shifts.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Data Viz', 'Demographics', 'UN Data', 'Next.js', 'Recharts'],
    githubUrl: null,
    liveUrl: '/projects/world-population-dashboard',
    aiHint: 'population data dashboard'
  },
  {
    title: 'HIV/AIDS Interactive Data Dashboard',
    description: 'A data visualization dashboard that presents key statistics and trends about the global HIV/AIDS epidemic, based on data from UNAIDS. It highlights treatment gaps, gender inequalities, and funding challenges.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Data Viz', 'Health Tech', 'UN Goals', 'Next.js', 'Recharts'],
    githubUrl: null,
    liveUrl: '/projects/hiv-aids-dashboard',
    aiHint: 'health data dashboard'
  },
  {
    title: 'Personalized Learning Path Generator',
    description: 'An AI-powered tool that creates custom, week-by-week learning plans for any topic. Enter a subject and get a structured curriculum to guide your studies.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['EdTech', 'GenAI', 'Personalized Learning', 'Next.js', 'AI'],
    githubUrl: null,
    liveUrl: '/projects/learning-path-generator',
    aiHint: 'personalized education interface'
  },
  {
    title: 'Climate Policy Simulator',
    description: 'An AI-powered tool to simulate and analyze the potential economic, social, and environmental impacts of various climate policies. Provides high-level insights for decision-makers.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Climate Policy', 'GenAI', 'Simulation', 'Decision Support', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/policy-simulator',
    aiHint: 'climate policy dashboard'
  },
  {
    title: 'Global GHG Emissions Tracker',
    description: 'An interactive dashboard to monitor and analyze greenhouse gas emissions data from various sectors and countries, demonstrating data visualization and reporting concepts for climate action.',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Climate Action', 'Data Viz', 'GIS', 'Next.js', 'React'],
    githubUrl: null,
    liveUrl: '/projects/ghg-emissions-tracker',
    aiHint: 'climate data dashboard'
  },
  {
    title: 'Social Impact Idea Generator',
    description: 'An AI-powered idea generator that responds to a defined social problem by brainstorming solutions in various formats, from tech prototypes to policy briefs. Try the live demo!',
    imageUrl: 'https://picsum.photos/600/400',
    tags: ['Social Impact', 'GenAI', 'Innovation', 'Problem Solving', 'Next.js'],
    githubUrl: null,
    liveUrl: '/projects/social-impact-challenge',
    aiHint: 'social impact solution'
  },
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
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQHLceGzsddiVg/feedshare-shrink_800/B4EZd7LfkBGwAg-/0/1750118300730?e=1752710400&v=beta&t=kAxXndPg9KxTh_7vM6CpRzO7SswVkBXlpeGBZL7s5rs',
    tags: ['Web App', 'Frontend', 'Image Tool', 'Utility', 'Google Play'],
    githubUrl: null,
    liveUrl: 'https://ubiquitous-speculoos-d2e478.netlify.app/',
    aiHint: 'image formatter tool'
  },
  {
    title: 'Modern Quiz App',
    description: 'An interactive and modern quiz application to test your knowledge on various subjects. Features a clean UI and engaging user experience.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4E22AQHa5XJpX7b-2g/feedshare-shrink_800/B4EZep0aORHIAg-/0/1750900778472?e=1753920000&v=beta&t=-RjjrDLJC2WU2mjbCa1_Xu9diNICNxRGeRP0eWWYolQ',
    tags: ['React', 'Quiz App', 'JavaScript', 'Netlify', 'Frontend'],
    githubUrl: 'https://github.com/bernardfiagbenu/mordern-quiz-app',
    liveUrl: 'https://effulgent-mousse-1d069d.netlify.app/',
    aiHint: 'quiz app interface'
 }
];

const ProjectLinkWrapper = ({ liveUrl, children }: { liveUrl: string | null, children: React.ReactNode }) => {
  if (liveUrl && liveUrl.startsWith('/')) {
    return <Link href={liveUrl} className="group block h-full">{children}</Link>;
  }
  return <div className="group block h-full">{children}</div>;
};

const ActionButton = ({ url, label, icon: Icon, isInternal }: { url: string, label: string, icon: React.ElementType, isInternal?: boolean }) => {
  const commonProps = {
    children: (
      <>
        <Icon className="mr-2 h-4 w-4" /> {label}
      </>
    ),
  };

  if (isInternal) {
    return (
      <Button variant="default" size="sm" asChild>
        <Link href={url} {...commonProps} />
      </Button>
    );
  }

  return (
    <Button variant="default" size="sm" asChild>
      <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`View live demo of project`} {...commonProps} />
    </Button>
  );
};


export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
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
                <ProjectLinkWrapper liveUrl={project.liveUrl}>
                   <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="font-body text-muted-foreground mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-body">{tag}</span>
                      ))}
                    </div>
                  </CardContent>
                </ProjectLinkWrapper>
                <CardFooter className="flex justify-end space-x-2 p-4 bg-muted/30 mt-auto">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
                        <GithubIcon className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                     <ActionButton 
                        url={project.liveUrl}
                        label={project.liveUrl.startsWith('/') ? 'View Demo' : 'Live Demo'}
                        icon={project.liveUrl.startsWith('/') ? AppWindow : ExternalLinkIcon}
                        isInternal={project.liveUrl.startsWith('/')}
                     />
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
}
