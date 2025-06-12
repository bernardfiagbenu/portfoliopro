import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeIcon, SmartphoneIcon, DatabaseIcon, CloudIcon, PaletteIcon, SettingsIcon, ZapIcon, UsersIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    icon: CodeIcon,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Dart', 'Java', 'C#'],
  },
  {
    name: 'Frontend Development',
    icon: PaletteIcon,
    skills: ['React', 'Next.js', 'Vue.js', 'Angular', 'HTML5', 'CSS3', 'Sass/SCSS', 'Tailwind CSS'],
  },
  {
    name: 'Mobile Development',
    icon: SmartphoneIcon,
    skills: ['Flutter', 'React Native', 'Swift (iOS)', 'Kotlin (Android)'],
  },
  {
    name: 'Backend Development',
    icon: SettingsIcon,
    skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'ASP.NET Core'],
  },
  {
    name: 'Databases',
    icon: DatabaseIcon,
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase Firestore', 'SQLite'],
  },
  {
    name: 'DevOps & Cloud',
    icon: CloudIcon,
    skills: ['Docker', 'Kubernetes', 'AWS', 'Google Cloud Platform', 'Azure', 'CI/CD (Jenkins, GitHub Actions)'],
  },
  {
    name: 'UI/UX Design',
    icon: ZapIcon,
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
  },
  {
    name: 'Soft Skills',
    icon: UsersIcon,
    skills: ['Problem Solving', 'Communication', 'Teamwork', 'Agile Methodologies', 'Project Management', 'Creativity'],
  },
];

export default function SkillsPage() {
  return (
    <SectionContainer title="My Skills" subtitle="Technologies and Tools I Work With">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <Card key={category.name} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center space-x-3 pb-2">
              <category.icon className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline text-xl text-primary">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 font-body">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm list-disc list-inside ml-2">{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
