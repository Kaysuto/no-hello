"use client"

/**
 * QuizGame Component - Main Quiz Orchestrator
 * Manages quiz state and coordinates sub-components
 */

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
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

  // Get all questions and filter by difficulty
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
    <Card className="w-full max-w-2xl mx-auto overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="p-8 relative z-10">
        {!difficulty ? (
          <DifficultySelector onSelectDifficulty={selectDifficulty} t={t} />
        ) : !showResult ? (
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">{t.quizTitle}</h3>
              <p className="text-muted-foreground">{t.quizDesc}</p>
              <ProgressIndicator total={questions.length} current={currentQuestion} />
            </div>

            <QuestionCard
              question={questions[currentQuestion]}
              questionIndex={currentQuestion}
              isAnswered={isAnswered}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
            />

            <div className="flex justify-between items-center pt-4">
              <Button
                onClick={() => setDifficulty(null)}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary"
              >
                {t.quizRetry}
              </Button>
              <Button onClick={nextQuestion} disabled={!isAnswered} className="gap-2">
                {currentQuestion < questions.length - 1 ? t.quizNext : t.quizFinish}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ) : (
          <ResultScreen score={score} total={questions.length} onReset={resetQuiz} t={t} />
        )}
      </div>
    </Card>
  )
}
