"use client"

import { ExternalLink } from "@/components/external-link"
import { Coffee } from "lucide-react"
import { motion } from "framer-motion"

export function KofiWidget() {
    return (
        <motion.div 
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <ExternalLink 
                href="https://ko-fi.com/kaysuto" 
                label="Ko-fi (Kaysuto)"
                className="hover:no-underline"
            >
                <div className="bg-[#FF5F5F] hover:bg-[#ff4f4f] text-white p-3 md:p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center group relative overflow-hidden">
                    {/* Ripple Effect Background */}
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    
                    <Coffee className="h-6 w-6 relative z-10" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-[100px] transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-3 font-bold uppercase text-xs tracking-wider relative z-10">
                        Ko-fi
                    </span>
                </div>
            </ExternalLink>
        </motion.div>
    )
}
