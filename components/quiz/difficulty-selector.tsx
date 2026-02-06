/**
 * DifficultySelector Component
 * Displays difficulty level selection buttons for the quiz
 */

import { Button } from "@/components/ui/button"
import { QUIZ_DIFFICULTY } from "@/lib/constants"
import type { QuizDifficulty } from "@/lib/types"
import type { TranslationMap } from "@/components/translation-context"

interface DifficultySelectorProps {
  onSelectDifficulty: (difficulty: QuizDifficulty) => void
  t: TranslationMap
}

export function DifficultySelector({ onSelectDifficulty, t }: DifficultySelectorProps) {
  return (
    <div className="space-y-8 py-4">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">{t.quizDifficultyTitle}</h3>
        <p className="text-muted-foreground">{t.quizDesc}</p>
      </div>
      <div className="grid gap-4 max-w-sm mx-auto">
        <Button
          onClick={() => onSelectDifficulty(QUIZ_DIFFICULTY.EASY)}
          variant="outline"
          className="h-16 text-lg border-2 hover:border-primary hover:bg-primary/5 transition-all"
        >
          {t.quizEasy}
        </Button>
        <Button
          onClick={() => onSelectDifficulty(QUIZ_DIFFICULTY.MEDIUM)}
          variant="outline"
          className="h-16 text-lg border-2 hover:border-primary hover:bg-primary/5 transition-all"
        >
          {t.quizMedium}
        </Button>
        <Button
          onClick={() => onSelectDifficulty(QUIZ_DIFFICULTY.HARD)}
          variant="outline"
          className="h-16 text-lg border-2 hover:border-primary hover:bg-primary/5 transition-all"
        >
          {t.quizHard}
        </Button>
      </div>
    </div>
  )
}
