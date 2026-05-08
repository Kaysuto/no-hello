"use client"

import { useTranslation } from "@/components/translation-context"
import { motion } from "framer-motion"
import { PhoneOff, Clock, MessageSquarePlus, CheckCircle2 } from "lucide-react"
import { conceptCard } from "@/lib/animations"
import { LucideIcon } from "lucide-react"

type Step = {
    title: string
    body: string
    Icon: LucideIcon
    accent: string
    accentBg: string
    accentRing: string
}

export function ConceptExplanation() {
    const { t } = useTranslation()

    const steps: Step[] = [
        {
            title: t.conceptProblemTitle,
            body: t.conceptProblemBody,
            Icon: PhoneOff,
            accent: "text-rose-500",
            accentBg: "bg-rose-500/10",
            accentRing: "ring-rose-500/20",
        },
        {
            title: t.conceptConsequenceTitle,
            body: t.conceptConsequenceBody,
            Icon: Clock,
            accent: "text-amber-500",
            accentBg: "bg-amber-500/10",
            accentRing: "ring-amber-500/20",
        },
        {
            title: t.conceptSolutionTitle,
            body: t.conceptSolutionBody,
            Icon: MessageSquarePlus,
            accent: "text-sky-500",
            accentBg: "bg-sky-500/10",
            accentRing: "ring-sky-500/20",
        },
        {
            title: t.conceptBenefitTitle,
            body: t.conceptBenefitBody,
            Icon: CheckCircle2,
            accent: "text-emerald-500",
            accentBg: "bg-emerald-500/10",
            accentRing: "ring-emerald-500/20",
        },
    ]

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={conceptCard}
                className="text-3xl md:text-4xl font-bold text-center mb-16 max-w-3xl mx-auto"
            >
                {t.conceptTitle}
            </motion.h2>

            <ol className="relative max-w-3xl mx-auto">
                {/* Vertical connecting line — fades from rose (start) to emerald (end) */}
                <div
                    aria-hidden="true"
                    className="absolute left-6 top-6 bottom-6 w-px bg-linear-to-b from-rose-500/40 via-sky-500/30 to-emerald-500/40"
                />

                {steps.map((step, idx) => {
                    const { Icon } = step
                    const isLast = idx === steps.length - 1
                    return (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
                            className={`relative pl-20 ${isLast ? "" : "pb-12"}`}
                        >
                            {/* Numbered timeline marker — sits on top of the line */}
                            <div
                                className={`absolute left-0 top-0 h-12 w-12 rounded-full ${step.accentBg} ring-8 ring-background flex items-center justify-center`}
                            >
                                <Icon className={`h-5 w-5 ${step.accent}`} />
                            </div>

                            {/* Big decorative step number */}
                            <span
                                className={`absolute -top-1 right-0 text-5xl md:text-6xl font-black tabular-nums opacity-10 ${step.accent} pointer-events-none select-none`}
                                aria-hidden="true"
                            >
                                {String(idx + 1).padStart(2, "0")}
                            </span>

                            <div className="space-y-2 pt-1.5 max-w-xl">
                                <h3 className={`text-xl md:text-2xl font-bold ${step.accent}`}>
                                    {step.title}
                                </h3>
                                <p className="text-base text-muted-foreground leading-relaxed">
                                    {step.body}
                                </p>
                            </div>
                        </motion.li>
                    )
                })}
            </ol>
        </div>
    )
}
