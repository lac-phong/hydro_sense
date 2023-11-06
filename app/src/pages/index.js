import HomePage from '@/pages/Home'
import { SpreadsheetProvider } from '@/components/SpreadsheetContext'

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col bg-[#ffffff] container mx-auto px-12 py-4">
      <SpreadsheetProvider>
        <HomePage />
      </SpreadsheetProvider>
    </section>
  )
}