"use client"

import React from "react"
import { XCircle, CheckCircle2 } from "lucide-react"
import { useTranslation } from "@/components/translation-context"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem, cardFadeInUp } from "@/lib/animations"

function MessageBubble({ time, author, children, align }: {
    time: string
    author: string
    children: React.ReactNode
    align: "left" | "right"
}) {
    const isRight = align === "right"
    return (
        <motion.div
            variants={staggerItem}
            className={
                isRight
                    ? "bg-secondary/60 p-3 rounded-2xl rounded-tr-sm shadow-none ml-auto max-w-[90%] ring-1 ring-foreground/5"
                    : "bg-card p-3 rounded-2xl rounded-tl-sm shadow-none mr-auto max-w-[90%] ring-1 ring-foreground/5"
            }
        >
            <div className="text-xs text-muted-foreground mb-1">{time} · {author}</div>
            {children}
        </motion.div>
    )
}

export function ComparisonSection() {
    const { t } = useTranslation()

    return (
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Bad Practice */}
            <motion.div
                variants={cardFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="rounded-[min(var(--radius-4xl),24px)] ring-1 ring-foreground/5 bg-card overflow-hidden h-full">
                    <div className="flex items-center gap-2.5 px-5 py-4 border-b border-border/60 bg-red-50/60 dark:bg-red-950/20">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/40">
                            <XCircle className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                        </span>
                        <span className="text-sm font-semibold text-red-700 dark:text-red-300">{t.badTitle}</span>
                    </div>
                    <div className="p-5">
                        <motion.div
                            className="space-y-4 text-sm"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <MessageBubble time="10:00" author="Vous" align="right">{t.badMsg1}</MessageBubble>
                            <motion.div variants={staggerItem} className="text-center text-xs text-muted-foreground italic py-2 flex items-center gap-3">
                                <div className="flex-1 h-px bg-border" />
                                {t.badWait}
                                <div className="flex-1 h-px bg-border" />
                            </motion.div>
                            <MessageBubble time="10:05" author="Collègue" align="left">{t.badReply}</MessageBubble>
                            <MessageBubble time="10:06" author="Vous" align="right">{t.badMsg2}</MessageBubble>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Good Practice */}
            <motion.div
                variants={cardFadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.15 }}
            >
                <div className="rounded-[min(var(--radius-4xl),24px)] ring-1 ring-foreground/5 bg-card overflow-hidden h-full">
                    <div className="flex items-center gap-2.5 px-5 py-4 border-b border-border/60 bg-green-50/60 dark:bg-green-950/20">
                        <span className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/40">
                            <CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                        </span>
                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">{t.goodTitle}</span>
                    </div>
                    <div className="p-5">
                        <motion.div
                            className="space-y-4 text-sm h-full"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <MessageBubble time="10:00" author="Vous" align="right">{t.goodMsg1}</MessageBubble>
                            <motion.div variants={staggerItem} className="text-center text-xs text-muted-foreground italic py-2 flex items-center gap-3">
                                <div className="flex-1 h-px bg-border" />
                                {t.goodContext}
                                <div className="flex-1 h-px bg-border" />
                            </motion.div>
                            <MessageBubble time="10:01" author="Collègue" align="left">{t.goodReply}</MessageBubble>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
