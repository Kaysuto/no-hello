/**
 * useActiveSection hook
 * Tracks which page section is currently in view, using IntersectionObserver.
 * Returns the id of the section whose top has crossed ~30% of the viewport.
 */

"use client"

import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: readonly string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    // Track each section's intersection ratio so we can pick the most-visible one.
    const visibility = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.intersectionRatio)
        }

        // Pick the section with the highest visibility right now.
        let bestId: string | null = null
        let bestRatio = 0
        for (const [id, ratio] of visibility) {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        }

        // Only set active if something is meaningfully on screen.
        setActiveId(bestRatio > 0 ? bestId : null)
      },
      {
        // Active zone = middle 40% of the viewport (top 30%, bottom 30% ignored).
        rootMargin: "-30% 0px -30% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
