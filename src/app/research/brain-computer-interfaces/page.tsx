
import type { Metadata } from 'next';
import SectionContainer from '@/components/ui/SectionContainer';

export const metadata: Metadata = {
  title: 'Brain-Computer Interfaces (BCIs) - Research',
  description: 'A deep dive into Brain-Computer Interfaces (BCIs), exploring challenges, research directions, and ethical implications.',
};

export default function BciPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Brain-Computer Interfaces (BCIs)" subtitle="A Master’s-Level Research Perspective">
        <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto font-body text-foreground">
          
          <p>
            <strong>Brain-Computer Interfaces (BCIs)</strong> decode neural signals (EEG, MEG, ECoG, intracortical arrays) for control or stimulation. The field balances high-bandwidth invasive systems that offer excellent signal quality with non-invasive modalities (EEG/fNIRS) that are safer but lower-bandwidth and noisier. A master’s project should target improving robustness, generalization across subjects, or closed-loop rehabilitation strategies that adapt stimulation/feedback to ongoing neural state.
          </p>

          <h3>Core Technical Issues</h3>
          <ol>
            <li>High noise and artifacts in non-invasive signals.</li>
            <li>Inter-subject variability requiring extensive calibration.</li>
            <li>Latency and feedback-loop stability in closed-loop systems.</li>
            <li>Privacy and ethical concerns about neural data.</li>
          </ol>

          <h3>Possible Project</h3>
          <p>
            Develop a self-supervised pretraining pipeline for EEG that improves cross-subject motor intention decoding with minimal labeled data. Approach: compile large unlabeled EEG corpora (public BCI Competition data, PhysioNet) and design time-series contrastive objectives (temporal contrastive predictive coding, masked-signal modeling) to learn robust features. Fine-tune these features on small labeled datasets for motor tasks. Integrate adaptive domain-adaptation methods (domain adversarial training, prototypical networks) to reduce calibration required for new users.
          </p>

          <h3>Experimental Design</h3>
          <p>
            Pretrain on mixed sources (motor imagery, resting state, movement tasks), then evaluate transfer on held-out subjects and novel tasks. Metrics: classification accuracy, information transfer rate (ITR), time-to-calibration (minutes until target accuracy), and robustness to movement artifacts (simulate with added noise and muscle EMG contamination). Compare to standard baselines (CSP + SVM, CNN temporal models).
          </p>

          <h3>Closed-Loop Extension</h3>
          <p>
             Test a simulated closed-loop where decoded intent triggers visual/haptic feedback, then measure adaptation in neural signals and performance improvements. For translational impact, design protocols respecting IRB constraints and include pilot user studies (healthy volunteers) before any clinical deployment.
          </p>
          
          <h3>Resource Needs</h3>
          <p>
            EEG cap (32–64 channels), acquisition rig, compute for deep time-series models, and IRB access if collecting new human data. Software: MNE, PyTorch/TensorFlow, time-series augmentation libraries.
          </p>

          <h3>Ethical Considerations</h3>
          <p>
            Preserve participant privacy (de-identification, encryption), ensure informed consent with explicit explanation of data uses, provide opt-out and clear safety mechanisms for closed-loop interventions. Avoid claims beyond demonstrated capabilities (e.g., mind-reading). Include a data governance plan that limits usage and enables participant control.
          </p>

          <h3>Success Criteria</h3>
          <p>
            Reduction in calibration time by X% (quantified), cross-subject accuracy improvement vs. baseline, and clear reproducible code/data splits. The work can serve as a foundation for BCI prosthetics or assistive controllers, provided careful clinical partnership and safety protocols.
          </p>

        </div>
      </SectionContainer>
    </div>
  );
}
