"use client"

import { useTranslation } from "@/components/translation-context"
import { ExternalLink } from "@/components/external-link"
import { AnimatedHeart } from "@/components/animated-heart"
import { motion } from "framer-motion"
import { EXTERNAL_LINKS, LANGUAGE_CODES } from "@/lib/constants"
import { footerAnimation } from "@/lib/animations"

export function Footer() {
    const { t, language } = useTranslation()

    const isJapanese = language === LANGUAGE_CODES.JAPANESE

    return (
        <motion.footer
            initial="hidden"
            animate="visible"
            variants={footerAnimation}
            className="w-full flex flex-col items-center px-4 my-8 gap-6"
        >
            <div className="flex flex-col items-center gap-2 p-4 bg-background/80 backdrop-blur-xl rounded-2xl shadow-[0px_0.6px_0.6px_-1.25px_rgba(0,0,0,0.18),0px_2.3px_2.3px_-2.5px_rgba(0,0,0,0.16),0px_10px_10px_-3.75px_rgba(0,0,0,0.06)] dark:shadow-[0px_0.6px_0.6px_-1.25px_rgba(255,255,255,0.18),0px_2.3px_2.3px_-2.5px_rgba(255,255,255,0.16),0px_10px_10px_-3.75px_rgba(255,255,255,0.06)] border border-white/20 max-w-2xl w-full text-center">
                <p className="flex items-center justify-center gap-1 flex-wrap text-sm text-muted-foreground">
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
                <p className="text-xs text-muted-foreground/60 italic">
                    {t.footerWarning}
                </p>
                <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    {t.footerMadeWith} <AnimatedHeart /> {t.footerBy}
                    <ExternalLink href={EXTERNAL_LINKS.GITHUB_PROFILE} label="Kaysuto Kimiya">Kaysuto Kimiya</ExternalLink>
                </p>

            </div>
        </motion.footer>
    )
}
