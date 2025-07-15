'use server';

import { improveLandingPageCopy, type ImproveLandingPageCopyInput, type ImproveLandingPageCopyOutput } from '@/ai/flows/improve-landing-page-copy';

interface ActionResult {
    success: boolean;
    data?: ImproveLandingPageCopyOutput;
    error?: string;
}

export async function getImprovedCopy(data: ImproveLandingPageCopyInput): Promise<ActionResult> {
    try {
        const result = await improveLandingPageCopy(data);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return { success: false, error: `Failed to get improved copy: ${errorMessage}` };
    }
}
