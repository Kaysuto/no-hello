import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/translation-context"
import { copyToClipboard } from "@/lib/clipboard"

export function ShareButton({ showLabel = true }: { showLabel?: boolean }) {
    const { t } = useTranslation()

    const handleCopyMessage = () => {
        void copyToClipboard(t.shareCustomMsg, t.shareMsgCopied, t.shareMsgDesc)
    }

    if (!showLabel) {
        return (
            <Button
                variant="ghost"
                size="icon"
                onClick={handleCopyMessage}
                aria-label={t.shareBtn}
                className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">{t.shareBtn}</span>
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            onClick={handleCopyMessage}
            className="h-12 px-4 gap-3 rounded-lg text-base text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors justify-start w-full"
        >
            <Share2 className="h-5 w-5 opacity-70" />
            <span>{t.shareBtn}</span>
        </Button>
    )
}
