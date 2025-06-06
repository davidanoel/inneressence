import { ArrowRight, Shield, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        {/* Hero Image - Replace with your downloaded image */}
        <Image
          src="/images/hero-image.jpg"
          alt="Peaceful therapy environment - serene nature scene promoting mental wellness"
          fill
          className="object-cover"
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R9EhCNDKwuKZKIbE3eOSrQZuJ1ZeXC6v3pGP0TQcx"
        />

        {/* Overlay for text readability - theme aware */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 dark:from-black/50 dark:via-black/30 dark:to-black/60 calming:from-sage-900/20 calming:via-sage-800/10 calming:to-sage-900/30"></div>

        {/* Additional subtle overlay for better text contrast - theme aware */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10 calming:from-calm-900/10 calming:via-transparent calming:to-calm-900/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Minimal Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 calming:bg-sage-50/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/50 dark:border-gray-600/50 calming:border-sage-200/50">
            <Shield className="h-4 w-4 text-emerald-600 calming:text-calm-600" />
            <span className="text-gray-800 dark:text-gray-200 calming:text-sage-800 text-sm font-medium">
              Licensed Mental Health Professionals
            </span>
          </div>

          {/* Main Headline - Minimal & Elegant */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-wide drop-shadow-lg">
              <span className="block mb-2">Find Your</span>
              <span className="block font-normal bg-gradient-to-r from-white to-blue-100 calming:from-white calming:to-calm-100 bg-clip-text text-transparent">
                Inner Essence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/95 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Professional therapy services to guide you toward healing, growth, and lasting
              well-being.
            </p>
          </div>

          {/* Single, Prominent CTA */}
          <div className="pt-8">
            <a
              href="#contact"
              className="inline-flex items-center bg-white/95 dark:bg-gray-800/95 calming:bg-sage-50/95 hover:bg-white dark:hover:bg-gray-700 calming:hover:bg-sage-100 text-gray-900 dark:text-gray-100 calming:text-sage-900 font-medium px-10 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 dark:focus:ring-gray-400/50 calming:focus:ring-calm-400/50 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 calming:border-sage-200/50"
            >
              Begin Your Journey
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
          </div>

          {/* Minimal Contact Info */}
          <div className="pt-12">
            <div className="inline-flex items-center space-x-8 bg-white/10 dark:bg-gray-800/20 calming:bg-sage-100/20 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 dark:border-gray-600/20 calming:border-sage-300/30">
              <div className="flex items-center space-x-2 text-white/95">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-light">(555) 123-4567</span>
              </div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span className="text-white/95 text-sm font-light">
                Same-day appointments available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
