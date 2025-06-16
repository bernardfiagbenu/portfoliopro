import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card text-card-foreground py-8 border-t">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/bernardfiagbenu" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/bernard-fiagbenu-26b50b19a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <LinkedinIcon className="w-6 h-6" />
          </a>
          <a href="https://x.com/FiagbenuBe14283" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
            <TwitterIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm font-body">
          &copy; {currentYear} Bernard Fiagbenu. All rights reserved.
        </p>
        <p className="text-xs font-body mt-1 text-muted-foreground">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
