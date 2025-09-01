/**
 * @fileOverview Shared types for the personalized learning path generator flow.
 */
import {z} from 'zod';

export const LearningPathInputSchema = z.object({
  topic: z
    .string()
    .min(3, { message: 'Please enter a topic with at least 3 characters.'})
    .describe('The topic the user wants to learn.'),
});
export type LearningPathInput = z.infer<typeof LearningPathInputSchema>;

const WeeklyPlanSchema = z.object({
    week: z.number().describe('The week number (1-4).'),
    goal: z.string().describe('The main learning objective for the week.'),
    topics: z.array(z.string()).describe('A list of key concepts and topics to study during the week.'),
    project: z.string().describe('A practical project or exercise to complete by the end of the week to solidify learning.'),
});

export const LearningPathOutputSchema = z.object({
  learningPath: z.array(WeeklyPlanSchema).length(4).describe('A list of 4 weekly plans that form the complete learning path.'),
});
export type LearningPathOutput = z.infer<typeof LearningPathOutputSchema>;
