'use server';
/**
 * @fileOverview An AI flow for brainstorming solutions to social problems.
 *
 * This file defines a Genkit flow that takes a social problem as input
 * and generates a structured list of potential solutions in various formats.
 *
 * - brainstormSolutions - The main function to call the flow.
 */

import {ai} from '@/ai/genkit';
import {
  BrainstormInputSchema,
  BrainstormOutputSchema,
  type BrainstormInput,
  type BrainstormOutput,
} from './social-impact-types';

export async function brainstormSolutions(
  input: BrainstormInput
): Promise<BrainstormOutput> {
  return await solutionBrainstormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solutionBrainstormPrompt',
  input: {schema: BrainstormInputSchema},
  output: {schema: BrainstormOutputSchema},
  model: 'googleai/gemini-pro',
  prompt: `You are an expert social impact strategist and creative technologist.
Your task is to brainstorm innovative solutions for a given social problem.

The user will provide a description of a social problem. Based on this, you must generate a diverse list of 3-5 concrete solution ideas.
The solutions should cover a range of formats: technical prototypes, policy suggestions, data analysis projects, community initiatives, and startup ideas.
For each idea, provide a clear title, a description of the concept and its potential impact, and a few actionable first steps.

Problem Description: {{{problemDescription}}}
`,
});

const solutionBrainstormFlow = ai.defineFlow(
  {
    name: 'solutionBrainstormFlow',
    inputSchema: BrainstormInputSchema,
    outputSchema: BrainstormOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate solutions.');
    }
    return output;
  }
);
