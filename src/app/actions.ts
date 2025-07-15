'use server';

import * as z from 'zod';

const copyImprovementSchema = z.object({
  originalCopy: z.string().min(1, 'Original copy is required'),
  context: z.string().optional(),
  tone: z.enum(['professional', 'casual', 'persuasive', 'friendly']).optional(),
});

export async function getImprovedCopy(input: z.infer<typeof copyImprovementSchema>) {
  try {
    const { originalCopy, context = '', tone = 'professional' } = copyImprovementSchema.parse(input);
    
    // For now, return a simple improved version
    // In production, this would use an AI service like Gemini
    return {
      success: true,
      improvedCopy: `${originalCopy} (Improved with ${tone} tone)`,
    };
  } catch (error) {
    console.error('Error improving copy:', error);
    return {
      success: false,
      error: 'Failed to improve copy. Please try again.',
      improvedCopy: input.originalCopy,
    };
  }
}