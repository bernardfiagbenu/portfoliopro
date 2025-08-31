'use server';
/**
 * @fileOverview An AI flow for generating captions for images.
 *
 * This file defines a Genkit flow that takes an image and generates a
 * descriptive caption for it using a multimodal AI model.
 *
 * - generateCaption - The main function that processes an image data URI.
 * - GenerateCaptionInput - The input type for the generateCaption function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateCaptionInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo to be captioned, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateCaptionInput = z.infer<typeof GenerateCaptionInputSchema>;


export async function generateCaption(input: GenerateCaptionInput): Promise<string> {
    const text = await captionFlow(input);
    return text;
}

const prompt = ai.definePrompt({
  name: 'captionPrompt',
  input: {schema: GenerateCaptionInputSchema},
  prompt: [
    {text: 'Describe this image in a concise and engaging way for a portfolio website.'},
    {media: {url: '{{{photoDataUri}}}'}},
  ],
});

const captionFlow = ai.defineFlow(
  {
    name: 'captionFlow',
    inputSchema: GenerateCaptionInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const response = await ai.generate({
        prompt: prompt.prompt,
        input
    });
    return response.text;
  }
);
