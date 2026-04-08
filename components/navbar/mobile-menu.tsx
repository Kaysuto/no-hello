import { TranslationSelector } from "@/components/translation-selector"
import { ShareButton } from "@/components/share-button"
import { ExternalLink } from "@/components/external-link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Github, Menu, Globe, BookOpen, CircleHelp } from "lucide-react"
import { useTranslation } from "@/components/translation-context"
import { SECTION_IDS, EXTERNAL_LINKS } from "@/lib/constants"

const navLinkClass = "text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"

interface MobileMenuProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onNavigate: (sectionId: string) => void
}

export function MobileMenu({ open, onOpenChange, onNavigate }: MobileMenuProps) {
  const { t } = useTranslation()

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-75 sm:w-100 pt-12 pb-6">
          <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
          <div className="flex flex-col h-full">
            {/* Navigation Section */}
            <div className="flex flex-col gap-1">
              <div className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Navigation
              </div>
              <Button
                variant="ghost"
                onClick={() => onNavigate(SECTION_IDS.EXPLANATION)}
                className="justify-start text-base h-12 px-4 w-full gap-3"
              >
                <BookOpen className="h-5 w-5 opacity-70" />
                {t.navConcept}
              </Button>
              <Button
                variant="ghost"
                onClick={() => onNavigate(SECTION_IDS.QUIZ)}
                className="justify-start text-base h-12 px-4 w-full gap-3"
              >
                <CircleHelp className="h-5 w-5 opacity-70" />
                {t.navQuiz}
              </Button>
            </div>

            {/* Bottom Actions Section */}
            <div className="mt-auto flex flex-col gap-1">
              <div className="h-px bg-border my-4 mx-4" />

              <div className="w-full">
                <ShareButton showLabel={true} />
              </div>
              <div className={`flex items-center h-11 px-4 gap-2 rounded-lg ${navLinkClass}`}>
                <Globe className="h-4 w-4 shrink-0" />
                <TranslationSelector className="w-full h-auto p-0 justify-start" />
              </div>
              <Button
                variant="ghost"
                className={`justify-start h-11 px-4 w-full gap-3 no-underline hover:no-underline ${navLinkClass}`}
                asChild
              >
                <ExternalLink href={EXTERNAL_LINKS.GITHUB_REPO} label="GitHub/Kaysuto">
                  <Github className="h-4 w-4 shrink-0" />
                  Github
                </ExternalLink>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
