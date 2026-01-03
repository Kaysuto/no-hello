"use client"

import { XCircle, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslation } from "@/components/translation-context"
import { motion } from "framer-motion"

export function ComparisonSection() {
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    } as const

    const itemVariants = {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    } as const

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    } as const

    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Bad Practice */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <Card className="p-6 border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/10 h-full">
                    <div className="flex items-center gap-2 mb-4 text-red-600 dark:text-red-400 font-semibold">
                        <XCircle className="h-5 w-5" />
                        {t.badTitle}
                    </div>
                    <motion.div
                        className="space-y-4 text-sm"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="bg-background/80 p-3 rounded-lg rounded-bl-none shadow-sm dark:bg-card ml-auto max-w-[90%] border">
                            <div className="text-xs text-muted-foreground mb-1">10:00 - Vous</div>
                            {t.badMsg1}
                        </motion.div>
                        <motion.div variants={itemVariants} className="text-center text-xs text-muted-foreground italic py-2">
                            {t.badWait}
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-primary/10 p-3 rounded-lg rounded-br-none shadow-sm dark:bg-primary/20 mr-auto max-w-[90%]">
                            <div className="text-xs text-muted-foreground mb-1">10:05 - Collègue</div>
                            {t.badReply}
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-background/80 p-3 rounded-lg rounded-bl-none shadow-sm dark:bg-card ml-auto max-w-[90%] border">
                            <div className="text-xs text-muted-foreground mb-1">10:06 - Vous</div>
                            {t.badMsg2}
                        </motion.div>
                    </motion.div>
                </Card>
            </motion.div>

            {/* Good Practice */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
            >
                <Card className="p-6 border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/10 h-full">
                    <div className="flex items-center gap-2 mb-4 text-green-600 dark:text-green-400 font-semibold">
                        <CheckCircle2 className="h-5 w-5" />
                        {t.goodTitle}
                    </div>
                    <motion.div
                        className="space-y-4 text-sm h-full"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants} className="bg-background/80 p-3 rounded-lg rounded-bl-none shadow-sm dark:bg-card ml-auto max-w-[90%] border">
                            <div className="text-xs text-muted-foreground mb-1">10:00 - Vous</div>
                            {t.goodMsg1}
                        </motion.div>
                        <motion.div variants={itemVariants} className="text-center text-xs text-muted-foreground italic py-2">
                            {t.goodContext}
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-primary/10 p-3 rounded-lg rounded-br-none shadow-sm dark:bg-primary/20 mr-auto max-w-[90%]">
                            <div className="text-xs text-muted-foreground mb-1">10:01 - Collègue</div>
                            {t.goodReply}
                        </motion.div>
                    </motion.div>
                </Card>
            </motion.div>
        </div>
    )
}
