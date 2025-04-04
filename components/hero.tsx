"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"

export default function Hero() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  const handleGetStarted = () => {
    if (isAuthenticated) {
      router.push("/dashboard")
    } else {
      router.push("/signup")
    }
  }

  const handleViewDemo = () => {
    // In a real app, this could open a demo video or interactive demo
    window.open("#demo", "_self")
  }

  return (
    <section className="w-full py-32 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-up">
          AI-Powered Web Scraping & Data Enrichment
        </h1>
        <p
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Extract, validate, and enrich data from any website with our advanced AI scraping technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up" style={{ animationDelay: "0.4s" }}>
          <Button className="primary-btn text-lg py-6 px-8" onClick={handleGetStarted}>
            Get Started for Free
          </Button>
          <Button variant="outline" className="text-lg py-6 px-8" onClick={handleViewDemo}>
            View Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

