import { Calendar, Clock, Users, MapPin } from "lucide-react";

export default function Workshops() {
  const workshops = [
    {
      title: "Mindfulness & Stress Management",
      date: "Every 2nd Saturday",
      time: "10:00 AM - 12:00 PM",
      participants: "8-12 participants",
      location: "In-Person & Virtual",
      description:
        "Learn practical mindfulness techniques and stress management strategies to improve your daily well-being.",
      topics: ["Breathing techniques", "Body awareness", "Stress reduction", "Mindful living"],
    },
    {
      title: "Communication Skills Workshop",
      date: "Monthly",
      time: "2:00 PM - 4:00 PM",
      participants: "6-10 participants",
      location: "In-Person",
      description:
        "Develop effective communication skills for better relationships at home, work, and in your community.",
      topics: [
        "Active listening",
        "Conflict resolution",
        "Emotional expression",
        "Boundary setting",
      ],
    },
    {
      title: "Self-Care & Wellness Strategies",
      date: "Quarterly",
      time: "9:00 AM - 3:00 PM",
      participants: "12-15 participants",
      location: "In-Person",
      description:
        "A comprehensive day-long workshop focused on developing sustainable self-care practices.",
      topics: [
        "Personal wellness plans",
        "Work-life balance",
        "Healthy habits",
        "Resilience building",
      ],
    },
  ];

  const speakingTopics = [
    "Mental Health in the Workplace",
    "Trauma-Informed Care",
    "Building Resilient Communities",
    "Youth Mental Health Awareness",
    "Family Dynamics & Communication",
    "Stress Management for Organizations",
  ];

  return (
    <section id="workshops" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Workshops & Speaking Engagements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join our educational workshops or invite us to speak at your organization. We're
            passionate about promoting mental health awareness and providing practical tools for
            wellbeing.
          </p>
        </div>

        {/* Workshops Section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Upcoming Workshops
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{workshop.title}</h4>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-3 text-blue-600" />
                    <span className="text-sm">{workshop.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-3 text-blue-600" />
                    <span className="text-sm">{workshop.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-3 text-blue-600" />
                    <span className="text-sm">{workshop.participants}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-3 text-blue-600" />
                    <span className="text-sm">{workshop.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{workshop.description}</p>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2">What You'll Learn:</h5>
                  <ul className="space-y-1">
                    {workshop.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full btn-primary">Register Now</button>
              </div>
            ))}
          </div>
        </div>

        {/* Speaking Engagements Section */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Professional Speaking Engagements
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Invite our licensed professionals to speak at your organization, conference, or
                community event. We provide engaging, educational presentations on various mental
                health topics.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Popular Speaking Topics:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {speakingTopics.map((topic, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-primary">
                  Book a Speaker
                </a>
                <a href="mailto:info@inneressencetherapy.com" className="btn-secondary">
                  Request Custom Topic
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-200 to-indigo-300 rounded-xl h-64 lg:h-80 flex items-center justify-center">
              <div className="text-center text-blue-800 space-y-4">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold">Community Impact</h4>
                <p className="text-blue-700 max-w-xs">
                  Spreading mental health awareness and building stronger communities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
