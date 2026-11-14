/**
 * Shared TypeScript type definitions
 */

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

// Storage types
export interface StorageAdapter {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
}
