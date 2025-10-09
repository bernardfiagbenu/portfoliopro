'use server';
/**
 * @fileOverview An AI flow for generating interactive online safety scenarios.
 */
import { generate, googleAI } from 'genkit/ai';
import {
  SafetyScenarioOutputSchema,
  type SafetyScenarioInput,
  type SafetyScenarioOutput,
} from './online-safety-types';

export async function generateSafetyScenario(
  input: SafetyScenarioInput
): Promise<SafetyScenarioOutput> {
  const llmResponse = await generate({
    model: googleAI('gemini-pro'),
    prompt: `You are an expert in online safety and digital literacy for young people.
Your task is to create a realistic, educational, and age-appropriate interactive scenario based on a given topic.

The user will select a topic (e.g., Cyberbullying, Online Scams, Disinformation). Based on this, you must generate:
1.  A concise, engaging **scenario description** that presents a relatable situation.
2.  Three distinct, plausible **multiple-choice options** for how the user could respond. One option should be the ideal response, one should be a common but less effective response, and one should be a poor or risky response.
3.  For each of the three options, provide a clear, non-judgmental **feedback** message. This feedback should explain the potential outcome or consequence of that choice, reinforcing the correct action and explaining the risks of others.

The tone should be supportive and educational, not alarming or preachy.

Topic for the scenario: ${input.topic}
`,
    output: {
      schema: SafetyScenarioOutputSchema,
    },
  });

  const output = llmResponse.output();
  if (!output) {
    throw new Error('Failed to generate an online safety scenario.');
  }
  return output;
}
