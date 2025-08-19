
'use client';
import Link from 'next/link';
import { CodeXmlIcon, LogIn } from 'lucide-react';

import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '../ui/button';
import { useUser } from '@/context/UserContext';
import { UserNav } from '@/components/layout/UserNav';


export default function Header() {
  const { user } = useUser();
  return (
    <header className="bg-background text-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline hover:text-primary transition-colors">
          <CodeXmlIcon className="w-8 h-8 text-primary" />
          <div>
            <span className="font-bold">Bernard Fiagbenu</span>
            <p className="text-xs text-muted-foreground font-body">Computer Science</p>
          </div>
        </Link>
        <nav className="mt-4 sm:mt-0 flex items-center space-x-2 sm:space-x-4 font-body">
          <ul className="flex space-x-1 sm:space-x-2">
            <li><Link href="/about" className="px-3 py-2 text-sm rounded-md hover:text-primary transition-colors dark:border dark:border-transparent dark:hover:border-input dark:hover:bg-accent">About</Link></li>
            <li><Link href="/projects" className="px-3 py-2 text-sm rounded-md hover:text-primary transition-colors dark:border dark:border-transparent dark:hover:border-input dark:hover:bg-accent">Projects</Link></li>
            <li><Link href="/skills" className="px-3 py-2 text-sm rounded-md hover:text-primary transition-colors dark:border dark:border-transparent dark:hover:border-input dark:hover:bg-accent">Skills</Link></li>
            <li><Link href="/research" className="px-3 py-2 text-sm rounded-md hover:text-primary transition-colors dark:border dark:border-transparent dark:hover:border-input dark:hover:bg-accent">Research</Link></li>
            <li><Link href="/ai" className="px-3 py-2 text-sm rounded-md hover:text-primary transition-colors dark:border dark:border-transparent dark:hover:border-input dark:hover:bg-accent">A.I.</Link></li>
            <li><Link href="/contact" className="px-3 py-2 text-sm rounded-md hover:text-primary transition-colors dark:border dark:border-transparent dark:hover:border-input dark:hover:bg-accent">Contact</Link></li>
          </ul>
          <div className="flex items-center gap-2">
             {user ? (
                <UserNav />
             ) : (
                <Link href="/auth">
                    <Button variant="outline" size="sm">
                        <LogIn className="mr-2 h-4 w-4" />
                        Login
                    </Button>
                </Link>
             )}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
