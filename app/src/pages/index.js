import HeroSection from '@/components/HeroSection'
import { SpreadsheetProvider } from '@/components/SpreadsheetContext'

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col bg-[#ffffff] container mx-auto px-12 py-4">
      <SpreadsheetProvider>
        <HeroSection />
      </SpreadsheetProvider>
    </section>
  )
}