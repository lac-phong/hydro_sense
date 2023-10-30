import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import ExistingSheets from '@/components/ExistingSheets'

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col bg-[#ffffff] container mx-auto px-12 py-4">
      <HeroSection />
    </section>
  )
}