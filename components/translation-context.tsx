"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { STATIC_TRANSLATIONS } from "@/lib/translations"
import { STORAGE_KEYS, LANGUAGE_CODES } from "@/lib/constants"
import { SafeStorage } from "@/lib/storage"

const defaultTranslations = STATIC_TRANSLATIONS.fr

// STATIC_TRANSLATIONS is `as const`: widen the French literals so every language fits
export type TranslationMap = { [K in keyof typeof defaultTranslations]: string }

interface TranslationContextType {
    language: string
    t: TranslationMap
    setLanguage: (lang: string) => void
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

// Type guard to check if a language code is in STATIC_TRANSLATIONS
const isStaticLanguage = (lang: string): lang is keyof typeof STATIC_TRANSLATIONS =>
    Object.hasOwn(STATIC_TRANSLATIONS, lang)

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [language, setInternalLanguage] = useState<string>(LANGUAGE_CODES.FRENCH)
    const [t, setT] = useState<TranslationMap>(defaultTranslations)

    // Other languages are left to the browser's built-in page translation
    const setLanguage = (lang: string) => {
        if (!isStaticLanguage(lang)) return
        setInternalLanguage(lang)
        setT(STATIC_TRANSLATIONS[lang])
        SafeStorage.setItem(STORAGE_KEYS.LANGUAGE, lang)
    }

    // Load initial language from localStorage, else auto-detect from the browser
    React.useEffect(() => {
        const initialLang = SafeStorage.getItem(STORAGE_KEYS.LANGUAGE) || navigator.language.split("-")[0]
        if (initialLang && initialLang !== LANGUAGE_CODES.FRENCH) {
            // eslint-disable-next-line react-hooks/set-state-in-effect -- localStorage/navigator only exist after hydration
            setLanguage(initialLang)
        }
    }, [])

    // An accurate <html lang> is what makes browsers offer to translate the page
    React.useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    return (
        <TranslationContext.Provider value={{ language, t, setLanguage }}>
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
