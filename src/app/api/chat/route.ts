
import { google } from '@ai-sdk/google';
import { streamText, type CoreMessage } from 'ai';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

export const runtime = 'edge';

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


export async function POST(req: NextRequest) {
  try {
    const { messages }: { messages: CoreMessage[] } = await req.json();

    const result = await streamText({
      model: google('gemini-2.5-flash'), // Exact stable ID – supports streaming/tools
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
      tools: {
        getPortfolio: {
          description: 'Fetch portfolio item details',
          parameters: z.object({ id: z.string() }),
          execute: async ({ id }) => ({ name: 'Sample Item', details: 'Streaming fixed with 2.5 Flash' }),
        },
      },
      maxSteps: 5,
      providerOptions: {
        google: {
          apiVersion: 'v1beta',
          generationConfig: { temperature: 0.7 },
        },
      },
    });

    return result.toAIStreamResponse({
      headers: {
        'Transfer-Encoding': 'chunked',
        'Connection': 'keep-alive',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error: any) {
    console.error('Google API Error:', {
      message: error.message,
      code: error.code || 'N/A',
      model: 'gemini-2.5-flash',
      details: error.cause?.message || 'Run ListModels curl for your account',
    });
    return NextResponse.json(
      { error: 'AI response failed', details: error.message || 'Not Found' },
      { status: 500 }
    );
  }
}
