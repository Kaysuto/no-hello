"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

export interface TypingTextProps {
    words: string[]
    className?: string
}

export function TypingText({ words, className }: TypingTextProps) {
    const [index, setIndex] = useState(0)
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const [displayedText, setDisplayedText] = useState("")

    const baseText = words[index]

    useEffect(() => {
        const controls = animate(count, baseText.length, {
            type: "tween",
            duration: 1.5,
            ease: "easeInOut",
            onUpdate: (latest) => {
                setDisplayedText(baseText.slice(0, Math.round(latest)))
            },
            onComplete: () => {
                setTimeout(() => {
                    const deleteControls = animate(count, 0, {
                        type: "tween",
                        duration: 1,
                        ease: "easeInOut",
                        onUpdate: (latest) => {
                            setDisplayedText(baseText.slice(0, Math.round(latest)))
                        },
                        onComplete: () => {
                            setIndex((prev) => (prev + 1) % words.length)
                        }
                    })
                    return () => deleteControls.stop()
                }, 2000)
            }
        })

        return () => controls.stop()
    }, [index, baseText, count, words.length])

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
            />
        </span>
    )
}
