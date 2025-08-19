
import AnimatedCard from '@/components/ui/AnimatedCard';
import { UserCircle, Briefcase, FlaskConical, Wrench, Mail, BrainCircuit } from 'lucide-react';

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
    <div className="relative flex flex-col items-center justify-center text-center w-full min-h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        poster="https://placehold.co/1280x720.png"
        data-ai-hint="tech motion"
      >
        <source src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4" type="video/mp4" data-ai-hint="abstract tech animation"/>
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text readability */}
      <div className="fixed inset-0 z-10 bg-black/70 dark:bg-black/80"></div>

      {/* Content Layer */}
      <div className="relative z-20 p-4 container mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-white animate-fadeInUp">
          Bernard Fiagbenu
        </h1>
        <p
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto animate-fadeInUp"
          style={{ animationDelay: '0.2s' }}
        >
          I'm a Computer Science student, exploring my work and passion for technology and building innovative software solutions.
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
