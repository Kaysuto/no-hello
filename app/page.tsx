import { TranslationProvider } from "@/components/translation-context"
import { HomeContent } from "@/components/home-content"

export default function Home() {
  return (
    <TranslationProvider>
      <HomeContent />
    </TranslationProvider>
  )
}
