'use server';
/**
 * @fileOverview An AI flow for brainstorming solutions to social problems.
 *
 * This file defines a Genkit flow that takes a social problem as input
 * and generates a structured list of potential solutions in various formats.
 *
 * - brainstormSolutions - The main function to call the flow.
 * - BrainstormInput - The input type for the flow.
 * - BrainstormOutput - The output type for the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

export const BrainstormInputSchema = z.object({
  problemDescription: z
    .string()
    .min(20)
    .describe('A detailed description of the social problem to be addressed.'),
});
export type BrainstormInput = z.infer<typeof BrainstormInputSchema>;

export const BrainstormOutputSchema = z.object({
  solutions: z.array(
    z.object({
      title: z.string().describe('A catchy title for the solution idea.'),
      format: z
        .enum([
          'AI-Powered Tool',
          'Web or Mobile App',
          'Policy Brief',
          'Community Project',
          'Data Analysis Report',
          'Startup Proposal',
        ])
        .describe('The format of the proposed solution.'),
      description: z
        .string()
        .describe(
          'A one-paragraph summary of the solution and its potential impact.'
        ),
      firstSteps: z
        .array(z.string())
        .describe(
          'A short, actionable list of 2-3 initial steps to get started.'
        ),
    })
  ).describe('A list of 3 to 5 diverse and innovative solution ideas.'),
});
export type BrainstormOutput = z.infer<typeof BrainstormOutputSchema>;

export async function brainstormSolutions(
  input: BrainstormInput
): Promise<BrainstormOutput> {
  return await solutionBrainstormFlow(input);
}

const prompt = ai.definePrompt({
  name: 'solutionBrainstormPrompt',
  input: {schema: BrainstormInputSchema},
  output: {schema: BrainstormOutputSchema},
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
