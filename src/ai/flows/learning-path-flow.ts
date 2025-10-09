'use server';
/**
 * @fileOverview An AI flow for generating personalized learning paths.
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  LearningPathInputSchema,
  LearningPathOutputSchema,
  type LearningPathInput,
  type LearningPathOutput,
} from './learning-path-types';

const apiKey = process.env.GEMINI_API_KEY;

export async function generateLearningPath(
  input: LearningPathInput
): Promise<LearningPathOutput> {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set.");
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig: {
        responseMimeType: "application/json",
    }
  });
  
  const prompt = `You are an expert curriculum designer and AI learning assistant.
Your task is to create a comprehensive, structured, 4-week learning path for a given topic.

The user will provide a topic they want to learn. Based on this, you must generate a detailed, week-by-week plan that includes:
- A clear weekly goal.
- A list of key topics to study for that week.
- A practical project or exercise to apply the learned concepts.

Generate a plan that is suitable for a motivated beginner.

Topic to learn: ${input.topic}

Respond with a valid JSON object that conforms to this Zod schema:
${JSON.stringify(LearningPathOutputSchema.shape)}
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const json = JSON.parse(text);
    // Validate with Zod before returning
    return LearningPathOutputSchema.parse(json);
  } catch (error) {
    console.error("Error generating learning path:", error);
    throw new Error('Failed to generate a learning path.');
  }
}
