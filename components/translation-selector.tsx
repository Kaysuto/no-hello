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
import { Loader2 } from "lucide-react"

export function TranslationSelector() {
    const { language, setLanguage, isTranslating } = useTranslation()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="flex items-center">
                <div className="w-[120px] h-9 rounded-lg bg-muted/10 animate-pulse" />
            </div>
        )
    }

    return (
        <div className="flex items-center">
            <Select value={language} onValueChange={setLanguage} disabled={isTranslating}>
                <SelectTrigger className="w-[120px] h-9 border-none shadow-none bg-transparent hover:bg-muted/50 focus:ring-0 rounded-lg text-muted-foreground hover:text-foreground transition-colors">
                    <SelectValue placeholder="Langue" />
                    {isTranslating && <Loader2 className="ml-2 h-3 w-3 animate-spin" />}
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                    <SelectItem value="ja">日本語</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
