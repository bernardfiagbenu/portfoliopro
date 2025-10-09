'use server';
/**
 * @fileOverview An AI flow for generating personalized learning paths.
 */

import { generate, googleAI } from 'genkit/ai';
import {
  LearningPathInputSchema,
  LearningPathOutputSchema,
  type LearningPathInput,
  type LearningPathOutput,
} from './learning-path-types';

export async function generateLearningPath(
  input: LearningPathInput
): Promise<LearningPathOutput> {
  const llmResponse = await generate({
    model: googleAI('gemini-pro'),
    prompt: `You are an expert curriculum designer and AI learning assistant.
Your task is to create a comprehensive, structured, 4-week learning path for a given topic.

The user will provide a topic they want to learn. Based on this, you must generate a detailed, week-by-week plan that includes:
- A clear weekly goal.
- A list of key topics to study for that week.
- A practical project or exercise to apply the learned concepts.

Generate a plan that is suitable for a motivated beginner.

Topic to learn: ${input.topic}
`,
    output: {
      schema: LearningPathOutputSchema,
    },
  });

  const output = llmResponse.output();
  if (!output) {
    throw new Error('Failed to generate a learning path.');
  }
  return output;
}
