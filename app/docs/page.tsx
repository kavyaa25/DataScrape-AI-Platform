"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FileText, Book, Code, MessageSquare, Search } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const { toast } = useToast()

  const docCategories = [
    {
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      title: "Getting Started",
      description: "Learn the basics of DataScrape AI and how to set up your first project.",
      links: [
        { title: "Quick Start Guide", url: "#quick-start" },
        { title: "Installation", url: "#installation" },
        { title: "Authentication", url: "#authentication" },
        { title: "First Scrape", url: "#first-scrape" },
      ],
    },
    {
      icon: <Book className="w-8 h-8 text-purple-500" />,
      title: "Guides",
      description: "Step-by-step guides for common use cases and advanced features.",
      links: [
        { title: "Google Maps Scraping", url: "#google-maps" },
        { title: "Data Enrichment", url: "#data-enrichment" },
        { title: "Email Automation", url: "#email-automation" },
        { title: "Export Options", url: "#export-options" },
      ],
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: "API Reference",
      description: "Detailed documentation for our API endpoints and parameters.",
      links: [
        { title: "Authentication", url: "#api-auth" },
        { title: "Scraping API", url: "#scraping-api" },
        { title: "Enrichment API", url: "#enrichment-api" },
        { title: "Export API", url: "#export-api" },
      ],
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      title: "Support",
      description: "Get help from our team and community.",
      links: [
        { title: "FAQ", url: "#faq" },
        { title: "Community Forum", url: "#forum" },
        { title: "Contact Support", url: "#support" },
        { title: "Slack Channel", url: "#slack" },
      ],
    },
  ]

  // Mock documentation content database
  const docContent = [
    {
      title: "Quick Start Guide",
      category: "Getting Started",
      content: "Get started with DataScrape AI in minutes...",
    },
    { title: "Installation", category: "Getting Started", content: "Install and configure DataScrape AI..." },
    {
      title: "Authentication",
      category: "Getting Started",
      content: "Set up authentication for your DataScrape account...",
    },
    { title: "Google Maps Scraping", category: "Guides", content: "Learn how to scrape data from Google Maps..." },
    { title: "Data Enrichment", category: "Guides", content: "Enrich your data with additional information..." },
    { title: "Scraping API", category: "API Reference", content: "API endpoints for web scraping operations..." },
    { title: "FAQ", category: "Support", content: "Frequently asked questions about DataScrape AI..." },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!searchQuery.trim()) {
      toast({
        title: "Empty search",
        description: "Please enter a search term",
        variant: "destructive",
      })
      return
    }

    setIsSearching(true)

    // Simulate search delay
    setTimeout(() => {
      const results = docContent.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )

      setSearchResults(results)
      setIsSearching(false)

      toast({
        title: `${results.length} results found`,
        description: results.length > 0 ? "Showing search results" : "Try a different search term",
        variant: results.length > 0 ? "default" : "destructive",
      })
    }, 800)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 slide-up">Documentation</h1>
          <p
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Everything you need to know about DataScrape AI.
          </p>
          <div className="relative max-w-2xl mx-auto slide-up" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full py-4 pl-10 pr-24 rounded-lg bg-gray-800 bg-opacity-50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="absolute right-2 top-2 primary-btn" disabled={isSearching}>
                  {isSearching ? (
                    <div className="flex items-center">
                      <div className="spinner mr-2 w-4 h-4"></div>
                      <span>Searching</span>
                    </div>
                  ) : (
                    "Search"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {searchResults.length > 0 ? (
        <section className="w-full py-16 px-6 md:px-12 lg:px-24 scale-in">
          <div className="container mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Search Results for "{searchQuery}"</h2>
            <div className="space-y-4">
              {searchResults.map((result, index) => (
                <div key={index} className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-xs text-purple-400 font-semibold">{result.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                  <p className="text-gray-300 mb-4">{result.content}</p>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                    Read More →
                  </Button>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchResults([])
                  setSearchQuery("")
                }}
              >
                Clear Results
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <section className="w-full py-16 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {docCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 p-8 rounded-lg fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-2xl font-semibold ml-3">{category.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.url}
                          className="text-purple-400 hover:text-purple-300 transition-colors"
                          onClick={(e) => {
                            e.preventDefault()
                            toast({
                              title: "Documentation",
                              description: `Navigating to ${link.title}`,
                              variant: "default",
                            })
                          }}
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gray-900 bg-opacity-30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 fade-in">Need Help?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto fade-in" style={{ animationDelay: "0.2s" }}>
            Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              className="primary-btn text-lg py-6 px-8"
              onClick={() => {
                toast({
                  title: "Support",
                  description: "Connecting you with our support team",
                  variant: "default",
                })
              }}
            >
              Contact Support
            </Button>
            <Button
              variant="outline"
              className="text-lg py-6 px-8"
              onClick={() => {
                toast({
                  title: "Community",
                  description: "Redirecting to our community forum",
                  variant: "default",
                })
              }}
            >
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

