"use client"

import { useTranslation } from "@/components/translation-context"
import { ExternalLink } from "@/components/external-link"
import { AnimatedHeart } from "@/components/animated-heart"
import { motion } from "framer-motion"
import { EXTERNAL_LINKS, LANGUAGE_CODES, SECTION_IDS } from "@/lib/constants"
import { footerAnimation } from "@/lib/animations"
import { useScrollToSection } from "@/lib/hooks/use-scroll-to-section"
import { Github } from "lucide-react"

export function Footer() {
    const { t, language } = useTranslation()
    const scrollTo = useScrollToSection()

    const isJapanese = language === LANGUAGE_CODES.JAPANESE

    const navLinks = [
        { id: SECTION_IDS.COMPARISON,  label: t.navExample },
        { id: SECTION_IDS.EXPLANATION, label: t.navConcept },
        { id: SECTION_IDS.USAGE,       label: t.navUsage   },
        { id: SECTION_IDS.QUIZ,        label: t.navQuiz    },
    ]

    return (
        <motion.footer
            initial="hidden"
            animate="visible"
            variants={footerAnimation}
            className="relative mt-16 px-6 lg:px-8"
        >
            {/* Hairline top border, subtler than a card border */}
            <div className="max-w-7xl mx-auto border-t border-border/50">
                {/* Top zone: brand · nav · external */}
                <div className="py-10 grid gap-8 md:grid-cols-3 md:items-start">
                    {/* Brand */}
                    <div className="space-y-2">
                        <p className="text-base font-semibold tracking-tight">No Hello</p>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            {t.headerDesc}
                        </p>
                    </div>

                    {/* Quick navigation */}
                    <nav className="flex flex-wrap items-center md:justify-center gap-x-5 gap-y-2 text-sm">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* External + made-by */}
                    <div className="flex flex-col gap-3 md:items-end text-sm">
                        <ExternalLink
                            href={EXTERNAL_LINKS.GITHUB_REPO}
                            label="GitHub"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors no-underline hover:no-underline w-fit"
                        >
                            <Github className="h-4 w-4" />
                            GitHub
                        </ExternalLink>
                        <p className="flex items-center gap-1 text-muted-foreground">
                            {t.footerMadeWith} <AnimatedHeart /> {t.footerBy}
                            <ExternalLink href={EXTERNAL_LINKS.GITHUB_PROFILE} label="Kaysuto Kimiya">Kaysuto</ExternalLink>
                        </p>
                    </div>
                </div>

                {/* Bottom zone: attribution + warning, hairline above */}
                <div className="pt-5 pb-8 border-t border-border/30 flex flex-col items-center gap-2 text-xs text-muted-foreground/80">
                    <p className="flex items-center justify-center gap-1 flex-wrap text-center">
                        {isJapanese ? (
                            <>
                                <ExternalLink href={EXTERNAL_LINKS.NOHELLO_NET} label="nohello.net">nohello.net</ExternalLink>
                                {t.footerInspiredBy}
                                <span> • </span>
                                <ExternalLink href={EXTERNAL_LINKS.NEXTJS} label="Next.js">Next.js</ExternalLink>
                                <span> & </span>
                                <ExternalLink href={EXTERNAL_LINKS.SHADCN} label="Shadcn/ui">Shadcn</ExternalLink>
                                {t.footerRebuiltWith}
                            </>
                        ) : (
                            <>
                                {t.footerInspiredBy}
                                <ExternalLink href={EXTERNAL_LINKS.NOHELLO_NET} label="nohello.net">nohello.net</ExternalLink>
                                {t.footerRebuiltWith}
                                <ExternalLink href={EXTERNAL_LINKS.NEXTJS} label="Next.js">Next.js</ExternalLink>
                                <span> & </span>
                                <ExternalLink href={EXTERNAL_LINKS.SHADCN} label="Shadcn/ui">Shadcn</ExternalLink>
                            </>
                        )}
                    </p>
                    <p className="italic max-w-xl text-center">{t.footerWarning}</p>
                </div>
            </div>
        </motion.footer>
    )
}
