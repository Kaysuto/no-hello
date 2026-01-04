"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion"

export function Cursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Higher stiffness and lower damping for extreme responsiveness
    const moveConfig = { damping: 15, stiffness: 450, mass: 0.1 }
    // Morph config for the snap effect (more punchy)
    const morphConfig = { damping: 20, stiffness: 300 }

    const x = useSpring(mouseX, moveConfig)
    const y = useSpring(mouseY, moveConfig)

    const sizeX = useSpring(12, morphConfig)
    const sizeY = useSpring(12, morphConfig)
    const borderRadius = useSpring(999, morphConfig)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true)
            
            if (isHovered && hoveredRect) {
                // When snapped, allow slight movement towards mouse for a "magnetic" feel
                const centerX = hoveredRect.left + hoveredRect.width / 2
                const centerY = hoveredRect.top + hoveredRect.height / 2
                const deltaX = (e.clientX - centerX) * 0.1
                const deltaY = (e.clientY - centerY) * 0.1
                mouseX.set(centerX + deltaX)
                mouseY.set(centerY + deltaY)
            } else {
                mouseX.set(e.clientX)
                mouseY.set(e.clientY)
            }
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const interactive = target.closest("button, a, .interactive")
            
            if (interactive) {
                const rect = interactive.getBoundingClientRect()
                setHoveredRect(rect)
                setIsHovered(true)
                
                // Snap position to center of element
                mouseX.set(rect.left + rect.width / 2)
                mouseY.set(rect.top + rect.height / 2)
                
                // Set size to envelop element with padding
                sizeX.set(rect.width + 12)
                sizeY.set(rect.height + 8)
                borderRadius.set(12)
            }
        }

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const interactive = target.closest("button, a, .interactive")
            
            if (interactive) {
                setIsHovered(false)
                setHoveredRect(null)
                
                // Return to dot
                sizeX.set(12)
                sizeY.set(12)
                borderRadius.set(999)
            }
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseover", handleMouseOver)
        window.addEventListener("mouseout", handleMouseOut)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseover", handleMouseOver)
            window.removeEventListener("mouseout", handleMouseOut)
        }
    }, [isHovered, hoveredRect, isVisible, mouseX, mouseY, sizeX, sizeY, borderRadius])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-9999 mix-blend-difference"
                    style={{
                        x,
                        y,
                        translateX: "-50%",
                        translateY: "-50%",
                        width: sizeX,
                        height: sizeY,
                        borderRadius,
                    }}
                >
                    <motion.div
                        className="w-full h-full bg-white/20 backdrop-blur-md border border-white/30"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={{
                            borderRadius: "inherit"
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
