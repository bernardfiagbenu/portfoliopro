
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { LightbulbIcon, BookOpenIcon, LinkIcon } from 'lucide-react';
import Image from 'next/image';

const researchItems = [
  {
    title: 'Artificial General Intelligence (AGI)',
    description: 'Exploring the frontiers of machine intelligence aiming to perform any intellectual task that a human being can.',
    date: 'Ongoing Exploration',
    tags: ['AI', 'AGI', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'general intelligence'
  },
  {
    title: 'Quantum Computing',
    description: 'Investigating the potential of quantum mechanics to solve complex problems beyond the reach of classical computers.',
    date: 'Ongoing Exploration',
    tags: ['Quantum', 'Computing', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'quantum computer'
  },
  {
    title: 'Brain-Computer Interfaces (BCIs)',
    description: 'Developing direct communication pathways between an enhanced or wired brain and an external device.',
    date: 'Ongoing Exploration',
    tags: ['BCI', 'Neuroscience', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'brain interface'
  },
  {
    title: 'Molecular Nanotechnology',
    description: 'Engineering functional systems at the molecular scale, promising revolutionary materials and devices.',
    date: 'Ongoing Exploration',
    tags: ['Nanotech', 'Materials', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'molecular structure'
  },
  {
    title: 'Fusion Energy',
    description: 'Pursuing clean, virtually limitless energy by replicating the nuclear fusion process that powers the sun.',
    date: 'Ongoing Exploration',
    tags: ['Energy', 'Fusion', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'fusion reactor'
  },
  {
    title: 'Autonomous and Flying Vehicles',
    description: 'Innovating in self-driving cars and personal aerial vehicles to transform transportation and logistics.',
    date: 'Ongoing Exploration',
    tags: ['Autonomous', 'Mobility', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'flying car'
  },
  {
    title: 'Augmented Reality (AR) and Virtual Reality (VR)',
    description: 'Creating immersive digital experiences by overlaying information onto the real world or creating entirely virtual ones.',
    date: 'Ongoing Exploration',
    tags: ['AR', 'VR', 'XR', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'virtual reality'
  },
  {
    title: 'CRISPR and Gene Editing',
    description: 'Utilizing advanced gene-editing tools like CRISPR for breakthroughs in medicine and biotechnology.',
    date: 'Ongoing Exploration',
    tags: ['CRISPR', 'Genetics', 'Biotech', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'gene editing'
  },
  {
    title: '3D Printing and Additive Manufacturing',
    description: 'Transforming manufacturing processes by building objects layer by layer from digital models.',
    date: 'Ongoing Exploration',
    tags: ['3D Printing', 'Manufacturing', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: '3d printer'
  },
  {
    title: 'Space Technologies and Colonization',
    description: 'Advancing technologies for space exploration, resource utilization, and the potential for human settlements beyond Earth.',
    date: 'Ongoing Exploration',
    tags: ['Space', 'Exploration', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'space colony'
  },
  {
    title: 'Neuromorphic Computing',
    description: 'Designing computer architectures inspired by the structure and function of the human brain for efficient AI.',
    date: 'Ongoing Exploration',
    tags: ['AI', 'Hardware', 'Neuroscience', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'neural network'
  },
  {
    title: 'Synthetic Biology',
    description: 'Designing and constructing new biological parts, devices, and systems, or re-designing existing, natural biological systems.',
    date: 'Ongoing Exploration',
    tags: ['SynBio', 'Biotech', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'synthetic biology'
  },
  {
    title: 'Xenobots (Living Robots)',
    description: 'Creating novel life-forms by assembling cells into functional, programmable organisms.',
    date: 'Ongoing Exploration',
    tags: ['Robotics', 'Biology', 'AI', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'living robot'
  },
  {
    title: 'Lab-Grown Meat & Cellular Agriculture',
    description: 'Developing sustainable and ethical alternatives to traditional animal agriculture through cell-based food production.',
    date: 'Ongoing Exploration',
    tags: ['Food Tech', 'Sustainability', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'lab meat'
  },
  {
    title: 'Vertical Farming & Smart Agriculture',
    description: 'Innovating in agriculture with stacked layers and technology-driven methods for efficient, local food production.',
    date: 'Ongoing Exploration',
    tags: ['AgriTech', 'Sustainability', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'vertical farm'
  },
  {
    title: 'Geoengineering & Climate Tech',
    description: "Exploring large-scale interventions in Earth's climate system to counteract climate change, alongside other climate technologies.",
    date: 'Ongoing Exploration',
    tags: ['Climate', 'Geoengineering', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'climate tech'
  },
  {
    title: 'Direct Air Capture (DAC)',
    description: 'Developing technologies to capture carbon dioxide directly from the atmosphere to mitigate climate change.',
    date: 'Ongoing Exploration',
    tags: ['Climate', 'Carbon Capture', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'air capture'
  },
  {
    title: 'Programmable Matter',
    description: 'Researching materials that can change their physical properties based on user input or environmental stimuli.',
    date: 'Ongoing Exploration',
    tags: ['Materials', 'Robotics', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'programmable matter'
  },
  {
    title: 'Internet of Everything (IoE)',
    description: 'Expanding the concept of IoT to include people, processes, data, and things for a more interconnected world.',
    date: 'Ongoing Exploration',
    tags: ['IoT', 'Connectivity', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'connected devices'
  },
  {
    title: 'Solid-State Batteries & Energy Storage Breakthroughs',
    description: 'Advancing energy storage with safer, more efficient, and longer-lasting battery technologies.',
    date: 'Ongoing Exploration',
    tags: ['Energy', 'Batteries', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'energy storage'
  },
  {
    title: 'AI Teachers and Personalized Education',
    description: 'Leveraging AI to create adaptive and personalized learning experiences for students of all ages.',
    date: 'Ongoing Exploration',
    tags: ['AI', 'Education', 'EdTech', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'ai education'
  },
  {
    title: 'Mind Uploading & Digital Consciousness',
    description: 'Exploring the theoretical and technological possibilities of transferring human consciousness to a digital substrate.',
    date: 'Ongoing Exploration',
    tags: ['Neuroscience', 'AI', 'Transhumanism', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'digital mind'
  },
  {
    title: 'Anti-Aging & Biological Reversal',
    description: 'Investigating biological mechanisms of aging to develop interventions for extending healthspan and potentially lifespan.',
    date: 'Ongoing Exploration',
    tags: ['Longevity', 'Biotech', 'Medicine', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'anti aging'
  },
  {
    title: 'Dyson Spheres & Stellar Energy Harvesting',
    description: "Conceptualizing megastructures to capture a large percentage of a star's power output for advanced civilizations.",
    date: 'Ongoing Exploration',
    tags: ['Astroengineering', 'Energy', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'dyson sphere'
  },
  {
    title: 'Morphological Freedom & Human Augmentation',
    description: 'Exploring the ability to alter bodily form and function through advanced technologies like cybernetics and genetic engineering.',
    date: 'Ongoing Exploration',
    tags: ['Transhumanism', 'Augmentation', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'human augmentation'
  },
  {
    title: 'Warp Drives & Faster-Than-Light Travel',
    description: 'Investigating theoretical concepts and potential physics for achieving faster-than-light space travel.',
    date: 'Ongoing Exploration',
    tags: ['Space', 'Physics', 'FTL', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'warp drive'
  },
  {
    title: 'Artificial Life & Protocells',
    description: 'Creating synthetic life forms and protocells to understand the origins of life and engineer novel biological systems.',
    date: 'Ongoing Exploration',
    tags: ['A-Life', 'Biology', 'Origins', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'artificial life'
  },
  {
    title: 'Wireless Power at Scale',
    description: 'Developing methods for transmitting electrical power over distances without wires, for various applications.',
    date: 'Ongoing Exploration',
    tags: ['Energy', 'Wireless', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'wireless power'
  },
  {
    title: 'Cryonics & Revival Technology',
    description: 'Researching low-temperature preservation of humans and animals with the hope of future revival and restoration.',
    date: 'Ongoing Exploration',
    tags: ['Cryonics', 'Longevity', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'cryonics pod'
  },
  {
    title: 'Satellite Internet & Global Mesh Networks',
    description: 'Building extensive satellite constellations and mesh networks to provide global, high-speed internet access.',
    date: 'Ongoing Exploration',
    tags: ['Internet', 'Connectivity', 'Space', 'Future Tech'],
    imageUrl: 'https://placehold.co/600x300.png',
    link: '#',
    aiHint: 'satellite internet'
  },
];

export default function ResearchPage() {
  return (
    <SectionContainer title="Research & Insights" subtitle="Exploring the Frontiers of Technology and Design">
      <div className="space-y-8">
        {researchItems.map((item, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-48 md:h-auto">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={item.aiHint}
                />
              </div>
              <div className="md:w-2/3">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <LightbulbIcon className="w-6 h-6 text-accent mr-3" />
                    <CardTitle className="font-headline text-2xl text-primary">{item.title}</CardTitle>
                  </div>
                  <CardDescription className="font-body text-sm text-muted-foreground">{item.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-foreground mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full font-body">{tag}</span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent font-semibold font-body flex items-center">
                    Explore Topic <LinkIcon className="ml-2 w-4 h-4" />
                  </a>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <div className="flex items-center justify-center text-lg text-muted-foreground">
          <BookOpenIcon className="w-6 h-6 mr-2 text-accent" />
          <p className="font-body">Continuously learning and exploring new ideas. These topics represent areas of significant interest and potential future impact.</p>
        </div>
      </div>
    </SectionContainer>
  );
}

