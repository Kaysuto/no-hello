/**
 * ProgressIndicator Component
 * Displays quiz progress as a series of bars
 */

interface ProgressIndicatorProps {
  total: number
  current: number
}

export function ProgressIndicator({ total, current }: ProgressIndicatorProps) {
  return (
    <div className="flex justify-center gap-1 mt-4">
      {Array.from({ length: total }).map((_, idx) => (
        <div
          key={idx}
          className={`h-2 w-12 rounded-full transition-colors ${
            idx === current
              ? "bg-primary"
              : idx < current
                ? "bg-primary/40"
                : "bg-secondary"
          }`}
        />
      ))}
    </div>
  )
}
