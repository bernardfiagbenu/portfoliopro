
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from 'next-themes';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4E03AQFIeecyanK_JA/profile-displayphoto-shrink_800_800/B4EZd4ueUsHgAc-/0/1750077138969?e=1755734400&v=beta&t=Gaq9QOcbZAmRIU_NjU4SNzO4cpUofhwG0J1pP-GLskU";
const faviconUrl = "https://media.licdn.com/dms/image/v2/D4E03AQFIeecyanK_JA/profile-displayphoto-shrink_100_100/B4EZd4ueUsHgAU-/0/1750077138969?e=1756339200&v=beta&t=l4tefxyXzJlzKvv4CB8bLoezjQlv2kb_mweWekSNEe0";

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
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              document.documentElement.classList.add(theme);
            })();
          `,
          }}
          suppressHydrationWarning
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        ></script>
        <script type="module" dangerouslySetInnerHTML={{ __html: `
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  const firebaseConfig = {
    apiKey: "AIzaSyDuyGZC4i_tZcqJBgu5Wq5heplvk1p3bpc",
    authDomain: "portfolio-pro-39cd8.firebaseapp.com",
    projectId: "portfolio-pro-39cd8",
    storageBucket: "portfolio-pro-39cd8.firebasestorage.app",
    messagingSenderId: "700775517479",
    appId: "1:700775517479:web:95771512e2a740d6546d02"
  };
  const app = initializeApp(firebaseConfig);
`}}></script>
      </head>
      <body className="font-body flex flex-col min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
