"use client"
import { Navbar } from "@/components/navbar/navbar"
import { useTranslation } from "@/components/translation-context"
import { ComparisonSection } from "@/components/comparison-section"
import { ConceptExplanation } from "@/components/concept-explanation"
import { UsageSection } from "@/components/usage-section"
import { QuizGame } from "@/components/quiz/quiz-game"
import { TypingText } from "@/components/typing-text"
import { Button } from "@/components/ui/button"
import { Eye, Copy, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { fadeInUp, heroAnimation } from "@/lib/animations"
import { SECTION_IDS } from "@/lib/constants"
import { useScrollToSection } from "@/lib/hooks/use-scroll-to-section"
import { copyToClipboard } from "@/lib/clipboard"

export function HomeContent() {
    const { t } = useTranslation()
    const scrollTo = useScrollToSection()

    const handleCopyShareMsg = () => {
        void copyToClipboard(t.shareCustomMsg, t.shareMsgCopied, t.shareMsgDesc)
    }

    return (
        <div className="min-h-screen bg-background relative overflow-hidden selection:bg-ring/20">
            <Navbar />

            {/* No background blobs — clean Rhea neutral look */}

            <div className="relative z-10">
                {/* ── Hero ───────────────────────────────────────────── */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={heroAnimation}
                    className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 lg:px-8"
                >
                    <div className="space-y-7 max-w-4xl mx-auto">
                        {/* H1 */}
                        <h1 className="font-black tracking-tight leading-[1.05]">
                            <span className="block text-4xl md:text-6xl lg:text-7xl text-foreground">
                                {t.headerLine1}
                            </span>
                            <span className="block text-4xl md:text-6xl lg:text-7xl mt-1">
                                <span className="text-foreground">
                                    {t.headerLine2}{" "}
                                </span>
                                <span className="relative">
                                    <span className="italic text-muted-foreground">&ldquo;<TypingText
                                        words={["Bonjour", "Hello", "Hola", "Hallo", "Ciao", "Olá", "Namaste", "Salaam", "Konnichiwa", "Ni Hao"]}
                                        className="not-italic"
                                    />&rdquo;</span>
                                </span>
                            </span>
                        </h1>

                        <p className="text-base md:text-lg text-muted-foreground font-normal max-w-xl mx-auto leading-relaxed">
                            {t.headerDesc}
                        </p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-2.5 justify-center items-center pt-1"
                        >
                            <Button
                                size="lg"
                                onClick={() => scrollTo(SECTION_IDS.COMPARISON)}
                                className="gap-2 w-full sm:w-auto"
                            >
                                <Eye className="h-4 w-4" />
                                {t.heroCtaSeeExample}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                onClick={handleCopyShareMsg}
                                className="gap-2 w-full sm:w-auto"
                            >
                                <Copy className="h-4 w-4" />
                                {t.heroCtaShare}
                            </Button>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.button
                        aria-label="Scroll to content"
                        onClick={() => scrollTo(SECTION_IDS.COMPARISON)}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer touch-manipulation text-muted-foreground/40 hover:text-muted-foreground transition-colors"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowDown className="h-5 w-5" />
                    </motion.button>
                </motion.section>

                {/* ── Comparison ─────────────────────────────────────── */}
                <motion.section
                    id={SECTION_IDS.COMPARISON}
                    className="py-24 scroll-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{t.compSectionDesc}</p>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.compSectionTitle}</h2>
                        </div>
                        <ComparisonSection />
                    </div>
                </motion.section>

                {/* ── Concept ────────────────────────────────────────── */}
                <section id={SECTION_IDS.EXPLANATION} className="py-24 scroll-mt-20 bg-secondary/30">
                    <ConceptExplanation />
                </section>

                {/* ── Usage ──────────────────────────────────────────── */}
                <section id={SECTION_IDS.USAGE} className="py-24 scroll-mt-20">
                    <UsageSection />
                </section>

                {/* ── Quiz ───────────────────────────────────────────── */}
                <motion.section
                    id={SECTION_IDS.QUIZ}
                    className="py-24 scroll-mt-20 bg-secondary/30"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                >
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <QuizGame />
                    </div>
                </motion.section>
            </div>
        </div>
    )
}
