"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"



const defaultTranslations = {
    headerPre: "S'il vous plaît, ne dites pas juste",
    headerItalic: "Bonjour",
    headerDesc: "Pourquoi dire bonjour sans poser votre question est une perte de temps.",

    chatMe: "Salut !",
    chatColleague: "Collègue Chat",
    chatTyping: "est en train d'écrire",
    chatInterruption: "⚠️ Interruption de concentration en cours...",

    conceptTitle: "Pourquoi est-ce contre-productif ?",

    conceptProblemTitle: "Le Problème",
    conceptProblemBody: "Imaginez appeler quelqu'un au téléphone, dire \"Bonjour !\", puis le mettre immédiatement en attente...",

    conceptConsequenceTitle: "Pourquoi c'est gênant",
    conceptConsequenceBody: "Vous forcez votre collègue à attendre que vous formuliez votre question, interrompant sa concentration inutilement.",

    conceptSolutionTitle: "La Solution",
    conceptSolutionBody: "La bonne pratique consiste à inclure votre salutation ET votre question dans le même message.",

    conceptBenefitTitle: "Le Résultat",
    conceptBenefitBody: "Votre collègue peut répondre dès qu'il est disponible, avec tout le contexte nécessaire.",

    compSectionTitle: "La différence est claire",
    compSectionDesc: "Un petit changement pour une grande productivité.",

    badTitle: "Mauvaise Pratique",
    badMsg1: "Salut",
    badWait: "... le collègue attend que vous écriviez la suite ...",
    badReply: "Salut ? Qu'est-ce qu'il y a ?",
    badMsg2: "Est-ce que tu as une minute ?",

    goodTitle: "Bonne Pratique",
    goodMsg1: "Salut ! J'ai une question sur le déploiement. Est-ce qu'on doit vider le cache avant le build ? J'ai l'erreur suivante...",
    goodContext: "... le collègue a tout le contexte immédiatement ...",
    goodReply: "Salut ! Oui, absolument. Utilise la commande `clear-cache`.",

    shareBtn: "Partager le concept",
    shareTitle: "Lien copié !",
    shareDesc: "L'URL a été copiée dans votre presse-papier.",

    quizTitle: "Entraînez-vous !",
    quizDesc: "Choisissez la meilleure réponse pour chaque situation.",
    quizNext: "Question Suivante",
    quizFinish: "Terminer",
    quizScore: "Votre score :",
    quizPerfect: "Parfait ! Vous êtes un pro du NoHello.",
    quizGood: "Pas mal, mais vous pouvez faire mieux !",
    quizBad: "Aïe ! Il faut revoir les bases.",
    quizRetry: "Réessayer",

    q1Question: "Vous avez besoin d'aide pour un bug urgent.",
    q1Bad1: "Salut, tu as 5 minutes ?",
    q1Bad2: "Coucou !",
    q1Good: "Salut ! J'ai un bug critique sur le login (Erreur 500). Tu peux jeter un œil ?",

    q2Question: "Vous voulez caler une réunion.",
    q2Bad1: "Dispo quand ?",
    q2Bad2: "Hello, on peut se parler ?",
    q2Good: "Hello, je voudrais discuter du projet X. Es-tu libre mardi à 14h ?",

    q3Question: "Vous cherchez un document.",
    q3Bad1: "Le doc est où ?",
    q3Bad2: "Salut",
    q3Good: "Salut, je ne trouve pas la spec d'API v2. Est-ce qu'elle est sur le Drive ?",

    footer: "Inspiré par nohello.net • Reconstruit avec Next.js & Shadcn"
}

export type TranslationMap = typeof defaultTranslations

interface TranslationContextType {
    language: string
    t: TranslationMap
    isTranslating: boolean
    setLanguage: (lang: string) => Promise<void>
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [language, setInternalLanguage] = useState("fr")
    const [t, setT] = useState<TranslationMap>(defaultTranslations)
    const [isTranslating, setIsTranslating] = useState(false)

    const setLanguage = async (lang: string) => {
        if (lang === language) return

        setInternalLanguage(lang)

        if (lang === "fr") {
            setT(defaultTranslations)
            return
        }

        setIsTranslating(true)
        try {
            const response = await fetch("/api/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: defaultTranslations,
                    targetLanguage: lang
                }),
            })

            const data = await response.json()
            console.log("Translation response:", data)
            if (data.translatedContent) {
                setT(data.translatedContent)
            } else {
                console.error("No translatedContent in response", data)
            }
        } catch (error) {
            console.error("Translation failed", error)
        } finally {
            setIsTranslating(false)
        }
    }

    return (
        <TranslationContext.Provider value={{ language, t, isTranslating, setLanguage }}>
            {children}
        </TranslationContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(TranslationContext)
    if (context === undefined) {
        throw new Error("useTranslation must be used within a TranslationProvider")
    }
    return context
}
