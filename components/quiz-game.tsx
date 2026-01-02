"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, Trophy, RefreshCcw, ArrowRight } from "lucide-react"
import { useTranslation } from "@/components/translation-context"
import confetti from "canvas-confetti"

export function QuizGame() {
    const { t } = useTranslation()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
    const [isAnswered, setIsAnswered] = useState(false)

    // Construct questions from valid translation keys
    const questions = [
        {
            id: 1,
            question: t.q1Question,
            options: [
                { id: 1, text: t.q1Bad1, correct: false },
                { id: 2, text: t.q1Good, correct: true },
                { id: 3, text: t.q1Bad2, correct: false },
            ],
        },
        {
            id: 2,
            question: t.q2Question,
            options: [
                { id: 1, text: t.q2Good, correct: true },
                { id: 2, text: t.q2Bad1, correct: false },
                { id: 3, text: t.q2Bad2, correct: false },
            ],
        },
        {
            id: 3,
            question: t.q3Question,
            options: [
                { id: 1, text: t.q3Bad1, correct: false },
                { id: 2, text: t.q3Bad2, correct: false },
                { id: 3, text: t.q3Good, correct: true },
            ],
        },
    ]

    const handleAnswer = (correct: boolean, index: number) => {
        if (isAnswered) return
        setSelectedAnswer(index)
        setIsAnswered(true)
        if (correct) {
            setScore(score + 1)
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.7 },
                colors: ['#22c55e', '#ffffff']
            })
        }
    }

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setSelectedAnswer(null)
            setIsAnswered(false)
        } else {
            setShowResult(true)
            if (score === questions.length) {
                confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 }
                })
            }
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setScore(0)
        setShowResult(false)
        setSelectedAnswer(null)
        setIsAnswered(false)
    }

    return (
        <Card className="w-full max-w-2xl mx-auto overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />

            <div className="p-8 relative z-10">
                {!showResult ? (
                    <div className="space-y-8">
                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-bold">{t.quizTitle}</h3>
                            <p className="text-muted-foreground">{t.quizDesc}</p>
                            <div className="flex justify-center gap-1 mt-4">
                                {questions.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-2 w-12 rounded-full transition-colors ${idx === currentQuestion
                                            ? "bg-primary"
                                            : idx < currentQuestion
                                                ? "bg-primary/40"
                                                : "bg-secondary"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuestion}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h4 className="text-xl font-medium text-center">
                                    {questions[currentQuestion].question}
                                </h4>

                                <div className="grid gap-4">
                                    {questions[currentQuestion].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswer(option.correct, idx)}
                                            disabled={isAnswered}
                                            className={`
                                                w-full p-4 rounded-xl border-2 text-left transition-all relative overflow-hidden group
                                                ${isAnswered && option.correct
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

                        <div className="flex justify-end pt-4">
                            <Button
                                onClick={nextQuestion}
                                disabled={!isAnswered}
                                className="gap-2"
                            >
                                {currentQuestion < questions.length - 1 ? t.quizNext : t.quizFinish}
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center space-y-8 py-8"
                    >
                        <div className="inline-block p-6 rounded-full bg-primary/10 mb-4">
                            <Trophy className="h-16 w-16 text-primary" />
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-3xl font-bold">{t.quizScore} {score} / {questions.length}</h3>
                            <p className="text-xl text-muted-foreground">
                                {score === questions.length
                                    ? t.quizPerfect
                                    : score === 0
                                        ? t.quizBad
                                        : t.quizGood}
                            </p>
                        </div>

                        <Button onClick={resetQuiz} variant="outline" size="lg" className="gap-2">
                            <RefreshCcw className="h-4 w-4" />
                            {t.quizRetry}
                        </Button>
                    </motion.div>
                )}
            </div>
        </Card>
    )
}
