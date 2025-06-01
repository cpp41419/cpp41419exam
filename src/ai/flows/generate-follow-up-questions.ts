
'use server';
/**
 * @fileOverview A flow for generating follow-up questions based on an initial question and answer.
 *
 * - generateFollowUpQuestions - A function that generates follow-up questions.
 * - GenerateFollowUpQuestionsInput - The input type for the generateFollowUpQuestions function.
 * - GenerateFollowUpQuestionsOutput - The return type for the generateFollowUpQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFollowUpQuestionsInputSchema = z.object({
  question: z.string().describe('The initial question asked by the user.'),
  answer: z.string().describe('The answer to the initial question.'),
});
export type GenerateFollowUpQuestionsInput = z.infer<typeof GenerateFollowUpQuestionsInputSchema>;

const GenerateFollowUpQuestionsOutputSchema = z.object({
  followUpQuestions: z.array(z.string()).describe('An array of follow-up questions related to the initial question and answer.'),
});
export type GenerateFollowUpQuestionsOutput = z.infer<typeof GenerateFollowUpQuestionsOutputSchema>;

export async function generateFollowUpQuestions(input: GenerateFollowUpQuestionsInput): Promise<GenerateFollowUpQuestionsOutput> {
  return generateFollowUpQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFollowUpQuestionsPrompt',
  input: {schema: GenerateFollowUpQuestionsInputSchema},
  output: {schema: GenerateFollowUpQuestionsOutputSchema},
  prompt: `Given the following question and answer, generate a list of 3 to 5 relevant follow-up questions that a user might ask to explore the topic further. Ensure the questions are distinct and encourage deeper understanding.

Question: {{{question}}}
Answer: {{{answer}}}

Please provide the follow-up questions in a list format, with each question as a separate item.`,
});

const generateFollowUpQuestionsFlow = ai.defineFlow(
  {
    name: 'generateFollowUpQuestionsFlow',
    inputSchema: GenerateFollowUpQuestionsInputSchema,
    outputSchema: GenerateFollowUpQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
