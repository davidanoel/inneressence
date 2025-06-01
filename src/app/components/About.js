import { Award, Shield, Clock, Users2 } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Users2, number: "500+", label: "Clients Helped" },
    { icon: Clock, number: "5+", label: "Years Experience" },
    { icon: Award, number: "100%", label: "Licensed Professionals" },
    { icon: Shield, number: "24/7", label: "Confidential Support" },
  ];

  const values = [
    {
      title: "Compassionate Care",
      description:
        "We believe in treating every client with empathy, respect, and understanding. Your healing journey is our priority.",
    },
    {
      title: "Evidence-Based Practice",
      description:
        "Our therapeutic approaches are grounded in research and proven methodologies for the most effective treatment outcomes.",
    },
    {
      title: "Personalized Treatment",
      description:
        "Every individual is unique. We tailor our therapeutic approach to meet your specific needs, goals, and circumstances.",
    },
    {
      title: "Safe Environment",
      description:
        "We provide a confidential, non-judgmental space where you can feel safe to explore, heal, and grow.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Inner Essence Therapy
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Inner Essence Therapy, we believe that everyone deserves access to quality mental
                health care. Our team of licensed professionals is dedicated to providing
                compassionate, evidence-based therapy services to help you navigate life's
                challenges and discover your inner strength.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Founded with the mission to make mental health support accessible and effective, we
                offer a range of therapeutic services including individual, group, and family
                therapy. Our approach combines traditional therapeutic methods with innovative
                techniques to provide personalized care that meets you where you are in your healing
                journey.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Beyond individual sessions, we're committed to community wellness through our
                workshops and speaking engagements, helping to reduce stigma and promote mental
                health awareness across all aspects of life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-primary">
                Schedule a Consultation
              </a>
              <a href="#services" className="btn-secondary">
                Learn More About Our Approach
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-96 lg:h-[450px] flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Users2 className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Professional Excellence</h3>
                <p className="text-gray-700 max-w-xs">
                  Licensed therapists committed to your wellbeing and professional growth
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-sm">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure you receive the highest quality
              care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
