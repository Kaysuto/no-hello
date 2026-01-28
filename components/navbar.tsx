"use client"
import { TranslationSelector } from "@/components/translation-selector"
import { ShareButton } from "@/components/share-button"
import { ExternalLink } from "@/components/external-link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Github, Menu, Globe, BookOpen, CircleHelp } from "lucide-react"

import { useTranslation } from "@/components/translation-context"
import { useState } from "react"

export function Navbar() {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setOpen(false)
        }
    }

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 md:top-6 inset-x-0 z-50 flex justify-end md:justify-center px-4 pt-4 md:p-0 pointer-events-none"
        >
            <div className="pointer-events-auto flex items-center gap-1 bg-background/80 backdrop-blur-xl shadow-lg border border-white/20 w-auto h-auto p-2 rounded-xl md:rounded-2xl">

                {/* Mobile Menu Trigger & Sidebar */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-12 pb-6">
                            <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                            <div className="flex flex-col h-full">
                                {/* Navigation Section */}
                                <div className="flex flex-col gap-1">
                                    <div className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        Navigation
                                    </div>
                                    <Button
                                        variant="ghost"
                                        onClick={() => { scrollToSection("explanation"); }}
                                        className="justify-start text-base h-12 px-4 w-full gap-3"
                                    >
                                        <BookOpen className="h-5 w-5 opacity-70" />
                                        {t.navConcept}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        onClick={() => { scrollToSection("quiz"); }}
                                        className="justify-start text-base h-12 px-4 w-full gap-3"
                                    >
                                        <CircleHelp className="h-5 w-5 opacity-70" />
                                        {t.navQuiz}
                                    </Button>
                                </div>
                                
                                {/* Bottom Actions Section */}
                                <div className="mt-auto flex flex-col gap-1">
                                    <div className="h-px bg-border my-4 mx-4" />
                                    
                                    <div className="w-full">
                                        <ShareButton showLabel={true} />
                                    </div>
                                    <div className="flex items-center h-11 px-4 gap-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                                        <Globe className="h-4 w-4 shrink-0" />
                                        <TranslationSelector className="w-full h-auto p-0 justify-start" />
                                    </div>
                                    <Button
                                        variant="ghost"
                                        className="justify-start h-11 px-4 w-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors gap-3 no-underline hover:no-underline"
                                        asChild
                                    >
                                        <ExternalLink href="https://github.com/Kaysuto/no-hello" label="GitHub/Kaysuto">
                                            <Github className="h-4 w-4 shrink-0" />
                                            Github
                                        </ExternalLink>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-1 mr-2">
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection("explanation")}
                        className="h-9 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                        {t.navConcept}
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection("quiz")}
                        className="h-9 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                        {t.navQuiz}
                    </Button>
                </div>

                <div className="h-4 w-px bg-border mx-2 hidden md:block" />

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-1">
                    <ShareButton key="share" />
                    <TranslationSelector key="translation" />

                    <div className="w-2" /> {/* Spacer */}

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                        asChild
                    >
                        <ExternalLink href="https://github.com/Kaysuto/no-hello" label="GitHub/Kaysuto">
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <Github className="h-4 w-4" />
                            </motion.div>
                            <span className="sr-only">GitHub</span>
                        </ExternalLink>
                    </Button>
                </div>
            </div>
        </motion.nav>
    )
}
