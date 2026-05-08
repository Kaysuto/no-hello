"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useMounted } from "@/lib/hooks/use-mounted"
import { useTranslation } from "@/components/translation-context"

interface ThemeToggleProps {
    /** When true, renders a wide button with a label (mobile menu). Otherwise icon-only (navbar). */
    expanded?: boolean
}

export function ThemeToggle({ expanded = false }: ThemeToggleProps) {
    const { resolvedTheme, setTheme } = useTheme()
    const mounted = useMounted()
    const { t } = useTranslation()

    const isDark = mounted ? resolvedTheme === "dark" : true
    const label = isDark ? t.themeToggleLight : t.themeToggleDark

    const toggle = () => setTheme(isDark ? "light" : "dark")

    if (expanded) {
        return (
            <Button
                variant="ghost"
                onClick={toggle}
                className="justify-start text-base h-12 px-4 w-full gap-3"
                aria-label={label}
            >
                {/* Avoid hydration mismatch by hiding icon swap until mounted */}
                {mounted && (isDark ? <Sun className="h-5 w-5 opacity-70" /> : <Moon className="h-5 w-5 opacity-70" />)}
                {!mounted && <Sun className="h-5 w-5 opacity-70" />}
                {label}
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={label}
            className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
            {mounted && (isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />)}
            {!mounted && <Sun className="h-4 w-4" />}
            <span className="sr-only">{label}</span>
        </Button>
    )
}
