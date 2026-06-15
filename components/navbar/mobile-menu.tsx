import { TranslationSelector } from "@/components/translation-selector"
import { ShareButton } from "@/components/share-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ExternalLink } from "@/components/external-link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Github, Menu, Globe, BookOpen, CircleHelp, MessagesSquare } from "lucide-react"
import { useTranslation } from "@/components/translation-context"
import { SECTION_IDS, EXTERNAL_LINKS } from "@/lib/constants"
import { useActiveSection } from "@/lib/hooks/use-active-section"

const TRACKED_SECTIONS = [
  SECTION_IDS.COMPARISON,
  SECTION_IDS.EXPLANATION,
  SECTION_IDS.QUIZ,
] as const

const navLinkClass = "text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
const sectionLabelClass = "px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider"

interface MobileMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onNavigate: (sectionId: string) => void
}

export function MobileMenu({ open, onOpenChange, onNavigate }: MobileMenuProps) {
  const { t } = useTranslation()
  const activeSection = useActiveSection(TRACKED_SECTIONS)

  const sections = [
    { id: SECTION_IDS.COMPARISON,  label: t.navExample, Icon: MessagesSquare },
    { id: SECTION_IDS.EXPLANATION, label: t.navConcept, Icon: BookOpen       },
    { id: SECTION_IDS.QUIZ,        label: t.navQuiz,    Icon: CircleHelp     },
  ]

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-75 sm:w-100 pt-12 pb-6">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <div className="flex flex-col h-full">
            {/* Group 1 — Section navigation */}
            <div className="flex flex-col gap-1">
              <div className={sectionLabelClass}>{t.menuNavigation}</div>
              {sections.map((s) => {
                const { Icon } = s
                const isActive = activeSection === s.id
                return (
                  <Button
                    key={s.id}
                    variant="ghost"
                    onClick={() => onNavigate(s.id)}
                    className={`justify-start text-base h-12 px-4 w-full gap-3 transition-colors ${
                      isActive ? "bg-muted text-foreground" : ""
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? "opacity-100 text-primary" : "opacity-70"}`} />
                    {s.label}
                  </Button>
                )
              })}
            </div>

            {/* Group 2 — User preferences */}
            <div className="mt-6 flex flex-col gap-1">
              <div className={sectionLabelClass}>{t.menuPreferences}</div>
              <ThemeToggle expanded />
              <div className={`flex items-center h-12 px-4 gap-3 rounded-lg ${navLinkClass}`}>
                <Globe className="h-5 w-5 shrink-0 opacity-70" />
                <TranslationSelector className="w-full h-auto p-0 justify-start" />
              </div>
            </div>

            {/* Group 3 — Actions and external links (pinned to the bottom) */}
            <div className="mt-auto flex flex-col gap-1">
              <div className="h-px bg-border my-4 mx-4" />
              <div className={sectionLabelClass}>{t.menuLinks}</div>
              <ShareButton showLabel />
              <Button
                variant="ghost"
                className={`justify-start h-12 px-4 w-full gap-3 no-underline hover:no-underline ${navLinkClass}`}
                asChild
              >
                <ExternalLink href={EXTERNAL_LINKS.GITHUB_REPO} label="GitHub/Kaysuto">
                  <Github className="h-5 w-5 shrink-0 opacity-70" />
                  GitHub
                </ExternalLink>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
