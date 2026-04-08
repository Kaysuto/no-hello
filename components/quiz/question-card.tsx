/**
 * QuestionCard Component
 * Displays a quiz question with answer options
 */

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
        className="space-y-6"
      >
        <h4 className="text-xl font-medium text-center">{question.question}</h4>

        <div className="grid gap-4">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => onAnswer(option.correct, idx)}
              disabled={isAnswered}
              className={`
                w-full p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden group
                ${
                  isAnswered && option.correct
                    ? "border-green-500 bg-green-500/10 text-green-700 dark:text-green-300"
                    : isAnswered && selectedAnswer === idx && !option.correct
                      ? "border-red-500 bg-red-500/10 text-red-700 dark:text-red-300 opacity-50"
                      : "border-border hover:border-primary/50 hover:bg-secondary/50"
                }
              `}
            >
              <div className="flex items-center justify-between">
                <span>{option.text}</span>
                {isAnswered && option.correct && (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                )}
                {isAnswered && selectedAnswer === idx && !option.correct && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
