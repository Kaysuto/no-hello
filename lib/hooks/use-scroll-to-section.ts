/**
 * useScrollToSection hook
 * Provides smooth scrolling to page sections by ID
 */

import { useCallback } from 'react'

/**
 * Hook for smooth scrolling to page sections
 * @returns Function to scroll to a section by ID
 *
 * @example
 * ```tsx
 * const scrollToSection = useScrollToSection()
 *
 * <button onClick={() => scrollToSection('quiz', () => console.log('Scrolled!'))}>
 *   Go to Quiz
 * </button>
 * ```
 */
export function useScrollToSection() {
  return useCallback((sectionId: string, onComplete?: () => void) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onComplete?.()
    }
  }, [])
}
