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
    {
      id: 6,
      difficulty: QUIZ_DIFFICULTY.MEDIUM,
      question: t.q6Question,
      options: [
        { id: 1, text: t.q6Bad1, correct: false },
        { id: 2, text: t.q6Good, correct: true },
        { id: 3, text: t.q6Bad2, correct: false },
      ],
    },
    {
      id: 7,
      difficulty: QUIZ_DIFFICULTY.MEDIUM,
      question: t.q7Question,
      options: [
        { id: 1, text: t.q7Bad1, correct: false },
        { id: 2, text: t.q7Bad2, correct: false },
        { id: 3, text: t.q7Good, correct: true },
      ],
    },
    {
      id: 8,
      difficulty: QUIZ_DIFFICULTY.MEDIUM,
      question: t.q8Question,
      options: [
        { id: 1, text: t.q8Bad1, correct: false },
        { id: 2, text: t.q8Good, correct: true },
        { id: 3, text: t.q8Bad2, correct: false },
      ],
    },
    {
      id: 9,
      difficulty: QUIZ_DIFFICULTY.HARD,
      question: t.q9Question,
      options: [
        { id: 1, text: t.q9Bad1, correct: false },
        { id: 2, text: t.q9Bad2, correct: false },
        { id: 3, text: t.q9Good, correct: true },
      ],
    },
    {
      id: 10,
      difficulty: QUIZ_DIFFICULTY.HARD,
      question: t.q10Question,
      options: [
        { id: 1, text: t.q10Bad1, correct: false },
        { id: 2, text: t.q10Good, correct: true },
        { id: 3, text: t.q10Bad2, correct: false },
      ],
    },
    {
      id: 11,
      difficulty: QUIZ_DIFFICULTY.HARD,
      question: t.q11Question,
      options: [
        { id: 1, text: t.q11Bad1, correct: false },
        { id: 2, text: t.q11Bad2, correct: false },
        { id: 3, text: t.q11Good, correct: true },
      ],
    },
  ]
}
