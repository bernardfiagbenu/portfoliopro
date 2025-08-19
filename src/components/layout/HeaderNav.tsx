
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/skills', label: 'Skills' },
    { href: '/research', label: 'Research' },
    { href: '/ai', label: 'A.I.' },
    { href: '/contact', label: 'Contact' },
];

export default function HeaderNav() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Helper function to render links with consistent styling
    const renderLink = (link: { href: string; label: string; }) => (
        <Link 
            href={link.href} 
            className="px-3 py-2 text-sm rounded-md transition-colors border border-transparent hover:border-primary dark:hover:border-foreground hover:text-primary dark:hover:bg-accent dark:hover:text-accent-foreground"
        >
            {link.label}
        </Link>
    );

    // Render placeholders on the server to avoid hydration mismatch
    if (!isClient) {
        return (
            <ul className="flex space-x-1 sm:space-x-2">
                {navLinks.map(link => (
                    <li key={link.href}>
                        <span className="px-3 py-2 text-sm rounded-md text-transparent">
                            {link.label}
                        </span>
                    </li>
                ))}
            </ul>
        );
    }
    
    return (
        <ul className="flex space-x-1 sm:space-x-2">
            {navLinks.map(link => (
                <li key={link.href}>
                    {renderLink(link)}
                </li>
            ))}
        </ul>
    );
}
