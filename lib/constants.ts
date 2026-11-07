/**
 * Application-wide constants
 * Centralizes all magic strings and configuration values
 */

// Section IDs used for navigation
export const SECTION_IDS = {
  COMPARISON: 'comparison',
  EXPLANATION: 'explanation',
  USAGE: 'usage',
  QUIZ: 'quiz',
} as const

// LocalStorage keys
export const STORAGE_KEYS = {
  LANGUAGE: 'nohello-lang',
} as const

// Quiz difficulty levels
export const QUIZ_DIFFICULTY = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
} as const

export type QuizDifficultyType = typeof QUIZ_DIFFICULTY[keyof typeof QUIZ_DIFFICULTY]

// Language codes
export const LANGUAGE_CODES = {
  FRENCH: 'fr',
  ENGLISH: 'en',
  SPANISH: 'es',
  GERMAN: 'de',
  JAPANESE: 'ja',
} as const

// Confetti configurations
export const CONFETTI_CONFIG = {
  CORRECT_ANSWER: {
    particleCount: 50,
    spread: 60,
    origin: { y: 0.7 },
    colors: ['#22c55e', '#ffffff'] as string[],
  },
  PERFECT_SCORE: {
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  },
}

// External links
export const EXTERNAL_LINKS = {
  GITHUB_REPO: 'https://github.com/Kaysuto/no-hello',
  GITHUB_PROFILE: 'https://github.com/Kaysuto',
  AUTHOR_WEBSITE: 'https://kaysuto.fr',
  NOHELLO_NET: 'https://nohello.net',
  NEXTJS: 'https://nextjs.org',
  SHADCN: 'https://ui.shadcn.com',
} as const

// Toast durations (in milliseconds)
export const TOAST_DURATIONS = {
  SHORT: 3000,
  DEFAULT: 5000,
  LONG: 7000,
} as const
