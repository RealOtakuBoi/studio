'use server';

import { generateSuccessStorySummary } from '@/ai/flows/generate-success-story-summaries';
import { z } from 'zod';

const formSchema = z.object({
  projectReport: z.string().min(50, {
    message: 'Project report must be at least 50 characters.',
  }),
});

export async function generateSummaryAction(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    projectReport: formData.get('projectReport'),
  });

  if (!validatedFields.success) {
    return {
      summary: '',
      error: validatedFields.error.flatten().fieldErrors.projectReport?.join(', ') || 'Invalid input.',
    };
  }

  try {
    const result = await generateSuccessStorySummary({
      projectReport: validatedFields.data.projectReport,
    });

    if (!result.summary) {
      return {
        summary: '',
        error: 'Failed to generate summary. The AI model did not return a valid response.',
      };
    }

    return {
      summary: result.summary,
      error: '',
    };
  } catch (error) {
    console.error('Error generating summary:', error);
    return {
      summary: '',
      error: 'An unexpected error occurred while generating the summary. Please try again later.',
    };
  }
}
