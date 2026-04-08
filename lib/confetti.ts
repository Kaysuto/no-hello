/**
 * Confetti utility functions
 * Wrappers around canvas-confetti with preset configurations
 */

import confetti from 'canvas-confetti'
import { CONFETTI_CONFIG } from './constants'

/**
 * Fire confetti animation for a correct quiz answer
 */
export function fireCorrectAnswerConfetti(): void {
  confetti(CONFETTI_CONFIG.CORRECT_ANSWER)
}

/**
 * Fire confetti animation for a perfect quiz score
 */
export function firePerfectScoreConfetti(): void {
  confetti(CONFETTI_CONFIG.PERFECT_SCORE)
}
