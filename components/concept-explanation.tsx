"use client"

import { useTranslation } from "@/components/translation-context"
import { motion } from "framer-motion"
import { PhoneOff, Clock, MessageSquarePlus, CheckCircle2 } from "lucide-react"
import { conceptCard } from "@/lib/animations"
import { LucideIcon } from "lucide-react"

type CardStyle = { color: string; bg: string; border: string }

const CARD_STYLES: CardStyle[] = [
    { color: "text-red-500",    bg: "bg-red-500/10",    border: "border-red-500/20"    },
    { color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/20" },
    { color: "text-blue-500",   bg: "bg-blue-500/10",   border: "border-blue-500/20"   },
    { color: "text-green-500",  bg: "bg-green-500/10",  border: "border-green-500/20"  },
]

const CARD_ICONS: LucideIcon[] = [PhoneOff, Clock, MessageSquarePlus, CheckCircle2]

export function ConceptExplanation() {
    const { t } = useTranslation()

    const cards = [
        { title: t.conceptProblemTitle,     text: t.conceptProblemBody     },
        { title: t.conceptConsequenceTitle, text: t.conceptConsequenceBody },
        { title: t.conceptSolutionTitle,    text: t.conceptSolutionBody    },
        { title: t.conceptBenefitTitle,     text: t.conceptBenefitBody     },
    ]

    return (
        <div className="max-w-6xl mx-auto px-4">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={conceptCard}
                className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-3xl mx-auto"
            >
                {t.conceptTitle}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, idx) => {
                    const { color, bg, border } = CARD_STYLES[idx]
                    const Icon = CARD_ICONS[idx]
                    return (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={conceptCard}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-2xl border ${border} ${bg} hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center`}
                        >
                            <div className={`h-12 w-12 rounded-xl ${bg} flex items-center justify-center mb-4 mx-auto`}>
                                <Icon className={`h-6 w-6 ${color}`} />
                            </div>
                            <h3 className={`text-lg font-semibold mb-2 ${color}`}>
                                {card.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {card.text}
                            </p>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
