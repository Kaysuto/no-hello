"use client"
import { Navbar } from "@/components/navbar"
import { useTranslation } from "@/components/translation-context"
import { ChatSimulation } from "@/components/chat-simulation"
import { ComparisonSection } from "@/components/comparison-section"
import { ConceptExplanation } from "@/components/concept-explanation"
import { QuizGame } from "@/components/quiz-game"
import { ShareButton } from "@/components/share-button"
import { TypingText } from "@/components/typing-text"

export function HomeContent() {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-background relative overflow-hidden selection:bg-primary/20">
            <Navbar />

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[120px]" />
            </div>

            <div className="relative z-10 container mx-auto px-4 pt-16">
                <main className="space-y-24">
                    {/* Hero Section */}
                    {/* Hero Section */}
                    <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
                        <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Column: Chat Simulation */}
                            <div className="flex justify-center lg:justify-end order-1">
                                <div className="w-full max-w-md transform scale-100 hover:scale-105 transition-transform duration-500">
                                    <ChatSimulation />
                                </div>
                            </div>

                            {/* Right Column: Text Content */}
                            <div className="space-y-6 text-center lg:text-left order-2">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight">
                                    <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                                        {t.headerPre}
                                    </span>
                                    <span className="text-primary italic"> "
                                        <TypingText
                                            words={["Bonjour", "Hello", "Hola", "Hallo", "Ciao", "Olá", "Namaste", "Salaam", "Konnichiwa", "Ni Hao"]}
                                            className="not-italic"
                                        />"
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                    {t.headerDesc}
                                </p>
                            </div>
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
                    <section id="quiz" className="py-12 scroll-mt-24">
                        <QuizGame />
                    </section>

                    <div className="flex justify-center sm:hidden pb-12">
                        <ShareButton />
                    </div>
                </main>
            </div>
        </div>
    );
}
