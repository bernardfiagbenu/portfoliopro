'use server';
/**
 * @fileOverview An AI flow for simulating the impact of climate policies.
 */
import { generate, googleAI } from 'genkit/ai';
import {
  PolicyOutputSchema,
  type PolicyInput,
  type PolicyOutput,
} from './policy-simulator-types';

export async function simulatePolicy(
  input: PolicyInput
): Promise<PolicyOutput> {

  const llmResponse = await generate({
    model: googleAI('gemini-pro'),
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

Policy: ${input.policy}
Economic Context: ${input.context}
`,
    output: {
        schema: PolicyOutputSchema,
    },
  });

  const output = llmResponse.output();
  if (!output) {
    throw new Error('Failed to generate policy simulation.');
  }
  return output;
}
