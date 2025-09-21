
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';

export const metadata: Metadata = {
  title: 'Direct Air Capture (DAC) - Research',
  description: 'A deep dive into Direct Air Capture (DAC), exploring its challenges, research directions, and ethical implications.',
};

export default function DirectAirCapturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Direct Air Capture (DAC) for Africa's Climate Future" subtitle="A Master’s-Level Research Perspective on DAC in Ghana and Africa">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <h3>Technical Background & Motivation for Africa</h3>
          <p>
            <strong>Direct Air Capture (DAC)</strong> technologies that remove CO₂ from the air are critical for climate mitigation. For Africa, a continent highly vulnerable to climate change but with a low historical emissions footprint, DAC represents a potential leapfrogging opportunity. It can enable sustainable industrialization by offsetting new emissions and could position countries like Ghana as leaders in the global carbon removal economy. However, deploying DAC in Africa requires adapting the technology to the continent's unique environmental and economic landscape.
          </p>

          <h3>Core Technical Gaps for an African Context</h3>
          <ul>
            <li><strong>Energy Source:</strong> DAC is energy-intensive. Deploying it in Africa requires tight integration with the continent's abundant but often intermittent renewable energy sources (solar, wind) or geothermal potential (e.g., in the Rift Valley).</li>
            <li><strong>Water Usage:</strong> Many DAC processes require significant amounts of water, a major concern in water-stressed regions across Africa. Research into low-water or water-positive DAC is essential.</li>
            <li><strong>Local Materials and Supply Chains:</strong> Sourcing sorbent materials and building DAC plants with local content is key to economic viability and social acceptance. Can local minerals or bio-based materials be used for sorbents?</li>
            <li><strong>Siting and Sequestration:</strong> Identifying optimal locations for DAC plants in Africa requires mapping renewable energy sources, water availability, and suitable geological formations for permanent CO₂ storage (e.g., in sedimentary basins offshore West Africa).</li>
          </ul>

          <h3>A Feasible Master’s Project for Ghana</h3>
          <p>
            A compelling master's project would be a techno-economic analysis and systems integration model for a solar-powered DAC facility in Ghana. The project would focus on optimizing DAC operations under the variable power output of solar energy, a key challenge for grid stability and cost-effectiveness.
          </p>
          <p>
            <strong>Methods:</strong> Build a dynamic process model of a solid-sorbent DAC system. Using solar irradiance data from a location in Northern Ghana (e.g., near Tamale), simulate the DAC plant's performance when powered by a dedicated solar farm with battery storage. Apply control strategies (like Model-Predictive Control) to manage the system, deciding when to capture CO₂ (a low-energy step) and when to regenerate the sorbent (a high-energy step) based on solar availability.
          </p>

          <h3>Evaluation & Metrics</h3>
          <p>
            The project would be evaluated on key metrics: the levelized cost of CO₂ captured ($/tCO₂), the net carbon negativity of the process (accounting for emissions from building the solar farm and DAC plant), and the system's efficiency under real-world solar variability. The model would identify the optimal size of the solar farm and battery storage required to make DAC economically feasible in a Ghanaian context.
          </p>
          
          <h3>Ethics, Governance & Risks</h3>
          <p>
            This research must address critical questions of environmental justice. Who owns the land for these large-scale projects? How do local communities benefit? The project should include a framework for community engagement and benefit-sharing. It must also be transparent about the costs and limitations of DAC, positioning it as one tool among many for climate action, not a silver bullet that justifies continued fossil fuel use. The vision is for Ghana and other African nations to become pioneers in a just and sustainable carbon removal industry.
          </p>

        </div>
      </SectionContainer>
    </div>
  );
}
