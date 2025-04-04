"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

type BlogPost = {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  image: string
}

export default function BlogCard({ post }: { post: BlogPost }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const { toast } = useToast()

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)

    if (!isExpanded) {
      toast({
        title: "Article opened",
        description: `Now reading: ${post.title}`,
        variant: "default",
      })
    }
  }

  return (
    <div className="blog-card bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden">
      <div className="overflow-hidden">
        <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover blog-image" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-2">
          <span className="text-xs text-purple-400 font-semibold">{post.category}</span>
          <span className="mx-2 text-gray-500">•</span>
          <div className="flex items-center text-gray-400 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            {post.date}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

        {isExpanded ? (
          <div className="scale-in">
            <div className="text-gray-300 mb-4 whitespace-pre-line">{post.content}</div>
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0" onClick={toggleExpand}>
              Show Less ↑
            </Button>
          </div>
        ) : (
          <>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0" onClick={toggleExpand}>
              Read More →
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

