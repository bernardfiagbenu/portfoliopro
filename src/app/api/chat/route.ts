
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// IMPORTANT! Set the runtime to edge
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

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await genAI.getGenerativeModel({ model: 'gemini-pro' })
      .generateContentStream({
        contents: [{ role: 'user', parts: [{ text: systemPrompt }] }, ...messages],
      });

    // Convert the response into a friendly text-stream
    const stream = GoogleGenerativeAIStream(result);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    // Enhanced logging to expose the real server error
    console.error('Full AI Stream Error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      cause: error.cause,
    });
    
    // Return a detailed error message as JSON
    return new Response(
      JSON.stringify({ 
        error: 'AI response failed', 
        details: error.message || 'Unknown error – check server logs' 
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
