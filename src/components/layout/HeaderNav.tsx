
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

    // Render a placeholder or nothing on the server and initial client render
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
                    <Link href={link.href} className="px-3 py-2 text-sm rounded-md hover:text-primary transition-colors dark:border dark:border-transparent dark:hover:border-input dark:hover:bg-accent">
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
