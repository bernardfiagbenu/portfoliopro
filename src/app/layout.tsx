
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from 'next-themes';
import { UserProvider } from '@/context/UserContext';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
// Using the LinkedIn profile picture for both OG image and favicon for consistency
const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4E03AQHUX2NRr94X0g/profile-displayphoto-scale_200_200/B4EZhRbogBHIAc-/0/1753712855893?e=1756339200&v=beta&t=ENNu6kVKgGex8c_GZVC_0BtHBKcW6mj4C1CIeB1fVf4"; 
const faviconUrl = profileImageUrl;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : null,
  title: {
    default: 'Bernard Fiagbenu | Computer Science',
    template: '%s | Bernard Fiagbenu',
  },
  description: 'The digital portfolio of Bernard Fiagbenu, a Computer Science student specializing in software development, web technologies, and innovative tech solutions. Explore projects, skills, and research insights.',
  keywords: ['Bernard Fiagbenu', 'Computer Science', 'Software Developer', 'Web Developer', 'Next.js Developer', 'React Developer', 'Portfolio', 'Tech Projects', 'Software Engineering', 'Full-Stack Developer'],
  authors: [{ name: 'Bernard Fiagbenu', url: siteUrl || undefined }],
  creator: 'Bernard Fiagbenu',
  openGraph: {
    title: 'Bernard Fiagbenu | Computer Science',
    description: 'Digital portfolio of Bernard Fiagbenu, Computer Science Student and Software Engineer.',
    url: siteUrl || undefined,
    siteName: 'Bernard Fiagbenu Portfolio',
    images: [
      {
        url: profileImageUrl,
        width: 200,
        height: 200,
        alt: 'Bernard Fiagbenu - Profile Picture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bernard Fiagbenu | Computer Science',
    description: 'Digital portfolio of Bernard Fiagbenu, Computer Science.',
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
    "name": "Bernard Fiagbenu | Portfolio",
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
        <UserProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem={false}
            >
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <Toaster />
            </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}

    