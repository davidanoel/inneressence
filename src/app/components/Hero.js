import { ArrowRight, Heart, Users, Home } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Journey to
                <span className="text-blue-600 block">Inner Wellness</span>
                Starts Here
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Professional psychotherapy services designed to support your mental health journey.
                We offer individual, group, and family therapy in a safe, compassionate environment.
              </p>
            </div>

            {/* Service highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Heart className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Individual</h3>
                  <p className="text-sm text-gray-600">One-on-one therapy</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Users className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Group</h3>
                  <p className="text-sm text-gray-600">Supportive groups</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <Home className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Family</h3>
                  <p className="text-sm text-gray-600">Family counseling</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#services" className="btn-secondary inline-flex items-center justify-center">
                Learn About Our Services
              </a>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-indigo-300 rounded-2xl h-96 lg:h-[500px] flex items-center justify-center">
              <div className="text-center text-blue-800 space-y-4">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold">Compassionate Care</h3>
                <p className="text-blue-700 max-w-xs">
                  Supporting your mental health with professional, evidence-based therapy
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
