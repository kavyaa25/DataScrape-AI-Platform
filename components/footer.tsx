"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export default function Footer() {
  const router = useRouter()
  const { toast } = useToast()

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    router.push(path)
  }

  return (
    <footer className="w-full py-12 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold">DS</span>
            </div>
            <span className="text-xl font-bold">DataScrape</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                toast({
                  title: "Terms & Policies",
                  description: "Navigating to Terms & Policies page",
                  variant: "default",
                })
              }}
            >
              Terms & Policies
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                toast({
                  title: "Privacy Policy",
                  description: "Navigating to Privacy Policy page",
                  variant: "default",
                })
              }}
            >
              Privacy Policy
            </Link>
          </div>

          <div className="text-gray-400 text-sm text-center md:text-right">
            <div>Contact: info@datascrape.ai</div>
            <div>Address: 123 Tech Street, San Francisco CA 94103</div>
          </div>
        </div>
      </div>
    </footer>
  )
}

