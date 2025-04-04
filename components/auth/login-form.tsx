"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"
import { useToast } from "@/components/ui/use-toast"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login, continueAsGuest } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await login(email, password)
      toast({
        title: "Login successful",
        description: "Welcome back!",
        variant: "success",
      })
      router.push("/")
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "Please check your credentials",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGuestAccess = () => {
    continueAsGuest()
    toast({
      title: "Guest access granted",
      description: "You're browsing as a guest user",
      variant: "success",
    })
    router.push("/")
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 glass rounded-lg slide-up">
      <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 bg-opacity-50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-800 bg-opacity-50 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="••••••••"
            required
          />
        </div>
        <div className="flex justify-end">
          <a href="#" className="text-sm text-purple-400 hover:text-purple-300">
            Forgot password?
          </a>
        </div>
        <Button type="submit" className="w-full primary-btn py-6" disabled={isLoading}>
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="spinner mr-2"></div>
              Logging in...
            </div>
          ) : (
            "Log In"
          )}
        </Button>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-900 text-gray-400">Or</span>
          </div>
        </div>
        <Button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white py-6" onClick={handleGuestAccess}>
          Continue as Guest
        </Button>
      </div>
      <p className="mt-6 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <a href="/signup" className="text-purple-400 hover:text-purple-300">
          Sign up
        </a>
      </p>
    </div>
  )
}

