
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { LightbulbIcon, BookOpenIcon, LinkIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research & Tech Insights by Bernard Fiagbenu',
  description: 'Explore Bernard Fiagbenu\'s research interests in cutting-edge technologies like AGI, Quantum Computing, BCIs, Nanotechnology, and more.',
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

const researchItems = [
   {
    id: 'quantum-computing-use-cases',
    title: 'Quantum Computing: Use Cases for Ghana',
    description: 'A comprehensive analysis of future quantum computing use cases across major industries in Ghana, including healthcare, finance, logistics, and agriculture. Read the full article.',
    date: 'Deep Dive Article',
    tags: ['Quantum', 'Ghana', 'Development', 'Industry'],
    link: '/research/quantum-computing-use-cases',
  },
  {
    id: 'agi',
    title: 'Artificial General Intelligence (AGI) in Ghana',
    description: 'Exploring how AGI can be developed to address Ghana-specific challenges like agricultural productivity and healthcare access.',
    date: 'Ongoing Exploration',
    tags: ['AI', 'AGI', 'Ghana', 'Development'],
    link: '/research/artificial-general-intelligence', 
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing for Ghanaian Development',
    description: 'Investigating how to apply near-term quantum algorithms to solve complex optimization problems in Ghanaian industries.',
    date: 'Ongoing Exploration',
    tags: ['Quantum', 'Optimization', 'Ghana'],
    link: '/research/quantum-computing',
  },
  {
    id: 'bcis',
    title: 'BCIs for Healthcare in Ghana',
    description: 'Developing affordable, non-invasive Brain-Computer Interfaces for neurorehabilitation and assistive communication in a Ghanaian context.',
    date: 'Ongoing Exploration',
    tags: ['BCI', 'Neuroscience', 'Healthcare', 'Ghana'],
    link: '/research/brain-computer-interfaces',
  },
  {
    id: 'nanotech',
    title: 'Molecular Nanotechnology for Ghanaian Challenges',
    description: 'Engineering low-cost molecular devices for field-deployable diagnostics for diseases relevant to Ghana.',
    date: 'Ongoing Exploration',
    tags: ['Nanotech', 'Diagnostics', 'Healthcare', 'Ghana'],
    link: '/research/molecular-nanotechnology',
  },
  {
    id: 'fusion-energy',
    title: 'Fusion Energy and Ghana\'s Future',
    description: 'Pursuing clean, virtually limitless energy by replicating the nuclear fusion process that powers the sun.',
    date: 'Ongoing Exploration',
    tags: ['Energy', 'Fusion', 'Ghana', 'Development'],
    link: '/research/fusion-energy',
  },
   {
    id: 'autonomous-vehicles',
    title: 'Autonomous Vehicles for Ghanaian Logistics',
    description: 'Innovating in self-driving and aerial vehicles to transform transportation and supply chains across Ghana.',
    date: 'Ongoing Exploration',
    tags: ['Autonomous', 'Mobility', 'Logistics', 'Ghana'],
    link: '#',
  },
  {
    id: 'ar-vr',
    title: 'AR/VR for Education and Training in Ghana',
    description: 'Creating immersive digital experiences to bridge gaps in education and vocational training across Ghana.',
    date: 'Ongoing Exploration',
    tags: ['AR', 'VR', 'EdTech', 'Ghana'],
    link: '#',
  },
  {
    id: 'crispr',
    title: 'CRISPR for Ghanaian Agriculture and Health',
    description: 'Utilizing gene-editing to develop drought-resistant crops and new treatments for genetic diseases found in Ghanaian populations.',
    date: 'Ongoing Exploration',
    tags: ['CRISPR', 'Genetics', 'Biotech', 'Ghana'],
    link: '#',
  },
  {
    id: '3d-printing',
    title: '3D Printing for Local Manufacturing in Ghana',
    description: 'Transforming manufacturing by enabling local production of everything from medical devices to spare parts in remote areas.',
    date: 'Ongoing Exploration',
    tags: ['3D Printing', 'Manufacturing', 'Ghana'],
    link: '#',
  },
  {
    id: 'space-tech',
    title: 'Space Technologies for Ghanaian Development',
    description: 'Advancing technologies like satellite internet and remote sensing to improve connectivity, agriculture, and resource management in Ghana.',
    date: 'Ongoing Exploration',
    tags: ['Space', 'Connectivity', 'Development', 'Ghana'],
    link: '#',
  },
  {
    id: 'neuromorphic-computing',
    title: 'Neuromorphic Computing for Low-Power AI in Ghana',
    description: 'Designing brain-inspired hardware for highly efficient AI that can run on low-power devices in off-grid Ghanaian contexts.',
    date: 'Ongoing Exploration',
    tags: ['AI', 'Hardware', 'Edge AI', 'Ghana'],
    link: '#',
  },
  {
    id: 'synthetic-biology',
    title: 'Synthetic Biology for Ghanaian Challenges',
    description: 'Designing new biological systems to produce medicines, clean water, and sustainable materials locally in Ghana.',
    date: 'Ongoing Exploration',
    tags: ['SynBio', 'Biotech', 'Ghana'],
    link: '#',
  },
  {
    id: 'xenobots',
    title: 'Xenobots (Living Robots)',
    description: 'Creating novel life-forms by assembling cells into functional, programmable organisms.',
    date: 'Ongoing Exploration',
    tags: ['Robotics', 'Biology', 'AI', 'Future Tech'],
    link: '#',
  },
  {
    id: 'lab-grown-meat',
    title: 'Cellular Agriculture for Food Security in Ghana',
    description: 'Developing sustainable and scalable protein sources through cell-based food production to improve food security in Ghana.',
    date: 'Ongoing Exploration',
tags: ['Food Tech', 'Sustainability', 'Ghana'],
    link: '#',
  },
  {
    id: 'vertical-farming',
    title: 'Vertical Farming for Urban Ghana',
    description: 'Innovating in agriculture with technology-driven methods for efficient food production in rapidly growing Ghanaian cities.',
    date: 'Ongoing Exploration',
    tags: ['AgriTech', 'Urban Farming', 'Ghana'],
    link: '#',
  },
  {
    id: 'direct-air-capture',
    title: 'Direct Air Capture for Ghana\'s Climate Future',
    description: 'Developing technologies to capture carbon dioxide, positioning Ghana as a leader in the global carbon removal economy.',
    date: 'Ongoing Exploration',
    tags: ['Climate', 'Carbon Capture', 'Ghana'],
    link: '/research/direct-air-capture',
  },
  {
    id: 'programmable-matter',
    title: 'Programmable Matter for Ghanaian Infrastructure',
    description: 'Researching self-healing and adaptive materials to build resilient, low-cost infrastructure like roads and shelters in Ghana.',
    date: 'Ongoing Exploration',
    tags: ['Materials', 'Infrastructure', 'Ghana'],
    link: '/research/programmable-matter',
  },
  {
    id: 'internet-of-everything',
    title: 'Internet of Everything (IoE)',
    description: 'Expanding the concept of IoT to include people, processes, data, and things for a more interconnected world.',
    date: 'Ongoing Exploration',
    tags: ['IoT', 'Connectivity', 'Future Tech'],
    link: '#',
  },
  {
    id: 'solid-state-batteries',
    title: 'Solid-State Batteries & Energy Storage Breakthroughs',
    description: 'Advancing energy storage with safer, more efficient, and longer-lasting battery technologies.',
    date: 'Ongoing Exploration',
    tags: ['Energy', 'Batteries', 'Future Tech'],
    link: '#',
  },
  {
    id: 'mind-uploading',
    title: 'Mind Uploading & Digital Consciousness',
    description: 'Exploring the theoretical and technological possibilities of transferring human consciousness to a digital substrate.',
    date: 'Ongoing Exploration',
    tags: ['Neuroscience', 'AI', 'Transhumanism', 'Future Tech'],
    link: '#',
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging & Biological Reversal',
    description: 'Investigating biological mechanisms of aging to develop interventions for extending healthspan and potentially lifespan.',
    date: 'Ongoing Exploration',
    tags: ['Longevity', 'Biotech', 'Medicine', 'Future Tech'],
    link: '#',
  },
  {
    id: 'dyson-spheres',
    title: 'Dyson Spheres & Stellar Energy Harvesting',
    description: "Conceptualizing megastructures to capture a large percentage of a star's power output for advanced civilizations.",
    date: 'Ongoing Exploration',
    tags: ['Astroengineering', 'Energy', 'Future Tech'],
    link: '#',
  },
  {
    id: 'morphological-freedom',
    title: 'Morphological Freedom & Human Augmentation',
    description: 'Exploring the ability to alter bodily form and function through advanced technologies like cybernetics and genetic engineering.',
    date: 'Ongoing Exploration',
    tags: ['Transhumanism', 'Augmentation', 'Future Tech'],
    link: '#',
  },
  {
    id: 'warp-drives',
    title: 'Warp Drives & Faster-Than-Light Travel',
    description: 'Investigating theoretical concepts and potential physics for achieving faster-than-light space travel.',
    date: 'Ongoing Exploration',
    tags: ['Space', 'Physics', 'FTL', 'Future Tech'],
    link: '#',
  },
  {
    id: 'artificial-life',
    title: 'Artificial Life & Protocells',
    description: 'Creating synthetic life forms and protocells to understand the origins of life and engineer novel biological systems.',
    date: 'Ongoing Exploration',
    tags: ['A-Life', 'Biology', 'Origins', 'Future Tech'],
    link: '#',
  },
  {
    id: 'wireless-power',
    title: 'Wireless Power at Scale',
    description: 'Developing methods for transmitting electrical power over distances without wires, for various applications.',
    date: 'Ongoing Exploration',
    tags: ['Energy', 'Wireless', 'Future Tech'],
    link: '#',
  },
  {
    id: 'cryonics',
    title: 'Cryonics & Revival Technology',
    description: 'Researching low-temperature preservation of humans and animals with the hope of future revival and restoration.',
    date: 'Ongoing Exploration',
    tags: ['Cryonics', 'Longevity', 'Future Tech'],
    link: '#',
  },
  {
    id: 'satellite-internet',
    title: 'Satellite Internet for Ghana',
    description: 'Building satellite constellations and mesh networks to provide global, high-speed internet access to bridge the digital divide in Ghana.',
    date: 'Ongoing Exploration',
    tags: ['Internet', 'Connectivity', 'Space', 'Ghana'],
    link: '#',
  },
];

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Research & Insights" subtitle="Applying Frontier Technology to Solve Challenges in Ghana and Africa">
        <div className="space-y-8">
          {researchItems.map((item) => {
            const articleSchema = {
              "@context": "https://schema.org",
              "@type": "TechArticle", 
              "headline": item.title,
              "description": item.description,
              "author": {
                "@type": "Person",
                "name": "Bernard Fiagbenu"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Bernard Fiagbenu Portfolio",
                "logo": {
                  "@type": "ImageObject",
                  "url": siteUrl ? `${siteUrl}/icon.png` : '/icon.png' 
                }
              },
              "datePublished": new Date().toISOString(), 
              "keywords": item.tags.join(', ')
            };
            return (
              <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                  key={`research-schema-${item.id}`}
                />
                <article>
                    <CardHeader>
                      <div className="flex items-center mb-2">
                        <LightbulbIcon className="w-6 h-6 text-accent mr-3" aria-hidden="true" />
                        <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                      </div>
                      <CardDescription className="font-body text-sm text-muted-foreground">{item.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="font-body text-foreground mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                          <span key={`${tag}-${index}`} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-body">{tag}</span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                       <Link 
                          href={item.link} 
                          className="text-primary hover:text-accent font-semibold font-body flex items-center" 
                          aria-label={`Learn more about ${item.title}`}
                        >
                          {item.link.startsWith('/research/') ? 'Read Article' : 'Explore Topic'} <LinkIcon className="ml-2 w-4 h-4" />
                       </Link>
                    </CardFooter>
                </article>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center text-lg text-muted-foreground">
            <BookOpenIcon className="w-6 h-6 mr-2 text-accent" aria-hidden="true" />
            <p className="font-body">Continuously learning and exploring new ideas. These topics represent areas of significant interest and potential future impact.</p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
