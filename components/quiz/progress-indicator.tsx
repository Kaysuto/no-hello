/**
 * ProgressIndicator Component
 * Smooth progress bar with a counter, replacing the dot bars
 */

"use client"

import { motion } from "framer-motion"

interface ProgressIndicatorProps {
  total: number
  current: number
}

export function ProgressIndicator({ total, current }: ProgressIndicatorProps) {
  const percent = total > 0 ? ((current + 1) / total) * 100 : 0

  return (
    <div className="flex items-center gap-4">
      <span className="text-xs font-medium text-muted-foreground tabular-nums uppercase tracking-wider shrink-0">
        {current + 1} / {total}
      </span>
      <div className="flex-1 h-1 rounded-full bg-secondary/60 overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}
