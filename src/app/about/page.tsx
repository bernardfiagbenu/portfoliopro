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
            <AvatarImage src="https://placehold.co/200x200.png" alt="Bernard Fiagbenu" data-ai-hint="professional portrait" />
            <AvatarFallback>BF</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-left md:text-left">
          <h2 className="text-2xl font-headline font-semibold text-primary mb-4">Bernard Fiagbenu</h2>
          <p className="font-body text-lg mb-4">
            Hello! I'm a passionate UI Software Engineer and Computer Scientist with a knack for crafting elegant and user-friendly digital solutions. My journey into the world of technology began with a deep curiosity for how things work, which quickly evolved into a passion for building innovative software.
          </p>
          <p className="font-body text-lg mb-4">
            I thrive in collaborative environments, leveraging my skills in modern front-end frameworks and design principles to bring ideas to life. My focus is on creating seamless user experiences that are not only functional but also aesthetically pleasing and accessible to all.
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
          <p className="font-body text-center text-muted-foreground">M.Sc. in Computer Science, University of Tech<br/>B.Sc. in Software Engineering, Institute of Code</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-background rounded-lg shadow-md">
          <Briefcase className="w-12 h-12 text-accent mb-3" />
          <h3 className="text-xl font-headline font-semibold text-primary mb-2">Experience</h3>
          <p className="font-body text-center text-muted-foreground">5+ years in UI/UX Development<br/>Lead Engineer at Creative Solutions Inc.</p>
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
