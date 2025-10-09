'use server';
/**
 * @fileOverview An AI flow for brainstorming solutions to social problems.
 */

import { generate, googleAI } from 'genkit/ai';
import {
  BrainstormOutputSchema,
  type BrainstormInput,
  type BrainstormOutput,
} from './social-impact-types';

export async function brainstormSolutions(
  input: BrainstormInput
): Promise<BrainstormOutput> {
  const llmResponse = await generate({
    model: googleAI('gemini-pro'),
    prompt: `You are an expert social impact strategist and creative technologist.
Your task is to brainstorm innovative solutions for a given social problem.

The user will provide a description of a social problem. Based on this, you must generate a diverse list of 3-5 concrete solution ideas.
The solutions should cover a range of formats: technical prototypes, policy suggestions, data analysis projects, community initiatives, and startup ideas.
For each idea, provide a clear title, a description of the concept and its potential impact, and a few actionable first steps.

Problem Description: ${input.problemDescription}
`,
    output: {
      schema: BrainstormOutputSchema,
    },
  });

  const output = llmResponse.output();
  if (!output) {
    throw new Error('Failed to generate solutions.');
  }
  return output;
}
