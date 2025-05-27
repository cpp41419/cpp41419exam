'use server';

/**
 * @fileOverview System for monitoring and improving the quality of AI-generated responses.
 *
 * - improveResponseQuality - A function that handles the process of improving response quality through accuracy validation and content moderation.
 * - ImproveResponseQualityInput - The input type for the improveResponseQuality function.
 * - ImproveResponseQualityOutput - The return type for the improveResponseQuality function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveResponseQualityInputSchema = z.object({
  question: z.string().describe('The question that was asked.'),
  initialAnswer: z.string().describe('The initial AI-generated answer.'),
  feedback: z.string().optional().describe('Optional user feedback on the answer.'),
  isAccurate: z.boolean().optional().describe('Whether the answer was accurate.'),
  isAppropriate: z.boolean().optional().describe('Whether the answer was appropriate.'),
});
export type ImproveResponseQualityInput = z.infer<typeof ImproveResponseQualityInputSchema>;

const ImproveResponseQualityOutputSchema = z.object({
  revisedAnswer: z.string().describe('The revised AI-generated answer after quality control.'),
  accuracyValidation: z.string().describe('Summary of accuracy validation checks.'),
  contentModeration: z.string().describe('Summary of content moderation checks.'),
});
export type ImproveResponseQualityOutput = z.infer<typeof ImproveResponseQualityOutputSchema>;

export async function improveResponseQuality(input: ImproveResponseQualityInput): Promise<ImproveResponseQualityOutput> {
  return improveResponseQualityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveResponseQualityPrompt',
  input: {schema: ImproveResponseQualityInputSchema},
  output: {schema: ImproveResponseQualityOutputSchema},
  prompt: `You are an AI response quality control system. Your task is to improve the quality of AI-generated responses based on accuracy validation and content moderation.

  Evaluate the initial answer to the following question, considering any provided feedback:

  Question: {{{question}}}
  Initial Answer: {{{initialAnswer}}}
  Feedback: {{{feedback}}}

  Perform the following checks:

  1. Accuracy Validation: Verify the accuracy of the information provided in the initial answer. Identify any factual errors or inconsistencies.
  2. Content Moderation: Ensure the answer is appropriate, unbiased, and free from harmful content.

  Based on these checks, revise the answer to improve its quality. Provide a summary of the accuracy validation and content moderation checks performed.

  Output the revised answer, accuracy validation summary, and content moderation summary in the specified format.

  Revised Answer:
  {{revisedAnswer}}

  Accuracy Validation Summary:
  {{accuracyValidation}}

  Content Moderation Summary:
  {{contentModeration}}`,
});

const improveResponseQualityFlow = ai.defineFlow(
  {
    name: 'improveResponseQualityFlow',
    inputSchema: ImproveResponseQualityInputSchema,
    outputSchema: ImproveResponseQualityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
