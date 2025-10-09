'use server';
/**
 * @fileOverview A portfolio chatbot AI flow using the Google Generative AI SDK directly.
 *
 * This file defines a function that acts as a portfolio assistant.
 * It's designed to answer questions about Bernard Fiagbenu's skills,
 * projects, and professional background based on a provided context.
 *
 * - portfolioChat - The main function that processes user messages.
 */

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, ChatSession } from "@google/generative-ai";
import { type PortfolioChatInput } from './chat-types';

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("GEMINI_API_KEY is not set.");
  // This will prevent the app from even starting if the key is missing.
  // A better approach for production might be to handle this more gracefully.
  throw new Error("AI API Key is not configured. Please set the GEMINI_API_KEY environment variable.");
}

const systemPrompt = `You are Bernard Fiagbenu's expert portfolio assistant. Your name is "Portfolio Pro".
Your purpose is to answer questions about Bernard's skills, experience, and projects in a friendly, concise, and professional manner.
Do not answer questions that are not related to Bernard's portfolio.
Here is the context about Bernard Fiagbenu. Use it to answer the user's questions.

---
**CONTEXT**

**Name:** Bernard Fiagbenu
**Role:** Computer Scientist
**Education:** Bachelor of Science in Computer Science from University of the People (Expected Graduation: 2025, GPA: 3.06).
**Experience:** Over 5 years in Software Development.
**Philosophy:** "Simplicity is the ultimate sophistication." - Strives for clarity and impact.
**Key Skills:**
- **Languages:** Python, Java, C++, JavaScript (ES6+), TypeScript, SQL, Go, Swift, Kotlin
- **Web Development:** React, Next.js, HTML5, CSS3, Tailwind CSS, Node.js, Express.js
- **Software Engineering:** Agile, Scrum, Git, GitHub, Design Patterns, SDLC
- **Databases:** MySQL, PostgreSQL, MongoDB, Firebase Firestore
- **AI/ML:** Core AI Concepts, NLP, Computer Vision Basics
- **Cloud/DevOps:** AWS, Azure, GCP concepts, Docker, CI/CD

**Projects:**
1.  **Stress Manager App:** A web app to help users manage stress. Tech: React, JavaScript.
2.  **Fav ico Generator:** A tool to generate favicons for websites. Tech: JavaScript, Netlify.
3.  **Google Play Console Image Formatter:** A tool to format images for the Google Play Store. Tech: JavaScript, Netlify.
4.  **Modern Quiz App:** An interactive quiz application. Tech: React, JavaScript, Netlify.

**Research Interests:**
Artificial General Intelligence (AGI), Quantum Computing, Brain-Computer Interfaces (BCIs), Nanotechnology, Fusion Energy, and many other future technologies. He has written a detailed article on the future use cases of Quantum Computing.
---

Based on the context above, answer the following question.
`;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-pro",
  systemInstruction: systemPrompt,
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ]
});

// We initialize the chat session here, outside the function, to maintain conversation history.
// However, for a stateless server function, it's better to start a new chat each time.
// The previous implementation was correct in its statelessness but failed in execution.
// Let's refine it to be stateless but correctly structured.

export async function portfolioChat(input: PortfolioChatInput): Promise<string> {
  try {
    // Start a new chat session for each request to keep it stateless from the server's perspective.
    // This is the most robust approach for Next.js Server Actions.
    const chat = model.startChat({
        history: [
             {
                role: "user",
                parts: [{ text: "Hello, introduce yourself briefly." }],
            },
            {
                role: "model",
                parts: [{ text: "Understood. I am Portfolio Pro, Bernard Fiagbenu's expert portfolio assistant. I will answer questions based on the provided context."}]
            }
        ],
        generationConfig: {
            maxOutputTokens: 1000,
        }
    });

    const result = await chat.sendMessage(input.message);
    const response = result.response;
    return response.text();

  } catch (error) {
    console.error("Gemini API error in portfolioChat:", error);
    // Re-throw the error so the client can handle it.
    // This prevents the application from crashing.
    throw new Error("Failed to get a response from the AI assistant. Please check server logs.");
  }
}
