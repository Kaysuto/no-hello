"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ExternalLink as LinkIcon } from "lucide-react"

interface ExternalLinkProps {
    href: string
    label: string
    children: React.ReactNode
}

export function ExternalLink({ href, label, children }: ExternalLinkProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <span className="cursor-pointer hover:underline hover:text-foreground transition-colors inline-flex items-center gap-1">
                    {children}
                </span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Sortie du site</DialogTitle>
                    <DialogDescription>
                        Vous êtes sur le point de visiter un site externe : <span className="font-semibold text-foreground">{label}</span>
                        <br />
                        <span className="text-xs text-muted-foreground break-all">{href}</span>
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-end">
                    <DialogTrigger asChild>
                        <Button variant="outline">Annuler</Button>
                    </DialogTrigger>
                    <Button asChild>
                        <a href={href} target="_blank" rel="noopener noreferrer">
                            Visiter le site <LinkIcon className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
