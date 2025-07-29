
import { z } from 'zod';

/**
 * @fileOverview Shared types and schemas for the portfolio chat flow.
 */

export const PortfolioChatInputSchema = z.object({
  message: z.string().describe("The user's message or question."),
});
export type PortfolioChatInput = z.infer<typeof PortfolioChatInputSchema>;
