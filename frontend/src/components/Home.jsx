import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[85vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center">
          <div className="max-w-3xl ml-10 text-white">
            <h1 className="text-6xl font-bold mb-6">
              Find Scholarships & Bursaries in Kenya
            </h1>

            <p className="text-xl mb-8">
              Search, apply and track scholarships and bursaries
              from government, institutions and organizations.
            </p>

            <div className="bg-white p-4 rounded-xl flex gap-3">
              <input
                type="text"
                placeholder="Search opportunities..."
                className="flex-1 border p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-green-600 text-white px-8 rounded-lg hover:bg-green-700 transition">
                Search
              </button>
            </div>

            <div className="flex gap-4 mt-6">
              <Link to="/scholarships" className="text-white hover:text-green-400 transition">
                Browse Scholarships →
              </Link>
              <Link to="/bursaries" className="text-white hover:text-green-400 transition">
                Browse Bursaries →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="grid md:grid-cols-4 gap-6 px-10 py-16 bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-green-600">1200+</h2>
          <p className="text-gray-600 font-semibold">Scholarships Available</p>
          <p className="text-sm text-gray-500 mt-2">Nationwide opportunities</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-blue-600">5400+</h2>
          <p className="text-gray-600 font-semibold">Students Benefited</p>
          <p className="text-sm text-gray-500 mt-2">And counting</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-green-600">47</h2>
          <p className="text-gray-600 font-semibold">Counties Covered</p>
          <p className="text-sm text-gray-500 mt-2">All 47 counties</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition">
          <h2 className="text-3xl font-bold text-yellow-500">Ksh 320M+</h2>
          <p className="text-gray-600 font-semibold">Funds Awarded</p>
          <p className="text-sm text-gray-500 mt-2">Annual disbursement</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-10 py-16 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">How It Works</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Simple 4-step process to get funding</p>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition">
              1
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Create Account</h3>
            <p className="text-gray-600">Register with your email and personal details</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition">
              2
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Find Opportunities</h3>
            <p className="text-gray-600">Search and filter scholarships that match your profile</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition">
              3
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Submit Application</h3>
            <p className="text-gray-600">Upload documents and apply online</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-blue-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg group-hover:scale-110 transition">
              4
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Track Status</h3>
            <p className="text-gray-600">Monitor your application progress in real-time</p>
          </div>
        </div>
      </section>

      {/* Featured Opportunities Section */}
      <section className="px-10 py-16 bg-white">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Featured Opportunities</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Most popular scholarships and bursaries</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-800">HELB Scholarship</h3>
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">Government</span>
            </div>
            <p className="text-gray-600 mb-3">Government sponsorship for undergraduate students.</p>
            <p className="text-sm text-gray-500 mb-4">📅 Deadline: 30th March 2026</p>
            <Link to="/scholarships/1" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-block">
              View Details →
            </Link>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-800">Equity Wings To Fly</h3>
              <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded">Private</span>
            </div>
            <p className="text-gray-600 mb-3">Support for bright and needy students.</p>
            <p className="text-sm text-gray-500 mb-4">📅 Deadline: 6th April 2026</p>
            <Link to="/scholarships/2" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-block">
              View Details →
            </Link>
          </div>

          <div className="bg-white shadow-xl rounded-xl p-6 hover:shadow-2xl transition border border-gray-100">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-gray-800">Garissa County Bursary</h3>
              <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">County</span>
            </div>
            <p className="text-gray-600 mb-3">Financial assistance for students from Garissa County.</p>
            <p className="text-sm text-gray-500 mb-4">📅 Deadline: 15th April 2026</p>
            <Link to="/bursaries/1" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition inline-block">
              View Details →
            </Link>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link to="/scholarships" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
            View All Opportunities
          </Link>
        </div>
      </section>

      {/* Success Stories Section - Updated with Somali Names */}
      <section className="px-10 py-16 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Success Stories</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Real stories from students who achieved their dreams</p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
            <p className="text-gray-700 mb-4 italic">
              "Thanks to this platform, I got the HELB scholarship and completed my university education. I'm now a graduate!"
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">SM</div>
              <div>
                <h4 className="font-bold text-gray-800">Saadiya Mohamed</h4>
                <p className="text-sm text-gray-500">University of Nairobi Graduate</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
            <p className="text-gray-700 mb-4 italic">
              "The application process was so easy. I received the bursary within 2 weeks of applying!"
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">AA</div>
              <div>
                <h4 className="font-bold text-gray-800">Abdikadir Abdi</h4>
                <p className="text-sm text-gray-500">Garissa University Student</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="text-yellow-400 text-2xl mb-3">★★★★★</div>
            <p className="text-gray-700 mb-4 italic">
              "Found multiple scholarship opportunities here. The deadline reminders helped me apply on time!"
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg">SK</div>
              <div>
                <h4 className="font-bold text-gray-800">Sahara Khalif</h4>
                <p className="text-sm text-gray-500">Senior Chief Ogle School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Deadlines Section */}
      <section className="px-10 py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">⚠️ Upcoming Deadlines</h2>
          <p className="text-center text-blue-100 mb-12 text-lg">Don't miss out on these opportunities</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">HELB Loan Application</h3>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">5 days left</span>
              </div>
              <p className="text-blue-100 mb-2">📅 Deadline: 30th March 2026</p>
              <p className="text-sm mb-4">Undergraduate students - First time applicants</p>
              <Link to="/apply" className="inline-block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition">
                Apply Now →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">Equity Wings to Fly</h3>
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">12 days left</span>
              </div>
              <p className="text-blue-100 mb-2">📅 Deadline: 6th April 2026</p>
              <p className="text-sm mb-4">For bright but needy high school graduates</p>
              <Link to="/apply" className="inline-block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition">
                Apply Now →
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 hover:bg-white/20 transition">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">Nairobi County Bursary</h3>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">15 days left</span>
              </div>
              <p className="text-blue-100 mb-2">📅 Deadline: 9th April 2026</p>
              <p className="text-sm mb-4">For students from Nairobi County</p>
              <Link to="/apply" className="inline-block bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition">
                Apply Now →
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/scholarships" className="inline-block border-2 border-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition font-semibold">
              View All Deadlines
            </Link>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section className="px-10 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Our Partners & Sponsors</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Trusted by leading organizations across Kenya</p>
        
        <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <div className="text-4xl mb-2">🏛️</div>
            <p className="font-semibold text-gray-800">HELB</p>
            <p className="text-xs text-gray-500">Higher Education Loans Board</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <div className="text-4xl mb-2">🏦</div>
            <p className="font-semibold text-gray-800">Equity Bank</p>
            <p className="text-xs text-gray-500">Wings to Fly Program</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <div className="text-4xl mb-2">📚</div>
            <p className="font-semibold text-gray-800">Ministry of Education</p>
            <p className="text-xs text-gray-500">Government of Kenya</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <div className="text-4xl mb-2">🎓</div>
            <p className="font-semibold text-gray-800">KUCCPS</p>
            <p className="text-xs text-gray-500">University Placement</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-xl transition">
            <div className="text-4xl mb-2">🌍</div>
            <p className="font-semibold text-gray-800">County Governments</p>
            <p className="text-xs text-gray-500">All 47 Counties</p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Join our growing network of education partners</p>
          <Link to="/contact" className="inline-block text-blue-600 font-semibold hover:text-blue-700 hover:underline transition">
            Become a Partner →
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-blue-950 text-white py-16 px-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose EduFund Kenya?</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition inline-block">🔍</div>
            <h4 className="text-xl font-bold mb-2">Easy Search</h4>
            <p className="text-blue-200">Find opportunities that match your profile</p>
          </div>

          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition inline-block">📝</div>
            <h4 className="text-xl font-bold mb-2">Apply Online</h4>
            <p className="text-blue-200">Upload documents and apply instantly</p>
          </div>

          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition inline-block">📊</div>
            <h4 className="text-xl font-bold mb-2">Track Progress</h4>
            <p className="text-blue-200">Monitor your application status in real-time</p>
          </div>

          <div className="text-center group">
            <div className="text-5xl mb-4 group-hover:scale-110 transition inline-block">🔔</div>
            <h4 className="text-xl font-bold mb-2">Notifications</h4>
            <p className="text-blue-200">Receive deadline and approval alerts</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="px-10 py-16 bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of students who have already found funding through EduFund Kenya</p>
          <div className="flex gap-4 justify-center">
            <Link to="/register" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Register Now
            </Link>
            <Link to="/scholarships" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition">
              Browse Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EduFund Kenya</h3>
              <p className="text-gray-400 text-sm">Connecting Kenyan students with education funding opportunities since 2020.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/" className="hover:text-white transition">Home</Link></li>
                <li><Link to="/scholarships" className="hover:text-white transition">Scholarships</Link></li>
                <li><Link to="/bursaries" className="hover:text-white transition">Bursaries</Link></li>
                <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
                <li><Link to="/help" className="hover:text-white transition">Help Center</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition">Terms of Use</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact Us</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📧 info@edufundkenya.com</li>
                <li>📞 +254 700 123 456</li>
                <li>📍 Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 Scholarship & Bursary Finder Kenya. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;