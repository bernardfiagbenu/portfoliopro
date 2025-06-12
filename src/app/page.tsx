import AnimatedCard from '@/components/ui/AnimatedCard';
import { UserCircle, Briefcase, FlaskConical, Wrench, Mail } from 'lucide-react';

const sections = [
  {
    title: 'About Me',
    description: 'Discover my background, passion for technology, and journey as a software engineer.',
    icon: UserCircle,
    href: '/about',
  },
  {
    title: 'Projects',
    description: 'Explore a selection of my work, showcasing my skills in UI development and problem-solving.',
    icon: Briefcase,
    href: '/projects',
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
    <div className="flex flex-col items-center text-center py-8 md:py-16">
      <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 animate-fadeInUp">
        Welcome to Portfolio Pro
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
        I'm Bernard Fiagbenu, a UI Software Engineer and Computer Scientist. Explore my work and get to know my passion for creating intuitive and dynamic digital experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
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
  );
}
