"use client"

import { Share2, Copy, Link } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ShareButton() {
    const handleCopyLink = () => {
        if (typeof window !== "undefined") {
            navigator.clipboard.writeText(window.location.href)
            toast.success("Lien copié !", {
                description: "Le lien vers le site a été copié dans le presse-papier.",
                duration: 3000,
            })
        }
    }

    const handleCopyMessage = () => {
        const text = "Salut ! Au lieu de juste dire bonjour, pose directement ta question. Ça permet d'économiser du temps pour tout le monde ! Pour en savoir plus : https://nohello.net"
        navigator.clipboard.writeText(text)
        toast.success("Message copié !", {
            description: "Tu peux maintenant le coller dans ta conversation.",
            duration: 3000,
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="h-9 px-4 gap-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    title="Partager"
                >
                    <Share2 className="h-4 w-4" />
                    <span className="hidden sm:inline">Partager</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleCopyLink} className="gap-2 cursor-pointer">
                    <Link className="h-4 w-4" />
                    Copier le lien
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopyMessage} className="gap-2 cursor-pointer">
                    <Copy className="h-4 w-4" />
                    Copier le message
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
