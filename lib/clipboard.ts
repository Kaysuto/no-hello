/**
 * Clipboard utility functions
 * Handles clipboard operations with user feedback via toast notifications
 */

import { toast } from 'sonner'

/**
 * Safely copy text to clipboard with user feedback
 * @param text - The text content to copy
 * @param successTitle - Toast title shown on success
 * @param successDescription - Optional detailed success message
 * @returns Promise resolving to true if successful, false otherwise
 *
 * @example
 * ```tsx
 * await copyToClipboard('Hello', 'Copied!', 'Message has been copied')
 * ```
 */
export async function copyToClipboard(
  text: string,
  successTitle: string,
  successDescription?: string
): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    toast.success(successTitle, {
      description: successDescription,
      duration: 3000,
    })
    return true
  } catch (error) {
    console.error('Failed to copy to clipboard', error)
    toast.error('Failed to copy', {
      description: 'Your browser may not support clipboard access.',
    })
    return false
  }
}
