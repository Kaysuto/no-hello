/**
 * Shared TypeScript type definitions
 */

import type { TranslationMap } from '@/components/translation-context'

// Quiz types
export type QuizDifficulty = 'easy' | 'medium' | 'hard'

export interface QuizOption {
  id: number
  text: string
  correct: boolean
}

export interface QuizQuestion {
  id: number
  difficulty: QuizDifficulty
  question: string
  options: QuizOption[]
}

// Translation types
export interface TranslationResponse {
  translatedContent?: TranslationMap
  error?: string
  details?: string
}

export interface TranslationAPIRequest {
  content: TranslationMap
  targetLanguage: string
}

// Storage types
export interface StorageAdapter {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
}
