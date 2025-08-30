
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';

export const metadata: Metadata = {
  title: 'Molecular Nanotechnology - Research',
  description: 'A deep dive into Molecular Nanotechnology, exploring its challenges, research directions, and ethical implications.',
};

export default function MolecularNanotechnologyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Molecular Nanotechnology" subtitle="A Master’s-Level Research Perspective">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <p>
            <strong>Molecular nanotechnology</strong> seeks to engineer molecular-scale devices and assemblies (DNA origami, molecular machines, protein-based devices) to perform mechanical, sensing, or catalytic functions. Advances in design tools (sequence-to-structure prediction), coarse-grained simulation, and DNA-based self-assembly have enabled complex programmable shapes, but yield, robustness, and reliable function in non-ideal environments remain the barriers to practical application.
          </p>

          <h3>Technical Challenges</h3>
          <ol>
            <li><strong>Design-to-yield gap:</strong> sequences predicted to form target structures often fail in wet-lab conditions.</li>
            <li><strong>Environmental sensitivity:</strong> ionic strength, temperature, contaminants.</li>
            <li><strong>Engineering dynamic behavior</strong> (switches, walkers) with reliable kinetics.</li>
            <li><strong>Limited computational design tools</strong> that couple sequence, structure, and assembly pathway prediction.</li>
          </ol>

          <h3>Project Idea</h3>
          <p>
            A computational and experimental pipeline to optimize DNA-origami mechanical switches with high yield under realistic buffer conditions. The project combines coarse-grained molecular dynamics (oxDNA), sequence optimization, and (if available) small-scale wet-lab validation (gel electrophoresis, AFM/TEM).
          </p>

          <h3>Methods</h3>
          <p>
            Build an initial library of candidate designs for a bistable switch (two conformation states). Use simulation to estimate energetic stability and switching barriers under variable ionic and temperature profiles. Develop a reinforcement-learning (RL) or Bayesian optimization loop where proposed sequence modifications are scored by predicted yield and switching kinetics in simulation. When possible, validate top candidates in vitro and iterate: measure yield via gel/AFM, quantify switching behavior under chemical stimuli, and compare to simulation predictions.
          </p>

          <h3>Metrics</h3>
          <p>
            Predicted vs. observed yield, switching fidelity (fraction of molecules responding), switching speed, energetic barriers, and robustness across buffer conditions. The research should quantify failure modes and propose design heuristics that generalize (e.g., staple design patterns, staple redundancy strategies).
          </p>
          
          <h3>Tools and Resources</h3>
          <p>
            oxDNA/oxDNA2 simulations, Python-based optimization wrappers, access to wet-lab facilities for small-scale validation (collaboration with a DNA nanotech group), microscopy (AFM/TEM) for structural readout, and gel electrophoresis for yield estimation.
          </p>

          <h3>Impact</h3>
          <p>
            This project aims to close the simulation-to-lab loop, delivering reproducible design heuristics for molecular machines. Achieving robust switches that operate under realistic conditions opens routes for drug delivery triggers, smart materials, and sensing.
          </p>

          <h3>Ethics & Safety</h3>
          <p>
            Follow biosafety protocols; avoid pathogen work. Consider dual-use risks when proposing programmable devices and include safeguards: open methodology for benign applications, and discussion of oversight. Ensure transparent reporting of limitations and reproducibility artifacts.
          </p>

        </div>
      </SectionContainer>
    </div>
  );
}
