"use client"

import { useTranslation } from "@/components/translation-context"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { fadeInUp } from "@/lib/animations"
import { copyToClipboard } from "@/lib/clipboard"

export function UsageSection() {
    const { t } = useTranslation()

    const handleCopy = () => {
        void copyToClipboard(t.shareCustomMsg, t.shareMsgCopied, t.shareMsgDesc)
    }

    return (
        <motion.div
            className="max-w-4xl mx-auto px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
        >
            <div className="relative overflow-hidden rounded-[min(var(--radius-4xl),24px)] ring-1 ring-foreground/5 bg-card p-8 md:p-10 lg:p-12">
                {/* Subtle accent gradient overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-[min(var(--radius-4xl),24px)] bg-linear-to-br from-foreground/[0.03] via-transparent to-transparent" />
                <div className="relative grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
                    <div className="space-y-3">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                            {t.usageTitle}
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {t.usageDesc}
                        </p>
                    </div>

                    <Button
                        size="lg"
                        onClick={handleCopy}
                        className="gap-2 self-stretch md:self-auto"
                    >
                        <Copy className="h-4 w-4" />
                        {t.usageCopyCta}
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}
