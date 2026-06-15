"use client"

import { TranslationSelector } from "@/components/translation-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { MessagesSquare, BookOpen, CircleHelp } from "lucide-react"
import { useTranslation } from "@/components/translation-context"
import { SECTION_IDS } from "@/lib/constants"
import { useActiveSection } from "@/lib/hooks/use-active-section"

interface DesktopNavProps {
  onNavigate: (sectionId: string) => void
}

function Divider() {
  return <div className="h-4 w-px bg-border mx-1.5 hidden md:block" aria-hidden="true" />
}

const TRACKED_SECTIONS = [
  SECTION_IDS.COMPARISON,
  SECTION_IDS.EXPLANATION,
  SECTION_IDS.QUIZ,
] as const

export function DesktopNav({ onNavigate }: DesktopNavProps) {
  const { t } = useTranslation()
  const activeSection = useActiveSection(TRACKED_SECTIONS)

  const sections = [
    { id: SECTION_IDS.COMPARISON,  label: t.navExample, Icon: MessagesSquare },
    { id: SECTION_IDS.EXPLANATION, label: t.navConcept, Icon: BookOpen       },
    { id: SECTION_IDS.QUIZ,        label: t.navQuiz,    Icon: CircleHelp     },
  ]

  return (
    <>
      {/* Group 1 — Section navigation with sliding active pill */}
      <div className="hidden md:flex items-center gap-0.5">
        {sections.map((s) => {
          const isActive = activeSection === s.id
          const { Icon } = s
          return (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={`relative h-9 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="navbar-active-pill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg bg-muted"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon className="relative z-10 h-3.5 w-3.5 shrink-0" />
              <span className="relative z-10">{s.label}</span>
            </button>
          )
        })}
      </div>

      <Divider />

      {/* Group 2 — User preferences (theme, language) */}
      <div className="hidden md:flex items-center gap-0.5">
        <ThemeToggle />
        <TranslationSelector />
      </div>
    </>
  )
}
