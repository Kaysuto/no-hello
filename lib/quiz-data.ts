/**
 * Quiz questions data
 * Centralized quiz questions configuration
 */

import type { TranslationMap } from '@/components/translation-context'
import { QUIZ_DIFFICULTY } from './constants'
import type { QuizQuestion } from './types'

/**
 * Get all quiz questions with translations
 * @param t - Translation map
 * @returns Array of all quiz questions
 */
export function getAllQuizQuestions(t: TranslationMap): QuizQuestion[] {
  return [
    {
      id: 1,
      difficulty: QUIZ_DIFFICULTY.EASY,
      question: t.q1Question,
      options: [
        { id: 1, text: t.q1Bad1, correct: false },
        { id: 2, text: t.q1Good, correct: true },
        { id: 3, text: t.q1Bad2, correct: false },
      ],
    },
    {
      id: 2,
      difficulty: QUIZ_DIFFICULTY.MEDIUM,
      question: t.q2Question,
      options: [
        { id: 1, text: t.q2Good, correct: true },
        { id: 2, text: t.q2Bad1, correct: false },
        { id: 3, text: t.q2Bad2, correct: false },
      ],
    },
    {
      id: 3,
      difficulty: QUIZ_DIFFICULTY.HARD,
      question: t.q3Question,
      options: [
        { id: 1, text: t.q3Bad1, correct: false },
        { id: 2, text: t.q3Bad2, correct: false },
        { id: 3, text: t.q3Good, correct: true },
      ],
    },
    {
      id: 4,
      difficulty: QUIZ_DIFFICULTY.EASY,
      question: t.q4Question,
      options: [
        { id: 1, text: t.q4Bad1, correct: false },
        { id: 2, text: t.q4Bad2, correct: false },
        { id: 3, text: t.q4Good, correct: true },
      ],
    },
    {
      id: 5,
      difficulty: QUIZ_DIFFICULTY.MEDIUM,
      question: t.q5Question,
      options: [
        { id: 1, text: t.q5Bad1, correct: false },
        { id: 2, text: t.q5Bad2, correct: false },
        { id: 3, text: t.q5Good, correct: true },
      ],
    },
  ]
}
