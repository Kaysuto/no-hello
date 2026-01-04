"use client"

import { useTranslation } from "@/components/translation-context"
import { ExternalLink } from "@/components/external-link"
import { AnimatedHeart } from "@/components/animated-heart"

export function Footer() {
    const { t, language } = useTranslation()

    const isJapanese = language === "ja"

    return (
        <footer className="container mx-auto max-w-6xl px-4 py-6 text-center text-sm text-muted-foreground border-t border-border mt-12 space-y-2 relative z-10">
            <p className="flex items-center justify-center gap-1 flex-wrap">
                {isJapanese ? (
                    <>
                        <ExternalLink href="https://nohello.net" label="nohello.net">nohello.net</ExternalLink>
                        {t.footerInspiredBy}
                        <span> • </span>
                        <ExternalLink href="https://nextjs.org" label="Next.js">Next.js</ExternalLink>
                        <span> & </span>
                        <ExternalLink href="https://ui.shadcn.com" label="Shadcn/ui">Shadcn</ExternalLink>
                        {t.footerRebuiltWith}
                    </>
                ) : (
                    <>
                        {t.footerInspiredBy}
                        <ExternalLink href="https://nohello.net" label="nohello.net">nohello.net</ExternalLink>
                        {t.footerRebuiltWith}
                        <ExternalLink href="https://nextjs.org" label="Next.js">Next.js</ExternalLink>
                        <span> & </span>
                        <ExternalLink href="https://ui.shadcn.com" label="Shadcn/ui">Shadcn</ExternalLink>
                    </>
                )}
            </p>
            <p className="text-xs text-muted-foreground/60 italic max-w-md mx-auto mb-4">
                {t.footerWarning}
            </p>
            <p className="flex items-center justify-center gap-1">
                {t.footerMadeWith} <AnimatedHeart /> {t.footerBy}
                <ExternalLink href="https://github.com/Kaysuto" label="Kaysuto Kimiya">Kaysuto Kimiya</ExternalLink>
            </p>
        </footer>
    )
}
