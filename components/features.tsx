"use client"

import { useRef, useEffect } from "react"
import { Database, Globe, Shield, Zap } from "lucide-react"

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const featureCards = document.querySelectorAll(".feature-card")
    featureCards.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      featureCards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  const features = [
    {
      icon: <Globe className="w-10 h-10 text-purple-500 feature-icon" />,
      title: "Google Maps Scraper",
      description: "Extract business data from Google Maps with our specialized scraper.",
    },
    {
      icon: <Database className="w-10 h-10 text-purple-500 feature-icon" />,
      title: "Data Enrichment",
      description: "Automatically validate and enrich your data with AI-powered tools.",
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-500 feature-icon" />,
      title: "Fast Processing",
      description: "Process thousands of data points in minutes, not hours.",
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-500 feature-icon" />,
      title: "Anti-Detection System",
      description: "Our advanced system prevents blocking while scraping websites.",
    },
  ]

  return (
    <section ref={featuresRef} className="w-full py-20 px-6 md:px-12 lg:px-24 bg-opacity-30 bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center fade-in">
          Powerful Features for Data Collection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-gray-800 bg-opacity-50 p-6 rounded-lg opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

