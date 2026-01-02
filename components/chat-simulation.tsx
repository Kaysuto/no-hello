"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTranslation } from "@/components/translation-context"
import { ArrowLeft, Phone, Video, MoreVertical, Paperclip, Send, Smile, Image as ImageIcon, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from "sonner"

export function ChatSimulation() {
    const { t } = useTranslation()
    const [messages, setMessages] = useState<{ id: number; text: string; sender: "me" | "them" }[]>([])
    const [isTyping, setIsTyping] = useState(false)
    const [showFrustration, setShowFrustration] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const startSequence = async () => {
            // Reset
            setMessages([])
            setIsTyping(false)
            setShowFrustration(false)

            await new Promise((resolve) => setTimeout(resolve, 800))
            setMessages([{ id: 1, text: t.chatMe, sender: "them" }])

            await new Promise((resolve) => setTimeout(resolve, 600))
            setIsTyping(true)

            // Wait a long time to simulate frustration...
            await new Promise((resolve) => setTimeout(resolve, 3500))
            setShowFrustration(true)
        }

        startSequence()
    }, [t])

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping, showFrustration])

    const handleSend = () => {
        if (!inputValue.trim()) return

        // Just visual, we don't actually want to interrupt the simulation flow logic too much
        // but let's clear the input to feel "real"
        toast.success("Message envoyé (Simulation)")
        setInputValue("")
    }

    return (
        <Card className="w-full max-w-md mx-auto overflow-hidden bg-background border-border shadow-2xl rounded-2xl flex flex-col h-[500px]">
            {/* App Header */}
            <div className="bg-secondary/10 backdrop-blur-md p-4 border-b border-border/50 flex items-center gap-3 z-10 sticky top-0">
                <div className="relative">
                    <Avatar className="h-10 w-10 border border-background shadow-sm">
                        <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" />
                        <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                </div>
                <div className="flex flex-col leading-tight">
                    <span className="font-semibold text-base">{t.chatColleague}</span>
                    <span className="text-xs text-muted-foreground font-medium">Active now</span>
                </div>
                <div className="ml-auto">
                    <Button variant="ghost" size="icon" className="text-muted-foreground h-8 w-8 hover:bg-secondary/20">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-secondary/5 relative scroll-smooth">
                <div className="text-center">
                    <span className="text-[10px] font-medium text-muted-foreground/60 bg-secondary/30 px-2 py-1 rounded-full">Today 9:41 AM</span>
                </div>

                <AnimatePresence mode="popLayout">
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className={`flex gap-2 ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                        >
                            {msg.sender === "them" && (
                                <Avatar className="h-6 w-6 mt-auto shrink-0 mb-1">
                                    <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" />
                                    <AvatarFallback>C</AvatarFallback>
                                </Avatar>
                            )}
                            <div
                                className={`max-w-[75%] px-4 py-2.5 text-sm shadow-sm ${msg.sender === "me"
                                    ? "bg-primary text-primary-foreground rounded-[20px] rounded-br-[4px]"
                                    : "bg-card border border-border/50 text-card-foreground rounded-[20px] rounded-bl-[4px]"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex gap-2 items-end pl-2"
                    >
                        <Avatar className="h-6 w-6 shrink-0 mb-1">
                            <AvatarImage src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" />
                            <AvatarFallback>C</AvatarFallback>
                        </Avatar>
                        <div className="bg-card border border-border/50 px-4 py-3 rounded-[20px] rounded-bl-[4px] shadow-sm flex items-center gap-1 min-w-[3rem]">
                            <motion.div
                                className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 1.4, delay: 0 }}
                            />
                            <motion.div
                                className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}
                            />
                            <motion.div
                                className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }}
                            />
                        </div>
                    </motion.div>
                )}

                {showFrustration && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-6 text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-destructive/10 text-destructive text-xs font-semibold rounded-full border border-destructive/20 shadow-sm animate-pulse">
                            {t.chatInterruption}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-background border-t border-border flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-muted-foreground shrink-0 rounded-full h-9 w-9 hover:bg-secondary/20">
                            <Paperclip className="h-5 w-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem>
                            <ImageIcon className="mr-2 h-4 w-4" />
                            <span>Image</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Document</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex-1 relative">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Message..."
                        className="rounded-full bg-secondary/50 border-transparent focus-visible:ring-0 px-4 h-10 pr-10"
                    />
                    <Button
                        size="icon"
                        variant="ghost"
                        className="absolute right-1 top-1 h-8 w-8 rounded-full text-muted-foreground hover:bg-secondary/20 hover:text-foreground"
                    >
                        <Smile className="h-5 w-5" />
                    </Button>
                </div>
                <Button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    size="icon"
                    className="shrink-0 rounded-full h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-sm"
                >
                    <Send className="h-4 w-4 ml-0.5" />
                </Button>
            </div>
        </Card>
    )
}
