import { Heart, Users, Home, Calendar, Mic, BookOpen } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Individual Therapy",
      description:
        "One-on-one sessions tailored to your unique needs and goals. Work through personal challenges in a safe, confidential environment.",
      features: [
        "Anxiety & Depression Treatment",
        "Trauma & PTSD Support",
        "Life Transitions",
        "Personal Growth & Self-Discovery",
      ],
    },
    {
      icon: Users,
      title: "Group Therapy",
      description:
        "Connect with others facing similar challenges in a supportive group setting. Experience healing through shared experiences.",
      features: [
        "Support Groups",
        "Skills-Based Groups",
        "Process Groups",
        "Specialized Topic Groups",
      ],
    },
    {
      icon: Home,
      title: "Family Therapy",
      description:
        "Strengthen family bonds and improve communication patterns. Address family dynamics and relationship challenges together.",
      features: [
        "Family Communication",
        "Conflict Resolution",
        "Parenting Support",
        "Relationship Counseling",
      ],
    },
    {
      icon: BookOpen,
      title: "Wellness Workshops",
      description:
        "Educational workshops focused on mental health awareness and skill-building for individuals and organizations.",
      features: [
        "Stress Management",
        "Mindfulness Training",
        "Communication Skills",
        "Self-Care Strategies",
      ],
    },
    {
      icon: Mic,
      title: "Speaking Engagements",
      description:
        "Professional presentations on mental health topics for conferences, organizations, and community events.",
      features: [
        "Mental Health Awareness",
        "Workplace Wellness",
        "Community Education",
        "Professional Development",
      ],
    },
    {
      icon: Calendar,
      title: "Consultation Services",
      description:
        "Professional consultation for organizations looking to improve workplace mental health and employee wellbeing.",
      features: [
        "Workplace Assessment",
        "Program Development",
        "Training & Education",
        "Ongoing Support",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-white dark:bg-gray-900 calming:bg-sage-100 transition-colors duration-300"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 calming:text-sage-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 calming:text-sage-700 max-w-3xl mx-auto">
            Comprehensive mental health services designed to support you on your wellness journey.
            We offer evidence-based treatments in a compassionate, professional environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 calming:bg-sage-100 rounded-xl p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 calming:hover:shadow-sage-300/20 transition-all duration-300 border border-transparent calming:border-sage-200/50"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 calming:bg-calm-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400 calming:text-calm-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 calming:text-sage-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 calming:text-sage-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300 calming:text-sage-700"
                    >
                      <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 calming:bg-calm-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 dark:bg-gray-800 calming:bg-calm-50 rounded-2xl p-8 md:p-12 border border-transparent calming:border-calm-200/30">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 calming:text-sage-900 mb-4">
              Ready to Begin Your Healing Journey?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 calming:text-sage-700 mb-8 max-w-2xl mx-auto">
              Take the first step towards better mental health. Contact us today to schedule your
              initial consultation and learn how we can support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Schedule Consultation
              </a>
              <a href="tel:555-123-4567" className="btn-secondary">
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
