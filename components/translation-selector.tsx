"use client"

import { useTranslation } from "@/components/translation-context"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMounted } from "@/lib/hooks/use-mounted"

export function TranslationSelector({ className }: { className?: string }) {
    const { language, setLanguage } = useTranslation()
    const mounted = useMounted()

    if (!mounted) {
        return (
            <div className="flex items-center">
                <div className="w-30 h-9 rounded-lg bg-muted/10 animate-pulse" />
            </div>
        )
    }

    return (
        <div className="flex items-center">
            <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className={cn("w-auto min-w-30 h-9 border-none shadow-none bg-transparent hover:bg-muted/50 focus:ring-0 rounded-lg text-muted-foreground hover:text-foreground transition-colors", className)}>
                    <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <SelectValue placeholder="Langue" />
                    </div>
                </SelectTrigger>
                <SelectContent position="popper" align="end" sideOffset={8} className="min-w-40">
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
