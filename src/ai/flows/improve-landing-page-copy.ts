// src/ai/flows/improve-landing-page-copy.ts
'use server';
/**
 * @fileOverview An AI agent that suggests improvements to landing page copy.
 *
 * - improveLandingPageCopy - A function that handles the copy improvement process.
 * - ImproveLandingPageCopyInput - The input type for the improveLandingPageCopy function.
 * - ImproveLandingPageCopyOutput - The return type for the improveLandingPageCopy function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveLandingPageCopyInputSchema = z.object({
  heroTitle: z.string().describe('The main title of the hero section.'),
  heroSubtitle: z.string().describe('The subtitle of the hero section.'),
  featureDescriptions: z.array(z.string()).describe('Array of feature descriptions.'),
  callToAction: z.string().describe('The call to action text.'),
});
export type ImproveLandingPageCopyInput = z.infer<typeof ImproveLandingPageCopyInputSchema>;

const ImproveLandingPageCopyOutputSchema = z.object({
  improvedHeroTitle: z.string().describe('The improved main title of the hero section.'),
  improvedHeroSubtitle: z.string().describe('The improved subtitle of the hero section.'),
  improvedFeatureDescriptions: z.array(z.string()).describe('Array of improved feature descriptions.'),
  improvedCallToAction: z.string().describe('The improved call to action text.'),
});
export type ImproveLandingPageCopyOutput = z.infer<typeof ImproveLandingPageCopyOutputSchema>;

export async function improveLandingPageCopy(input: ImproveLandingPageCopyInput): Promise<ImproveLandingPageCopyOutput> {
  return improveLandingPageCopyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveLandingPageCopyPrompt',
  input: {schema: ImproveLandingPageCopyInputSchema},
  output: {schema: ImproveLandingPageCopyOutputSchema},
  prompt: `You are an award-winning digital creative agency specializing in landing page copy.

  Improve the following landing page copy to increase conversions. Focus on clarity, conciseness, and a compelling call to action.

  Original Hero Title: {{{heroTitle}}}
  Improved Hero Title:

  Original Hero Subtitle: {{{heroSubtitle}}}
  Improved Hero Subtitle:

  Original Feature Descriptions:
  {{#each featureDescriptions}}- {{{this}}}\n{{/each}}
  Improved Feature Descriptions:

  Original Call to Action: {{{callToAction}}}
  Improved Call to Action:`,
});

const improveLandingPageCopyFlow = ai.defineFlow(
  {
    name: 'improveLandingPageCopyFlow',
    inputSchema: ImproveLandingPageCopyInputSchema,
    outputSchema: ImproveLandingPageCopyOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
