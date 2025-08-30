
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';

export const metadata: Metadata = {
  title: 'Direct Air Capture (DAC) - Research',
  description: 'A deep dive into Direct Air Capture (DAC), exploring its challenges, research directions, and ethical implications.',
};

export default function DirectAirCapturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Direct Air Capture (DAC)" subtitle="A Master’s-Level Research Perspective">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Technical background &amp; motivation</h3>
          <p>
            Direct Air Capture (DAC) technologies chemically remove CO₂ from ambient air for storage (geological sequestration) or utilization (e.g., synthetic fuels). DAC is attractive because it decouples CO₂ removal from specific point-source emitters and enables negative emissions. However, DAC is energy- and material-intensive; improving sorbent materials, process integration, and modularity is key to practical deployment.
          </p>

          <h3>Core technical gaps</h3>
          <ul>
            <li>Sorbent materials that combine high capacity, fast kinetics, low regeneration energy, and long cycle life.</li>
            <li>Process designs that integrate low-grade waste heat or renewables to minimize carbon intensity and cost.</li>
            <li>Modular system design enabling distributed deployment in varied geographic and grid contexts.</li>
            <li>Lifecycle and supply-chain analysis to ensure that net-negative claims hold under realistic manufacturing and operational assumptions.</li>
          </ul>

          <h3>Sharp research questions</h3>
          <ul>
            <li>Can hybrid sorbents—combining chemisorption and physisorption domains—achieve materially lower regeneration energy while preserving fast capture kinetics?</li>
            <li>What control strategies optimize DAC operation under variable renewable power, minimizing levelized cost per ton CO₂?</li>
            <li>How does siting DAC with co-located industrial heat or waste-heat resources change techno-economic feasibility in developing regions?</li>
          </ul>

          <h3>Feasible experiments &amp; methods</h3>
          <p>
            Materials &amp; lab work: characterize candidate sorbents (amine-functionalized solids, metal–organic frameworks, advanced resins) for capacity, kinetics, cyclic stability and heat of regeneration. Use thermogravimetric analysis (TGA), flow-reactor adsorption tests, and accelerated cycling to estimate lifetime.
            Process modeling: build dynamic process models that consider variable electricity/heat supply. Simulate integration with PV, wind, waste-heat sources, and compute the marginal CO₂ cost under different scenarios.
            Control &amp; optimization: apply model-predictive control (MPC) and RL-based schedulers to manage modular DAC farms under variable renewables, aiming to minimize operational emissions and cost.
            Techno-economic &amp; LCA: assemble supply-chain models, capex/opex breakdowns, and life-cycle assessments that include sorbent manufacture, construction, and end-of-life.
          </p>

          <h3>Evaluation &amp; metrics</h3>
          <p>
            $/tCO₂ captured (levelized), net CO₂ removed after lifecycle accounting, sorbent capacity degradation rates (cycles to 80% capacity), energy per ton CO₂ (kWh/t), and water use per ton. Also include modularity metrics (installation time per unit capacity).
          </p>
          
          <h3>Resources &amp; partnerships</h3>
          <p>
            Materials characterization lab, process simulation tools (e.g., Aspen or open alternatives), compute for optimization, and potential industrial partnerships for waste-heat testing or pilot deployment.
          </p>

          <h3>Ethics, governance &amp; risks</h3>
          <p>
            Avoid “moral hazard” by coupling DAC research with mitigation/adaptation strategies; transparency about costs and limits is essential. Consider environmental justice: where are DAC plants sited, and who benefits? Ensure robust, transparent lifecycle accounting to avoid greenwashing.
          </p>
          
          <h3>Why it’s compelling for a Master’s project</h3>
          <p>
            It combines materials science, process engineering, controls, and systems analysis with high policy relevance. Deliverables can include new sorbent characterization data, process models, and optimization/control algorithms suitable for publication and industry transition.
          </p>

        </div>
      </SectionContainer>
    </div>
  );
}

    