/**
 * ResultScreen Component
 * Displays quiz completion results and score
 */

"use client"

import { motion } from "framer-motion"
import { RefreshCcw, Trophy, ThumbsUp, Frown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { quizResultAnimation } from "@/lib/animations"
import type { TranslationMap } from "@/components/translation-context"

interface ResultScreenProps {
  score: number
  total: number
  onReset: () => void
  t: TranslationMap
}

export function ResultScreen({ score, total, onReset, t }: ResultScreenProps) {
  const ratio = total > 0 ? score / total : 0
  const isPerfect = ratio === 1
  const isBad = ratio === 0

  const message = isPerfect ? t.quizPerfect : isBad ? t.quizBad : t.quizGood
  const Icon = isPerfect ? Trophy : isBad ? Frown : ThumbsUp
  const iconAccent = isPerfect ? "text-amber-500" : isBad ? "text-rose-500" : "text-primary"

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={quizResultAnimation}
      className="text-center space-y-10 py-8"
    >
      <div className="flex flex-col items-center gap-3">
        <Icon className={`h-14 w-14 ${iconAccent}`} strokeWidth={1.5} />
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
          {t.quizScore}
        </p>
        <div className="flex items-baseline gap-2">
          <span className="text-7xl md:text-8xl font-black tabular-nums bg-linear-to-br from-foreground to-foreground/50 bg-clip-text text-transparent">
            {score}
          </span>
          <span className="text-3xl text-muted-foreground tabular-nums">/ {total}</span>
        </div>
      </div>

      <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
        {message}
      </p>

      <Button onClick={onReset} variant="outline" size="lg" className="gap-2 rounded-full px-6">
        <RefreshCcw className="h-4 w-4" />
        {t.quizRetry}
      </Button>
    </motion.div>
  )
}
