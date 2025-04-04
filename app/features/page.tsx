import { Check, Database, Globe, Shield, Zap, BarChart, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: "Google Maps Scraper",
      description:
        "Extract business data from Google Maps with our specialized scraper. Get business names, addresses, phone numbers, websites, and more.",
    },
    {
      icon: <Database className="w-12 h-12 text-purple-500" />,
      title: "Data Enrichment",
      description:
        "Automatically validate and enrich your data with AI-powered tools. Add missing information and verify existing data points.",
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: "Fast Processing",
      description:
        "Process thousands of data points in minutes, not hours. Our distributed system handles large datasets efficiently.",
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-500" />,
      title: "Anti-Detection System",
      description:
        "Our advanced system prevents blocking while scraping websites. Rotate IPs, simulate human behavior, and bypass CAPTCHAs.",
    },
    {
      icon: <BarChart className="w-12 h-12 text-purple-500" />,
      title: "Analytics Dashboard",
      description:
        "Track your data collection progress and usage with our intuitive analytics dashboard. Monitor credits, success rates, and more.",
    },
    {
      icon: <Mail className="w-12 h-12 text-purple-500" />,
      title: "Email Automation",
      description:
        "Automatically send emails to leads with our email automation system. Create templates, schedule campaigns, and track results.",
    },
    {
      icon: <FileText className="w-12 h-12 text-purple-500" />,
      title: "Export Options",
      description:
        "Export your data in various formats including CSV, Excel, JSON, and Google Sheets. Integrate with your existing workflows.",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      <div className="w-full py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Powerful Features for Data Collection</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Our AI-powered platform provides everything you need to collect, validate, and enrich data.
          </p>
        </div>
      </div>

      <section className="w-full py-16 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 p-8 rounded-lg">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-gray-900 bg-opacity-30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Google Sheets Integration</h2>
              <p className="text-xl text-gray-300 mb-6">
                Seamlessly integrate with Google Sheets to import and export data. Work with your data in a familiar
                interface.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-2 mt-0.5" />
                  <span>Import data from Google Sheets</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-2 mt-0.5" />
                  <span>Export data to Google Sheets</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-2 mt-0.5" />
                  <span>Real-time data updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-2 mt-0.5" />
                  <span>Collaborative editing</span>
                </li>
              </ul>
              <Button className="primary-btn text-lg py-6 px-8">Try It Now</Button>
            </div>
            <div className="md:w-1/2 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
              <div className="aspect-video bg-gray-700 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to get started?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Start collecting and enriching data today with our powerful AI-driven platform.
          </p>
          <Button className="primary-btn text-lg py-6 px-8">Get Started for Free</Button>
        </div>
      </section>
    </div>
  )
}

