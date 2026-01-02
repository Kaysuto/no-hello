"use client"

import { Cookie, X, ExternalLink, ShieldCheck } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function CookieWidget() {
    const [isHovered, setIsHovered] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Widget Button */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-6 left-6 z-50"
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className="block focus:outline-none"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <motion.div
                        className={cn(
                            "flex items-center bg-background/80 backdrop-blur-md border border-primary/20 shadow-lg cursor-pointer overflow-hidden relative z-50",
                            "text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/50 transition-colors"
                        )}
                        initial={{ width: "3rem", borderRadius: "9999px" }}
                        animate={{
                            width: isHovered ? "auto" : "3rem",
                            borderRadius: "9999px"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        style={{ height: "3rem" }}
                    >
                        <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                            <Cookie className="h-6 w-6" />
                        </div>

                        <AnimatePresence>
                            {isHovered && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="whitespace-nowrap pr-6 text-sm font-medium"
                                >
                                    Confidentialité
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </button>
            </motion.div>

            {/* Privacy Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4 z-[70]"
                        >
                            <Card className="p-6 shadow-2xl border-primary/20 bg-card/95 backdrop-blur-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4">
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full hover:bg-destructive/10 hover:text-destructive">
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3 text-primary">
                                        <div className="p-2 bg-primary/10 rounded-full">
                                            <ShieldCheck className="h-6 w-6" />
                                        </div>
                                        <h2 className="text-xl font-bold">Transparence & Données</h2>
                                    </div>

                                    <div className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                                        <p>
                                            <span className="font-semibold text-foreground">Ce que nous collectons :</span><br />
                                            Ce site utilise uniquement des cookies techniques nécessaires à votre confort de navigation (préférences de langue et thème sombre/clair). Ces données sont stockées localement sur votre appareil.
                                        </p>
                                        <p>
                                            <span className="font-semibold text-foreground">Services Tiers :</span><br />
                                            Nous utilisons des services comme Google Gemini (IA) pour la traduction. Bien que nous ne courions pas de publicités, ces services peuvent collecter des données techniques standard conformément à leurs propres politiques.
                                        </p>
                                    </div>

                                    <div className="pt-2">
                                        <Button asChild variant="outline" className="w-full gap-2 hover:bg-primary/5 hover:text-primary border-primary/20">
                                            <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">
                                                <span>Voir la Politique de Google</span>
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
