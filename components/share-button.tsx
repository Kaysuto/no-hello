"use client"

import { Share2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/translation-context"

export function ShareButton() {
    const { t } = useTranslation()

    const handleShare = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href)
            toast.success(t.shareTitle, {
                description: t.shareDesc,
                duration: 3000,
            })
        }
    }

    return (
        <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-full shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
            onClick={handleShare}
        >
            <Share2 className="h-4 w-4" />
            {t.shareBtn}
        </Button>
    )
}
