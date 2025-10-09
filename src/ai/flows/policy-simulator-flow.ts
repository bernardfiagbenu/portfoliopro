'use server';
/**
 * @fileOverview An AI flow for simulating the impact of climate policies.
 */
import { GoogleGenerativeAI } from "@google/generative-ai";
import {
  PolicyOutputSchema,
  type PolicyInput,
  type PolicyOutput,
} from './policy-simulator-types';

const apiKey = process.env.GEMINI_API_KEY;

export async function simulatePolicy(
  input: PolicyInput
): Promise<PolicyOutput> {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set.");
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const prompt = `You are an expert climate policy analyst and economist.
Your task is to provide a high-level, structured simulation of the impacts of a specific climate policy within a given economic context.

The user will provide:
1.  A climate policy to be implemented.
2.  The economic context (e.g., Developed Nation - Services-based, Developing Nation - Industrializing, etc.).

Based on this input, you must generate a simulated analysis covering the following areas:
- A brief summary of the expected outcomes.
- Quantitative estimates for key metrics (Emissions Reduction, GDP Impact, Social Equity Score). These should be realistic but illustrative.
- A qualitative breakdown of the pros and cons.
- A list of key considerations and potential risks.

Policy: ${input.policy}
Economic Context: ${input.context}

Respond ONLY with a valid JSON object that conforms to this Zod schema:
${JSON.stringify(PolicyOutputSchema.shape)}
`;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig: {
          responseMimeType: "application/json",
      }
    });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const json = JSON.parse(text);
    return PolicyOutputSchema.parse(json);
  } catch (error) {
    console.error("Error generating policy simulation:", error);
    throw new Error('Failed to generate policy simulation.');
  }
}
