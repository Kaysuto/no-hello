"use client"

import { TranslationSelector } from "@/components/translation-selector"
import { ShareButton } from "@/components/share-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExternalLink } from "@/components/external-link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useTranslation } from "@/components/translation-context"
import { SECTION_IDS, EXTERNAL_LINKS } from "@/lib/constants"
import { useActiveSection } from "@/lib/hooks/use-active-section"

const navLinkClass = "text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"

interface DesktopNavProps {
  onNavigate: (sectionId: string) => void
}

function Divider() {
  return <div className="h-4 w-px bg-border mx-1.5 hidden md:block" aria-hidden="true" />
}

const TRACKED_SECTIONS = [
  SECTION_IDS.COMPARISON,
  SECTION_IDS.EXPLANATION,
  SECTION_IDS.USAGE,
  SECTION_IDS.QUIZ,
] as const

export function DesktopNav({ onNavigate }: DesktopNavProps) {
  const { t } = useTranslation()
  const activeSection = useActiveSection(TRACKED_SECTIONS)

  const sections = [
    { id: SECTION_IDS.COMPARISON,  label: t.navExample },
    { id: SECTION_IDS.EXPLANATION, label: t.navConcept },
    { id: SECTION_IDS.USAGE,       label: t.navUsage   },
    { id: SECTION_IDS.QUIZ,        label: t.navQuiz    },
  ]

  return (
    <>
      {/* Group 1 — Section navigation with sliding active pill */}
      <div className="hidden md:flex items-center gap-0.5">
        {sections.map((s) => {
          const isActive = activeSection === s.id
          return (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={`relative h-9 px-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {/* The pill that slides between active items */}
              {isActive && (
                <motion.span
                  layoutId="navbar-active-pill"
                  aria-hidden="true"
                  className="absolute inset-0 rounded-lg bg-muted"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
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

      <Divider />

      {/* Group 3 — Actions and external links */}
      <div className="hidden md:flex items-center gap-0.5">
        <ShareButton showLabel={false} />
        <Button
          variant="ghost"
          size="icon"
          className={`h-9 w-9 rounded-lg ${navLinkClass}`}
          asChild
        >
          <ExternalLink href={EXTERNAL_LINKS.GITHUB_REPO} label="GitHub/Kaysuto">
            <motion.div
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Github className="h-4 w-4" />
            </motion.div>
            <span className="sr-only">GitHub</span>
          </ExternalLink>
        </Button>
      </div>
    </>
  )
}
