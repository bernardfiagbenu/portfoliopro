
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';

export const metadata: Metadata = {
  title: 'Programmable Matter - Research',
  description: 'A deep dive into Programmable Matter, exploring its challenges, research directions, and ethical implications.',
};

export default function ProgrammableMatterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Programmable Matter" subtitle="A Master’s-Level Research Perspective">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Technical background &amp; motivation</h3>
          <p>
            Programmable matter are materials whose physical properties (shape, stiffness, color, conductivity) can be programmatically changed after fabrication. Research spans modular robotic tiles, shape-changing polymers, and micro-actuated metamaterials. Realizing practical programmable matter requires advances in material chemistries, distributed control, actuation energy budgets, and human interfaces for commanding large ensembles.
          </p>

          <h3>Key technical gaps</h3>
          <ul>
            <li>Scalable actuation and power distribution for centimeter-to-meter scale systems.</li>
            <li>Robust local communication and control schemes enabling emergent global shape changes.</li>
            <li>Material designs that combine mechanical performance with switchability and durability.</li>
            <li>Human-centered interfaces for intuitive control of complex material behaviors.</li>
          </ul>

          <h3>Research questions</h3>
          <ul>
            <li>What distributed control and local sensing schemes enable shape morphing with tight alignment tolerances under noisy actuation?</li>
            <li>Can multi-physics metamaterials (thermo-responsive + electroactive) deliver rapid, reversible stiffness and shape change at useful timescales?</li>
            <li>How do users meaningfully specify desired behaviors for programmable matter — direct manipulation, sketch-based commands, or high-level objectives — and what interfaces are most effective?</li>
          </ul>

          <h3>Feasible experiments &amp; methods</h3>
          <ul>
            <li><strong>Hardware prototypes:</strong> develop modular tile prototypes (soft actuators, magnetic couplings, local microcontrollers) and demonstrate shape assembly sequences. Characterize energy use, actuation latency, failure modes, and repairability.</li>
            <li><strong>Material innovation:</strong> test polymers/composites with tunable glass transition or electroactive behavior; measure switching cycles, fatigue, and mechanical property ranges.</li>
            <li><strong>Control &amp; simulation:</strong> build agent-based controllers and simulators to explore distributed coordination strategies (consensus, leader election, self-assembly heuristics) and test with domain-randomization for robustness.</li>
            <li><strong>Human factors:</strong> create UI prototypes enabling users to specify shape behaviors and run controlled user studies comparing usability, task completion, and cognitive load.</li>
          </ul>

          <h3>Evaluation &amp; metrics</h3>
          <p>
            Actuation energy per unit volume, time-to-morph, repeatability (cycles to failure), alignment error in assemblies, and user-effort measures in interface studies.
          </p>
          
          <h3>Resources &amp; collaborations</h3>
          <p>
            Materials lab for polymer testing, mechatronics for tile prototypes, compute for multi-agent simulation, and UX lab for user studies.
          </p>

          <h3>Ethics &amp; sustainability</h3>
          <p>
            Lifecycle assessment: evaluate recyclability, toxicology of smart materials, and long-term environmental cost. Address potential misuse (e.g., unauthorized reconfiguration of infrastructure) with secure control schemes and access constraints.
          </p>
          
          <h3>Why it’s compelling for a Master’s project</h3>
          <p>
            Programmable matter sits at an exciting intersection of materials science, robotics, control, and HCI. A focused project can deliver demonstrable prototypes and user-tested control schemes that amount to strong publications.
          </p>

        </div>
      </SectionContainer>
    </div>
  );
}
