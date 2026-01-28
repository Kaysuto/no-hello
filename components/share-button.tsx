import { Share2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/components/translation-context"

export function ShareButton({ showLabel = true }: { showLabel?: boolean }) {
    const { t } = useTranslation()

    const handleCopyMessage = () => {
        const text = t.shareCustomMsg
        void navigator.clipboard.writeText(text)
        toast.success(t.shareMsgCopied, {
            description: t.shareMsgDesc,
            duration: 3000,
        })
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
