
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
    // This div is constrained by `container mx-auto` from layout.tsx.
    // It becomes the viewport for the background video on this page.
    // Added relative positioning, rounded corners, overflow hidden, and a shadow for a contained look.
    <div className="relative flex flex-col items-center text-center py-8 md:py-16 rounded-lg overflow-hidden shadow-xl">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        poster="https://placehold.co/1280x720.png"
        data-ai-hint="tech motion"
      >
        {/*
          IMPORTANT: Replace this src with the path to your actual video file.
          For example, if you place 'your-video.mp4' in your 'public/videos/' folder,
          the src would be "/videos/your-video.mp4".
          Alternatively, you can use a URL to an externally hosted video.
        */}
 <source src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4" type="video/mp4" data-ai-hint="abstract tech animation"/>        Your browser does not support the video tag.
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content Layer - must be relative and have higher z-index */}
      <div className="relative z-20 p-4"> {/* Added padding to content layer to prevent touching edges if needed */}
        <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 text-white animate-fadeInUp">
 Welcome to Portfolio Pro        </h1>
        <p 
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl animate-fadeInUp" 
          style={{ animationDelay: '0.2s' }}
        >
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
    </div>
  );
}

