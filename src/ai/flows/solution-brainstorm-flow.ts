'use server';
/**
 * @fileOverview An AI flow for brainstorming solutions to social problems.
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  BrainstormOutputSchema,
  type BrainstormInput,
  type BrainstormOutput,
} from './social-impact-types';

const apiKey = process.env.GEMINI_API_KEY;

export async function brainstormSolutions(
  input: BrainstormInput
): Promise<BrainstormOutput> {
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

  const prompt = `You are an expert social impact strategist and creative technologist.
Your task is to brainstorm innovative solutions for a given social problem.

The user will provide a description of a social problem. Based on this, you must generate a diverse list of 3-5 concrete solution ideas.
The solutions should cover a range of formats: technical prototypes, policy suggestions, data analysis projects, community initiatives, and startup ideas.
For each idea, provide a clear title, a description of the concept and its potential impact, and a few actionable first steps.

Problem Description: ${input.problemDescription}

Respond with a valid JSON object that conforms to this Zod schema:
${JSON.stringify(BrainstormOutputSchema.shape)}
`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const json = JSON.parse(text);
    return BrainstormOutputSchema.parse(json);
  } catch (error) {
    console.error("Error brainstorming solutions:", error);
    throw new Error('Failed to generate solutions.');
  }
}
