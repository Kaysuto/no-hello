/**
 * Quiz utility functions
 * Helper functions for quiz game logic
 */

import type { QuizQuestion, QuizDifficulty } from './types'
import type { TranslationMap } from '@/components/translation-context'

/**
 * Filter questions by difficulty level
 * @param questions - Array of all quiz questions
 * @param difficulty - The difficulty level to filter by
 * @returns Filtered array of questions matching the difficulty
 */
export function filterQuestionsByDifficulty(
  questions: QuizQuestion[],
  difficulty: QuizDifficulty | null
): QuizQuestion[] {
  return difficulty ? questions.filter(q => q.difficulty === difficulty) : []
}

/**
 * Get appropriate score message based on performance
 * @param score - Number of correct answers
 * @param total - Total number of questions
 * @param t - Translation map for localized messages
 * @returns Localized message string for the score
 */
export function calculateScoreMessage(
  score: number,
  total: number,
  t: TranslationMap
): string {
  if (score === total) return t.quizPerfect
  if (score === 0) return t.quizBad
  return t.quizGood
}

/**
 * Calculate progress percentage
 * @param current - Current question index
 * @param total - Total number of questions
 * @returns Progress as a percentage (0-100)
 */
export function calculateProgress(current: number, total: number): number {
  return total > 0 ? Math.round((current / total) * 100) : 0
}
