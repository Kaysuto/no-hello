"use client"
import { Navbar } from "@/components/navbar"
import { useTranslation } from "@/components/translation-context"

import { ComparisonSection } from "@/components/comparison-section"
import { ConceptExplanation } from "@/components/concept-explanation"
import { QuizGame } from "@/components/quiz-game"
import { KofiWidget } from "@/components/kofi-widget"

import { TypingText } from "@/components/typing-text"
import { motion } from "framer-motion"
import { fadeInUp, pulsingBlob, heroAnimation } from "@/lib/animations"
import { SECTION_IDS } from "@/lib/constants"

export function HomeContent() {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-background relative overflow-hidden selection:bg-primary/20">
            <Navbar />

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={pulsingBlob(8, 0)}
                    className="absolute top-[-20%] left-[-10%] w-125 h-125 rounded-full bg-blue-500/10 blur-[100px]"
                />
                <motion.div
                    animate={pulsingBlob(10, 1)}
                    className="absolute bottom-[-20%] right-[-10%] w-150 h-150 rounded-full bg-purple-500/10 blur-[120px]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-16">
                <main className="space-y-24">
                    {/* Hero Section */}
                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={heroAnimation}
                        className="min-h-[calc(100vh-4rem)] flex items-center justify-center"
                    >
                            {/* Text Content */}
                            <div className="space-y-6 text-center order-1">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
                                    <span className="bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                        {t.headerPre}
                                    </span>
                                    <span className="text-primary italic"> &ldquo;
                                        <TypingText
                                            words={["Bonjour", "Hello", "Hola", "Hallo", "Ciao", "Olá", "Namaste", "Salaam", "Konnichiwa", "Ni Hao"]}
                                            className="not-italic"
                                        />&rdquo;
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
                                    {t.headerDesc}
                                </p>
                            </div>
                    </motion.section>

                    {/* Explanation Section */}
                    <section id={SECTION_IDS.EXPLANATION} className="scroll-mt-24">
                        <ConceptExplanation />
                    </section>

                    {/* Comparison Section */}
                    <motion.section
                        className="bg-linear-to-b from-transparent via-secondary/5 to-transparent py-12 -mx-4 px-4 sm:mx-0 sm:px-0 sm:rounded-3xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">{t.compSectionTitle}</h2>
                            <p className="text-muted-foreground">{t.compSectionDesc}</p>
                        </div>
                        <ComparisonSection />
                    </motion.section>

                    {/* Quiz Section */}
                    <motion.section
                        id={SECTION_IDS.QUIZ}
                        className="py-12 scroll-mt-24"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <QuizGame />
                    </motion.section>


                </main>
            </div>
            <KofiWidget />
        </div>
    );
}
