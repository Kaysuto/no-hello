"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { navbarAnimation } from "@/lib/animations"
import { useScrollToSection } from "@/lib/hooks/use-scroll-to-section"
import { MobileMenu } from "./mobile-menu"
import { DesktopNav } from "./desktop-nav"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const scrollTo = useScrollToSection()

  const handleNavigate = (sectionId: string) => {
    scrollTo(sectionId, () => setOpen(false))
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarAnimation}
      className="fixed top-0 md:top-6 inset-x-0 z-50 flex justify-end md:justify-center px-4 pt-4 md:p-0 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center gap-1 bg-background/80 backdrop-blur-xl shadow-lg border border-white/20 w-auto h-auto p-2 rounded-xl md:rounded-2xl">
        <MobileMenu
          open={open}
          onOpenChange={setOpen}
          onNavigate={handleNavigate}
        />
        <DesktopNav onNavigate={handleNavigate} />
      </div>
    </motion.nav>
  )
}
