'use server';
/**
 * @fileOverview An AI flow for generating personalized learning paths.
 *
 * This file defines a Genkit flow that takes a learning topic as input
 * and generates a structured, week-by-week learning plan.
 *
 * - generateLearningPath - The main function to call the flow.
 */

import {ai} from '@/ai/genkit';
import {
  LearningPathInputSchema,
  LearningPathOutputSchema,
  type LearningPathInput,
  type LearningPathOutput,
} from './learning-path-types';

export async function generateLearningPath(
  input: LearningPathInput
): Promise<LearningPathOutput> {
  return await learningPathFlow(input);
}

const prompt = ai.definePrompt({
  name: 'learningPathPrompt',
  input: {schema: LearningPathInputSchema},
  output: {schema: LearningPathOutputSchema},
  model: 'googleai/gemini-1.5-flash-latest',
  prompt: `You are an expert curriculum designer and AI learning assistant.
Your task is to create a comprehensive, structured, 4-week learning path for a given topic.

The user will provide a topic they want to learn. Based on this, you must generate a detailed, week-by-week plan that includes:
- A clear weekly goal.
- A list of key topics to study for that week.
- A practical project or exercise to apply the learned concepts.

Generate a plan that is suitable for a motivated beginner.

Topic to learn: {{{topic}}}
`,
});

const learningPathFlow = ai.defineFlow(
  {
    name: 'learningPathFlow',
    inputSchema: LearningPathInputSchema,
    outputSchema: LearningPathOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate a learning path.');
    }
    return output;
  }
);
