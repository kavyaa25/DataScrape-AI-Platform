import Pricing from "@/components/pricing"
import CTA from "@/components/cta"

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full py-20 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start for free, upgrade as you grow.
          </p>
        </div>
      </div>
      <Pricing />
      <div className="w-full py-16 px-6 md:px-12 lg:px-24 bg-gray-900 bg-opacity-30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What are research credits?</h3>
                <p className="text-gray-300">
                  Research credits are used when you search for data on websites. Each search consumes one credit.
                </p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">What are data credits?</h3>
                <p className="text-gray-300">
                  Data credits are consumed when you extract and enrich data points from websites.
                </p>
              </div>
              <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be applied to your next billing
                  cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  )
}

