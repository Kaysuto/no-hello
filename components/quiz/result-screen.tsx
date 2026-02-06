/**
 * ResultScreen Component
 * Displays quiz completion results and score
 */

import { motion } from "framer-motion"
import { Trophy, RefreshCcw } from "lucide-react"
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
  const getScoreMessage = () => {
    if (score === total) return t.quizPerfect
    if (score === 0) return t.quizBad
    return t.quizGood
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={quizResultAnimation}
      className="text-center space-y-8 py-8"
    >
      <div className="inline-block p-6 rounded-full bg-primary/10 mb-4">
        <Trophy className="h-16 w-16 text-primary" />
      </div>

      <div className="space-y-2">
        <h3 className="text-3xl font-bold">
          {t.quizScore} {score} / {total}
        </h3>
        <p className="text-xl text-muted-foreground">{getScoreMessage()}</p>
      </div>

      <Button onClick={onReset} variant="outline" size="lg" className="gap-2">
        <RefreshCcw className="h-4 w-4" />
        {t.quizRetry}
      </Button>
    </motion.div>
  )
}
