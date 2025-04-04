"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/components/auth/auth-provider"
import { useToast } from "@/components/ui/use-toast"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
      variant: "success",
    })
    router.push("/")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 lg:px-24 transition-all duration-300 ${
        isScrolled ? "bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold">DS</span>
          </div>
          <span className="text-xl font-bold">DataScrape</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/features"
            className={`text-gray-300 hover:text-white transition-colors ${
              pathname === "/features" ? "text-white font-medium" : ""
            }`}
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className={`text-gray-300 hover:text-white transition-colors ${
              pathname === "/pricing" ? "text-white font-medium" : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/docs"
            className={`text-gray-300 hover:text-white transition-colors ${
              pathname === "/docs" ? "text-white font-medium" : ""
            }`}
          >
            Docs
          </Link>
          <Link
            href="/blog"
            className={`text-gray-300 hover:text-white transition-colors ${
              pathname === "/blog" ? "text-white font-medium" : ""
            }`}
          >
            Blog
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-gray-300 hover:text-white"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              >
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <User size={16} />
                </div>
                <span>{user?.name}</span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-800 rounded-md shadow-xl z-20 scale-in">
                  <div className="px-4 py-2 text-sm text-gray-400 border-b border-gray-700">
                    Signed in as <span className="font-medium text-white">{user?.email}</span>
                  </div>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => {
                      setIsUserMenuOpen(false)
                      handleLogout()
                    }}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={() => router.push("/login")}>
                Log in
              </Button>
              <Button className="primary-btn" onClick={() => router.push("/signup")}>
                Sign up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-md p-4 z-50 slide-in-right">
          <div className="flex flex-col space-y-4">
            <Link
              href="/features"
              className={`text-gray-300 hover:text-white transition-colors py-2 ${
                pathname === "/features" ? "text-white font-medium" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className={`text-gray-300 hover:text-white transition-colors py-2 ${
                pathname === "/pricing" ? "text-white font-medium" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className={`text-gray-300 hover:text-white transition-colors py-2 ${
                pathname === "/docs" ? "text-white font-medium" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/blog"
              className={`text-gray-300 hover:text-white transition-colors py-2 ${
                pathname === "/blog" ? "text-white font-medium" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            <div className="pt-4 border-t border-gray-800">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <User size={16} />
                    </div>
                    <span>{user?.name}</span>
                  </div>
                  <Link
                    href="/dashboard"
                    className="block py-2 text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="block py-2 text-gray-300 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="block w-full text-left py-2 text-gray-300 hover:text-white"
                    onClick={() => {
                      setIsMenuOpen(false)
                      handleLogout()
                    }}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="ghost"
                    className="text-gray-300 hover:text-white justify-start"
                    onClick={() => {
                      setIsMenuOpen(false)
                      router.push("/login")
                    }}
                  >
                    Log in
                  </Button>
                  <Button
                    className="primary-btn"
                    onClick={() => {
                      setIsMenuOpen(false)
                      router.push("/signup")
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

