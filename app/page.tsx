import Hero from "@/components/hero"
import Features from "@/components/features"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
    </div>
  )
}

