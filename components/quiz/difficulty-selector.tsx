/**
 * DifficultySelector Component
 * Game-like level select grid, replacing the stacked outline buttons
 */

"use client"

import { motion } from "framer-motion"
import { Sparkles, Flame, Skull } from "lucide-react"
import { QUIZ_DIFFICULTY } from "@/lib/constants"
import type { QuizDifficulty, QuizQuestion } from "@/lib/types"
import type { TranslationMap } from "@/components/translation-context"

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: QuizDifficulty) => void
  t: TranslationMap
  questions: QuizQuestion[]
}

type Level = {
  value: QuizDifficulty
  label: string
  count: number
  icon: typeof Sparkles
  accent: string
  bgFrom: string
  bgTo: string
  ring: string
}

export function DifficultySelector({ onSelectDifficulty, t, questions }: DifficultySelectorProps) {
  const counts = {
    easy:   questions.filter((q) => q.difficulty === QUIZ_DIFFICULTY.EASY).length,
    medium: questions.filter((q) => q.difficulty === QUIZ_DIFFICULTY.MEDIUM).length,
    hard:   questions.filter((q) => q.difficulty === QUIZ_DIFFICULTY.HARD).length,
  }

  const levels: Level[] = [
    {
      value: QUIZ_DIFFICULTY.EASY,
      label: t.quizEasy,
      count: counts.easy,
      icon: Sparkles,
      accent: "text-emerald-500",
      bgFrom: "from-emerald-500/10",
      bgTo: "to-emerald-500/0",
      ring: "hover:ring-emerald-500/40",
    },
    {
      value: QUIZ_DIFFICULTY.MEDIUM,
      label: t.quizMedium,
      count: counts.medium,
      icon: Flame,
      accent: "text-amber-500",
      bgFrom: "from-amber-500/10",
      bgTo: "to-amber-500/0",
      ring: "hover:ring-amber-500/40",
    },
    {
      value: QUIZ_DIFFICULTY.HARD,
      label: t.quizHard,
      count: counts.hard,
      icon: Skull,
      accent: "text-rose-500",
      bgFrom: "from-rose-500/10",
      bgTo: "to-rose-500/0",
      ring: "hover:ring-rose-500/40",
    },
  ]

  return (
    <div className="space-y-10 py-2">
      <div className="text-center space-y-3">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">{t.quizDifficultyTitle}</h3>
        <p className="text-muted-foreground text-base md:text-lg">{t.quizDesc}</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {levels.map((level, idx) => {
          const Icon = level.icon
          return (
            <motion.button
              key={level.value}
              onClick={() => onSelectDifficulty(level.value)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative p-6 rounded-2xl text-left bg-gradient-to-br ${level.bgFrom} ${level.bgTo} ring-1 ring-border/40 ${level.ring} hover:ring-2 transition-all cursor-pointer overflow-hidden`}
            >
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background/60 backdrop-blur-sm ${level.accent}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-xl font-bold">{level.label}</span>
                <span className="text-xs text-muted-foreground tabular-nums">×{level.count}</span>
              </div>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
