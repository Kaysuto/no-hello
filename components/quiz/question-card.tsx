/**
 * QuestionCard Component
 * Displays a quiz question with answer options
 */

"use client"

import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, XCircle } from "lucide-react"
import { slideInRight } from "@/lib/animations"
import type { QuizQuestion } from "@/lib/types"

interface QuestionCardProps {
  question: QuizQuestion
  questionIndex: number
  isAnswered: boolean
  selectedAnswer: number | null
  onAnswer: (correct: boolean, index: number) => void
}

export function QuestionCard({
  question,
  questionIndex,
  isAnswered,
  selectedAnswer,
  onAnswer,
}: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={questionIndex}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideInRight}
        className="space-y-8"
      >
        <h4 className="text-2xl md:text-3xl font-semibold leading-snug text-balance">
          {question.question}
        </h4>

        <div className="grid gap-3">
          {question.options.map((option, idx) => {
            const isCorrect = isAnswered && option.correct
            const isWrongPick = isAnswered && selectedAnswer === idx && !option.correct

            return (
              <motion.button
                key={idx}
                onClick={() => onAnswer(option.correct, idx)}
                disabled={isAnswered}
                whileHover={!isAnswered ? { x: 4 } : undefined}
                whileTap={!isAnswered ? { scale: 0.99 } : undefined}
                className={`
                  w-full p-5 rounded-2xl text-left transition-all relative
                  ${
                    isCorrect
                      ? "bg-emerald-500/10 ring-2 ring-emerald-500/40 text-emerald-700 dark:text-emerald-300"
                      : isWrongPick
                        ? "bg-rose-500/10 ring-2 ring-rose-500/40 text-rose-700 dark:text-rose-300 opacity-60"
                        : "bg-card/40 hover:bg-card ring-1 ring-border/40 hover:ring-ring/40 cursor-pointer disabled:cursor-default"
                  }
                `}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base md:text-[1.05rem] leading-relaxed">{option.text}</span>
                  {isCorrect && (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                  )}
                  {isWrongPick && (
                    <XCircle className="h-5 w-5 shrink-0 text-rose-500" />
                  )}
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
