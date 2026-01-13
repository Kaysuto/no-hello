"use client"

import { useTranslation } from "@/components/translation-context"
import { ExternalLink } from "@/components/external-link"
import { AnimatedHeart } from "@/components/animated-heart"
import { motion } from "framer-motion"
import { Coffee } from "lucide-react"

import { useEffect } from "react"

export function Footer() {
    const { t, language } = useTranslation()

    const isJapanese = language === "ja"

    return (
        <motion.footer 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full flex flex-col items-center px-4 my-8 gap-6"
        >
            <div className="flex flex-col items-center gap-2 p-4 bg-background/80 backdrop-blur-xl rounded-2xl shadow-[0px_0.6px_0.6px_-1.25px_rgba(0,0,0,0.18),0px_2.3px_2.3px_-2.5px_rgba(0,0,0,0.16),0px_10px_10px_-3.75px_rgba(0,0,0,0.06)] dark:shadow-[0px_0.6px_0.6px_-1.25px_rgba(255,255,255,0.18),0px_2.3px_2.3px_-2.5px_rgba(255,255,255,0.16),0px_10px_10px_-3.75px_rgba(255,255,255,0.06)] border border-white/20 max-w-2xl w-full text-center">
                <p className="flex items-center justify-center gap-1 flex-wrap text-sm text-muted-foreground">
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
                <p className="text-xs text-muted-foreground/60 italic">
                    {t.footerWarning}
                </p>
                <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                    {t.footerMadeWith} <AnimatedHeart /> {t.footerBy}
                    <ExternalLink href="https://github.com/Kaysuto" label="Kaysuto Kimiya">Kaysuto Kimiya</ExternalLink>
                </p>

                {/* Native Official-style Ko-fi Button - Now inside the card */}
                <div className="pt-2">
                    <ExternalLink 
                        href="https://ko-fi.com/kaysuto" 
                        label="Ko-fi (Kaysuto)"
                        className="hover:no-underline group"
                    >
                        <div className="flex items-center gap-2 bg-[#FF5F5F] hover:bg-[#ff4f4f] text-white px-5 h-11 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 font-bold">
                            <Coffee className="h-5 w-5" />
                            <span className="text-sm">{t.kofiSupport}</span>
                        </div>
                    </ExternalLink>
                </div>
            </div>
        </motion.footer>
    )
}
