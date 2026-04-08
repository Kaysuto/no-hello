/**
 * useMounted hook
 * Tracks whether a component has been mounted (client-side only)
 * Useful for avoiding hydration mismatches in SSR
 */

import { useState, useEffect } from 'react'

/**
 * Hook that returns true once the component has mounted on the client
 * Helps prevent hydration errors when rendering client-only content
 *
 * @returns boolean - true if component is mounted, false otherwise
 *
 * @example
 * ```tsx
 * const mounted = useMounted()
 *
 * if (!mounted) {
 *   return <div>Loading...</div>
 * }
 *
 * return <ClientOnlyComponent />
 * ```
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  return mounted
}
