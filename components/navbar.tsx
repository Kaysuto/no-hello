"use client"
import { TranslationSelector } from "@/components/translation-selector"
import { ShareButton } from "@/components/share-button"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Navbar() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none"
        >
            <div className="pointer-events-auto flex items-center gap-1 p-2 bg-background/80 backdrop-blur-xl rounded-2xl shadow-[0px_0.6px_0.6px_-1.25px_rgba(0,0,0,0.18),0px_2.3px_2.3px_-2.5px_rgba(0,0,0,0.16),0px_10px_10px_-3.75px_rgba(0,0,0,0.06)] dark:shadow-[0px_0.6px_0.6px_-1.25px_rgba(255,255,255,0.18),0px_2.3px_2.3px_-2.5px_rgba(255,255,255,0.16),0px_10px_10px_-3.75px_rgba(255,255,255,0.06)] border border-white/20">

                {/* Navigation Links */}
                <div className="flex items-center gap-1 mr-2 hidden sm:flex">
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection("explanation")}
                        className="h-9 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                        Concept
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={() => scrollToSection("quiz")}
                        className="h-9 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                        Quiz
                    </Button>
                </div>

                <div className="h-4 w-[1px] bg-border mx-2 hidden sm:block" />

                {/* Actions */}
                <div className="flex items-center gap-1">
                    <ShareButton key="share" />
                    <TranslationSelector key="translation" />

                    <div className="w-2" /> {/* Spacer */}

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                        asChild
                    >
                        <a href="https://github.com/Kaysuto/no-hello" target="_blank" rel="noopener noreferrer">
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                                transition={{ duration: 0.5 }}
                            >
                                <Github className="h-4 w-4" />
                            </motion.div>
                            <span className="sr-only">GitHub</span>
                        </a>
                    </Button>
                </div>
            </div>
        </motion.nav>
    )
}
