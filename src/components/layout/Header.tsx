
'use client';
import Link from 'next/link';
import { CodeXmlIcon, LogIn } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '../ui/button';
import { useUser } from '@/context/UserContext';
import { UserNav } from '@/components/layout/UserNav';
import HeaderNav from './HeaderNav';


export default function Header() {
  const { user } = useUser();
  return (
    <header className="bg-background/80 text-foreground shadow-md sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-headline hover:text-primary transition-colors">
          <CodeXmlIcon className="w-8 h-8 text-primary" />
          <div>
            <span className="font-bold text-foreground">Bernard Fiagbenu</span>
            <p className="text-xs text-muted-foreground font-body">Computer Science</p>
          </div>
        </Link>
        <nav className="mt-4 sm:mt-0 flex items-center space-x-2 sm:space-x-4 font-body">
          <HeaderNav />
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
