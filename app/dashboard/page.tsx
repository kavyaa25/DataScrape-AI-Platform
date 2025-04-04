"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Database, Users, BarChart, Settings, Download } from "lucide-react"

export default function DashboardPage() {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, isLoading, router])

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

  return (
    <div className="pt-20 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 slide-up">Dashboard</h1>
            <p className="text-gray-400 slide-up" style={{ animationDelay: "0.1s" }}>
              Welcome back, {user?.name}
            </p>
          </div>
          <div className="mt-4 md:mt-0 slide-up" style={{ animationDelay: "0.2s" }}>
            <Button className="primary-btn">New Project</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg fade-in">
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold">Data Credits</h2>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-bold">{user?.role === "guest" ? "10" : "2,450"}</p>
                <p className="text-sm text-gray-400">
                  {user?.role === "guest" ? "of 50 available" : "of 5,000 available"}
                </p>
              </div>
              <Button variant="outline" size="sm">
                Buy More
              </Button>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold">Leads Generated</h2>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-bold">{user?.role === "guest" ? "0" : "1,287"}</p>
                <p className="text-sm text-gray-400">
                  {user?.role === "guest" ? "Start your first project" : "This month"}
                </p>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center mb-4">
              <BarChart className="w-6 h-6 text-purple-500 mr-2" />
              <h2 className="text-xl font-semibold">Current Plan</h2>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-3xl font-bold">{user?.role === "guest" ? "Guest" : "Growth"}</p>
                <p className="text-sm text-gray-400">
                  {user?.role === "guest" ? "Limited access" : "Renews in 18 days"}
                </p>
              </div>
              <Button variant="outline" size="sm">
                Upgrade
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8 slide-up">
              <h2 className="text-xl font-semibold mb-4">Recent Projects</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-400 border-b border-gray-700">
                      <th className="pb-2">Project Name</th>
                      <th className="pb-2">Type</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2">Last Updated</th>
                      <th className="pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user?.role === "guest" ? (
                      <tr>
                        <td colSpan={5} className="py-4 text-center text-gray-400">
                          No projects yet. Create your first project to get started.
                        </td>
                      </tr>
                    ) : (
                      <>
                        <tr className="border-b border-gray-700">
                          <td className="py-3">Tech Companies SF</td>
                          <td className="py-3">Google Maps</td>
                          <td className="py-3">
                            <span className="px-2 py-1 bg-green-500 bg-opacity-20 text-green-400 rounded-full text-xs">
                              Completed
                            </span>
                          </td>
                          <td className="py-3">2 days ago</td>
                          <td className="py-3">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Download className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-3">Marketing Agencies NYC</td>
                          <td className="py-3">Google Maps</td>
                          <td className="py-3">
                            <span className="px-2 py-1 bg-blue-500 bg-opacity-20 text-blue-400 rounded-full text-xs">
                              In Progress
                            </span>
                          </td>
                          <td className="py-3">5 hours ago</td>
                          <td className="py-3">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Settings className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3">SaaS Companies</td>
                          <td className="py-3">Data Enrichment</td>
                          <td className="py-3">
                            <span className="px-2 py-1 bg-yellow-500 bg-opacity-20 text-yellow-400 rounded-full text-xs">
                              Paused
                            </span>
                          </td>
                          <td className="py-3">1 week ago</td>
                          <td className="py-3">
                            <Button variant="ghost" size="sm" className="h-8 px-2">
                              <Settings className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
              {user?.role !== "guest" && (
                <div className="mt-4 text-right">
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                    View All Projects
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg mb-8 slide-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Button className="w-full justify-start bg-gray-700 hover:bg-gray-600">
                  <Database className="w-5 h-5 mr-2" />
                  New Scraping Project
                </Button>
                <Button className="w-full justify-start bg-gray-700 hover:bg-gray-600">
                  <Users className="w-5 h-5 mr-2" />
                  Enrich Existing Data
                </Button>
                <Button className="w-full justify-start bg-gray-700 hover:bg-gray-600">
                  <Download className="w-5 h-5 mr-2" />
                  Export Data
                </Button>
                <Button className="w-full justify-start bg-gray-700 hover:bg-gray-600">
                  <Settings className="w-5 h-5 mr-2" />
                  Account Settings
                </Button>
              </div>
            </div>

            <div
              className="bg-purple-900 bg-opacity-30 p-6 rounded-lg border border-purple-800 slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
              <p className="text-gray-300 mb-4">
                Our support team is available to assist you with any questions or issues.
              </p>
              <Button className="w-full primary-btn">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

