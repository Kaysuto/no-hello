"use client"

import { useTranslation } from "@/components/translation-context"
import { TranslationSelector } from "@/components/translation-selector"
import { ChatSimulation } from "@/components/chat-simulation"
import { ComparisonSection } from "@/components/comparison-section"
import { ConceptExplanation } from "@/components/concept-explanation"
import { QuizGame } from "@/components/quiz-game"
import { ShareButton } from "@/components/share-button"
import { MessageCircle } from "lucide-react"

export function HomeContent() {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-background relative overflow-hidden selection:bg-primary/20">

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Header */}
                <header className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="bg-primary/10 p-2 rounded-lg">
                            <MessageCircle className="h-6 w-6 text-primary" />
                        </div>
                        <span>No <span className="text-primary">Hello</span></span>
                    </div>

                    <div className="flex items-center gap-4">
                        <TranslationSelector />
                        <div className="hidden sm:block">
                            <ShareButton />
                        </div>
                    </div>
                </header>

                <main className="space-y-24">
                    {/* Hero Section */}
                    <section className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-8 lg:py-20">
                        {/* Left Column: Chat Simulation */}
                        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
                            <div className="w-full max-w-md transform scale-100 lg:scale-105 transition-transform duration-500">
                                <ChatSimulation />
                            </div>
                        </div>

                        {/* Right Column: Text Content */}
                        <div className="space-y-6 text-center lg:text-left order-1 lg:order-2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                    {t.headerPre}
                                </span>
                                <br className="hidden lg:block" />
                                <span className="text-primary italic"> "{t.headerItalic}"</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                {t.headerDesc}
                            </p>
                        </div>
                    </section>

                    {/* Explanation Section */}
                    <section id="explanation" className="scroll-mt-24">
                        <ConceptExplanation />
                    </section>

                    {/* Comparison Section */}
                    <section className="bg-gradient-to-b from-transparent via-secondary/5 to-transparent py-12 -mx-4 px-4 sm:mx-0 sm:px-0 sm:rounded-3xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight mb-4">{t.compSectionTitle}</h2>
                            <p className="text-muted-foreground">{t.compSectionDesc}</p>
                        </div>
                        <ComparisonSection />
                    </section>

                    {/* Quiz Section */}
                    <section className="py-12">
                        <QuizGame />
                    </section>

                    <div className="flex justify-center sm:hidden pb-12">
                        <ShareButton />
                    </div>
                </main>

                {/* Footer */}
                <footer className="text-center text-sm text-muted-foreground py-12 border-t border-border mt-12">
                    <p>
                        {t.footer}
                    </p>
                </footer>
            </div>
        </div>
    );
}
