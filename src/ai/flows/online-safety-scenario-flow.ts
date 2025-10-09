'use server';
/**
 * @fileOverview An AI flow for generating interactive online safety scenarios.
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  SafetyScenarioOutputSchema,
  type SafetyScenarioInput,
  type SafetyScenarioOutput,
} from './online-safety-types';

const apiKey = process.env.GEMINI_API_KEY;

export async function generateSafetyScenario(
  input: SafetyScenarioInput
): Promise<SafetyScenarioOutput> {
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

  const prompt = `You are an expert in online safety and digital literacy for young people.
Your task is to create a realistic, educational, and age-appropriate interactive scenario based on a given topic.

The user will select a topic (e.g., Cyberbullying, Online Scams, Disinformation). Based on this, you must generate:
1.  A concise, engaging **scenario description** that presents a relatable situation.
2.  Three distinct, plausible **multiple-choice options** for how the user could respond. One option should be the ideal response, one should be a common but less effective response, and one should be a poor or risky response.
3.  For each of the three options, provide a clear, non-judgmental **feedback** message. This feedback should explain the potential outcome or consequence of that choice, reinforcing the correct action and explaining the risks of others.

The tone should be supportive and educational, not alarming or preachy.

Topic for the scenario: ${input.topic}

Respond with a valid JSON object that conforms to this Zod schema:
${JSON.stringify(SafetyScenarioOutputSchema.shape)}
`;
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const json = JSON.parse(text);
    return SafetyScenarioOutputSchema.parse(json);
  } catch (error) {
    console.error("Error generating safety scenario:", error);
    throw new Error('Failed to generate an online safety scenario.');
  }
}
