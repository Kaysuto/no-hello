import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/translation-context"
import { copyToClipboard } from "@/lib/clipboard"

export function ShareButton({ showLabel = true }: { showLabel?: boolean }) {
    const { t } = useTranslation()

    const handleCopyMessage = () => {
        void copyToClipboard(t.shareCustomMsg, t.shareMsgCopied, t.shareMsgDesc)
    }

    return (
        <Button
            variant="ghost"
            onClick={handleCopyMessage}
            className="h-9 px-4 gap-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors justify-start"
        >
            <Share2 className="h-4 w-4" />
            {(showLabel) && <span className={showLabel ? "" : "hidden sm:inline"}>{t.shareBtn}</span>}
        </Button>
    )
}
