
/**
 * @fileOverview Shared types for the climate policy simulator flow.
 */
import {z} from 'zod';

export const PolicyInputSchema = z.object({
  policy: z
    .string()
    .describe('The climate policy to be simulated.'),
  context: z
    .string()
    .describe('The economic context in which the policy is implemented.'),
});
export type PolicyInput = z.infer<typeof PolicyInputSchema>;

export const PolicyOutputSchema = z.object({
  summary: z.string().describe('A brief, one-paragraph summary of the most likely outcomes of implementing the policy in the given context.'),
  metrics: z.object({
    emissionsReduction: z.number().min(-100).max(100).describe('Estimated percentage change in GHG emissions over 10 years.'),
    gdpImpact: z.number().min(-20).max(20).describe('Estimated percentage point change in annual GDP growth over 10 years.'),
    socialEquity: z.number().min(1).max(10).describe('A score from 1 (very regressive) to 10 (very progressive) indicating the policy\'s impact on social equity.'),
  }),
  pros: z.array(z.string()).describe('A list of 2-3 key potential benefits or positive outcomes of the policy.'),
  cons: z.array(z.string()).describe('A list of 2-3 key potential drawbacks or negative outcomes of the policy.'),
  risks: z.array(z.string()).describe('A list of 2-3 major risks or implementation challenges to consider.'),
});
export type PolicyOutput = z.infer<typeof PolicyOutputSchema>;
