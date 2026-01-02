import { XCircle, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslation } from "@/components/translation-context"

export function ComparisonSection() {
    const { t } = useTranslation()

    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Bad Practice */}
            <Card className="p-6 border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/10">
                <div className="flex items-center gap-2 mb-4 text-red-600 dark:text-red-400 font-semibold">
                    <XCircle className="h-5 w-5" />
                    {t.badTitle}
                </div>
                <div className="space-y-4 text-sm">
                    <div className="bg-background/80 p-3 rounded-lg rounded-bl-none shadow-sm dark:bg-card ml-auto max-w-[90%] border">
                        <div className="text-xs text-muted-foreground mb-1">10:00 - Vous</div>
                        {t.badMsg1}
                    </div>
                    <div className="text-center text-xs text-muted-foreground italic py-2">
                        {t.badWait}
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg rounded-br-none shadow-sm dark:bg-primary/20 mr-auto max-w-[90%]">
                        <div className="text-xs text-muted-foreground mb-1">10:05 - Collègue</div>
                        {t.badReply}
                    </div>
                    <div className="bg-background/80 p-3 rounded-lg rounded-bl-none shadow-sm dark:bg-card ml-auto max-w-[90%] border">
                        <div className="text-xs text-muted-foreground mb-1">10:06 - Vous</div>
                        {t.badMsg2}
                    </div>
                </div>
            </Card>

            {/* Good Practice */}
            <Card className="p-6 border-green-200 dark:border-green-900/50 bg-green-50/50 dark:bg-green-950/10 h-full">
                <div className="flex items-center gap-2 mb-4 text-green-600 dark:text-green-400 font-semibold">
                    <CheckCircle2 className="h-5 w-5" />
                    {t.goodTitle}
                </div>
                <div className="space-y-4 text-sm h-full">
                    <div className="bg-background/80 p-3 rounded-lg rounded-bl-none shadow-sm dark:bg-card ml-auto max-w-[90%] border">
                        <div className="text-xs text-muted-foreground mb-1">10:00 - Vous</div>
                        {t.goodMsg1}
                    </div>
                    <div className="text-center text-xs text-muted-foreground italic py-2">
                        {t.goodContext}
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg rounded-br-none shadow-sm dark:bg-primary/20 mr-auto max-w-[90%]">
                        <div className="text-xs text-muted-foreground mb-1">10:01 - Collègue</div>
                        {t.goodReply}
                    </div>
                </div>
            </Card>
        </div>
    )
}
