'use server';
/**
 * @fileOverview A flow for generating concise summaries of success stories from longer project reports.
 *
 * - generateSuccessStorySummary - A function that generates a concise summary of a success story.
 * - GenerateSuccessStorySummaryInput - The input type for the generateSuccessStorySummary function.
 * - GenerateSuccessStorySummaryOutput - The return type for the generateSuccessStorySummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSuccessStorySummaryInputSchema = z.object({
  projectReport: z
    .string()
    .describe('The full text of the project report or success story.'),
});
export type GenerateSuccessStorySummaryInput = z.infer<typeof GenerateSuccessStorySummaryInputSchema>;

const GenerateSuccessStorySummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise, one-sentence summary of the success story, suitable for social media or website content.'
    ),
});
export type GenerateSuccessStorySummaryOutput = z.infer<typeof GenerateSuccessStorySummaryOutputSchema>;

export async function generateSuccessStorySummary(
  input: GenerateSuccessStorySummaryInput
): Promise<GenerateSuccessStorySummaryOutput> {
  return generateSuccessStorySummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSuccessStorySummaryPrompt',
  input: {schema: GenerateSuccessStorySummaryInputSchema},
  output: {schema: GenerateSuccessStorySummaryOutputSchema},
  prompt: `You are a content manager tasked with creating engaging social media posts and website content.

  Your goal is to generate a concise, one-sentence summary of a success story from a longer project report.

  Project Report: {{{projectReport}}}

  Summary: `,
});

const generateSuccessStorySummaryFlow = ai.defineFlow(
  {
    name: 'generateSuccessStorySummaryFlow',
    inputSchema: GenerateSuccessStorySummaryInputSchema,
    outputSchema: GenerateSuccessStorySummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
