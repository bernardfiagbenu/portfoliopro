import SectionContainer from '@/components/ui/SectionContainer';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';

export default function AboutPage() {
  return (
    <SectionContainer title="About Me" subtitle="My Journey in Tech">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0">
          <Avatar className="w-40 h-40 border-4 border-primary shadow-lg">
            <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQH25Hhju6pDQQ/profile-displayphoto-shrink_800_800/B4EZd4EI9CGwAc-/0/1750066041960?e=1755734400&v=beta&t=AsSpGl8pDm5D6YJHB8iPhIPw1DeR1V6Zxal7Vx1DpEQ" alt="Bernard Fiagbenu" data-ai-hint="professional portrait" />
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-left md:text-left">
          <h2 className="text-2xl font-headline font-semibold text-primary mb-4">Bernard Fiagbenu</h2>
          <p className="font-body text-lg mb-4">
            Hello! I'm a passionate Computer Scientist with a deep interest in the theoretical underpinnings of computing and future technology. My journey into the world of technology began with a profound curiosity for how complex systems operate, which quickly evolved into a passion for building innovative software solutions.
          </p>
          <p className="font-body text-lg mb-4">
            I thrive in collaborative environments, leveraging my understanding of core computer science concepts and my software development skills to bring ideas to life. My focus is on creating robust and efficient systems built on a solid foundation of computer science principles. I am particularly fascinated by the intersection of theoretical computer science and practical application in shaping the future of technology.
          </p>
          <p className="font-body text-lg mb-6">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously learning to stay at the forefront of this ever-evolving field.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md">
          <GraduationCap className="w-12 h-12 text-accent mb-3" />
          <h3 className="text-xl font-headline font-semibold text-primary mb-2">Education</h3>
          <p className="font-body text-center text-muted-foreground">
            Bachelor of Science in Computer Science
            <br />
            University of the People (Pasadena, California)
            <br />
            Expected Graduation: 2025 | GPA: 3.06
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md">
          <Briefcase className="w-12 h-12 text-accent mb-3" />
          <h3 className="text-xl font-headline font-semibold text-primary mb-2">Experience</h3>
          <p className="font-body text-center text-muted-foreground">5+ years in Software Development<br/>Experienced in various computer science and software engineering roles.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md">
          <Lightbulb className="w-12 h-12 text-accent mb-3" />
          <h3 className="text-xl font-headline font-semibold text-primary mb-2">Philosophy</h3>
          <p className="font-body text-center text-muted-foreground">"Simplicity is the ultimate sophistication." - Leonardo da Vinci. I strive for clarity and impact in design and code.</p>
        </div>
      </div>
    </SectionContainer>
  );
}
