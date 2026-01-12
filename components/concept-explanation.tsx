"use client"

import { useTranslation } from "@/components/translation-context"
import { motion } from "framer-motion"
import { PhoneOff, Clock, MessageSquarePlus, CheckCircle2 } from "lucide-react"

export function ConceptExplanation() {
    const { t } = useTranslation()

    const cards = [
        {
            icon: PhoneOff,
            title: t.conceptProblemTitle,
            text: t.conceptProblemBody,
            color: "text-red-500",
            bg: "bg-red-500/10",
            border: "border-red-500/20"
        },
        {
            icon: Clock,
            title: t.conceptConsequenceTitle,
            text: t.conceptConsequenceBody,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        },
        {
            icon: MessageSquarePlus,
            title: t.conceptSolutionTitle,
            text: t.conceptSolutionBody,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        },
        {
            icon: CheckCircle2,
            title: t.conceptBenefitTitle,
            text: t.conceptBenefitBody,
            color: "text-green-500",
            bg: "bg-green-500/10",
            border: "border-green-500/20"
        }
    ]

    return (
        <div className="max-w-6xl mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 max-w-3xl mx-auto"
            >
                {t.conceptTitle}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-6 rounded-2xl border ${card.border} ${card.bg} hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center`}
                    >
                        <div className={`h-12 w-12 rounded-xl ${card.bg} flex items-center justify-center mb-4 mx-auto`}>
                            <card.icon className={`h-6 w-6 ${card.color}`} />
                        </div>
                        <h3 className={`text-lg font-semibold mb-2 ${card.color}`}>
                            {card.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {card.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
