
'use client';

import AnimatedCard from '@/components/ui/AnimatedCard';
import { UserCircle, Briefcase, FlaskConical, Wrench, Mail, BrainCircuit } from 'lucide-react';
import dynamic from 'next/dynamic';
import { homePageSketch } from '@/components/p5/HomePageSketch';

// Dynamically import the P5Sketch component to ensure it's client-side only
const P5Sketch = dynamic(() => import('@/components/ui/P5Sketch'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 w-full h-full bg-background z-0" />,
});


const sections = [
  {
    title: 'About Me',
    description: 'Discover my background, passion for technology, and journey as a computer scientist.',
    icon: UserCircle,
    href: '/about',
  },
  {
    title: 'Projects',
    description: 'Explore a selection of my work, showcasing my skills in software development and problem-solving.',
    icon: Briefcase,
    href: '/projects',
  },
   {
    title: 'A.I. Playground',
    description: 'Interact with AI-powered tools and see my experiments with generative models.',
    icon: BrainCircuit,
    href: '/ai',
  },
  {
    title: 'Skills',
    description: 'A comprehensive overview of my technical skills, tools, and technologies I master.',
    icon: Wrench,
    href: '/skills',
  },
  {
    title: 'Research & Insights',
    description: 'Delve into my research interests, articles, and insights on current tech trends.',
    icon: FlaskConical,
    href: '/research',
  },
  {
    title: 'Contact',
    description: 'Get in touch with me for collaborations, opportunities, or any inquiries.',
    icon: Mail,
    href: '/contact',
  },
];

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center text-center w-full min-h-screen overflow-hidden">
      {/* P5.js Animation Background */}
      <P5Sketch sketch={homePageSketch} className="fixed inset-0 w-full h-full z-0" />

      {/* Overlay for text readability */}
      <div className="fixed inset-0 z-10 bg-black/60 dark:bg-black/75"></div>

      {/* Content Layer */}
      <div className="relative z-20 p-4 container mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-white animate-fadeInUp">
          Bernard Fiagbenu
        </h1>
        <p
          className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          I'm a Computer Science student, exploring my work and passion for technology and building innovative artificial intelligence software systems through classical and quantum computers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <AnimatedCard
              key={section.title}
              title={section.title}
              description={section.description}
              icon={section.icon}
              href={section.href}
              delay={index * 100 + 300} // Stagger animation
            />
          ))}
        </div>
      </div>
    </div>
  );
}
