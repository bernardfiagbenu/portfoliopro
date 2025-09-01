
/**
 * @fileOverview Shared types for the interactive online safety scenario generator.
 */
import {z} from 'zod';

export const SafetyScenarioInputSchema = z.object({
  topic: z
    .string()
    .min(1, 'Please select a topic.')
    .describe('The online safety topic for the scenario (e.g., Cyberbullying).'),
});
export type SafetyScenarioInput = z.infer<typeof SafetyScenarioInputSchema>;

const ScenarioChoiceSchema = z.object({
  text: z.string().describe('The text for the multiple-choice option.'),
  feedback: z.string().describe('The feedback explaining the outcome of this choice.'),
  isCorrect: z.boolean().describe('Whether this option is the recommended, safest choice.'),
});

export const SafetyScenarioOutputSchema = z.object({
  scenario: z.string().describe('A description of the online safety situation the user is in.'),
  choices: z.array(ScenarioChoiceSchema).length(3).describe('An array of three possible actions the user can take.'),
});
export type SafetyScenarioOutput = z.infer<typeof SafetyScenarioOutputSchema>;
