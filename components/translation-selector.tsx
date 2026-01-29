"use client"

import * as React from "react"
import { useTranslation } from "@/components/translation-context"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Loader2, Globe, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function TranslationSelector({ className }: { className?: string }) {
    const { language, setLanguage, isTranslating } = useTranslation()
    const [mounted, setMounted] = React.useState(false)
    const [isAddingCustom, setIsAddingCustom] = React.useState(false)
    const [customLang, setCustomLang] = React.useState("")

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const handleCustomSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (customLang.trim()) {
            setLanguage(customLang.trim().toLowerCase())
            setIsAddingCustom(false)
            setCustomLang("")
        }
    }

    if (!mounted) {
        return (
            <div className="flex items-center">
                <div className="w-[120px] h-9 rounded-lg bg-muted/10 animate-pulse" />
            </div>
        )
    }

    if (isAddingCustom) {
        return (
            <form onSubmit={handleCustomSubmit} className="flex items-center gap-2">
                <Input
                    autoFocus
                    placeholder="Langue (ex: it, pt...)"
                    value={customLang}
                    onChange={(e) => { setCustomLang(e.target.value); }}
                    className="h-9 w-[160px] text-sm"
                />
                <Button type="submit" size="sm" className="h-9 px-3" disabled={isTranslating}>
                    {isTranslating ? <Loader2 className="h-4 w-4 animate-spin" /> : "OK"}
                </Button>
                <Button 
                    type="button" 
                    variant="ghost" 
                    size="sm" 
                    className="h-9 px-2 text-muted-foreground"
                    onClick={() => { setIsAddingCustom(false); }}
                >
                    ✕
                </Button>
            </form>
        )
    }

    const standardLanguages = ["fr", "en", "es", "de", "ja"]
    const isCustom = !standardLanguages.includes(language)

    return (
        <div className="flex items-center">
            <Select 
                value={isCustom ? "custom-display" : language} 
                onValueChange={(val) => {
                    if (val === "custom") {
                        setIsAddingCustom(true)
                    } else {
                        setLanguage(val)
                    }
                }} 
                disabled={isTranslating}
            >
                <SelectTrigger className={cn("w-auto min-w-[120px] h-9 border-none shadow-none bg-transparent hover:bg-muted/50 focus:ring-0 rounded-lg text-muted-foreground hover:text-foreground transition-colors", className)}>
                    <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <SelectValue placeholder="Langue" />
                    </div>
                    {isTranslating && <Loader2 className="ml-2 h-3 w-3 animate-spin" />}
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                    {isCustom && (
                        <SelectItem value="custom-display" className="capitalize">
                            {language}
                        </SelectItem>
                    )}
                    <div className="h-px bg-muted my-1" />
                    <SelectItem value="custom" className="text-primary font-medium">
                        <div className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            Autre...
                        </div>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
