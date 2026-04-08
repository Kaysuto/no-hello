/**
 * Application-wide constants
 * Centralizes all magic strings and configuration values
 */

// Section IDs used for navigation
export const SECTION_IDS = {
  EXPLANATION: 'explanation',
  QUIZ: 'quiz',
} as const

// LocalStorage keys
export const STORAGE_KEYS = {
  LANGUAGE: 'nohello-lang',
  TRANSLATION_CACHE: (lang: string) => `nohello-trans-${lang}`,
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

export const STANDARD_LANGUAGES = [
  LANGUAGE_CODES.FRENCH,
  LANGUAGE_CODES.ENGLISH,
  LANGUAGE_CODES.SPANISH,
  LANGUAGE_CODES.GERMAN,
  LANGUAGE_CODES.JAPANESE,
] as const

export type LanguageCode = typeof STANDARD_LANGUAGES[number]

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

// API endpoints
export const API_ROUTES = {
  TRANSLATE: '/api/translate',
} as const

// External links
export const EXTERNAL_LINKS = {
  GITHUB_REPO: 'https://github.com/Kaysuto/no-hello',
  GITHUB_PROFILE: 'https://github.com/Kaysuto',
  NOHELLO_NET: 'https://nohello.net',
  KOFI: 'https://ko-fi.com/kaysuto',
  NEXTJS: 'https://nextjs.org',
  SHADCN: 'https://ui.shadcn.com',
  GOOGLE_COOKIE_POLICY: 'https://policies.google.com/technologies/cookies',
} as const

// Toast durations (in milliseconds)
export const TOAST_DURATIONS = {
  SHORT: 3000,
  DEFAULT: 5000,
  LONG: 7000,
} as const
