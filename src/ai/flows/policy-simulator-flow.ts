'use server';
/**
 * @fileOverview An AI flow for simulating the impact of climate policies.
 *
 * This file defines a Genkit flow that takes a climate policy and an
 * economic context as input, and generates a structured analysis of its
 * potential impacts on emissions, economy, and social equity.
 *
 * - simulatePolicy - The main function to call the flow.
 */

import {ai} from '@/ai/genkit';
import {
  PolicyInputSchema,
  PolicyOutputSchema,
  type PolicyInput,
  type PolicyOutput,
} from './policy-simulator-types';

export async function simulatePolicy(
  input: PolicyInput
): Promise<PolicyOutput> {
  return await policySimulatorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'policySimulatorPrompt',
  input: {schema: PolicyInputSchema},
  output: {schema: PolicyOutputSchema},
  model: 'googleai/gemini-1.5-flash-001',
  prompt: `You are an expert climate policy analyst and economist.
Your task is to provide a high-level, structured simulation of the impacts of a specific climate policy within a given economic context.

The user will provide:
1.  A climate policy to be implemented.
2.  The economic context (e.g., Developed Nation - Services-based, Developing Nation - Industrializing, etc.).

Based on this input, you must generate a simulated analysis covering the following areas:
- A brief summary of the expected outcomes.
- Quantitative estimates for key metrics (Emissions Reduction, GDP Impact, Social Equity Score). These should be realistic but illustrative.
- A qualitative breakdown of the pros and cons.
- A list of key considerations and potential risks.

Policy: {{{policy}}}
Economic Context: {{{context}}}
`,
});

const policySimulatorFlow = ai.defineFlow(
  {
    name: 'policySimulatorFlow',
    inputSchema: PolicyInputSchema,
    outputSchema: PolicyOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate policy simulation.');
    }
    return output;
  }
);
