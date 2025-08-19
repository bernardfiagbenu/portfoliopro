import Link from 'next/link';
import { CodeXmlIcon } from 'lucide-react';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '../ui/button';
export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline hover:text-accent transition-colors">
          <CodeXmlIcon className="w-8 h-8 text-accent" />
          <div>
            <span className="font-bold">Bernard Fiagbenu</span>
            <p className="text-xs text-primary-foreground/80 font-body">Computer Scientist</p>
          </div>
        </Link>
        <nav className="mt-4 sm:mt-0 flex items-center space-x-4 sm:space-x-6 font-body">
          <ul className="flex space-x-4 sm:space-x-6">
            <li><Link href="/about" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent-foreground/50 pb-1">About</Link></li>
            <li><Link href="/projects" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent-foreground/50 pb-1">Projects</Link></li>
            <li><Link href="/skills" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent-foreground/50 pb-1">Skills</Link></li>
            <li><Link href="/research" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent-foreground/50 pb-1">Research</Link></li>
            <li><Link href="/ai" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent-foreground/50 pb-1">A.I.</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors border-b-2 border-transparent hover:border-accent-foreground/50 pb-1">Contact</Link></li>
          </ul>
          <div className="flex items-center gap-2">
             <Link href="/auth">
                <Button variant="secondary" size="sm">Login</Button>
              </Link>
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
