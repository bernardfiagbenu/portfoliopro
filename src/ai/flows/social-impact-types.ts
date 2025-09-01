/**
 * @fileOverview Shared types for the social impact brainstorming flow.
 */
import {z} from 'zod';

export const BrainstormInputSchema = z.object({
  problemDescription: z
    .string()
    .min(20, { message: 'Please describe the problem in at least 20 characters.'})
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
