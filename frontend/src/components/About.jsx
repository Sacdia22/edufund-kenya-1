import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About EduFund Kenya</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Connecting Kenyan students with life-changing educational funding opportunities
          </p>
        </div>
      </section>

      {/* Mission and Vision Section - Smaller */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To democratize access to education funding by providing a transparent, efficient, and 
                user-friendly platform that connects Kenyan students with scholarships, bursaries, 
                and financial aid opportunities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-3">👁️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A Kenya where no student is left behind due to financial barriers, and every young person 
                has the opportunity to pursue their educational dreams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <div className="text-4xl mb-3">🔓</div>
            <h3 className="text-xl font-bold mb-2">Transparency</h3>
            <p className="text-gray-600">Clear information about opportunities and processes</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2">Efficiency</h3>
            <p className="text-gray-600">Streamlined application and tracking system</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">🤝</div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-gray-600">Honest and fair treatment of all applicants</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-3">🌟</div>
            <h3 className="text-xl font-bold mb-2">Excellence</h3>
            <p className="text-gray-600">Commitment to quality service delivery</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How EduFund Kenya Works</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Discover</h3>
              <p className="text-gray-600">Browse and search hundreds of scholarships and bursaries from counties, government, and private institutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Apply</h3>
              <p className="text-gray-600">Download application forms, prepare required documents, and submit applications online</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Track</h3>
              <p className="text-gray-600">Monitor your application status in real-time and receive notifications about approvals</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">🏛️</div>
            <h3 className="text-xl font-bold mb-2">County Bursaries</h3>
            <p className="text-gray-600">Access to bursary programs from all 47 counties in Kenya</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-bold mb-2">National Scholarships</h3>
            <p className="text-gray-600">Government and corporate scholarship opportunities</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="text-xl font-bold mb-2">International Programs</h3>
            <p className="text-gray-600">Global scholarship opportunities for Kenyan students</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-xl font-bold mb-2">Application Guides</h3>
            <p className="text-gray-600">Step-by-step guides and document checklists</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">🔔</div>
            <h3 className="text-xl font-bold mb-2">Deadline Alerts</h3>
            <p className="text-gray-600">Timely notifications about upcoming deadlines</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
            <p className="text-gray-600">Real-time application status updates</p>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our Impact So Far</h2>
            <p className="text-xl">Making a difference in Kenyan education</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12,000+</div>
              <p>Students Supported</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">47</div>
              <p>Counties Covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">KES 320M+</div>
              <p>Funds Awarded</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">150+</div>
              <p>Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Partners</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-4xl mb-2">🏛️</div>
            <h3 className="font-bold">HELB</h3>
            <p className="text-sm text-gray-500">Higher Education Loans Board</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-4xl mb-2">🏦</div>
            <h3 className="font-bold">Equity Bank</h3>
            <p className="text-sm text-gray-500">Wings to Fly Program</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-4xl mb-2">📚</div>
            <h3 className="font-bold">Ministry of Education</h3>
            <p className="text-sm text-gray-500">Government of Kenya</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-4xl mb-2">🎓</div>
            <h3 className="font-bold">KUCCPS</h3>
            <p className="text-sm text-gray-500">University Placement</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Dedicated professionals committed to your success</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-blue-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">MA</div>
              <h3 className="text-xl font-bold">Mohamed Abdi</h3>
              <p className="text-blue-600 text-sm mb-2">Founder & CEO</p>
              <p className="text-gray-500 text-sm">10+ years in education sector</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-green-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">SM</div>
              <h3 className="text-xl font-bold">Saadiya Mohamed</h3>
              <p className="text-blue-600 text-sm mb-2">Programs Director</p>
              <p className="text-gray-500 text-sm">Scholarship expert</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-purple-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">AH</div>
              <h3 className="text-xl font-bold">Abdirahman Hassan</h3>
              <p className="text-blue-600 text-sm mb-2">Technical Lead</p>
              <p className="text-gray-500 text-sm">Platform development</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="bg-yellow-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">AA</div>
              <h3 className="text-xl font-bold">Amina Abdi</h3>
              <p className="text-blue-600 text-sm mb-2">Student Support</p>
              <p className="text-gray-500 text-sm">Guidance & counseling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Students Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
            <p className="text-gray-600 italic mb-4">
              "EduFund Kenya helped me find the HELB scholarship. The process was straightforward and I received my funding on time!"
            </p>
            <h4 className="font-bold">- Mary Achieng</h4>
            <p className="text-sm text-gray-500">University of Nairobi</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
            <p className="text-gray-600 italic mb-4">
              "I discovered county bursaries I never knew existed. The platform is a game-changer for needy students."
            </p>
            <h4 className="font-bold">- James Mwangi</h4>
            <p className="text-sm text-gray-500">Kenyatta University</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-yellow-400 text-xl mb-3">★★★★★</div>
            <p className="text-gray-600 italic mb-4">
              "The application guides and deadline reminders saved me from missing out. Highly recommended!"
            </p>
            <h4 className="font-bold">- Fatuma Hassan</h4>
            <p className="text-sm text-gray-500">Moi University</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Is EduFund Kenya free to use?</h3>
              <p className="text-gray-600">Yes! Our platform is completely free for all students seeking educational funding opportunities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">How do I know if I qualify for a bursary?</h3>
              <p className="text-gray-600">Each opportunity has specific eligibility criteria. Check the requirements carefully before applying.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">Can I apply for multiple opportunities?</h3>
              <p className="text-gray-600">Yes, you can apply for as many scholarships and bursaries as you qualify for.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold text-lg mb-2">How do I get help with my application?</h3>
              <p className="text-gray-600">Contact our student support team at support@edufundkenya.com or call our helpline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of students already using EduFund Kenya</p>
          <div className="flex gap-4 justify-center">
            <Link to="/register" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Register Now
            </Link>
            <Link to="/scholarships" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;