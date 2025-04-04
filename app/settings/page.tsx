"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const { user, isAuthenticated, isLoading, logout } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }

    if (user) {
      setName(user.name)
      setEmail(user.email)
    }
  }, [isAuthenticated, isLoading, router, user])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully",
        variant: "success",
      })
    }, 1000)
  }

  const handleDeleteAccount = () => {
    // In a real app, this would show a confirmation dialog
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast({
        title: "Account deleted",
        description: "Your account has been deleted successfully",
        variant: "destructive",
      })
      logout()
      router.push("/")
    }
  }

  return (
    <div className="pt-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 slide-up">Account Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg slide-up" style={{ animationDelay: "0.1s" }}>
              <nav className="space-y-2">
                <a href="#profile" className="block py-2 px-3 bg-purple-900 bg-opacity-30 rounded-md">
                  Profile
                </a>
                <a href="#billing" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
                  Billing
                </a>
                <a href="#api" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
                  API Keys
                </a>
                <a href="#notifications" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
                  Notifications
                </a>
                <a href="#security" className="block py-2 px-3 hover:bg-gray-700 rounded-md">
                  Security
                </a>
              </nav>
            </div>
          </div>

          <div className="md:col-span-3">
            <div
              id="profile"
              className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8 slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-xl font-semibold mb-6">Profile Information</h2>
              <form onSubmit={handleSaveProfile}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 rounded-md bg-gray-700 bg-opacity-50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 rounded-md bg-gray-700 bg-opacity-50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium mb-1">
                      Account Type
                    </label>
                    <input
                      id="role"
                      type="text"
                      value={user?.role === "guest" ? "Guest Account" : "Registered User"}
                      disabled
                      className="w-full p-3 rounded-md bg-gray-700 bg-opacity-50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 opacity-70"
                    />
                    {user?.role === "guest" && (
                      <p className="mt-1 text-sm text-yellow-400">Upgrade to a full account to access all features</p>
                    )}
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit" className="primary-btn" disabled={isSaving}>
                      {isSaving ? (
                        <div className="flex items-center">
                          <div className="spinner mr-2 w-4 h-4"></div>
                          <span>Saving...</span>
                        </div>
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg slide-up" style={{ animationDelay: "0.3s" }}>
              <h2 className="text-xl font-semibold mb-6">Danger Zone</h2>
              <div className="bg-red-900 bg-opacity-20 border border-red-800 rounded-md p-4">
                <h3 className="text-lg font-medium text-red-400 mb-2">Delete Account</h3>
                <p className="text-gray-300 mb-4">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                <Button variant="destructive" onClick={handleDeleteAccount}>
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

