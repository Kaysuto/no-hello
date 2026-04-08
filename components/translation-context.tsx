"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"



const defaultTranslations = {
    headerLine1: "S'il vous plaît,",
    headerLine2: "ne dites pas juste",
    headerItalic: "Bonjour",
    headerDesc: "Pourquoi dire bonjour sans poser votre question est une perte de temps.",


    navConcept: "Concept",
    navQuiz: "Quiz",

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

    shareBtn: "Partager",
    shareMsgCopied: "Message copié !",
    shareMsgDesc: "Tu peux maintenant le coller dans ta conversation.",
    shareCustomMsg: "Salut ! Au lieu de juste dire bonjour, pose directement ta question. Ça permet d'économiser du temps pour tout le monde ! Pour en savoir plus : https://nohello.net",

    quizTitle: "Entraînez-vous !",
    quizDesc: "Choisissez la meilleure réponse pour chaque situation.",
    quizNext: "Question Suivante",
    quizFinish: "Terminer",
    quizScore: "Votre score :",
    quizPerfect: "Parfait ! Vous êtes un pro du NoHello.",
    quizGood: "Pas mal, mais vous pouvez faire mieux !",
    quizBad: "Aïe ! Il faut revoir les bases.",
    quizRetry: "Réessayer",
    quizDifficultyTitle: "Choisissez votre niveau",
    quizEasy: "Facile",
    quizMedium: "Moyen",
    quizHard: "Difficile",

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

    q4Question: "Vous voulez remercier un collègue.",
    q4Bad1: "Merci",
    q4Bad2: "Hey",
    q4Good: "Salut ! Merci beaucoup pour ton aide sur la base de données hier, ça m'a sauvé.",

    q5Question: "Vous avez une question sur une tâche Jira.",
    q5Bad1: "Tu peux m'aider sur Jira ?",
    q5Bad2: "Salut Sarah",
    q5Good: "Salut Sarah ! J'ai un doute sur le ticket JIRA-123. Est-ce que le design est validé ?",

    footer: "Inspiré par nohello.net • Reconstruit avec Next.js & Shadcn",
    footerInspiredBy: "Inspiré par ",
    footerRebuiltWith: " • Reconstruit avec ",
    footerMadeWith: "Fait avec ",
    footerBy: " par ",
    footerWarning: "Attention : Si vous voyez ce site dans une bio, préparez-vous à être ignoré au prochain \"Salut\" ! 👻",
    footerSupport: "Soutenir le projet",
    kofiSupport: "M'offrir un café",
    cookiePrivacy: "Confidentialité",
    cookieTitle: "Transparence & Données",
    cookieSection1Title: "Ce que nous collectons :",
    cookieSection1Body: "Ce site utilise uniquement des cookies techniques nécessaires à votre confort de navigation (préférences de langue et thème sombre/clair). Ces données sont stockées localement sur votre appareil.",
    cookieSection2Title: "Services Tiers :",
    cookieSection2Body: "Nous utilisons des services comme Google Gemini (IA) pour la traduction. Bien que nous ne courions pas de publicités, ces services peuvent collecter des données techniques standard conformément à leurs propres politiques.",
    cookieGooglePolicy: "Voir la Politique de Google"
}

export type TranslationMap = typeof defaultTranslations

interface TranslationContextType {
    language: string
    t: TranslationMap
    isTranslating: boolean
    setLanguage: (lang: string) => Promise<void>
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)


import { STATIC_TRANSLATIONS } from "@/lib/translations"
import { STORAGE_KEYS, LANGUAGE_CODES } from "@/lib/constants"
import { SafeStorage } from "@/lib/storage"
import { toast } from "sonner"

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [language, setInternalLanguage] = useState("fr")
    const [t, setT] = useState<TranslationMap>(defaultTranslations)
    const [isTranslating, setIsTranslating] = useState(false)

    // Type guard to check if a language code is in STATIC_TRANSLATIONS
    const isStaticLanguage = (lang: string): lang is keyof typeof STATIC_TRANSLATIONS => {
        return lang in STATIC_TRANSLATIONS
    }

    // Load initial language from localStorage or browser if available
    React.useEffect(() => {
        const savedLang = SafeStorage.getItem(STORAGE_KEYS.LANGUAGE)
        if (savedLang) {
            if (savedLang !== LANGUAGE_CODES.FRENCH) {
                void setLanguage(savedLang)
            }
        } else {
            // Auto-detect browser language
            const browserLang = navigator.language.split("-")[0]
            if (browserLang && browserLang !== LANGUAGE_CODES.FRENCH) {
                void setLanguage(browserLang)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const setLanguage = async (lang: string) => {
        if (lang === language) return

        setInternalLanguage(lang)
        SafeStorage.setItem(STORAGE_KEYS.LANGUAGE, lang)

        // 1. Check for 'fr' (default)
        if (lang === LANGUAGE_CODES.FRENCH) {
            setT(defaultTranslations)
            return
        }

        // 2. Check Static Translations (Instant) - Type-safe with type guard
        if (isStaticLanguage(lang)) {
            setT(STATIC_TRANSLATIONS[lang])
            return
        }

        // 3. Check LocalStorage Cache - Type-safe with SafeStorage
        const cached = SafeStorage.getJSON<TranslationMap>(STORAGE_KEYS.TRANSLATION_CACHE(lang))
        if (cached) {
            setT(cached)
            return
        }

        // 4. Fallback to API with proper error handling
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

            if (!response.ok) {
                throw new Error(`Translation API error: ${response.status}`)
            }

            const data = await response.json()
            if (data.translatedContent) {
                setT(data.translatedContent)
                // Save to cache with type-safe storage
                SafeStorage.setJSON(STORAGE_KEYS.TRANSLATION_CACHE(lang), data.translatedContent)
            } else {
                throw new Error("No translatedContent in response")
            }
        } catch (error) {
            console.error("Translation failed", error)
            // Show user-friendly error toast
            toast.error("Translation failed", {
                description: "Using default language. Please try again later.",
            })
            // Fallback to default language
            setT(defaultTranslations)
            setInternalLanguage(LANGUAGE_CODES.FRENCH)
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
