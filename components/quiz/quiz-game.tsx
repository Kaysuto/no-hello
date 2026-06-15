"use client"

/**
 * QuizGame Component - Main Quiz Orchestrator
 * Manages quiz state and coordinates sub-components
 */

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, RotateCcw } from "lucide-react"
import { useTranslation } from "@/components/translation-context"
import { fireCorrectAnswerConfetti, firePerfectScoreConfetti } from "@/lib/confetti"
import type { QuizDifficulty } from "@/lib/types"
import { getAllQuizQuestions } from "@/lib/quiz-data"
import { DifficultySelector } from "./difficulty-selector"
import { QuestionCard } from "./question-card"
import { ProgressIndicator } from "./progress-indicator"
import { ResultScreen } from "./result-screen"

export function QuizGame() {
  const { t } = useTranslation()
  const [difficulty, setDifficulty] = useState<QuizDifficulty | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)

  const allQuestions = getAllQuizQuestions(t)
  const questions = difficulty ? allQuestions.filter((q) => q.difficulty === difficulty) : []

  const handleAnswer = (correct: boolean, index: number) => {
    if (isAnswered) return
    setSelectedAnswer(index)
    setIsAnswered(true)
    if (correct) {
      setScore((prev) => prev + 1)
      fireCorrectAnswerConfetti()
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setIsAnswered(false)
    } else {
      setShowResult(true)
      if (score === questions.length) {
        firePerfectScoreConfetti()
      }
    }
  }

  const resetQuiz = () => {
    setDifficulty(null)
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setIsAnswered(false)
  }

  const selectDifficulty = (level: QuizDifficulty) => {
    setDifficulty(level)
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setIsAnswered(false)
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Soft ambient glow behind the quiz — replaces the bordered card */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-6 -inset-y-10 -z-10 bg-primary/5 blur-3xl rounded-[3rem]"
      />

      {!difficulty ? (
        <DifficultySelector onSelectDifficulty={selectDifficulty} t={t} questions={allQuestions} />
      ) : !showResult ? (
        <div className="space-y-10">
          <ProgressIndicator total={questions.length} current={currentQuestion} />

          <QuestionCard
            question={questions[currentQuestion]}
            questionIndex={currentQuestion}
            isAnswered={isAnswered}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
          />

          <div className="flex justify-between items-center pt-2">
            <Button
              onClick={resetQuiz}
              variant="ghost"
              size="sm"
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              {t.quizRetry}
            </Button>
            <Button
              onClick={nextQuestion}
              disabled={!isAnswered}
              size="lg"
              className="gap-2 px-6"
            >
              {currentQuestion < questions.length - 1 ? t.quizNext : t.quizFinish}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <ResultScreen score={score} total={questions.length} onReset={resetQuiz} t={t} />
      )}
    </div>
  )
}
