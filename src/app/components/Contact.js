"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-4567",
      description: "Call us during business hours",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@inneressencetherapy.com",
      description: "We respond within 24 hours",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Wellness Drive, Suite 200",
      description: "Downtown Mental Health Center",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-7PM, Sat: 10AM-4PM",
      description: "Evening appointments available",
    },
  ];

  const services = [
    "Individual Therapy",
    "Group Therapy",
    "Family Therapy",
    "Wellness Workshop",
    "Speaking Engagement",
    "Consultation Services",
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-800 calming:bg-sage-100 transition-colors duration-300"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 calming:text-sage-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 calming:text-sage-700 max-w-3xl mx-auto">
            Ready to take the first step? Contact us today to schedule your consultation or learn
            more about our services. We&apos;re here to support you on your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 calming:bg-sage-50 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 calming:shadow-sage-300/20 border border-transparent calming:border-sage-200/30">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 calming:text-sage-900 mb-6">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 calming:text-sage-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 calming:border-sage-300 rounded-lg focus:ring-2 focus:ring-blue-500 calming:focus:ring-calm-500 focus:border-blue-500 calming:focus:border-calm-500 transition-colors bg-white dark:bg-gray-700 calming:bg-sage-25 text-gray-900 dark:text-gray-100 calming:text-sage-900"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 calming:text-sage-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 calming:border-sage-300 rounded-lg focus:ring-2 focus:ring-blue-500 calming:focus:ring-calm-500 focus:border-blue-500 calming:focus:border-calm-500 transition-colors bg-white dark:bg-gray-700 calming:bg-sage-25 text-gray-900 dark:text-gray-100 calming:text-sage-900"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 calming:text-sage-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 calming:border-sage-300 rounded-lg focus:ring-2 focus:ring-blue-500 calming:focus:ring-calm-500 focus:border-blue-500 calming:focus:border-calm-500 transition-colors bg-white dark:bg-gray-700 calming:bg-sage-25 text-gray-900 dark:text-gray-100 calming:text-sage-900"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 calming:text-sage-700 mb-2"
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 calming:border-sage-300 rounded-lg focus:ring-2 focus:ring-blue-500 calming:focus:ring-calm-500 focus:border-blue-500 calming:focus:border-calm-500 transition-colors bg-white dark:bg-gray-700 calming:bg-sage-25 text-gray-900 dark:text-gray-100 calming:text-sage-900"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 calming:text-sage-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 calming:border-sage-300 rounded-lg focus:ring-2 focus:ring-blue-500 calming:focus:ring-calm-500 focus:border-blue-500 calming:focus:border-calm-500 transition-colors bg-white dark:bg-gray-700 calming:bg-sage-25 text-gray-900 dark:text-gray-100 calming:text-sage-900"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>

            <p className="text-sm text-gray-600 dark:text-gray-400 calming:text-sage-600 mt-4">
              * Required fields. Your information is confidential and secure.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 calming:text-sage-900 mb-6">
                Contact Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-800 calming:bg-sage-50 rounded-xl shadow-sm dark:shadow-gray-900/20 calming:shadow-sage-300/20 border border-transparent calming:border-sage-200/30"
                    >
                      <div className="bg-blue-100 dark:bg-blue-900/30 calming:bg-calm-100 p-3 rounded-lg flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400 calming:text-calm-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100 calming:text-sage-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-900 dark:text-gray-100 calming:text-sage-900 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 calming:text-sage-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office Hours & Additional Info */}
            <div className="bg-blue-50 dark:bg-gray-800 calming:bg-calm-50 rounded-xl p-6 border border-transparent calming:border-calm-200/30">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 calming:text-sage-900 mb-4">
                Important Information
              </h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 calming:text-sage-700">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 calming:bg-calm-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Emergency Support:</strong> If you&apos;re experiencing a mental health
                    emergency, please call 911 or go to your nearest emergency room.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 calming:bg-calm-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Response Time:</strong> We typically respond to all inquiries within 24
                    hours during business days.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 calming:bg-calm-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Confidentiality:</strong> All communications are treated with the
                    highest level of confidentiality and privacy.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 calming:bg-calm-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>
                    <strong>Insurance:</strong> We accept most major insurance plans. Contact us to
                    verify your coverage.
                  </span>
                </li>
              </ul>
            </div>

            {/* Crisis Resources */}
            <div className="bg-red-50 dark:bg-red-900/20 calming:bg-earth-100 rounded-xl p-6 border border-red-200 dark:border-red-800/30 calming:border-earth-300">
              <h4 className="font-semibold text-red-900 dark:text-red-200 calming:text-earth-800 mb-4">
                Crisis Resources
              </h4>
              <div className="space-y-2 text-sm text-red-800 dark:text-red-300 calming:text-earth-700">
                <p>
                  <strong>National Suicide Prevention Lifeline:</strong>{" "}
                  <a href="tel:988" className="underline hover:no-underline">
                    988
                  </a>
                </p>
                <p>
                  <strong>Crisis Text Line:</strong>{" "}
                  <span className="font-mono">Text HOME to 741741</span>
                </p>
                <p>
                  <strong>SAMHSA National Helpline:</strong>{" "}
                  <a href="tel:1-800-662-4357" className="underline hover:no-underline">
                    1-800-662-HELP (4357)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
