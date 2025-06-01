import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Workshops", href: "#workshops" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Individual Therapy", href: "#services" },
    { name: "Group Therapy", href: "#services" },
    { name: "Family Therapy", href: "#services" },
    { name: "Wellness Workshops", href: "#workshops" },
    { name: "Speaking Engagements", href: "#workshops" },
  ];

  const resources = [
    { name: "Crisis Hotline: 988", href: "tel:988" },
    { name: "Crisis Text: 741741", href: "sms:741741" },
    { name: "Emergency: 911", href: "tel:911" },
    { name: "Mental Health Resources", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">Inner Essence Therapy</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Professional psychotherapy services designed to support your mental health journey
                with compassion, expertise, and evidence-based care.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>info@inneressencetherapy.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>123 Wellness Drive, Suite 200</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>Mon-Fri: 9AM-7PM, Sat: 10AM-4PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Crisis Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Crisis Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-red-900 bg-opacity-50 rounded-lg">
              <p className="text-red-200 text-sm">
                If you&apos;re in crisis, please reach out immediately. You&apos;re not alone.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} Inner Essence Therapy. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-sm md:text-right space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Licensed mental health professionals providing confidential care. This website does
              not provide emergency services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
