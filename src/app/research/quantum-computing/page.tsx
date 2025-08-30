
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';

export const metadata: Metadata = {
  title: 'Quantum Computing - Research',
  description: 'A deep dive into Quantum Computing, exploring its challenges, research directions, and ethical implications.',
};

export default function QuantumComputingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Quantum Computing" subtitle="A Master’s-Level Research Perspective">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <p>
            <strong>Quantum computing</strong> leverages superposition and entanglement to tackle problems that are believed to be intractable classically for certain classes of tasks (e.g., factoring, certain quantum chemistry simulations, and optimization). The current era—NISQ (Noisy Intermediate-Scale Quantum)—provides a fertile environment for hybrid quantum-classical algorithms (VQE, QAOA, variational circuits) but faces practical constraints: limited qubit counts, high noise, gate fidelity limits, and connectivity/topology constraints. A practical master’s project should focus on bridging algorithmic novelty with hardware-aware optimization that provides measurable gains on near-term devices.
          </p>

          <h3>Principal Gaps</h3>
          <ol>
            <li>Hardware-aware compilation that optimizes for topology, gate set and noise profile.</li>
            <li>Scalable error mitigation tailored to variational algorithms.</li>
            <li>Rigorous benchmarks that meaningfully map quantum algorithm performance to real-world instances in chemistry or optimization.</li>
          </ol>

          <h3>Project Focus Options</h3>
          <ul>
            <li><strong>(A) Resource-aware compilation for variational algorithms:</strong> build a compiler layer that minimizes two-qubit gates, reduces circuit depth and reorders gates for native pulse capabilities.</li>
            <li><strong>(B) Hybrid QAOA benchmarking:</strong> compare QAOA variants with classical heuristics on realistic graph-derived optimization tasks (e.g., logistics graphs).</li>
            <li><strong>(C) Error-mitigated quantum chemistry:</strong> combine VQE with error-mitigation techniques (zero-noise extrapolation, probabilistic error cancellation) for small molecules.</li>
          </ul>

          <h3>Methods</h3>
          <p>
            Use simulators with noise models (Qiskit Aer, Cirq simulators), then port to available hardware (IBM/Quantinuum/ionQ credits) for empirical validation. Develop a compilation pass pipeline: topology-aware qubit mapping, gate fusion, pulse-level scheduling. Implement variational optimizers robust to measurement noise (SPSA, gradient-free methods) and error mitigation wrappers.
          </p>

          <h3>Evaluation</h3>
          <p>
            Metrics include energy estimation error for chemistry tasks, objective gap for optimization relative to classical baselines, gate counts, circuit depth, and effective fidelity post-mitigation. Statistical rigor requires many-shot sampling, cross-hardware validation, and open reproducible artifacts.
          </p>
          
          <h3>Impact and Limitations</h3>
          <p>
            A successful project demonstrates hardware-aware techniques that improve achievable accuracy or resource efficiency on NISQ devices. Avoid claims of quantum supremacy; instead document precise regimes where quantum-assisted methods show empirically meaningful benefits over classical approaches. Ensure reproducibility (public code, parameter seeds) and contextualize potential translational paths for longer-term fault-tolerant quantum advantages.
          </p>

          <h3>Ethics</h3>
          <p>
            Avoid overstating near-term applicability; be transparent about energy costs and resource utilization. Provide clear guidance on what claims are supported by results and where further hardware improvements are necessary.
          </p>

        </div>
      </SectionContainer>
    </div>
  );
}
