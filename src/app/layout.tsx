
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from 'next-themes';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
// Using a placeholder for the main profile/og image
const profileImageUrl = "https://placehold.co/800x800/4B0082/E6E6FA.png?text=BF"; 
// Using a placeholder for the favicon
const faviconUrl = "https://placehold.co/32x32/4B0082/E6E6FA.png?text=B";

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : null,
  title: {
    default: 'Portfolio Pro - Bernard Fiagbenu | Computer Scientist',
    template: '%s | Bernard Fiagbenu',
  },
  description: 'The digital portfolio of Bernard Fiagbenu, a Computer Scientist specializing in software development, web technologies, and innovative tech solutions. Explore projects, skills, and research insights.',
  keywords: ['Bernard Fiagbenu', 'Computer Scientist', 'Software Developer', 'Web Developer', 'Next.js Developer', 'React Developer', 'Portfolio', 'Tech Projects', 'Software Engineering', 'Full-Stack Developer'],
  authors: [{ name: 'Bernard Fiagbenu', url: siteUrl || undefined }],
  creator: 'Bernard Fiagbenu',
  openGraph: {
    title: 'Portfolio Pro - Bernard Fiagbenu',
    description: 'Digital portfolio of Bernard Fiagbenu, UI Software Engineer and Computer Scientist.',
    url: siteUrl || undefined,
    siteName: 'Portfolio Pro',
    images: [
      {
        url: profileImageUrl,
        width: 800,
        height: 800,
        alt: 'Bernard Fiagbenu - Profile Picture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Pro - Bernard Fiagbenu',
    description: 'Digital portfolio of Bernard Fiagbenu, Computer Scientist.',
    creator: '@FiagbenuBe14283',
    images: [profileImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google9d77f6db261420fa',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Portfolio Pro - Bernard Fiagbenu",
    "url": siteUrl || undefined,
    "potentialAction": siteUrl ? {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    } : undefined,
    "creator": {
      "@type": "Person",
      "name": "Bernard Fiagbenu"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <link rel="icon" href={faviconUrl} type="image/png" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        ></script>
      </head>
      <body className="font-body flex flex-col min-h-screen">
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
