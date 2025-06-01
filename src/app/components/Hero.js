import { ArrowRight, Heart, Shield, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
            <Shield className="h-4 w-4 text-emerald-600" />
            <span className="text-gray-700 text-sm font-medium">
              Licensed Mental Health Professionals
            </span>
          </div>

          {/* Main Message */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-800 leading-tight">
              You&apos;re not alone in this journey
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Professional, compassionate therapy to help you find peace, healing, and your inner
              strength.
            </p>
          </div>

          {/* Simple Visual Element */}
          <div className="flex justify-center py-8">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <Heart className="h-12 w-12 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Single CTA */}
          <div className="space-y-6">
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            >
              Take the first step
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(555) 123-4567</span>
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <span className="text-sm">Same-day appointments available</span>
            </div>
          </div>

          {/* Comfort Message */}
          <div className="max-w-md mx-auto">
            <p className="text-gray-500 text-sm leading-relaxed">
              Taking this step requires courage. We&apos;re here to provide a safe, confidential
              space for your healing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
