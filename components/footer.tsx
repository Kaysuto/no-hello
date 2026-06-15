"use client"

import { useTranslation } from "@/components/translation-context"
import { ExternalLink } from "@/components/external-link"
import { AnimatedHeart } from "@/components/animated-heart"
import { motion } from "framer-motion"
import { EXTERNAL_LINKS, SECTION_IDS } from "@/lib/constants"
import { footerAnimation } from "@/lib/animations"
import { useScrollToSection } from "@/lib/hooks/use-scroll-to-section"
import Image from "next/image"
import { Github, MessagesSquare, BookOpen, CircleHelp } from "lucide-react"

export function Footer() {
    const { t } = useTranslation()
    const scrollTo = useScrollToSection()

    const navLinks = [
        { id: SECTION_IDS.COMPARISON,  label: t.navExample, Icon: MessagesSquare },
        { id: SECTION_IDS.EXPLANATION, label: t.navConcept, Icon: BookOpen       },
        { id: SECTION_IDS.QUIZ,        label: t.navQuiz,    Icon: CircleHelp     },
    ]

    return (
        <motion.footer
            initial="hidden"
            animate="visible"
            variants={footerAnimation}
            className="relative mt-20 border-t border-border/50 px-6 lg:px-8"
        >
            <div className="max-w-5xl mx-auto py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                {/* Left — brand */}
                <div className="flex items-center gap-2.5">
                    <Image src="/icon.png" alt="No Hello" width={28} height={28} className="rounded-lg ring-1 ring-foreground/10 shrink-0" />
                    <span className="text-sm font-semibold tracking-tight">No Hello</span>
                </div>

                {/* Center — nav */}
                <nav className="flex items-center gap-1 flex-wrap">
                    {navLinks.map(({ id, label, Icon }) => (
                        <button
                            key={id}
                            onClick={() => scrollTo(id)}
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer px-2.5 py-1.5 rounded-lg hover:bg-muted"
                        >
                            <Icon className="h-3.5 w-3.5 shrink-0 opacity-50" />
                            {label}
                        </button>
                    ))}
                </nav>

                {/* Right — GitHub */}
                <ExternalLink
                    href={EXTERNAL_LINKS.GITHUB_REPO}
                    label="GitHub"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors no-underline hover:no-underline"
                >
                    <Github className="h-4 w-4" />
                    GitHub
                </ExternalLink>
            </div>

            {/* Attribution */}
            <div className="max-w-5xl mx-auto pb-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/50 flex-wrap text-center">
                <span className="flex items-center gap-1">
                    {t.footerMadeWith} <AnimatedHeart /> {t.footerBy}
                    <ExternalLink href={EXTERNAL_LINKS.AUTHOR_WEBSITE} label="Kaysuto" className="hover:text-foreground transition-colors ml-0.5">Kaysuto</ExternalLink>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                    {t.footerInspiredBy}
                    <ExternalLink href={EXTERNAL_LINKS.NOHELLO_NET} label="nohello.net" className="hover:text-foreground transition-colors ml-0.5">nohello.net</ExternalLink>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                    {t.footerRebuiltWith}
                    <ExternalLink href={EXTERNAL_LINKS.NEXTJS} label="Next.js" className="hover:text-foreground transition-colors ml-0.5">Next.js</ExternalLink>
                    <span>&amp;</span>
                    <ExternalLink href={EXTERNAL_LINKS.SHADCN} label="Shadcn/ui" className="hover:text-foreground transition-colors">Shadcn</ExternalLink>
                </span>
            </div>
        </motion.footer>
    )
}
