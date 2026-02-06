import { TranslationSelector } from "@/components/translation-selector"
import { ShareButton } from "@/components/share-button"
import { ExternalLink } from "@/components/external-link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useTranslation } from "@/components/translation-context"
import { SECTION_IDS, EXTERNAL_LINKS } from "@/lib/constants"

interface DesktopNavProps {
  onNavigate: (sectionId: string) => void
}

export function DesktopNav({ onNavigate }: DesktopNavProps) {
  const { t } = useTranslation()

  return (
    <>
      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-1 mr-2">
        <Button
          variant="ghost"
          onClick={() => onNavigate(SECTION_IDS.EXPLANATION)}
          className="h-9 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
          {t.navConcept}
        </Button>
        <Button
          variant="ghost"
          onClick={() => onNavigate(SECTION_IDS.QUIZ)}
          className="h-9 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
          {t.navQuiz}
        </Button>
      </div>

      <div className="h-4 w-px bg-border mx-2 hidden md:block" />

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-1">
        <ShareButton key="share" />
        <TranslationSelector key="translation" />

        <div className="w-2" /> {/* Spacer */}

        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
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
