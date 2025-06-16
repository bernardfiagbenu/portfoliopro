import Link from 'next/link';
import { CodeXmlIcon } from 'lucide-react';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline hover:text-accent transition-colors">
          <CodeXmlIcon className="w-8 h-8 text-accent" />
          <div>
            <span className="font-bold">Bernard Fiagbenu</span>
            <p className="text-xs text-primary-foreground/80 font-body">Computer Scientist</p>
          </div>
        </Link>
        <nav className="mt-4 sm:mt-0">
          <ul className="flex space-x-4 sm:space-x-6 font-body">
            <li><Link href="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li><Link href="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
            <li><Link href="/skills" className="hover:text-accent transition-colors">Skills</Link></li>
            <li><Link href="/research" className="hover:text-accent transition-colors">Research</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
