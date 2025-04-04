"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function CTA() {
  const router = useRouter()
  const { toast } = useToast()

  const handleJoinCommunity = () => {
    toast({
      title: "Community",
      description: "Redirecting to our Slack community",
      variant: "success",
    })
    // In a real app, this would redirect to a Slack invite link
    window.open("#community", "_self")
  }

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 fade-in">
          Get free help by joining the DataScrape Slack
        </h2>
        <Button
          className="primary-btn px-8 py-6 fade-in"
          style={{ animationDelay: "0.2s" }}
          onClick={handleJoinCommunity}
        >
          Join the community
        </Button>
      </div>
    </section>
  )
}

