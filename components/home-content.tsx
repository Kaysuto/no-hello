"use client"
import { Navbar } from "@/components/navbar/navbar"
import { useTranslation } from "@/components/translation-context"
import { ComparisonSection } from "@/components/comparison-section"
import { ConceptExplanation } from "@/components/concept-explanation"
import { QuizGame } from "@/components/quiz/quiz-game"
import { KofiWidget } from "@/components/kofi-widget"
import { TypingText } from "@/components/typing-text"
import { motion } from "framer-motion"
import { fadeInUp, pulsingBlob, heroAnimation } from "@/lib/animations"
import { SECTION_IDS } from "@/lib/constants"
import { useScrollToSection } from "@/lib/hooks/use-scroll-to-section"

export function HomeContent() {
    const { t } = useTranslation()
    const scrollTo = useScrollToSection()

    return (
        <div className="min-h-screen bg-background relative overflow-hidden selection:bg-primary/20">
            <Navbar />

            {/* Background blobs */}
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

            <div className="relative z-10">
                {/* Hero */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={heroAnimation}
                    className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
                >
                    <div className="space-y-8 max-w-4xl mx-auto">
                        <h1 className="font-black tracking-tight leading-[1.05]">
                            <span className="block text-4xl md:text-6xl lg:text-7xl bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                                {t.headerLine1}
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-7xl mt-1">
                                <span className="bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                                    {t.headerLine2}{" "}
                                </span>
                                <span className="text-primary italic">&ldquo;<TypingText
                                    words={["Bonjour", "Hello", "Hola", "Hallo", "Ciao", "Olá", "Namaste", "Salaam", "Konnichiwa", "Ni Hao"]}
                                    className="not-italic"
                                />&rdquo;</span>
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg mx-auto leading-relaxed">
                            {t.headerDesc}
                        </p>
                    </div>

                    <motion.button
                        aria-label="Scroll to content"
                        onClick={() => scrollTo(SECTION_IDS.EXPLANATION)}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 group cursor-pointer touch-manipulation"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {/* Mouse indicator (desktop) */}
                        <div className="hidden md:flex w-6 h-9 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/60 transition-colors items-start justify-center pt-1.5">
                            <motion.div
                                className="w-1 h-1.5 rounded-full bg-muted-foreground/40 group-hover:bg-primary/60 transition-colors"
                                animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </div>
                        {/* Touch indicator (mobile) */}
                        <div className="flex md:hidden relative w-8 h-8 items-center justify-center">
                            <motion.div
                                className="absolute inset-0 rounded-full bg-muted-foreground/10 group-active:bg-primary/20"
                                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                            />
                            <svg className="w-5 h-5 text-muted-foreground/50 group-active:text-primary/70 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M9 11.5V7a1 1 0 0 1 2 0v2.5A1 1 0 0 1 13 10v1a1 1 0 0 1 1.5-.87V11a1 1 0 0 1 1.5-.87V13c0 3-1 5-4 5h-.5A3.5 3.5 0 0 1 8 14.5v-2a.5.5 0 0 1 1 0" />
                            </svg>
                        </div>
                    </motion.button>
                </motion.section>

                {/* Concept Section */}
                <section id={SECTION_IDS.EXPLANATION} className="py-24 scroll-mt-20">
                    <ConceptExplanation />
                </section>

                {/* Comparison Section */}
                <motion.section
                    className="py-24 bg-linear-to-b from-transparent via-secondary/5 to-transparent"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight mb-3">{t.compSectionTitle}</h2>
                            <p className="text-muted-foreground">{t.compSectionDesc}</p>
                        </div>
                        <ComparisonSection />
                    </div>
                </motion.section>

                {/* Quiz Section */}
                <motion.section
                    id={SECTION_IDS.QUIZ}
                    className="py-24 scroll-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="container mx-auto px-4">
                        <QuizGame />
                    </div>
                </motion.section>
            </div>

            <KofiWidget />
        </div>
    )
}
