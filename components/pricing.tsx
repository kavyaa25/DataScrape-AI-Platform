"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"
import { useToast } from "@/components/ui/use-toast"

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "Free",
      period: "",
      features: ["Up to 50 research credits", "Up to 30 data credits", "Limited Google Maps scraper"],
    },
    {
      id: "growth",
      name: "Growth",
      price: "$40",
      period: "/month",
      features: ["Up to 5,000 research credits", "Up to 3,000 data credits", "Full Google Maps scraper"],
    },
    {
      id: "pro",
      name: "Pro",
      price: "$80",
      period: "/month",
      features: [
        "Up to 12,000 research credits",
        "Up to 7,200 data credits",
        "Full Google Maps scraper",
        "Email automation",
      ],
    },
  ]

  const handleGetStarted = (planId: string) => {
    setSelectedPlan(planId)

    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in or create an account to continue",
        variant: "default",
      })
      router.push("/signup")
      return
    }

    // Simulate plan selection
    toast({
      title: "Plan selected",
      description: `You've selected the ${plans.find((p) => p.id === planId)?.name} plan`,
      variant: "success",
    })

    // In a real app, you would redirect to checkout or update subscription
    router.push("/dashboard")
  }

  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center fade-in">Get started for free, forever</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`pricing-card p-8 ${selectedPlan === plan.id ? "border-2 border-purple-500" : ""}`}
            >
              <div className="mb-8">
                <h3 className="text-xl text-gray-400 mb-2">{plan.name}</h3>
                <div className="flex items-end">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full py-6 ${index === 0 ? "get-started-btn" : "primary-btn"}`}
                onClick={() => handleGetStarted(plan.id)}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

